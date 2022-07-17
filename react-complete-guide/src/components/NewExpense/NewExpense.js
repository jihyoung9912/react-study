import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setIsEditing(false);
  };

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  return (
    // prop drilling
    <div className="new-expense">
      {/* onSaveExpenseData에 saveExpenseDataHandler함수를(실행시키지 않고) 담아놓은 후, 
      ExpenseForm 컴포넌트에서 submit을 실행할 때 실행시키는 것. 즉, 다른 컴포넌트에서 정의한 함수를 이전하는 과정 */}
      {!isEditing && (
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          oncancel={stopEditingHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
