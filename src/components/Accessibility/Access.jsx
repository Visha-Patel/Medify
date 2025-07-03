import './Access.css';

import Button from '../Button/Button';
import Google from '../../assets/google_play.svg';
import Apple from '../../assets/apple_store.svg';
import Phone from '../../assets/download.png';
import Arrow from '../../assets/download-arrow.png'

function Access() {
    return (
        <div className='access'>
            <div className='accessLeft'>
                <img src={Phone} alt="phone" className='phone' />
                <img src={Arrow} alt="arrow" className='arrow' height={'25%'} />
            </div>
            <div className='accessRight'>
                
                    <p className='header'>Download the <br/> <span>Medify</span> App</p>
                    <p className='subHeader'>Get the link to download the app</p>
                    <div>
                        <div className='countryCode'>
                            <div><p>+91</p></div>
                            <input type="text" placeholder='Enter your phone number' className='input' />
                        </div>
                        
                        <Button>Send SMS</Button>
                    </div>
                    <div className='download'>
                        <img src={Google} alt="google" className='google' />
                        <img src={Apple} alt="apple" className='apple' />
                    </div>
                
            </div>
        </div>
    )
}

export default Access;