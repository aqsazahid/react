import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Unicafe from './part1/unicafe/unicafe'
import CourseInfo from './part1/courseinfo/courseinfo'
import Anecdotes from './part1/anecdotes/anecdotes'
import Courses from './part2/courses/courses'
import PhoneBook from './part2/phonebook/phoneBook'
import Api from "./part2/phonebook/api"
const App = () => {
  return (
    <div>
      {/* <h1>Exercise part1</h1>
     <CourseInfo />
      <Unicafe />
      <Anecdotes /> */}
      {/* <h1>Exercise part2</h1> */}
      {/* <Courses /> */}
      {/* Exercise part2b */}
      {/* <PhoneBook /> */}
      <Api />
  </div>
  )
}

export default App

