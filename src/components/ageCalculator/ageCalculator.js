import React,{useState} from 'react'
import {Form,Button} from 'react-bootstrap'
import './ageCalculator.css'


function ageCalculator() {
  
  const [dob,handleDobInput] = useState('')
  const [ageYear,handleAgeYear] = useState('')
  const [ageMonth,handleAgeMonth] = useState('')
  const [ageDay,handleAgeDay] = useState('')
  const [display,handleDisplay] = useState(true)
  
  const month =[31,28,31,30,31,30,31,31,30,31,30,31]

  let dateofBirth = new Date(dob);
  let date = new Date();

  // Getting individual details of day,month & year from date of birth 
  let birthYear = dateofBirth.getFullYear();
  let birthMonth = dateofBirth.getMonth();
  let birthDay = dateofBirth.getDate();
  
  // Getting individual details of day,month & year from current date 
  let currentYear = date.getFullYear();
  let currentMonth = date.getMonth();
  let currentDay = date.getDate();
  
  leapTest(currentYear);
  function leapTest(year){
    if(((year % 4 === 0) && (year % 100 !==0)) || (year % 400 === 0)){
        month[1] = 29;
      }
    else{ month[1] = 28; }
  }


  const calculateAge=()=>
    {
      if(birthYear ==='yyyy' || birthMonth === 'mm' || birthDay === 'dd' ){
          alert('Select date of birth')
      }
     else  if(birthYear > currentYear || 
        (birthMonth > currentMonth && birthYear === currentYear) ||
        ( birthDay > currentDay && birthMonth === currentMonth && birthYear === currentYear)){
          alert('Not born Yet!')
          handleAgeYear(null)
          handleAgeMonth(null)
          handleAgeDay(null)
        }

      else
      {  
          // Declaring a constant to store difference of Years.
          let diffYear = currentYear - birthYear;
          // Declaring a constant to store difference of months.
          let diffMonth;
          // Declaring a constant to store difference of days.
          let diffDay;

        // To Calculate months of age 
          if(currentMonth >= birthMonth){
              diffMonth = currentMonth - birthMonth;
              handleAgeMonth(diffMonth);         
            }
          else{
            diffYear--;
            diffMonth = 12 + currentMonth - birthMonth;
            handleAgeYear(diffYear);
            handleAgeMonth(diffMonth);
            }
        
        // To Calculate days of age 
          if(currentDay >= birthDay){
              diffDay = currentDay - birthDay;
              handleAgeDay(diffDay);         
            } 
          else {
            diffMonth--;
            let days = month[currentMonth - 2]
            diffDay = days + currentDay - birthDay;
              if(diffMonth < 0 ){
                diffMonth = 11;
                diffYear--;
                handleAgeMonth(diffMonth);
                handleAgeYear(diffYear);
              }
            handleAgeMonth(diffMonth);
            handleAgeDay(diffDay -1);         
          }
        handleDisplay(false)
      }
    }

  const recalculate=()=>{
    handleDisplay(true)
    handleDobInput(null)
  }


  return(
    <div>
    { display ?
      <div className='ageCalculator'>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Enter Date of Birthday</Form.Label>
            <Form.Control type="date" value={dob} onChange= {e=>handleDobInput(e.target.value)} />
          </Form.Group>
        </Form>
        <Button variant="success" onClick={()=> calculateAge()}>Calculate</Button>
      </div>
    :
      <div className='ageResultDisplay ageCalculator'>
      <h5>{ageYear} Years {ageMonth} Months {ageDay} Days</h5>
      <Button variant="primary" onClick={()=>recalculate()} >Recalcuate</Button>
      </div>
    }
    </div>
  )
}

export default ageCalculator;