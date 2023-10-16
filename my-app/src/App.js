// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


import React from 'react';
import Expenses from './components/Expenses'
import NewExpense from './components/NewExpense';
import ControlledCounter from './components/Additionals/ControlledCounter';
import BoundedComponent from './components/Additionals/BoundedComponent';
import ModuleHandling from './components/Additionals/ModuleHandling';
import Header from './components/Additionals/Header';
import Footer from './components/Additionals/Footer';
import HooksEx from './components/Additionals/HooksEx';
import HooksMsgDisplay from './components/Additionals/HooksMsgDisplay';
import SignUp from './components/signup';

function App() {

  const expenses = [
    {edate:new Date(2023,6,19), expensename:'Rent' , amount: 10000},
    {edate:new Date(2023,6,19), expensename: 'Food', amount: 3000}
    ];
  return (
    <div className="App">
     <div>
          <h1>React Example</h1>
      </div> 

      <h1>Expenses</h1>
      <SignUp/>

      {/* <NewExpense></NewExpense>
      <h4>DATE  EXPENSE AMOUNT</h4>
      
      <Expenses
        expdate ={expenses[0].edate}
        exptype = {expenses[0].expensename}
        expamt = {expenses[0].amount}
        >
      </Expenses>
      <Expenses
       expdate ={expenses[1].edate}
        exptype = {expenses[1].expensename}
        expamt = {expenses[1].amount}>
      </Expenses>
      <ControlledCounter></ControlledCounter>
      <br></br>
      <BoundedComponent></BoundedComponent>
      <br></br>
      <ModuleHandling></ModuleHandling>
      <br></br>
      <Header></Header>
      <br></br>
      <Footer></Footer>
      <br></br>
      <HooksEx></HooksEx>
      <br></br>
      <HooksMsgDisplay></HooksMsgDisplay> */}
      <br></br>
    </div>
    
  );
}

export default App;
