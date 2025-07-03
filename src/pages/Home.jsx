import React, { useEffect,useContext } from 'react'
import { AppContext } from '../Context/AppContext';
import { getStates } from '../api/api';

// import './App.css'

import Hero from '../components/Hero/Hero'
import Searchcard from '../components/Searchcard/SearchCard';
import Slider from '../components/Slider/Slider'; 
import Sepciality from '../components/SpecialitySection/Specialityection';
import DoctorSlider from '../components/Doctors/Doctors';
import PatientCare  from '../components/PatirntCare/PatientCare';
import News from '../components/News/News';
import Family from '../components/Family/Family';
import FAQ from '../components/FAQ/Faq';
import Access from '../components/Accessibility/Access';
import Footer from '../components/Footer/Footer';

function Home() {

  const { setStates} = useContext(AppContext);

  useEffect(()=> {
    async function fetchStates(){
      try{
        const data = await getStates();
        console.log(data);
        setStates(data);
      }catch(err){
        console.error(err); 
      }
    };

    fetchStates();
  },[setStates]);

  return (
    <div>
    
    <Hero/>
    {/* <Searchcard bottom={true} /> */}
    <Slider/>
    <Sepciality/>
    <DoctorSlider/>
    <PatientCare/>
    <News/>
    <Family/>
    <FAQ/>
    {/* <Access/>
    <Footer/> */}
    </div>
  )
}

export default Home;
