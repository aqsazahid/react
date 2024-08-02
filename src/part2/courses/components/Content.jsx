import Part from './Part';
import Header from './Header'
const Content = ({parts}) => {
    return (
        <>
        <Header name={parts.name} /> 
             {parts.parts.map(part => (
                <Part key={part.id} part={part} />
            ))}
        </>
    )
}
export default Content