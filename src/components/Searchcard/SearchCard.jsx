import React  from 'react';
import { AppContext } from '../../Context/AppContext';
import { useNavigate } from 'react-router-dom';
import Button from '../Button/Button';
import DropDown from '../Dropdown/Dropdown';
import { getStates, getCities ,getCenters } from '../../api/api'; 
import Search from '../../assets/Search.svg';
import ServiceCard from '../ServicesCard/ServicesCard';
import Doctor from '../../assets/Doctor.svg';
import DrugStore from '../../assets/Drugstore.svg';
import Hospital from '../../assets/Hospital.svg';
import Capsule from '../../assets/Capsule.svg';
import Ambulance from '../../assets/Ambulance.svg';
import './SearchCard.css';


const assests = [Doctor,DrugStore,Hospital,Capsule,Ambulance];

function Searchcard({bottom}){
    const {setCenters,selectedCity, selectedState, setSelectedState, setSelectedCity } = React.useContext(AppContext);
    const navigate = useNavigate();
    

  const handleSubmit = async () => {
    try {
        // Fetch centers based on the selected city and state
        const data = await getCenters(selectedCity, selectedState);
        setCenters(data);
        console.log(data);

        // Navigate to the slot selection page
        navigate('/SearchResult');
    } catch (err) {
        console.error(err);
    }
};

    return(
        <div className={bottom ? 'searchCard' : 'searchCard2'}>
            <div className='searchOptions'>
                <DropDown placeholder='states' fetchData={getStates} setFunction={setSelectedState} id='state'/>
                <DropDown placeholder='cities' fetchData={getCities} state={selectedState} setFunction={setSelectedCity} id='city' />
                <Button type='submit' onClick={handleSubmit} id='searchBtn'>
                    <img src={Search}/>
                    Search
                </Button>
            </div>
            {bottom &&<div className='serviceCards'>
                <p className='helptext'>You may be looking for</p>
                <div className='services'>
                    {assests.map( (item) => <ServiceCard image={item}/>)}
                </div>
            </div>}
        </div>
    )
}

export default Searchcard;