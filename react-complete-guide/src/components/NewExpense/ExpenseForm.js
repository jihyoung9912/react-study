import { useEffect, useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  // const [userInput, setUserInput] = useState({
  //   enteredTitle: "",
  //   enteredAmount: "",
  //   enteredDate: "",
  // });

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: event.target.value,
    // });
    // 리액트는 기존의 state에 새로운 enteredTitle을 추가하는게 아니라 아래 값으로 그냥 업데이트 해버림
    // 그래서 state가 변경되는 상황이라면 바로 직전의 state를 snapshot처럼 찍어 놓기 위해
    // 아래처럼 prevState를 매개변수로 받고, enteredTitle을 추가하는 개념 (이전 state에 의존하는 경우 사용)
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredTitle: event.target.value };
    // });
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
    //   setUserInput({
    //     ...userInput,
    //     enteredAmount: event.target.value,
    //   });
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredDate: event.target.value,
    // });
  };

  const submitHandler = (event) => {
    //js 내장 함수, 기본적으로 submit했을 때 서버로 데이터 전송하며 새로고침 되는 기능을 막기 위해 씀
    event.preventDefault();
    // submit 누르면 enterdData에 입력된 값들을 저장
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    // NewExpense에서 정의한 saveExpenseDataHandler함수를 ExpenseForm 컴포넌트에서 실행하는 것
    // expenseData를 매개변수로 NewExpense에 보내고, 이는 enteredExpenseData라는 매개변수로 받아짐
    props.onSaveExpenseData(expenseData);
    //양방향 바인딩 value에 enterdData값 넣으면 초기화
    setEnteredAmount("");
    setEnteredDate("");
    setEnteredTitle("");
  };

  // useEffect(() => {
  //   console.log(enteredTitle, "title");
  // }, [enteredTitle]);

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit" onClick={props.onCancel}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
