import React from 'react'


const Header = ({ course :{name} }) => <h2>{name}</h2>

const Part = ({ part, exercises }) => <p>{part} {exercises}</p>

const Content = ({ course :{parts} }) => {
  return (
    <div>
      {parts.map(part => {
        return <Part key={part.id} part={part.name} exercises={part.exercises} />
      })}
    </div>
  )
}

const Total = ({ course :{ parts }}) => {
  const allExercises = parts.reduce((sum, part) => sum + part.exercises, 0)
  return (
    <p>
      total of {allExercises} exercises
    </p>
  )
}

const Course = ({ courses }) => {
  return (
    <div>
      <h1>Web development curriculum</h1>
      {courses.map((course) => {
        return (
          <div key={course.id}>
            <Header course={course} />
            <Content course={course} />
            <Total course={course}/>
          </div>
        )
      })}
    </div>
  )
}

export default Course