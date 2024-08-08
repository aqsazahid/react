import React, { useState,useEffect } from "react"
import Filter from "./components/Filter"
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import personService from '../../services/persons';
import Notification from "./components/Notifications"
const PhoneBook = () => {
    const [persons, setPersons] = useState([])
    const [notification, setNotification] = useState(null);
    const [newName, setNewName] = useState('');
    const [newNumber, setNewNumber] = useState(0);
    const [searchQuery, setSearchQuery] = useState('');
    const [notificationType, setNotificationType] = useState('');

  useEffect(() => {
    personService.getAll().then(initialPersons => {
        setPersons(initialPersons);
      }).catch(error => {
        showNotification('Failed to load contacts: ' + error.message, 'error');
      });
  }, []);

    const handleNameChange = (event) => {
        setNewName(event.target.value);
    };

    const handleNumberChange = (event) => {
        setNewNumber(event.target.value);
    };
    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const deletePerson = (id) => {
        if (window.confirm('Do you really want to delete this record?')) {
          personService.remove(id).then(() => {
            setPersons(persons.filter(person => person.id !== id));
            showNotification(`${persons.find(person => person.id === id).name} has been removed from the server`, 'success');
          }).catch(error => {
            if (error.message === 'Resource not found') {
              showNotification('This contact has already been removed from the server', 'error');
            } else {
              showNotification('Failed to delete the person: ' + error.message, 'error');
            }
          });
        }
    };

    const addPerson = (event) => {
      event.preventDefault();
      const person = persons.find(p => p.name === newName);
      const nameObject = {
        name: newName,
        number: newNumber
      };
    
      if (person) {
        if (window.confirm(`${newName} is already added to the phonebook, replace the old number with a new one?`)) {
          personService.update(person.id, nameObject).then(updatedPerson => {
            setPersons(persons.map(p => p.id !== person.id ? p : updatedPerson));
            setNewName('');
            setNewNumber('');
            showNotification(`Updated ${newName}'s number`, 'success');
          }).catch(error => {
            const errorMessage = error.response && error.response.data && error.response.data.error
              ? error.response.data.error
              : 'Failed to update the number: ' + error.message;
            showNotification(errorMessage, 'error');
          });
        }
      } else {
        personService.create(nameObject).then(returnedPerson => {
          if (!returnedPerson) {
            throw new Error('Unexpected response from server');
          }
          setPersons(persons.concat(returnedPerson));
          setNewName('');
          setNewNumber('');
          showNotification(`Added ${newName}`, 'success');
        }).catch(error => {
          const errorMessage = error.response && error.response.data && error.response.data.error
            ? error.response.data.error
            : 'Failed to add the person: ' + error.message;
          showNotification(errorMessage, 'error');
        });
      }
    };
    
    
    const showNotification = (message, type) => {
        setNotification(message);
        setNotificationType(type);
        setTimeout(() => {
            setNotification(null);
        }, 5000); 
    };
    
    const filteredPersons = persons.filter(person =>
        person.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
      return (
        <div>
          <h2>Phonebook</h2>
          <Notification message={notification} type={notificationType} />
          <Filter  value={searchQuery} handleChnage={handleSearchChange}/>
          <h3>Add a new</h3>
          <PersonForm NameChange={handleNameChange} nameValue={newName} submit={addPerson} noValue={newNumber} NoChange={handleNumberChange}/>
          <h3>Numbers</h3>
            <Persons filterPersons = {filteredPersons} delete={ deletePerson}/>
        </div>
      )
}

export default PhoneBook