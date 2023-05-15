import logo from './logo.svg';
import './App.css';
import { bindActionCreators } from 'redux';
import { actionCreators } from './state';
import {useDispatch,useSelector} from 'react-redux';


function App() {

  const account =useSelector((state)=>state.account)
  console.log(account);

  const counter =useSelector((state)=>state.counter)
  console.log(counter);
  const dispatch=useDispatch();

  const {depositMoney,withdrawMoney}=bindActionCreators(actionCreators,dispatch);
  const {incrementCounter,decrementCounter}=bindActionCreators(actionCreators,dispatch);

  return (
    <div>
      <h2>Account balance {account}</h2>
      <button onClick={()=>{depositMoney(1000)}}>Deposit</button>
      <button onClick={()=>{withdrawMoney(1000)}}>withdraw</button>
      <h2>Counter {counter}</h2><br/>
      <button onClick={()=>{incrementCounter}}>increment</button>
      <button onClick={()=>{decrementCounter}}>decrement</button>
     

    </div>
         
  
  );
}

export default App;
