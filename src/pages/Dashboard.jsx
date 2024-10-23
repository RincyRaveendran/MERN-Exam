import React, { useEffect, useState } from 'react'
import Addexpense from '../Components/Addexpense'
import { getAllDetailsApi } from '../../services/allApi'
import Expincard from '../Components/Expincard'

function Dashboard() {

    const[allDetails,setAllDetails]=useState([])
    const [searchkey,setSearchkey] = useState("")

    const getAllDetails = async(searchkey)=>{
        const result = await getAllDetailsApi(searchkey)
        setAllDetails(result.data)
    }
    console.log(allDetails);
    
    useEffect(()=>{
        getAllDetails(searchkey)
    },[allDetails,searchkey])

  return (
    <>
    <div className="row mb-2 mt-3">
        <div className="col-md-3 text-center mt-4 mb-4">
            <Addexpense/>
            < input className='mt-5' type="text" placeholder='Search Category' onChange={(e)=>{setSearchkey(e.target.value)}} />
        </div>
    </div>

   
<div className="row">
  {allDetails.length>0?
  allDetails.map((item)=>(<div className="col-md-3">
    <Expincard details={item}/>
</div>))  :
    <p>No details</p>}
    <div className="col-md-3"></div>
    <div className="col-md-3"></div>
    <div className="col-md-3"></div>
</div>
  


  
    </>
  )
}

export default Dashboard