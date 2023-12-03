import React from 'react'
import './prpinjectiondr.css'
import Dashboard from '../../components/DashboardLayout/dashboard';
import { BiMessageRounded } from 'react-icons/bi'
import { FiPhoneCall } from 'react-icons/fi'
import { LuEdit } from 'react-icons/lu'
import After from '../../Images/after.png'
import Before from '../../Images/before.png'
import { IoSendSharp } from 'react-icons/io5'


const PRPInjectionDr = () => {
  return (
    <>
      <Dashboard>
        <div className='docter-container'>
          <div className='headerdr-container'>
            <h1>PRP Injections <span style={{ fontSize: '15px' }}>/ Dr. Vihang Sharma</span></h1>
            <div className='dr-btns'>
              <input type='search' placeholder='Search' ></input>
              <button style={{ backgroundColor: 'rgba(255, 255, 255, 1)' }}>Support & FAQ’s</button>
              <button style={{ border: '1px solid rgba(76, 77, 79, 1)' }}>Cancel Appointment</button>
            </div>
          </div>
          <div className='docter-timing'>
            <h4>Date: 25 Aug, 2023</h4>
            <h4>Time: 12:00 PM - 02:00 PM</h4>
            <h4>Studio: Toorak</h4>
          </div>

          <div className='docter-info'>

            <div className='patient-detail'>
              <div className='patient-content'>
                <div>
                  <h3>Jane Doe</h3>
                  <span>For PRP Injections</span>
                </div>
                <div className='contact-info'>
                  <div className='contact-dr'>
                    <FiPhoneCall style={{ fontSize: '1.3rem' }} />
                    <h3 style={{ fontSize: '6px' }}>instant Message</h3>
                  </div>
                  <div className='contact-dr'>
                    <BiMessageRounded style={{ fontSize: '1.3rem' }} />
                    <h3 style={{ fontSize: '6px' }}>Call via mobile</h3>
                  </div>
                </div>

              </div>

              <div className='appointments'>
                <h3>Appointments</h3>
                <div className='appointment-detail'>
                  <div className='petient-pa-comi'>
                    <h3>4</h3>
                    <p>Past</p>
                  </div>
                  <div className='petient-pa-comi'>
                    <h3>10</h3>
                    <p>Upcoming</p>
                  </div>
                </div>
              </div>

              <div className='petient-personal-detail'>
                <div className='personal-detail'>
                  <h3>Patient Details</h3>
                  <LuEdit />
                </div>

                <div className='peitent-info'>
                  <div className='every-detail'>
                    <h6>D.O.B</h6>
                    <h6>Age</h6>
                    <h6>Height</h6>
                    <h6>Weight</h6>
                  </div>
                  <div className='every-detail'>
                    <p>14 Aug, 1995</p>
                    <p>29 Y</p>
                    <p>185 cm</p>
                    <p>75 kg</p>
                  </div>
                  <div className='every-detail'>
                    <h6>Allergies</h6>
                    <p>Peanuts</p>
                    <p>Pollen</p>
                    <p>Household Chemicals</p>

                  </div>
                </div>

              </div>


            </div>

            <div className='notes-container'>
              <h3>Notes</h3>
              <div className='notes-content'>
                <div className='note-detail'>
                  <p>It is a long established fact that a reader will be distracted by the readable content. It is a long established fact that a reader.</p>
                  <div className='note-images'>
                    <img src={After} alt='after' />
                    <img src={Before} alt='before' />
                  </div>
                  <div className='sendnote'>
                    <input type='text' placeholder='Write note...' />
                    <IoSendSharp className='icon-send-note' />
                  </div>
                </div>

                <div className='note-detail-container'>
                  <div className='treatment-performed-container'>
                    <div className='treatment-performed'>
                      <h3>Treatment Performed</h3>
                      <p>14 Aug, 2023</p>
                    </div>
                  </div>
                  <div className='treatment-performed-container'>
                      <h3>Other Notes:</h3>
                      <hr style={{margin:'.5rem 0' }}/>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed commodo eget velit non luctus. Duis at enim eu elit facilisis fermentum.</p>
                  </div>

                  <div className='note-container-btn'>
                    <button>Overview</button>
                    <button>Add notes</button>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </Dashboard>
    </>
  )
}

export default PRPInjectionDr