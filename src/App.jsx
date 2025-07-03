import React , { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SearchResult from "./pages/SearchResult/SearchResults";
import MyBookings from "./pages/Bookings/MyBookings";
import { AppContext } from "./Context/AppContext";
import Vission from './components/Vission/Vission'
import Navbar from './components/Navbar/Navbar';
import Access from "./components/Accessibility/Access";
import Footer from "./components/Footer/Footer";

function App() {
     const [states,setStates] = useState([]);
     const [cities,setCities] = useState([]);
     const [centers,setCenters] = useState([]);
     const [selectedState , setSelectedState] = useState('');
     const [selectedCity, setSelectedCity] = useState(''); 
     const [bookingDetails, setBookingDetails] = React.useState(null);

     console.log('selected state:', selectedState);
     console.log('selected city:', selectedCity);
    return (
        <AppContext.Provider value={{ states, setStates, cities, setCities, centers, setCenters, selectedState, setSelectedState, selectedCity, setSelectedCity , bookingDetails, setBookingDetails }}>
            <Vission/>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/SearchResult" element={<SearchResult />} />
                <Route path="/my-bookings" element={<MyBookings />} />
            </Routes>
            <Access/>
            <Footer/>
        </AppContext.Provider>
    )
}

export default App;