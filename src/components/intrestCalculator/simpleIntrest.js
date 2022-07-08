import React,{useState} from 'react'
import {Form,Button} from 'react-bootstrap'
import './intrestCalculator.css'

function SimpleIntrest() {
  
  const [amount,handleAmountInput] = useState('')
  const [intrest,handleIntresttInput] = useState('')
  const [time,handleTimeInput] = useState('')
  const [simpleIntrest,handleSimpleIntrest] = useState('')
  const [totalAmount,handleTotalAmount] = useState('')
  const [display,handleDisplay] = useState(true)


  const submit =()=>{
    if(amount > 99 && intrest >= 0.1 && time >= 0.1)
      {
        // Formula: SimpleIntrest = PrincipalAmount * Rate of intrest (intrest) * time / 100
        const userInput = amount * intrest * time        
        handleSimpleIntrest(userInput/100)
        
        // Total amount to be paid along with pricipal amount
        handleTotalAmount(amount + simpleIntrest)
        handleDisplay(false)
      }

    else { alert('Enter appropriate values') }
  
  }

  const recalculate = ()=>{
    handleAmountInput('')
    handleIntresttInput('')
    handleTimeInput('')
    handleDisplay(true)
  }

  return(
    <div> 
    
    { display ?

      <div className='intrestCalculator'>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Enter Principal Amount</Form.Label>
            <Form.Control type="number" placeholder="Enter Amount"
            value={amount} onChange={e=>handleAmountInput(e.target.value)}/>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Enter Rate Of Intrest</Form.Label>
            <Form.Control type="number" placeholder="Intrest in %"
            value={intrest} onChange={e=>handleIntresttInput(e.target.value)} />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Enter Time Period</Form.Label>
            <Form.Control type="number" placeholder="Time in Years "
            value={time} onChange={e=>handleTimeInput(e.target.value)} />
          </Form.Group>

        </Form>
        <Button variant="success" onClick={()=>submit()}> Submit </Button>
      </div>

    :
        <div className='intrestResultDisplay intrestCalculator'>
          
          {/* Values Entered by user */}
          <h6>Principal Amount = {amount} Rs</h6>
          <h6>Rate 0f intrest = {intrest} %</h6>
          <h6>Time period = {time} <small>( year/years )</small></h6>

          {/* Result Of the calculation */}
          <h5>Simple Intrest = {simpleIntrest} Rs</h5>
          <h5>Total Amount  = {totalAmount} Rs</h5>

          <Button variant="primary" onClick={()=>recalculate()}> Recalculate </Button>
        </div>
    }
    </div>
  )
}
export default SimpleIntrest;