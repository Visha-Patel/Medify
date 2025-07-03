import React  from "react";
import center from '../../assets/center.svg';
import thumb from '../../assets/thumb.svg';
import Button from "../Button/Button";
import './CenterCard.css';
import Booking from '../Slots/Slots';


// const data = {
//     "Hospital Name": "City Hospital",
//     "Address": "123 Main St",
//     "City": "Metropolis",
//     "State": "NY",
//     "ZIP Code": "12345",
//     "Hospital overall rating": 4.5
// };

function CenterCard({data, centerSelect, isSlotSelected, onBooking , booking}) {
    const [showSlots , setShowSlots] = React.useState(false);
    

    const handleClick = () => {
        setShowSlots(!showSlots);
         if (centerSelect) {
            centerSelect(showSlots ? null : data); // Pass data when selecting, null when deselecting
        }

    }

    
    return (
        <div className="center-card-container">
        <div className="center-card">
           
            <div className="center-image">
                <img src={center} alt="Center" />
            </div>
            <div className="center-details">
                <h3>{data['name'] || 'title'}</h3>
                <p className="center-location">{data['city']|| 'city'}, {data['state']|| 'state'}</p>
                <p className="more">Smilessence Center for Advanced Dentistry + 1 more</p>
                <p ><span className="free">FREE</span> <span className="price">₹500</span> <span className="feeDeclaration">Consultation fee at clinic</span> </p>
                
                <div className="rating">
                    <p >
                        <img src={thumb} alt="Rating" />
                        {data['rating'] || 5}
                    </p>
                </div>
            </div>
            <div className={booking ? "bookingCard" :"center-booking"}>
                {booking ? (<div className="bookingDiv" >
                    <p className="booking-time">{data.time}</p>
                    <p className="booking-date">{data.date}</p>
                </div>) :
                (<><p >Available Today</p>
                <Button className="book-button" onClick={handleClick} >Book FREE Center Visit</Button></>)}
            </div>
            
        </div>
        <div className="booking-slots">{isSlotSelected && (<Booking confirmBooking={onBooking}/>)}</div>
        </div>
    )
}

export default CenterCard;