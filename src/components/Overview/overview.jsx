import React from 'react'
import Dashboard from '../DashboardLayout/dashboard'
import './overview.css'
import { Link } from 'react-router-dom'
import Slider from '../Slider/slider'
import MedicalRecord from '../MedicalRecords/medicalRecord'
import TreatmentDetails from '../TreatmentDetails/treatmentdetails'
import TreatmentHistory from '../TreatmentHistory/treatmenthistory'
import TreatmentCostEstimate from '../TreatmentCostEstimate/treatmentCostEstimate'

const Overview = () => {
    return (
        <Dashboard>
            <div className='overview-container'>
                <div className='overview-heading'>  
                    <div className='heading'>
                        <h1>Welcome, Jane</h1>
                        <p>Check the latest updates on your account</p>
                    </div>
                    <div className='btns'>
                        <Link style={{ backgroundColor: 'white', color: 'black', fontSize: '14px', padding: '.3rem 2rem' }}>Support & FAQ’s</Link>
                        <Link style={{ backgroundColor: 'black', color: '#FFFFFF', fontSize: '14px', padding: '.3rem 1rem' }}>Book an appointment</Link>
                    </div>
                </div>
                <div className='boxes'>

                    <div style={{ backgroundColor: '#E1D0C1' }} className='box'>
                        <h3>Ongoing Treatment</h3>
                        <h2>PRP Injections</h2>
                        <h4><span style={{ color: 'rgba(76, 77, 79, 0.5)' }}>Start Date:</span> 31 July, 2023</h4>
                        <div className='line-box'>
                            <p>Progress</p>
                            <p>45%</p>
                        </div>
                        <div style={{ backgroundColor: 'rgba(76, 77, 79, 0.5)', marginTop: '.5rem', width: '100%', height: '2px' }}>
                            <div style={{ backgroundColor: 'rgba(76, 77, 79, 1)', width: '45%', height: '2px' }}></div>
                        </div>
                    </div>

                    <div style={{ backgroundColor: '#C2D5DC' }} className='box'>
                        <h3>Upcoming Appointment</h3>
                        <h2>25 Aug, 2023</h2>
                        <h4><span style={{ color: 'rgba(76, 77, 79, 0.5)' }}>At</span> 12:00 PM</h4>
                        <div className='box-detail'>
                            <p><span style={{ color: 'rgba(76, 77, 79, 0.5)' }}>Provider:</span>  Dr. Vihang Sharma</p>
                            <p><span style={{ color: 'rgba(76, 77, 79, 0.5)' }}>Studio:</span>   Toorak</p>
                        </div>
                    </div>

                    <div style={{ backgroundColor: '#FFFFFF' }} className='box'>
                        <h3>Recent Payment</h3>
                        <h2>$350.00</h2>
                        <h4><span style={{ color: 'rgba(76, 77, 79, 0.5)' }}>Paid via:</span> Master Card (***456)</h4>
                        <div className='box-detail'>
                            <p><span style={{ color: 'rgba(76, 77, 79, 0.5)' }}>Date:</span> 15 August, 2023</p>
                            <p><span style={{ color: 'rgba(76, 77, 79, 0.5)' }}>For PRP Injections scheduled session</span>  View Detail</p>
                        </div>
                    </div>

                </div>
                <Slider />
                <div style={{display:'flex', margin:'2rem 0', gap:'1rem'}}>
                    <MedicalRecord />
                    <TreatmentDetails />
                </div>
                <div>

                <TreatmentHistory/>
                </div>
                <TreatmentCostEstimate/>
            </div>
        </Dashboard>
    )
}

export default Overview