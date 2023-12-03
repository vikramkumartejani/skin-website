import React from 'react'
import './treatmenthistory.css'
import { BsChevronDown } from 'react-icons/bs'
import Table from '../TreatmentHistoryTable/table'

const TreatmentHistory = () => {
    return (
        <div className='treatmenthistory-container'>
            <div className='treatmenthistory-heading'>
                <h3>Treatment History</h3>
                <div className='filter'>
                    <h2>Filter By:</h2>
                    <span style={{height:'15px', backgroundColor:'rgba(76, 77, 79, 0.2)', width:'2px'}}></span>
                    <div style={{display:'flex',gap:'.5rem', alignItems:'center'}}>
                        <button>Upcoming</button>
                        <BsChevronDown style={{width:'20px', height:'15px'}}/>
                    </div>
                </div>
            </div>
                <Table/>
        </div>
    )
}

export default TreatmentHistory;