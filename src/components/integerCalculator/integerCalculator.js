import React,{useState} from 'react'
import './integerCalculator.css'
import {evaluate} from 'mathjs'


function IntegerCalculator() {

  const [input,handleInput] = useState([])
  const [finalResult,handleResult] = useState('')

  // Takes value from arguments and inserts arguments into array
  // Uses Spread Operator to spread exsisting array elements
  const digit = (value)=>{
      handleInput([...input,value])
      handleResult('')
  }

  // Converts array elements into string and evaluates the expression
  const result =()=>{
    if(input[0]==='*' || input[0]==='/'){
        alert('Check Values Entered')
    }

    else if(input.length > 0)
    {
      const expression = input.join("")
      handleResult(evaluate(expression))
      handleInput('')
    }

    else { alert('Enter Values') }
  }

  // Clears Display 
  const erase =()=>{
    handleResult([])
    handleInput([])
  }


 return(
    <div id="calculator-layout">
      
      {/* Display */}
      <div id="display">
        <div id="result">{finalResult}</div>
        <div id="input"> {input} </div>
      </div>

        {/* 1st Row */}
        <button id="num-7" className="row-1 button" onClick={()=>digit(7)}> 7 </button>
        <button id="num-8" className="row-1 button" onClick={()=>digit(8)}> 8 </button>
        <button id="num-9" className="row-1 button" onClick={()=>digit(9)}> 9&nbsp; </button>
        <button id="multiplication" className="row-1 button" onClick={()=>digit('*')}> x </button><br/>

        {/* 2nd Row */}
        <button id="num-4" className='button' onClick={()=>digit(4)}> 4 </button>
        <button id="num-5" className='button' onClick={()=>digit(5)}> 5&nbsp; </button>
        <button id="num-6" className='button' onClick={()=>digit(6)}> 6 </button>
        <button id="subtraction" className='button' onClick={()=>digit('-')}> -&nbsp; </button><br/>

        {/* 3rd Row */}
        <button id="num-1" className='button' onClick={()=>digit(1)}> 1 </button>
        <button id="num-2" className='button' onClick={()=>digit(2)}> 2&nbsp; </button>
        <button id="num-3" className='button' onClick={()=>digit(3)}> 3 </button>
        <button id="addition" className='button' onClick={()=>digit('+')}> + </button><br/>

        {/* 4th Row */}
        <button id="clear" className='button' onClick={()=>erase()} > C </button>
        <button id="num-0" className='button' onClick={()=>digit(0)}> 0 </button>
        <button id="isequalto" className='button' onClick={()=>result()} > = </button>
        <button id="division" className='button' onClick={()=>digit('/')} > / </button>
    
    </div>
 ) 
}

export default IntegerCalculator;