import React from 'react'
import './medicalRecord.css'
import { AiOutlinePlus } from 'react-icons/ai'
import { RxCross2 } from 'react-icons/rx'


const MedicalRecord = () => {
    return (
        <div className='medical-container'>
            <h3>Medical Records</h3>
            <hr />
            {/* Allergies */}

            <div className='Allergies'>
                <div className='heading-allergies'>
                    <h3>Allergies</h3>
                    <AiOutlinePlus />
                </div>
                <div className='items'>
                    <h3>Eggs</h3>
                    <RxCross2 />
                </div>

                <div className='items'>
                    <h3>Peanuts</h3>
                    <RxCross2 />
                </div>
                <div className='items'>
                    <h3>Pollen</h3>
                    <RxCross2 />
                </div>
                <div className='items'>
                    <h3>Household Chemicals</h3>
                    <RxCross2 />
                </div>
            </div>

            {/* Previous Surgeries */}
            <div className='Allergies'>
                <div className='heading-allergies'>
                    <h3>Previous Surgeries</h3>
                    <AiOutlinePlus />
                </div>
                <div className='items'>
                    <h3>C - Section</h3>
                    <RxCross2 />
                </div>
                <div className='items'>
                    <h3>Appendix Removal</h3>
                    <RxCross2 />
                </div>
                <div className='items'>
                    <h3>Pollen</h3>
                    <RxCross2 />
                </div>
            </div>

            {/* Chronic Conditions */}
            <div className='Allergies'>
                <div className='heading-allergies'>
                    <h3>Chronic Conditions</h3>
                    <AiOutlinePlus />
                </div>
                <div className='items'>
                    <h3>IHD</h3>
                    <RxCross2 />
                </div>
                <div className='items'>
                    <h3>Chronic thyroid disorder</h3>
                    <RxCross2 />
                </div>
            </div>
        </div >
    )
}

export default MedicalRecord;