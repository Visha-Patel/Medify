import './Footer.css';
import Logo from '../../assets/logo.svg';
import facebook from '../../assets/facebook.svg';
import youtube from '../../assets/youtube.svg';
import twitter from '../../assets/twitter.svg';
import protean from '../../assets/protean.svg';
import { MdArrowForwardIos } from "react-icons/md";


function Footer() {
    return (
        <div className='footer'>
           <div className='footertop'>
                <div className='footer-column1'>
                    <div className='footerlogo'>
                        
                            <img src={Logo} alt="Medify" />
                            <p>Medify</p>
                            
                            
                    </div>
                    <div className='social'>
                        <div>
                            <img src={facebook} alt="facebook" />
                        </div>
                        <div>
                            <img src={youtube} alt="youtube" />
                        </div>
                        <div>
                            <img src={twitter} alt="twitter" />
                        </div>
                        <div>
                            <img src={protean} alt="protean" />
                        </div>
                    </div>
                </div>
                <div className='footer-column2'>
                    <p><MdArrowForwardIos/>About Us</p>
                    <p><MdArrowForwardIos/>Our Pricing</p>
                    <p><MdArrowForwardIos/>Our Gallery</p>
                    <p><MdArrowForwardIos/>Appointment</p>
                    <p><MdArrowForwardIos/>Privacy Policy</p>
                </div>
                <div className='footer-column3'>
                    <p><MdArrowForwardIos/>Orthology</p>
                    <p><MdArrowForwardIos/>Neurology</p>
                    <p><MdArrowForwardIos/>Dental Care</p>
                    <p><MdArrowForwardIos/>Opthalmology</p>
                    <p><MdArrowForwardIos/>Cardiology</p>
                </div>
                <div className='footer-column4'>
                    <p><MdArrowForwardIos/>About Us</p>
                    <p><MdArrowForwardIos/>Our Pricing</p>
                    <p><MdArrowForwardIos/>Our Gallery</p>
                    <p><MdArrowForwardIos/>Appointment</p>
                    <p><MdArrowForwardIos/>Privacy Policy</p>
                </div>
           </div>
          
           <div className='footerbottom'>
            <p>Copyright ©2023 Surya Nursing Home.com. All Rights Reserved</p>
           </div>
        </div>
    )
}

export default Footer;