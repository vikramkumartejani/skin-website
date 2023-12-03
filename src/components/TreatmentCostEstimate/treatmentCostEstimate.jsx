import React from 'react'
import './treatmentCostEstimate.css'
import { RiMastercardLine } from 'react-icons/ri'
import TreatmentBenefits from '../../Images/treatment-benefits.png'

const TreatmentCostEstimate = () => {
  return (
    <div className='costestimate-container'>
      <h1>Treatment Cost Estimate</h1>
      <hr />
      <div className='treatmentcostcontent'>

        <div className='costestimate-content'>
          <h2>Select a Treatment</h2>
          <div className='select-btn'>
            <button>Select a treatment</button>
            <button>Select a Studio</button>
          </div>

          <div className='prp-injection'>
            <h3>PRP Injections</h3>
            <p>It is a long established fact that a reader will be distracted by the readable content. It is a long established fact that a reader will be distracted by the readable content. It is a long established fact.</p>
          </div>

          <div className='area-duration'>
            <div className='treatment-areas'>
              <h3>Treatment Areas</h3>
              <p>1. It is a long established fact.</p>
              <p>2. Reader will be distracted by the readable content.</p>
              <p>3. It is a long established fact that a reader will be distracted.</p>
              <p style={{ marginTop: '1rem' }}>It is a long established fact that a reader will be distracted by the readable content.</p>
            </div>
            <div className='duration'>
              <h3>Duration</h3>
              <p>1. It is a long established fact.</p>
              <p>2. Reader will be distracted by the readable content.</p>
              <p>3. It is a long established fact that a reader will be distracted.</p>
            </div>
          </div>

          <div className='treatmentprocess'>
            <h3>Treatment Process</h3>
            <p>It is a long established fact that a reader will be distracted by the readable content. It is a long established fact that a reader will be distracted by the readable content. It is a long established fact.</p>
            <p>1. It is a long established fact.</p>
            <p>2. Reader will be distracted by the readable content.</p>
            <p>3. It is a long established fact that a reader will be distracted.</p>
          </div>

          <div className='risk-recovery'>
            <div className='risk'>
              <h3>Risks & Complications</h3>
              <p>It is a long established fact that a reader will be distracted by the readable content.</p>
              <p>1. It is a long established fact.</p>
              <p>2. Reader will be distracted by the readable content.</p>
              <p>3. It is a long established fact that a reader will be distracted.</p>
            </div>
            <div className='recovery'>
              <h3>Recovery & Downtime</h3>
              <p>1. It is a long established fact.</p>
              <p>2. Reader will be distracted by the readable content.</p>
              <p>3. It is a long established fact that a reader will be distracted.</p>
              <p>It is a long established fact that a reader will be distracted by the readable content.</p>
            </div>
          </div>

        </div>

        <div className='payment-box-detail'>

          <div className='payment-box'>
            <div className='payment-detail'>
              <div className='price-heading'>
                <h2>PRP Injections</h2>
                <p>It is a long established fact.</p>
              </div>
              <div className='price'>
                <h3>$350.00</h3>
                <p>Per Session / 12</p>
              </div>
            </div>

            <div className='payment-checkbox'>
              <div className='checkbox'>
                <input type="checkbox" id="scales" name="scales" />
                <label>It is a long established fact.</label>
              </div>
              <div className='checkbox'>
                <input type="checkbox" id="scales" name="scales" />
                <label>Reader will be distracted by the readable content.</label>
              </div>
              <div className='checkbox'>
                <input type="checkbox" id="scales" name="scales" />
                <label>It is a long established fact that a reader will be distracted.</label>
              </div>
              <div className='checkbox'>
                <input type="checkbox" id="scales" name="scales" />
                <label>Reader will be distracted by the readable content.</label>
              </div>
            </div>


            <select className='dropdow-payment' name="pets" id="pet-select">
              <option><RiMastercardLine />Master Card (***6578)</option>
              <option>Master Card (***6579)</option>
              <option>Master Card (***6580)</option>
              <option>Master Card (***6581)</option>
            </select>

            <div>
              <button className='book-now-btn'>Book Now</button>
            </div>

          </div>

          <div className='treatment-benefits'>
            <h3>Treatment Benefits</h3>
            <p>1. It is a long established fact.</p>
            <p>2. Reader will be distracted by the readable content.</p>
            <p>It is a long established fact that a reader will be distracted by the readable content.</p>

            <img src={TreatmentBenefits} alt='treatment-benefits' />
          </div>


        </div>

      </div>
    </div>
  )
}

export default TreatmentCostEstimate