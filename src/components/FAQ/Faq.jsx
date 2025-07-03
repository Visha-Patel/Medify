import './Faq.css';
import MainImg from '../../assets/faqimg.svg';
import Smile from '../../assets/smile.svg';
import Heart from '../../assets/faqHeart.svg';

function Faq() {
    return (
        <div className='faq'>
            <p className='faq-title'>Get Your Answer</p>
            <h3>Frequently Asked Questions</h3>
            
            <div className='faq-container'>
                <div className='faqLeft'>
                    <div className='smileCard'>
                        <img src={Smile} alt="Smile" className='smile' />
                        <div>
                            <p>84k+</p>
                            <p>Happy Patients</p>
                        </div>
                    </div>
                    <div className='mainImg'>
                        <img src={MainImg} alt="Main" className='mainImg' /> 
                    </div>
                    <div className='heartCard'>
                        <img src={Heart} alt="Heart" className='heart' />
                    </div>
                </div>
                <div className='faqRight'>
                    <p >Why choose our medical for your family? <span>+</span></p>
                    <p>Why we are different from others? <span>+</span></p>
                    <p>Trusted & experience senior care & love <span>+</span></p>
                    <p>How to get appointment for emergency cases? <span>+</span></p>
                </div>  
            </div>
        </div>
    )
}

export default Faq;