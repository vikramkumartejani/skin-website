import React from 'react'
import './treatmentdetails.css'
import TreatmentImg from '../../Images/TreatmentDetails.webp'

const TreatmentDetails = () => {
  return (
    <div className='treatment-container'>
      <h3>Treatment Details</h3>
      <div className='content-treatment'>
        <img src={TreatmentImg} style={{  }} />
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed commodo eget velit non luctus. 
          Duis at enim eu elit facilisis fermentum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Sed commodo eget velit non luctus. Duis at enim eu elit facilisis fermentum.Lorem ipsum dolor sit 
          amet, consectetur adipiscing elit. Sed commodo eget velit non luctus. Duis at enim eu elit facilisis 
          fermentum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed commodo eget velit non luctus. 
          Duis at enim eu elit facilisis fermentum.</p>
          <h1>Dr. Irfan Ahmad</h1>
          <div className='btn-viewdetails'>
            <button>View Details</button>
          </div>
      </div>
    </div>
  )
}

export default TreatmentDetails