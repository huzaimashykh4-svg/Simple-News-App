import React from 'react'
import { Link } from "react-router-dom"

const nav  = (props) => {

  
  
    return (
      <div>

<nav className="navbar fixed-top navbar-expand-lg bg-body-tertiary ">
  <div className="container-fluid">
    <Link className="navbar-brand  text-white" to="/">NewsMonkey</Link>
    <button className="navbar-toggler text-white"  type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link   text-white" aria-current="page" to="/general">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link  text-white" to="">News</Link>
        </li>

       <li className='nav-item'><Link  className='nav-link  text-white ' to='/business'  > business</Link></li>
       <li className='nav-item'><Link  className='nav-link  text-white ' to='/entertainment' > entertainment </Link></li>
       <li className='nav-item'><Link  className='nav-link  text-white ' to='/general' > general </Link></li>
       <li className='nav-item'><Link  className='nav-link  text-white ' to='/health' > health </Link></li>
       <li className='nav-item'><Link  className='nav-link  text-white ' to='/science' > science </Link></li>
       <li className='nav-item'><Link  className='nav-link  text-white ' to='/sports' > sports </Link></li>
       <li className='nav-item'><Link  className='nav-link  text-white ' to='/technology' > technology </Link></li>
       

    
      </ul>
    
    </div>
    <input className='inptsearch'  placeholder='Search News'  value={props.valueinput} onChange={props.changes} />
    

  </div>
</nav>



        
      </div>
    )
  }


export default nav
