import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
    <div>
        <div className="row" style={{height:'80vh',width:'100%'}}>
            <div className='col-md-6 d-flex justify-content-center align-items-center flex-column'>
                <h1>Track your Income & Expense</h1>
                <p>Here is your final Destination</p>
                <Link to={'/register'}><button className='btn btn-primary'>Register For Free</button></Link>
                
            </div>
            <div className="col-md-6" style={{display:'flex',justifyContent:'center', alignItems:'center'}}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC3I--nMaiNWh_0F2C6fA9Phal1MyN-trq_g&s" alt="" style={{height:'90%',width:'100%'}} />
            </div>
        </div>
       
    </div>
    
    </>
  )
}

export default Home