import React from "react";
import contactServices from "./services";

const Persons = ({ persons, onRemove }) => {
  const handlePersonChangeremove = (event) => {
    const name = persons.find((person) => {
      return event.target.value == person.id;
    });
    if (window.confirm(`Delete ${name.name}`)) {
      console.log(name.name);
      contactServices
        .remove(event.target.value, persons)
        .then((res) => onRemove(event.target.value));
    }
    return null;
  };

  return (
    <div>
      {persons.map((person) => (
        <div key={person.name}>
          {person.name} {person.number}{" "}
          <button value={person.id} onClick={handlePersonChangeremove}>
            Remove
          </button>
        </div>
      ))}
    </div>
  );
};

export default Persons;
