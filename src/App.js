import React,{useState} from 'react';
import './App.css';
import Heading from './Components/Heading';

const App = () => {

  const[result , setResult] = useState (" ");

  const handleClick = (e) =>{
     setResult(result.concat(e.target.name));
  }

  const clear = () => {
     setResult("");
  }

  const backspace = () => {
      setResult(result.slice(0 , result.length-1));
  }
  
  const calculate = () => {
    try{
      setResult(eval(result) . toString());
    }
    catch {
      setResult("  Enter Valid Operations  ");
    } 
  }

  const handleChange= (event) => {
    setResult(event.target.value)
    }
  
  
  return (
    <>
     <Heading />
     <div className='container'>
      <form>
        <input type="text" onChange={handleChange } value={result} />
      </form>

      <div className='keyValues'>
        <button onClick={clear} id="clear"> Clear </button>
        <button onClick={backspace} id="backspace"> AC </button>
        <button name = "/" onClick={handleClick} className="operation"> &divide;</button>
        <button name = "9" onClick={handleClick}> 9 </button>
        <button name = "8" onClick={handleClick}> 8 </button>
        <button name = "7" onClick={handleClick}> 7 </button>
        <button name = "*" onClick={handleClick} className="operation"> &times;</button>
        <button name = "6" onClick={handleClick}> 6 </button>
        <button name = "5" onClick={handleClick}> 5 </button>
        <button name = "4" onClick={handleClick}> 4 </button>
        <button name = "-" onClick={handleClick} className="operation"> &ndash;</button>
        <button name = "3" onClick={handleClick}> 3 </button>
        <button name = "2" onClick={handleClick}> 2 </button>
        <button name = "1" onClick={handleClick}> 1 </button>
        <button name = "+" onClick={handleClick} className="operation"> + </button>
        <button name = "." onClick={handleClick}> . </button>
        <button name = "0" onClick={handleClick}> 0 </button>
        <button name = "=" onClick={calculate} id="equal"> = </button>
      </div>
     </div>
    </>
  );
}

export default App;
