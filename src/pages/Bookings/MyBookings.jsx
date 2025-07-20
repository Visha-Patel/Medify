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
    setBookingData(data);
    setFullData(data);
  }, []);
  useEffect(() => {
    localStorage.setItem('bookings', JSON.stringify(bookingData));
  }, [bookingData]);

  const formatdate = (date) => {
    if (!date) return '';
    const DATE = new Date(date);
    if (isNaN(DATE)) return '';
    return format(DATE, 'd MMMM yyyy')
  };

  const handleSearch = () =>{
    if(searchText.trim() === '')
    {
      setBookingData(fulldata);
    }
    else{
      const newData = fulldata.filter((item) => 
        item['Hospital Name'].toLowerCase().includes(searchText.toLowerCase()) 
      );
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
            bookingData.map((item, idx) => {
              const data = {
                'name': item['Hospital Name'],
                'city': item['city'] || item['City'],
                'state': item['state'] || item['State'],
                'time': item['time'] || item['bookingTime'],
                'date': formatdate(item['date'] || item['bookingDate']),
                'id': item['id'] || idx, // fallback to idx if no id
              };
              return <CenterCard data={data} key={data.id} booking={true}/>
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