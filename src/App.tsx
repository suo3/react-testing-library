import React from "react";
import Vote from "./vote";
import "./App.css";
import { Container, Row } from "react-bootstrap";
import EmployeeEmail from "./employeeEmail";
import DrinkSearch from "./drinkSearch";

function App() {
  return (
    <Container className='App'>
      <Row>
        <EmployeeEmail />
        <Vote totalGlobalLikes={0} />
      </Row>
      <Row>
        <DrinkSearch />
      </Row>
    </Container>
  );
}

export default App;
