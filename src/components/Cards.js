import React from 'react'

function Cards(props) {
  return (
    <div className="card">
  <ul className="list-group list-group-flush">
    <li className="list-group-item">First Name:{props.fName}</li>
    <li className="list-group-item">Last Name:{props.lName}</li>
    <li className="list-group-item">Father Name:{props.fatName}</li>
    <li className="list-group-item">University Name:{props.uName}</li>
  </ul>
</div>
  )
}

export default Cards
