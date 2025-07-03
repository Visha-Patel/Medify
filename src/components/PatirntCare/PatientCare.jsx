import React from 'react';
import Tick from '../../assets/tick.svg';
import Care1 from '../../assets/care1.svg';
import Care2 from '../../assets/care2.svg';
import phone from '../../assets/call.svg';
import './Care.css';

function PatientCare() {
    return (
        <div className='PatientCare'>
            <div className='Goals'>
                <p className='care-sentence1'>HELPING PATIENTS FROM AROUND THE GLOBE!!</p>
                <h2 className='care-heading'>Patient <span> Caring </span></h2>
                <p className='goal'>Our goal is to deliver quality of care in a courteous, respectful, and <br/> compassionate manner. We hope you will allow us to care for you and <br/>strive to be the first and best choice for healthcare.</p>
                <p className='tickList'> 
                    <img src={Tick} alt="tick" />
                    Stay Updated About Your Health
                </p>
                <p className='tickList'>
                    <img src={Tick} alt="tick" />
                    Check Your Results Online
                </p>
                <p className='tickList'>
                    <img src={Tick} alt="tick" />
                    Manage Your Appointments
                </p>
            </div>
            <div className='careImages'>
                <div className='careImage1'>   
                    <img src={Care1} />
                </div>
                <div className='careImage2'>
                    <img src={Care2} />
                </div>
                <div className='consultation'>
                    <div className='consultationTop'>
                        <img src={phone} alt='phone'/>
                        <p className='free'>Free Consultation</p>
                    </div>
                    <p className='care-bottom'>Consultation with the best</p>
                </div>
            </div>
        </div>
    )
}


export default PatientCare;