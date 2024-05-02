import React from "react";
import Vote from "./vote";
import "./App.css";
import { Container, Row } from "react-bootstrap";
import EmployeeEmail from "./employeeEmail";
import DrinkSearch from "./drinkSearch";

function App() {
  return (
    <Container className='App'>
      <Row className='mb-4'>
        <DrinkSearch />
      </Row>
      <Row>
        <EmployeeEmail />
        <Vote totalGlobalLikes={0} />
      </Row>
    </Container>
  );
}

export default App;
