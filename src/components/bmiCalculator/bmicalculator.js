import React,{useState} from 'react'
import {Form,Button} from 'react-bootstrap'
import './bmicalculator.css'

function BmiCalculator() {

  const [weight,handleWeightInput] = useState('')
  const [height,handleHeightInput] = useState('')
  const [bmi,handleBmi] = useState('')
  const [display,handleDisplay] = useState(true)

const submit =(e)=>{
  if(weight.length && height.length >= 2){
    // Converting height from cm's to meter
    const heightInMeters = height/100
    // Converting height from meters to meters-square
    const heightInMeterSquare = heightInMeters * heightInMeters 
    
    // Calculating BMI 
    handleBmi(weight/heightInMeterSquare)

    handleDisplay(false)
  }
  else{ alert('Enter appropriate values') }
}


  const recalculate = ()=>{
    handleHeightInput(null)
    handleWeightInput(null)
    handleDisplay(true)
  }
  
  return(
    <div className='display'>
    
      { display  ?

      <div className='CalculatorDisplay'>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Enter your Weight</Form.Label>
            <Form.Control type="number" placeholder="Weight in Kg's"
            value={weight} onChange={e=>handleWeightInput(e.target.value)} />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Enter your Height</Form.Label>
            <Form.Control type="number" placeholder="Height in cm's"
            value={height} onChange={e=>handleHeightInput(e.target.value)} />
          </Form.Group>
        </Form>
          <Button variant="success" onClick={()=>submit()}> Submit </Button>
      </div>

        :

        <div className='ResultDisplay CalculatorDisplay'>
          <h6>Height Entered = {height} cm's</h6>
          <h6>Weight Entered = {weight} Kg's</h6>
          <h5>Your BMI : {bmi}</h5>
          <Button variant="success" onClick={()=>recalculate()}>Recalculate</Button>
        </div>
      }
    </div>
  )
}

export default BmiCalculator;