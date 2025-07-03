import React from 'react';
import {Swiper,SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import "swiper/css/pagination";
import {Autoplay,Pagination } from 'swiper/modules';
import './Doctor.css';
import Doc1 from '../../assets/doctor1.svg';
import Doc2 from '../../assets/doctor2.svg';
import Doc3 from '../../assets/doctor3.svg';
import Doc4 from '../../assets/doc-1.png';
import Doc5 from '../../assets/doc-5.png';
import Doc6 from '../../assets/doc-img.jpg';

const DoctorData = [
    {image: Doc1 , label: 'Dr. Ahmad Khan' , speciality: 'Neurologist'},
    {image: Doc2 , label: 'Dr. Heena Sachdevan' , speciality: 'Orthopadics'},
    {image: Doc3 , label: 'Dr. Ankur Sharma' , speciality: 'Medicine'},
    {image: Doc4 , label: 'Dr. Lesly Hulls' , speciality: 'Medicine'},
    {image: Doc5 , label: 'Dr. Ahmad Stevens' , speciality: 'Neurologist'},
    
]

function DoctorSlider(){
    return (
        <div className='doctorContainer'>
            <p className='title'>Our Medical Specialist</p>
            <div className='doctorSlider'>
                <Swiper
                    modules={[Autoplay,Pagination]}
                    centeredSlides={true}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    loop={true}
                    spaceBetween={20}
                    slidesPerView={4}
                    // centeredSlides={true}
                    pagination={{ clickable: true }}
                >
                    {DoctorData.map((item,idx) => (
                        <SwiperSlide className='custom-slide' key={idx}>
                            <div><img src={item.image} alt={item.label}/></div>
                            <h3>{item.label}</h3>
                            <p>{item.speciality}</p>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
}


export default DoctorSlider;