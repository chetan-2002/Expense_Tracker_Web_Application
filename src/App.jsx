//react import is auto imported automatically when we initialize new react object
import React ,{useState} from "react";

//adding some custom components that are used inside this file
import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";
const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];
//basicaly a react component is nothing but a javascript function
function App() {
  const [expenses,setExpenses]=useState(DUMMY_EXPENSES);

  //creating an array of objects
  
  //we can code the complete code in react using the below format ,but in a long react app this task is quite combersome ,thats why we use jsx(javascript xml)
  //jsx is the html code that we can write inside java script functions.
  //is is not executed as such but internally transformed by react to the format that browser understands

  // return React.createElement(
  //   "div",
  //   {},
  //   React.createElement("h2", {}, "This is nice"),
  //   React.createElement(Expenses, { items: expenses })
  // );
  const addExpenseHandler=(expense)=>{
    setExpenses((prevExpenses)=>{
      return [expense,...prevExpenses]
    })
  }

  //every react component should return something and only one container can be returned.
  
  //new expense,expenses is a custom react component
  return (
    <div>
      
      <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
      <Expenses items={expenses}></Expenses>
    </div>
  );
}

export default App;
