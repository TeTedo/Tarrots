import Expenses from "./components/Expenses/Expenses";
import React from "react";
const App = () => {
  const expenses = [
    {
      title: "Toilet Paper",
      amount: 296.56,
      date: new Date(),
    },
    {
      title: "Car Insurance",
      amount: 296.56,
      date: new Date(),
    },
    {
      title: "Car Insurance",
      amount: 296.56,
      date: new Date(),
    },
    {
      title: "Car Insurance",
      amount: 296.56,
      date: new Date(),
    },
  ];
  // return React.createElement(
  //   "div",
  //   {},
  //   React.createElement("h2", {}, "Let's goet started!"),
  //   React.createElement(Expenses, { items: expenses })
  // );
  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
