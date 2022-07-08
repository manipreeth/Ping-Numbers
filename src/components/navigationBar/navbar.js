import {NavLink} from 'react-router-dom'

import './navigationBar.css'

function Navbar() {
  return(
    <nav>
    <NavLink to='/'>Integer Calculator</NavLink> &nbsp;
    <NavLink to='/bmi'>BMI Calculator</NavLink> &nbsp;
    <NavLink to='/intrestCalculator'>Intrest Calculator</NavLink> &nbsp;
    <NavLink to='/age'>Age Calculator</NavLink> &nbsp;
    </nav>
  )
}

export default Navbar;