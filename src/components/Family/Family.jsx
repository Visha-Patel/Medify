import './Family.css';
import Doc from '../../assets/doc.svg';
import Happy from '../../assets/happy.svg';
import Lab from '../../assets/Drugstore yelllow.svg';
import Hospital from '../../assets/Hospital red.svg';

function Family() {
    return (
        <div className='family'>
            <div className='familyRight'>
                <p className='familyHeader'>CARING FOR THE HEALTH OF YOU AND YOUR FAMILY.</p>
                <h3>Our Families</h3>
                <p className='familyDescription'>We will work with you to develop individualised care plans, including management of chronic diseases. If we cannot assist, we can provide referrals or advice about the type of practitioner you require. We treat all enquiries sensitively and in the strictest confidence.</p>
            </div>
            <div className='familyLeft'>
                <div className='family-column1'>
                   
                        <div className='happy'>
                            <div><img src={Happy} alt="Happy patients" /></div>
                            <h3>5000+</h3>
                            <p>Happy Patients</p>
                        </div>
                        <div className='lab'>
                            <div><img src={Lab} alt="Lab" className='lab-img' /></div>
                            <h3>1000+</h3>
                            <p>Laboratories</p>
                        </div>
                    
                </div>
                <div className='family-column2'>
                   
                        <div className='hospital'>
                            <div><img src={Hospital} alt="Hospital" /></div>
                            <h3>200+</h3>
                            <p>Hospitals</p>
                        </div>
                        <div className='doc'>
                            <div><img src={Doc} alt="Doctor" /></div>
                            <h3>700+</h3>
                            <p>Expert Doctors</p>
                        </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Family;