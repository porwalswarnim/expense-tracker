import React from "react";
import styled from "styled-components";
import HomeComponent from "./modules/home";
import ExpenseUsingClassComponent from "./modules/home/ExpenseUsingClassComponent";
import "bootstrap/dist/css/bootstrap.min.css";
const Container = styled.div`
  background-color: white;
  color: #0d1d2c;
  display: flex;
  flex-direction: column;
  margin: 0 10px;
  align-items: center;
  height: 100vh;
  width: 98%;
  padding-top: 30px;
  font-family: Montserrat;
`;

const Header = styled.div`
  background-color: white;
  color: #0d1d2c;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 22px;
  font-size: 25px;
  font-weight: bold;
`;

function App() {
  return (
    <Container>
      <div className="row col-lg-12">
        <div className="col-lg-6">
          <Header>Expense Tracker Using Class Component</Header>
          <ExpenseUsingClassComponent />
        </div>
        <div className="col-lg-6">
          <Header>Expense Tracker Using Functional Component</Header>
          <HomeComponent />
        </div>
      </div>
    </Container>
  );
}

export default App;
