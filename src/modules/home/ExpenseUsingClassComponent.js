import React, { Component } from "react";
import styled from "styled-components";
import OverViewComponent from "./OverViewComponent";
import { connect } from "react-redux";
import TransactionsComponent from "./TransactionsComponent.js";
// import { useDispatch, useSelector } from "react-redux";
const Container = styled.div`
  background-color: white;
  color: #0d1d2c;
  display: flex;
  flex-direction: column;
  padding: 10px 22px;
  font-size: 18px;
  width: 360px;
  align-items: center;
  justify-content: space-between;
`;

class ExpenseUsingClassComponent extends Component {
  constructor() {
    super();
    this.state = {
      expense: 0,
      income: 0,
    };
  }

  calculateBalance = () => {
    let exp = 0;
    let inc = 0;
    this.props.transactions.map((p) =>
      p.type === "EXPENSE" ? (exp = exp + p.amount) : (inc = inc + p.amount)
    );
    this.setState({expense: exp, income: inc})
  };
  
  componentDidUpdate(prevProps) {
    if (prevProps.transactions !== this.props.transactions) {
      this.calculateBalance();
    }
  }

  render() {

    const addTransaction = (payload) => {
      this.props.onAgeUp(payload);
    };
    return (
      <Container>
        <OverViewComponent
          addTransaction={addTransaction}
          expense={this.state.expense}
          income={this.state.income}
          transactions
        />
        <TransactionsComponent transactions={this.props.transactions} />
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    transactions: state.transactions,
  };
};

const mapDispachToProps = (dispatch) => {
  return {
    onAgeUp: (payload) => dispatch({ type: "UPDATE_TRANSACTIONS", payload }),
  };
};

export default connect(
  mapStateToProps,
  mapDispachToProps
)(ExpenseUsingClassComponent);
