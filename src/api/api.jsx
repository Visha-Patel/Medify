import axios from 'axios';

const EndPoint = 'https://meddata-backend.onrender.com'

export async function getStates(){
    try {
        const response = await axios.get(`${EndPoint}/states`);
        // console.log(response.data);
        return response.data
    }
    catch(error){
        console.error(error);
    }
}

export async function getCities(stateName){
    try{
        const response = await axios.get(`${EndPoint}/cities/${stateName}`)
        console.log(response.data);
        return response.data;
    }catch(error){
        console.error(error);
    }
}


export async function getCenters(cityName,stateName){
    try{
        const response = await axios.get(`${EndPoint}/data?state=${stateName}&city=${cityName}`);
        console.log(response.data);
        return response.data;
    }catch(error){
        console.error(error);
    }
}