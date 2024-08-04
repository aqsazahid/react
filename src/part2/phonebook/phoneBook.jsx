import React, { useState } from "react"
import Filter from "./components/Filter"
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons"
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

    const addPerson = (event) => {
        event.preventDefault();
        const names = persons.map(person => person.name);
        const nameExists = names.includes(newName);

        if (nameExists) {
            alert(`${newName} is already added to the phonebook`);
        } else {
            const nameObject = {
                name: newName,
                number: newNumber
            };
            setPersons(persons.concat(nameObject));
            setNewName('');
            setNewNumber('');
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
            <Persons filterPersons = {filteredPersons} />
        </div>
      )
}

export default PhoneBook