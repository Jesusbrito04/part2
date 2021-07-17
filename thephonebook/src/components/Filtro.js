const Filtro = (props) => {
  return (
    <div>
      Filter shown with{" "}
      <input value={props.searchText} onChange={props.handleSearchChange} />
    </div>
  );
};

export default Filtro;
