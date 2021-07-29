import Country from "./Country";

const Countries = ({ countries, filter, setFilter }) => {
  if (filter.length === 0) {
    return "Find A Countrie";
  } else if (countries.length > 10) {
    return "Too Many Match, Specify another filter";
  } else if (countries.length === 1) {
    return <Country countries={countries} />;
  } else {
    return countries.map((country) => (
      <p key={country.alpha3Code}>
        {country.name}{" "}
        <button
          value={country.name}
          type="button"
          onClick={(e) => setFilter(e.target.value)}
        >
          Show
        </button>
      </p>
    ));
  }
};

export default Countries;
