import React, { useState, useEffect } from "react";
import axios from "axios";
import Weather from "./Weather";

const Country = ({ countries }) => {
  const [main, setMain] = useState("");
  const [weather, setWeather] = useState("");
  const [wind, setWind] = useState("");

  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${countries.map(
          (country) => country.capital
        )}&appid=1c15b1f955ff285683512da87953aff0&units=metric`
      )
      .then((res) => res.data)
      .then(({ main, weather, wind }) => {
        setMain(main.temp);
        setWeather(weather[0].main);
        setWind(wind.speed);
      });
  }, []);

  console.log(main);
  console.log(weather);
  console.log(wind);

  return (
    <div>
      {countries.map((country) => (
        <li key={country.alpha3Code}>
          <h2 key={country.alpha3Code}>{country.name}</h2>
          <p>
            Capital: {country.capital} <br />
            population: {country.population}
          </p>
          <h3>Lenguages</h3>
          <ul>
            {country.languages.map((lang) => (
              <li key={lang.iso639_2}>{lang.name}</li>
            ))}
          </ul>
          <img src={country.flag} width="20%" alt={"Flag" + country.name} />
          <Weather
            main={main}
            country={country}
            weather={weather}
            wind={wind}
          />
        </li>
      ))}
    </div>
  );
};

export default Country;
