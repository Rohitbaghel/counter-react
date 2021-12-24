import logo from './logo.svg';
import './App.css';
import {useState} from "react"

function App() {
  const [count,Setcount] = useState(0)
  function changeValue(value) {

  Setcount(count+value)

  }
  function MultiplyBy2() {

    Setcount(count*2)
  
    }
 if( count > 20 ){
return <div>Count is greater than</div>
 }
 if( count < 0 ){
  return <div>Count can't be negative</div>
   }
  return (
    <div className="App">
    <h3>changeValue:{count}</h3>
      <button  onClick={()=>changeValue(1)}>add 1</button>
    <button onClick={()=>changeValue(-1)}>delete 1</button>
    <button onDoubleClick={MultiplyBy2}>Double Click</button>
    <div><h1>count is {count%2==1 ? "Even" : "Odd"}</h1></div>
    </div>
  );
}

export default App;
