import React from "react";
import Vote from "./vote";
import "./App.css";
import { Container } from "react-bootstrap";
import EmployeeEmail from "./employeeEmail";
import DrinkSearch from "./drinkSearch";

function App() {
  return (
    <Container className='App'>
      <EmployeeEmail />
      <Vote totalGlobalLikes={0} />
      <DrinkSearch />
    </Container>
  );
}

export default App;
