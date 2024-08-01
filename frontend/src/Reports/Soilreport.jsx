import React from 'react'
import './Soilreport.css'
const Soilreport = () => {
  return (
    <>
    <h1 className='heading2 text-center mt-5'>Crop Requirement Analysis</h1>
    <div className="rounded mt-5" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-evenly' }}>
        <div className="card" >
        <img src="nitrogen_requirement.png" className="card-img-top" alt="..."/>
        <h5 className="card-title text-center">Nitrogen Requirements</h5>
        </div>
        <div className="card" >
        <img src="phosphorus_requirement.png" className="card-img-top" alt="..."/>
        <h5 className="card-title text-center">Phosphorus Requirements</h5>
        </div>
        <div className="card" >
        <img src="potassium_requirement.png" className="card-img-top" alt="..."/>
        <h5 className="card-title text-center">Potassium Requirements</h5>
        </div>        
    </div>
    <div className="rounded mt-5" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-evenly' }}>
        <div className="card" >
        <img src="NPK_ratio.png" className="card-img-top" alt="..."/>
        <h5 className="card-title text-center">NPK for main crop</h5>
        </div>
        <div className="card" >
        <img src="NPK_fruits.png" className="card-img-top" alt="..."/>
        <h5 className="card-title text-center">NPK required for fruits</h5>
        </div>
        <div className="card" >
        <img src="environment.png" className="card-img-top" alt="..."/>
        <h5 className="card-title text-center">Enviromental Consequences required</h5>
        </div>        
    </div>    
    </>
  )
}

export default Soilreport