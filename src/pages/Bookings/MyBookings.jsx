import { AppContext } from "../../Context/AppContext";
import './Bookings.css';
import Button from "../../components/Button/Button";
import CenterCard from "../../components/CenterCard/CenterCard";
import React,{useEffect,useState} from 'react';
import promo from '../../assets/addvertise.svg';
import { format } from 'date-fns'


function MyBookings() {
  const [bookingData, setBookingData] = useState([]);
  const [fulldata,setFullData] = useState([]);
  const [searchText , setSearchText] = useState('');  

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('bookings')) || [];
    // console.log(data);
    setBookingData(data);
    setFullData(data);
    // console.log('Booking data:', data);
  }, []);

  const formatdate = (date) =>{
    const DATE = new Date(date);
    return format(DATE, 'd MMMM yyyy')
  };

  const handleSearch = () =>{

    if(searchText.trim() === '')
    {
      
      setBookingData(fulldata);
      console.log('fulldata',fulldata)
      console.log('Booking data:', bookingData);
    }
    else{
      const newData = fulldata.filter((item) => 
      item['Hospital Name'].toLowerCase().includes(searchText.toLowerCase()) 
      );
      console.log('newData',newData)
      setBookingData(newData);
    }

  } ;

  return (
    <div className="my-bookings">

    <div className="headerDiv">
      <div className="my-bookings-header">
         <h1>My Bookings</h1>
      </div>
      <div className="hospitalSearch">
        <input 
          type="text" 
          placeholder="Search for hospitals..." 
          value={searchText} 
          onChange={(e) => setSearchText(e.target.value)} 
          className="hospitalSearchInput" 

          />

        <Button onClick={handleSearch}>Search</Button>
      </div>
    </div>
    <div className="bookings-container">
      <div className="bookingsColumn1">
        {bookingData.length > 0 ? (
          bookingData.map((item) => {
            const data = {
              'name': item['Hospital Name'],
              'city': item['city'],
              'state': item['state'],
              'time': item['time'],
              'date': formatdate(item['date']),
              'id': item['id'],
            };
           return <CenterCard data={data} key={item.id} booking={true}/>
          })
        ) : (
          <h1>No bookings available</h1>
        )}
      </div>
      <div className="bookingsColumn2">
        <img src={promo} alt="advertisement" className="advertisement" />
      </div>
      
    </div>
    </div>
  );
}   

export default MyBookings;