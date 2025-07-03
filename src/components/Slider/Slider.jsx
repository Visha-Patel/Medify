import React from 'react';
import {Swiper,SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import "swiper/css/pagination";
import {Autoplay,Pagination } from 'swiper/modules';
import img_1 from '../../assets/image 1.svg';
import img_2 from '../../assets/image 2.svg';
import './Slider.css'


function Slider(){
    return (
<div className='sliderContainer'>
    <div className='slider'> 
        <Swiper 
            modules={[Pagination]}
            spaceBetween={10}
            slidesPerView={3}
            
            pagination={{ clickable: true }}
            breakpoints={
                        {
                            767: {
                                slidesPerView: 3
                            }
                        }
                    }
        >
            <SwiperSlide className='slide'>
                <img src={img_1} />
            </SwiperSlide>
            <SwiperSlide className='slide'>
                <img src={img_2}/>
            </SwiperSlide>
            <SwiperSlide className='slide'>
                <img src={img_1} />
            </SwiperSlide>
            <SwiperSlide className='slide'>
                <img src={img_2}/>
            </SwiperSlide>
            <SwiperSlide className='slide'>
                <img src={img_1} />
            </SwiperSlide>
            <SwiperSlide className='slide'>
                <img src={img_2}/>
            </SwiperSlide>
        </Swiper>

    </div>
</div>
    )
}


export default Slider;