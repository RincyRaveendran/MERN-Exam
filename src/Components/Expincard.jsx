import React from 'react'

function Expincard({details}) {
  return (
    <>
       <div>
        <div className="col-md-3 outline-primary mt-2 ms-2 p-4">
            <h4>Category:{details.Category}</h4>
            <p>Description:{details.Description}</p>
            <p>Amount:{details.Amount}</p>
            <p>Date:{details.Date}</p>
            <p>Subcategory:{details.Subcategory}</p>

        </div>
        <div className="col-md-3"></div>
        <div className="col-md-3"></div>
        <div className="col-md-3"></div>
    </div>
    </>
  )
}

export default Expincard