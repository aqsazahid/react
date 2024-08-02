import Content from './components/Content';
import Total from './components/Total'
const Course = ({courses}) => {
    return (
        <>
        {courses.map(course => (
            <div key={course.id}>
                <Content parts={course} />
                <Total total={course.parts} />
            </div>
        ))}
        </>
    )
}
export default Course 