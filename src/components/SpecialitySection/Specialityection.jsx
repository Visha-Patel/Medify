import React from 'react';
import Dentistry from '../../assets/Drugstore.svg';
import Stethoscope from '../../assets/Stethoscope.svg';
import Heart from '../../assets/Heart Rate.svg'
import Monitor from '../../assets/Heart Rate Monitor.svg';
import Tube from '../../assets/Blood Sample.svg';
import Immune from '../../assets/Immune.svg';
import Lab from '../../assets/Drugstore.svg';
import XRay from '../../assets/X-Ray.svg';
import Button from '../Button/Button';
import './Speciality.css';

const specialities = [
  { icon: Dentistry, label: "Dentistry" },
  { icon: Stethoscope, label: "Primary Care" },
  { icon: Heart, label: "Cardiology" },
  { icon: Monitor, label: "MRI Resonance" },
  { icon: Tube, label: "Blood Tests" },
  { icon: Immune, label: "Piscologist" },
  { icon: Lab, label: "Laboratory" },
  { icon: XRay, label: "X-Ray" },
];

export default function SpecialitySection(){
    return (
        <div className='specialitySection'>
            <h2>Find by specialisation</h2>
            <div className='specialityBottom'>
                {specialities.map((item) => (
                    <div className='specialityCard'>
                        <img src={item.icon} alt={item.label}/>
                        <p>{item.label}</p>
                    </div>
                ))}
            </div>
            <Button>View All</Button>

        </div>
    )
}