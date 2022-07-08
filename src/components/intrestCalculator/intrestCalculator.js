import {Link,Outlet} from 'react-router-dom'
import './intrestCalculator.css'

function IntrestCalculator() {
  return(
    <div>
      <Link className='intrestCalculatorNavBar' to='simpleIntrest'>Simple Intrest</Link> &nbsp;
      <Link className='intrestCalculatorNavBar' to='compoundIntrest'>Compound Intrest</Link>
      <Outlet/>
    </div>
  )
}

export default IntrestCalculator;