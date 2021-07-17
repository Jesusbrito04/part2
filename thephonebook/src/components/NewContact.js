const NewContact = ({
  addPerson,
  newName,
  newNumber,
  handleNumberChange,
  handlePersonChange,
}) => {
  return (
    <form onSubmit={addPerson}>
      <div>
        Name:{" "}
        <input
          pattern="[a-zA-Z ]+"
          type="text"
          value={newName}
          onChange={handlePersonChange}
        />
        <br />
        Number:{" "}
        <input
          pattern="[0-9 ]+"
          value={newNumber}
          onChange={handleNumberChange}
        />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};

export default NewContact;
