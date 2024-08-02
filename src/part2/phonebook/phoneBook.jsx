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
        const nameObject = {
            name: newName,
        }
        setPersons(persons.concat(nameObject))
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
                <p>{item.name}</p>
            ))
          }
        </div>
      )
}

export default PhoneBook