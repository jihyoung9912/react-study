import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  return (
    <div className="new-expense">
      {/* onSaveExpenseData에 saveExpenseDataHandler함수를(실행시키지 않고) 담아놓은 후, 
      ExpenseForm 컴포넌트에서 submit을 실행할 때 실행시키는 것. 즉, 다른 컴포넌트에서 정의한 함수를 이전하는 과정 */}
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
