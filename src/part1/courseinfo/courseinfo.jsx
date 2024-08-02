import Header from './components/Header'
import Content from './components/Content'
import Total from './components/Total'
const CourseInfo = () => {
      // Exercise 1.1 to 1.2
  // const course = 'Half Stack application development'
  // const part1 = 'Fundamentals of React'
  // const exercises1 = 10
  // const part2 = 'Using props to pass data'
  // const exercises2 = 7
  // const part3 = 'State of a component'
  // const exercises3 = 14

  //Exercise 1.3
  //const course = 'Half Stack application development'
  // const part1 = {
  //   name: 'Fundamentals of React',
  //   exercises: 10
  // }
  // const part2 = {
  //   name: 'Using props to pass data',
  //   exercises: 7
  // }
  // const part3 = {
  //   name: 'State of a component',
  //   exercises: 14
  // }
//Exercise 4
// const parts = [
//     {
//       name: 'Fundamentals of React',
//       exercises: 10
//     },
//     {
//       name: 'Using props to pass data',
//       exercises: 7
//     },
//     {
//       name: 'State of a component',
//       exercises: 14
//     }
//   ]
//Exercise 1.5
    const course = {
        name: 'Half Stack application development',
        parts: [
          {
            name: 'Fundamentals of React',
            exercises: 10
          },
          {
            name: 'Using props to pass data',
            exercises: 7
          },
          {
            name: 'State of a component',
            exercises: 14
          }
        ]
      }
    return (
        <>
        <Header course={course.name} /> 
      {/* Exercise 1.1 to 1.2 */}
      {/* <Content part1={part1} exercises1 = {exercises1} part2={part2}  exercises2={exercises2} part3={part3} exercises3={exercises3}/>  */}
      {/* Exercise 1.3 */}
      {/* <Content part1={part1} part2={part2} part3={part3}/>
      <Total exercises1 = {part1.exercises}  exercises2={part2.exercises} exercises3={part3.exercises}/>  */}
      {/* Exercise 1.4 */}
      <Content parts={course.parts} />
      <Total parts={course.parts} />
        </>
    )
}

export default CourseInfo 