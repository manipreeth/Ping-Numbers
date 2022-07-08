import React,{useState} from 'react'
import {Form,Button} from 'react-bootstrap'
import './intrestCalculator.css'

function CompoundIntrest() {
  
  const [amount,handleAmountInput] = useState('')
  const [intrest,handleIntresttInput] = useState('')
  const [time,handleTimeInput] = useState('')
  const [compoundingFrequency,handleCompoundingFrequency] = useState('')
  const [compoundingIntrest,handleCompoundingIntrest] = useState('')
  const [totalAmount,handleTotalAmount] = useState('')
  const [display,handleDisplay] = useState(true)


    // Formula: CompoundIntrest = PrincipalAmount(1+ intrest / compoundingFrequency) ^ (compoundingFrequency * time)
  
  const submit =()=>{
    if(amount >= 1000 && intrest >=1 && time >= 1)
      {
        // Converting intrest from % to decimal form
        const IntrestDecimalForm = intrest / 100
        const CompoundIntrestRate = 1 + (IntrestDecimalForm/compoundingFrequency)
        
        // Multiplying Compounding frequency value with time period
        const CompoundIntrestTime = compoundingFrequency * time
        
        // Finding Total intrest amount added to pricipal amount in a year using math.pow() 
        const CompoundIntrestAmount =  Math.pow(CompoundIntrestRate,CompoundIntrestTime)

        // Final Amount after multiplying principal amount with intrest rate value
        const FinalAmount =  amount * CompoundIntrestAmount

        handleCompoundingIntrest(FinalAmount - amount)
        handleTotalAmount(FinalAmount)
        handleDisplay(false)
      }
    else { alert('Check values selected') }
  }

  const recalculate = ()=>{
    handleAmountInput('')
    handleIntresttInput('')
    handleTimeInput('')
    handleCompoundingFrequency('')
    handleDisplay(true)
  }

return(
  <div>
  { display ?
    <div className='intrestCalculator'>
      <Form>
        <Form.Label>Select Principal Amount</Form.Label> <span>{amount}</span>
        <Form.Range value={amount} onChange={e=>handleAmountInput(e.target.value)} min="1000" max="100000" step="500" default='1000' />
        
        <Form.Label>Select Rate Of Intrest <small>(in %)</small></Form.Label> <span>{intrest}</span>
        <Form.Range value={intrest} onChange={e=>handleIntresttInput(e.target.value)} min='1'/>

        <Form.Label>Select Time Period <small>(in years)</small></Form.Label> <span>{time}</span>
        <Form.Range value={time} onChange={e=>handleTimeInput(e.target.value)} min='1'/>

        <Form.Label>Compound Frequency <small>(in a year)</small></Form.Label>
        <Form.Select aria-label="Default select example" 
          value={compoundingFrequency} onChange={e=>handleCompoundingFrequency(e.target.value)}>
          <option>Select Frequency</option>          
          <option value="1">Yearly</option>
          <option value="2">Half yearly</option>
          <option value="3">Quarterly</option>
        </Form.Select>
        
      </Form> <br/>
      <Button variant="success" onClick={()=>submit()}> Submit </Button>
      </div>

  :
      <div className='intrestResultDisplay intrestCalculator'>
        <h6>Principal Amount = {amount} Rs/-</h6>
        <h6>Rate of intrest = {intrest} %</h6>
        <h6>Time period = {time} <small>(year/years)</small></h6>
        <h6>Compounding frequency = {compoundingFrequency}</h6>
        <h5>Compound Intrest = {compoundingIntrest} Rs/-</h5>
        <h5>Total Amount = {totalAmount} Rs/-</h5>
  
        <Button variant="danger" onClick={()=>recalculate()}> Recalculate </Button>    
      </div>
  }
  </div>
)}

export default CompoundIntrest;