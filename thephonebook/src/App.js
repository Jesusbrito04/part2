import React, { useState, useEffect } from "react";
import Persons from "./components/Persons";
import Filtro from "./components/Filtro";
import NewContact from "./components/NewContact";
import contactServices from "./components/services";
import Success from "./components/Success";
import Fail from "./components/Fail";
import "./index.css";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [searchText, setSearchText] = useState("");
  const [addedSuccessFully, setAddedSuccessFully] = useState(null);
  const [messageError, setMessageError] = useState(null);

  useEffect(() => {
    contactServices.getAll().then((person) => {
      setPersons(person);
    });
  }, []);

  console.log(persons.length, "loaded contacts");

  const addPerson = (event) => {
    event.preventDefault();
    const personsObject = {
      name: newName,
      number: newNumber,
      date: new Date().toISOString(),
      id: newNumber,
    };
    if (
      persons.some(
        (person) => person.name.toLowerCase() == newName.toLowerCase()
      )
    ) {
      const id = persons.find((person) => {
        if (person.name.toLowerCase() == newName.toLowerCase()) return person;
      });

      console.log(id.id);
      if (
        window.confirm(
          `${id.name} is already added to phonebook, replace the old number with a new?`
        )
      ) {
        contactServices
          .update(id.id, {
            name: id.name,
            date: new Date().toDateString(),
            number: newNumber,
            id: newNumber,
          })
          .then((updateperson) => {
            const data = updateperson.data;
            console.log(data);
            setPersons(
              persons.filter((person) => person.id != id.id).concat(data)
            );
            setNewName("");
            setNewNumber("");
            setAddedSuccessFully(`User '${id.name}' has been modified`);
            setTimeout(() => {
              setAddedSuccessFully(null);
            }, 5000);
          })
          .catch(() => {
            setNewName("");
            setNewNumber("");
            setMessageError(
              `Information of '${id.name}' has already been removed from server`
            );
            setTimeout(() => {
              setMessageError(null);
            }, 5000);
            setPersons(persons.filter((person) => person.id != id.id));
          });
      }
    } else {
      contactServices
        .create(personsObject)
        .then((person) => {
          console.log(person);
          setPersons(persons.concat(person));
          setNewName("");
          setNewNumber("");
          setAddedSuccessFully(`Added '${person.name}'`);
          setTimeout(() => {
            setAddedSuccessFully(null);
          }, 5000);
        })
        .catch(() => alert("This phone number is already registered"));
    }
  };

  const handlePersonChange = (event) => setNewName(event.target.value);

  const handleNumberChange = (event) => setNewNumber(event.target.value);

  const handleSearchChange = (event) => setSearchText(event.target.value);

  return (
    <div>
      <h2>Phonebook</h2>
      <Success message={addedSuccessFully} />
      <Fail message={messageError} />
      <Filtro searchText={searchText} handleSearchChange={handleSearchChange} />
      <h2>Add a new contact</h2>
      <NewContact
        addPerson={addPerson}
        newName={newName}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}
        handlePersonChange={handlePersonChange}
      />
      <h2>Numbers</h2>
      <Persons
        persons={persons.filter((person) =>
          person.name.toLowerCase().match(searchText.toLowerCase())
        )}
        setPersons={setPersons}
        onRemove={(personId) =>
          setPersons(persons.filter((person) => person.id != personId))
        }
      />
    </div>
  );
};

export default App;
