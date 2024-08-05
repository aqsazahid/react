import React, { useState,  useEffect } from 'react';
import axios from 'axios';
const Country = ({ countries }) => {
    const [selectedCountry, setSelectedCountry] = useState(null);
    const [weather, setWeather] = useState(null);
  const API_KEY = '0de34a21353dc3b8977da28ea7d87098';

  const handleShowDetails = (country) => {
    setSelectedCountry(country);
    fetchWeather(country.capital);
  };

  const fetchWeather = async (capital) => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${capital}&appid=${API_KEY}&units=metric`
      );
      debugger
      setWeather(response.data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  if (selectedCountry) {
    return (
      <div>
        <h2>{selectedCountry.name.common}</h2>
        <p>Capital: {selectedCountry.capital}</p>
        <p>Area: {selectedCountry.area} km²</p>
        <p>Languages:</p>
        <ul>
          {Object.values(selectedCountry.languages).map((language, index) => (
            <li key={index}>{language}</li>
          ))}
        </ul>
        <img src={selectedCountry.flags.png} alt={`Flag of ${selectedCountry.name.common}`} width="150" />
        {weather && (
          <div>
            <h3>Weather in {selectedCountry.capital}</h3>
            <p>Temperature: {weather.main.temp} °C</p>
            <p>Weather: {weather.weather[0].description}</p>
            <img
              src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
              alt={weather.weather[0].description}
            />
            <p>Wind: {weather.wind.speed} m/s</p>
          </div>
        )}
        <button onClick={() => setSelectedCountry(null)}>Back</button>
      </div>
    );
  }

  if (countries.length > 10) {
    return <div>Too many matches, specify another filter</div>;
  } else if (countries.length > 1 && countries.length <= 10) {
    return (
      <div>
        {countries.map(country => (
          <div key={country.cca3}>
            {country.name.common} <button onClick={() => handleShowDetails(country)}>Show</button>
          </div>
        ))}
      </div>
    );
  } else if (countries.length === 1) {
    const country = countries[0];
    return (
      <div>
        <h2>{country.name.common}</h2>
        <p>Capital: {country.capital}</p>
        <p>Area: {country.area} km²</p>
        <p>Languages:</p>
        <ul>
          {Object.values(country.languages).map((language, index) => (
            <li key={index}>{language}</li>
          ))}
        </ul>
        <img src={country.flags.png} alt={`Flag of ${country.name.common}`} width="150" />
        {weather && (
          <div>
            <h3>Weather in {country.capital}</h3>
            <p>Temperature: {weather.main.temp} °C</p>
            <p>Weather: {weather.weather[0].description}</p>
            <p>Wind: {weather.wind.speed} m/s</p>
          </div>
        )}
      </div>
    );
  } else {
    return <div>No matches</div>;
  }
    
      if (countries.length > 10) {
        return <div>Too many matches, specify another filter</div>;
      } else if (countries.length > 1 && countries.length <= 10) {
        return (
          <div>
            {countries.map(country => (
              <div key={country.cca3}>
                {country.name.common} <button onClick={() => handleShowDetails(country)}>Show</button>
              </div>
            ))}
          </div>
        );
      } else if (countries.length === 1) {
        const country = countries[0];
        return (
          <div>
            <h2>{country.name.common}</h2>
            <p>Capital: {country.capital}</p>
            <p>Area: {country.area} km²</p>
            <p>Languages:</p>
            <ul>
              {Object.values(country.languages).map((language, index) => (
                <li key={index}>{language}</li>
              ))}
            </ul>
            <img src={country.flags.png} alt={`Flag of ${country.name.common}`} width="150" />
          </div>
        );
      } else {
        return <div>No matches</div>;
      }
};

export default Country;
