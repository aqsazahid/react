import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Unicafe from './part1/unicafe/unicafe'
import CourseInfo from './part1/courseinfo/courseinfo'
import Anecdotes from './part1/anecdotes/anecdotes'
const App = () => {
  return (
    <div>
     <CourseInfo />
      <Unicafe />
      <Anecdotes />
  </div>
  )
}

export default App

