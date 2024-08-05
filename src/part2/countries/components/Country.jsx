import React, { useState } from 'react';

const Country = ({ countries }) => {
    const [selectedCountry, setSelectedCountry] = useState(null);

  const handleShowDetails = (country) => {
    setSelectedCountry(country);
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
          </div>
        );
      } else {
        return <div>No matches</div>;
      }
};

export default Country;
