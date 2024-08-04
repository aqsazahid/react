import React, { useState } from "react"
const PhoneBook = () => {
    const [persons, setPersons] = useState([
        { name: 'Arto Hellas' }
      ]) 
      const [newName, setNewName] = useState('')
    const AddName = (event) => {
        setNewName(event.target.value)
    }

    const AddPerson = (event) => {
        event.preventDefault();
        const names = persons.map(person => person.name)
        const AddName = names.includes(newName)
        const nameObject = {
            name: newName,
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
            <div>
              <button type="submit">add</button>
            </div>
          </form>
          <h2>Numbers</h2>
          {
            persons.map(item => (
                <p key={item.name}>{item.name}</p>
            ))
          }
        </div>
      )
}

export default PhoneBook