import React, { useState } from "react"
import Filter from "./components/Filter"
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import noteService from '../../services/persons';
const PhoneBook = () => {
    const [persons, setPersons] = useState([
        { name: 'Arto Hellas', number: '040-123456', id: 1 },
        { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
        { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
        { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
      ])
    const [newName, setNewName] = useState('');
    const [newNumber, setNewNumber] = useState(0);
    const [searchQuery, setSearchQuery] = useState('');

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
          noteService.remove(id)
            .then(() => {
              setPersons(persons.filter(person => person.id !== id));
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
                noteService.update(person.id, nameObject).then(updatedPerson => {
                    setPersons(persons.map(p => p.id !== person.id ? p : updatedPerson));
                });
            }
        } else {
            noteService.create(nameObject).then(returnedPerson => {
                setPersons(persons.concat(returnedPerson));
                setNewName('');
                setNewNumber('');
            });
        }
    };
    const filteredPersons = persons.filter(person =>
        person.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    
      return (
        <div>
          <h2>Phonebook</h2>
          <Filter  value={searchQuery} handleChnage={handleSearchChange}/>
          <h3>Add a new</h3>
          <PersonForm NameChange={handleNameChange} nameValue={newName} submit={addPerson} noValue={newNumber} NoChange={handleNumberChange}/>
          <h3>Numbers</h3>
            <Persons filterPersons = {filteredPersons} delete={ deletePerson}/>
        </div>
      )
}

export default PhoneBook