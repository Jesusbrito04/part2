import React, { useState, useEffect } from "react";
import Person from "./components/Person";
import Filtro from "./components/Filtro";
import NewContact from "./components/NewContact";
import axios from "axios";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    axios.get("http://localhost:3001/persons").then((person) => {
      setPersons(person.data);
    });
  }, []);

  console.log(persons.length, "loaded contacts");

  const addPerson = (event) => {
    event.preventDefault();
    const personsObject = {
      name: newName,
      number: newNumber,
      date: new Date().toISOString(),
      id: persons.length + 1,
    };
    if (persons.some((person) => person.name === newName)) {
      alert(`${newName} is already added to the phonebook`);
      return;
    }
    setPersons(persons.concat(personsObject));
    setNewName("");
    setNewNumber("");
  };

  const handlePersonChange = (event) => setNewName(event.target.value);

  const handleNumberChange = (event) => setNewNumber(event.target.value);

  const handleSearchChange = (event) => setSearchText(event.target.value);

  return (
    <div>
      <h2>Phonebook</h2>
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
      <Person
        persons={persons.filter((person) =>
          person.name.toLowerCase().match(searchText.toLowerCase())
        )}
      />
    </div>
  );
};

export default App;
