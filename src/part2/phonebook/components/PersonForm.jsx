const PersonForm = (props) => {
    return (
        <form onSubmit={props.submit}>
            <div>
              name: <input value={props.nameValue} onChange={ props.NameChange }/>
            </div>
            <div>number: <input value={props.noValue} onChange={props.NoChange} /></div>
            <div>
              <button type="submit">add</button>
            </div>
        </form>
    )
}

export default PersonForm