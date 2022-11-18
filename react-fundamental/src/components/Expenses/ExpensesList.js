import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css"

const ExpensesList = (props) => {
    let expensesContent = <h2 className='expenses-list__fallback'>No expenses found</h2>

    if (props.items.length === 0) {
        return expensesContent
    }

    if (props.items.length > 0) {

        return <ul className="expense-list">
            {props.items.map((expense) => (
                <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date}/>))}
        </ul>
    }
}

export default ExpensesList;