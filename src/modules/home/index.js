import React, { useEffect, useState } from "react";
import styled from "styled-components";
import OverViewComponent from "./OverViewComponent";
import TransactionsComponent from "./TransactionsComponent.js";
import { useDispatch, useSelector } from "react-redux";

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
const ExpenseUsingClass = (props) => {
  const transactions= useSelector(state => state.transactions)
  const dispatch = useDispatch()
  // const [transactions, updateTransaction] = useState([]);
  const [expense, updateExpense] = useState(0);
  const [income, updateIncome] = useState(0);

  useEffect(() => calculateBalance(), [transactions]);

  const calculateBalance = () => {
    let exp = 0;
    let inc = 0;
    transactions.map((p) =>
      p.type === "EXPENSE"
        ? (exp = exp + p.amount)
        : (inc = inc + p.amount)
    );
    updateExpense(exp);
    updateIncome(inc);
  };

  const addTransaction = (payload) => {
    // const transactionArray = [...transactions];
    // transactionArray.push(payload);
    dispatch({type:"UPDATE_TRANSACTIONS",payload})
    // updateTransaction(transactionArray);
  };
  return (
    <Container>
      <OverViewComponent
        addTransaction={addTransaction}
        expense={expense}
        income={income}
      />
      <TransactionsComponent transactions={transactions} /> 
    </Container>
  );
};
export default ExpenseUsingClass;
