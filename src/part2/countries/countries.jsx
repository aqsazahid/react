import React, { useState, useEffect } from 'react';
import countryService from '../../services/countries';
import Country from './components/Country';
import Filter from './components/Filter';
import './index.css'

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [search, setSerach] = useState(false);
  const [notification, setNotification] = useState(null);

  useEffect(() => {
    countryService.getAll()
      .then(initialCountries => {
        setCountries(initialCountries);
      })
      .catch(error => {
        showNotification('Failed to load countries: ' + error.message, 'error');
      });
  }, []);

  const handleSearchChange = (event) => {
    setSerach(true)
    setSearchQuery(event.target.value);
};

  const filteredCountries = countries.filter(country =>
    country.name.common.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const showNotification = (message, type) => {
    setNotification({ message, type });
    setTimeout(() => {
      setNotification(null);
    }, 5000);
  };

  return (
    <div>
      <h2>Country Information</h2>
      <Filter value={searchQuery} handleChange={handleSearchChange} />
     { search && <Country countries={filteredCountries} />}
    </div>
  );
};

export default Countries;
