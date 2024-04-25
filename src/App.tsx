import React from 'react';
import Vote from './vote'
import './App.css'
import { Container} from 'react-bootstrap';
import EmployeeEmail from './employeeEmail';

function App() {


  return (
    
    <Container className="App">
      <EmployeeEmail />
      <hr />
     <Vote totalGlobalLikes={0} />
    
    </Container>
  
  )
}

export default App
