import React from "react"
const Persons = (props) => {
    return (
        <>
            {props.filterPersons.map(person => (
                <div>
                    <span key={person.id}>{person.name} {person.number}</span>
                    <button onClick={() => props.delete(person.id)}>delete</button>
                </div>
            ))}
        </>
    )
}

export default Persons