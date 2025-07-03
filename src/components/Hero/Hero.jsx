import React from 'react';
import Button from '../Button/Button';
import Searchcard from '../Searchcard/SearchCard';  
import HeroImage from '../../assets/hero_image.svg';
import './Hero.css';
import { useNavigate } from 'react-router-dom';
function HeroSection(){
    const navigate = useNavigate();
    return(

        <div className='heroContainer'>        
        <div className='hero'>
            <div className='titleSection'>
                <p className='heroTitle'>Skip the travel! Find Online <br/>
                <span className='medical'>Medical</span>  <span className='centers'> Centers</span>
                </p>
                <p>
                    Connect instantly with a 24x7 specialist or choose to <br/> video visit a particular doctor.
                </p>
                <Button onClick={() => navigate('/SearchResult')}>Find Centers</Button>
            </div>
            <div>
                <img src={HeroImage} alt='hero image'/>
            </div>
        </div>
           
             <Searchcard bottom={true} />
           
        </div>
    )
}

export default HeroSection;