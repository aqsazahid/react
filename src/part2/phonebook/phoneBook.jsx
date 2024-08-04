import React, { useState } from "react"
const PhoneBook = () => {
    const [persons, setPersons] = useState([
        { name: 'Arto Hellas', number: '033-43556566'
        }
    ]) 
    const [newName, setNewName] = useState('');
    const [newNumber, setNewNumber] = useState(0);
    const AddName = (event) => {
        setNewName(event.target.value)
    }

    const AddNumber = (event) => {
        setNewNumber(event.target.value)
    }

    const AddPerson = (event) => {
        event.preventDefault();
        const names = persons.map(person => person.name)
        const AddName = names.includes(newName)
        const nameObject = {
            name: newName,
            number: newNumber
        }
        if(AddName) {
            alert(`${newName} is already added to phonebook`)
        }
        else {
            setPersons(persons.concat(nameObject))
        }
    }
      return (
        <div>
          <h2>Phonebook</h2>
          <form onSubmit={AddPerson}>
            <div>
              name: <input onChange={ AddName }/>
            </div>
            <div>number: <input onChange={ AddNumber} /></div>
            <div>
              <button type="submit">add</button>
            </div>
          </form>
          <h2>Numbers</h2>
          {
            persons.map(item => (
                <p key={item.name}>{item.name} {item.number}</p>
            ))
          }
        </div>
      )
}

export default PhoneBook