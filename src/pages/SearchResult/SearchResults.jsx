import React from "react";
import { AppContext } from "../../Context/AppContext";
import promo from '../../assets/addvertise.svg';
import Searchcard from "../../components/Searchcard/SearchCard";
import CenterCard from "../../components/CenterCard/CenterCard";

import Faq from "../../components/FAQ/Faq";

import './SearchResult.css';

function SlotSelection() {
    const { centers , selectedCity , setBookingDetails} = React.useContext(AppContext);
    const [selectedCenter, setSelectedCenter] = React.useState(null);
    // const [bookingDetails, setBookingDetails] = React.useState(null);

    const handleBooking = (details) => {
        const bookingDetails = {
            ...details,
            'Hospital Name': selectedCenter?.name,
            'city': selectedCenter?.city,
            'state': selectedCenter?.state,
            'id': selectedCenter?.id,
        };
        const previousBookings = JSON.parse(localStorage.getItem('bookings')) || [];

        const newDetails = [...previousBookings, bookingDetails]
        localStorage.setItem('bookings', JSON.stringify(newDetails));
        setBookingDetails(bookingDetails);
    }
    return (
        <div className="slot-selection">
            <div className="navbarbottom"></div>
            <Searchcard/>
           <div className="card-container">
            
                <div className="slot-column1">
                    <h1>{centers.length} medical centers available in {selectedCity.toLowerCase()}</h1>
                    <p className="subheading">Book appointments with minimum wait-time & verified doctor details</p>
                    {centers.length>0 ? (
                        centers.map((center) => {
                            const data= {
                                'name': center['Hospital Name'],
                                'city': center['City'],
                                'state': center['State'],
                                'code': center['ZIP Code'],
                                'rating': center['Hospital overall rating'],
                                'id': center['Provider ID'],
                            };
                           return <CenterCard 
                                        key={center['Provider ID']} 
                                        data={data} 
                                        centerSelect={(selectedCenter) => setSelectedCenter(selectedCenter)} 
                                        isSlotSelected={selectedCenter && selectedCenter.id === data.id}
                                        onBooking={handleBooking}
                                        />
                        })
                    ) : (
                        <h2>No centers available</h2>
                    )}
                </div>
                 <div className="slot-column2">
                    <img src={promo} alt="advertisement" />
                 </div>
            </div>

            <Faq/>
            
          
        </div>
    )

}

export default SlotSelection;