import React from "react"
const Persons = (props) => {
    return (
        <>
            {props.filterPersons.map(person => (
                <div>
                    <p key={person.id}>{person.name} {person.number}</p>
                    <button onClick={() => props.delete(person.id)}>delete</button>
                </div>
            ))}
        </>
    )
}

export default Persons