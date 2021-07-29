import React, { useState, useEffect } from "react";
import axios from "axios";
import Countries from "./components/Countries";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    axios
      .get("https://restcountries.eu/rest/v2/all")
      .then((countries) => setCountries(countries.data));
  }, []);

  const handdleCountriesChange = (event) => setFilter(event.target.value);

  return (
    <div>
      <div>
        <p>
          Find Countries{" "}
          <input value={filter} onChange={handdleCountriesChange} /> <br />
          <br />
          <Countries
            setFilter={setFilter}
            filter={filter}
            countries={countries.filter((person) =>
              person.name.toLowerCase().match(filter.toLowerCase())
            )}
          />
        </p>
      </div>
    </div>
  );
};

export default App;
