import React from 'react'
import{Routes,Route} from 'react-router-dom'

import IntegerCalculator from '../integerCalculator/integerCalculator'
import BmiCalculator from '../bmiCalculator/bmicalculator'
import IntrestCalculator from '../intrestCalculator/intrestCalculator'
import SimpleIntrest from '../intrestCalculator/simpleIntrest'
import CompoundIntrest from '../intrestCalculator/compoundIntrest'
import AgeCalculator from '../ageCalculator/ageCalculator'

function pathConfiguration() {
  return(
    <div>
    <Routes>
      <Route path='/' element={<IntegerCalculator/>}/>

      <Route path='bmi' element={<BmiCalculator/>}/>

      <Route path='intrestCalculator' element={<IntrestCalculator/>}>
        <Route index element={<SimpleIntrest/>}/>
        <Route path='simpleIntrest' element={<SimpleIntrest/>}/>
        <Route path='compoundIntrest' element={<CompoundIntrest/>}/>      
      </Route>

      <Route path='age' element={<AgeCalculator/>}/>

    </Routes>
    </div>
  )
}

export default pathConfiguration;