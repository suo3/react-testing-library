import { useState } from 'react'

import './App.css'

function App(props) {
  const [showDetails, setShowDetails] = useState(true)

  return (
    
      <div className='card' style={{ width: "18rem", height: "18rem" }}>
            <div className='card-header'>
         <img className="card-img-top"
        src="http://fakeimg.pl/286x180/?font=lobster" alt="Card image cap" />
        </div>
       
        <div className="card-body">
          <h2 className="card-title mb-0">Madame de Pompadour</h2>
          <p className='card-subtitle mb-1 text-muted'>The famous lady</p>
          {showDetails && <>
          <p className="card-text details">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" className="btn btn-primary">Go somewhere</a></>}
        
        <ul>
           {props.employees.map((employee) => {
          return (
          <li><strong>{employee.name}</strong></li>
          
        )})}
       </ul>
      </div>
      

      <div className='card-footer'>

        <button
          onClick={() => setShowDetails(!showDetails)}
          className="btn btn-primary"
        >
          {showDetails ? "Hide Details" : "Show Details"}
        </button>
      </div>
      </div>
  
  )
}

export default App
