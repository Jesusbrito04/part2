const Weather = ({ main, country, weather, wind }) => {
  return (
    <div>
      <h3>Weather in {country.name}</h3>
      <p>
        <b>Temperatura</b> {main} Celsius
      </p>
      <img src={weather} alt="Weather.ico" />
      <p>
        <b>Wind:</b> {wind}
      </p>
    </div>
  );
};

export default Weather;
