import React from 'react'

const data = [
    {
        "id": 1,
        "name":"isaac"
    },
    {
        "id": 2,
        "name":"david"
    },
    {
        "id": 3,
        "name":"hope"
    }
]

function Section() {
  return (
    <div>
        <h2>All people available</h2>
        {data.map(person => {
            return(
                <p key={person.id}>{person.name}</p>
            )
        })}
    </div>
  )
}

export default Section