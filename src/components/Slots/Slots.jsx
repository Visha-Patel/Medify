import React, { useState } from "react";
import { Box, Button, Typography, Grid, IconButton, Stack , Chip , Modal } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import { format, add, isEqual, startOfDay } from 'date-fns'
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

function dateList(){
  const Today = startOfDay(new Date());
  const dates = [];

  for(let i =0;i<7;i++){
    dates.push(add(Today, { days: i }));
  }

  return dates;
}


const SlotBooking = ({confirmBooking}) => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedSlot, setSelectedSlot] = useState("");
  const [datesList , setDatesList] = useState(dateList());
  const [open,setOpen] = useState(false);
  const [email, setEmail] = useState('');

  const today = startOfDay(new Date());

  const customDate = (day) => {
    if(isEqual(day,today)){
      return 'Today';
    }
    else if(isEqual(day,add(today,{days:1}))){
      return 'Tomorrow';
    }
    else{
      return format(day ,"E ,d   LLL");
    }
  };
  
  const slots = {
    Morning: ["11:30 AM"],
    Afternoon: ["12:00 PM", "12:30 PM", "01:30 PM", "02:00 PM", "02:30 PM"],
    Evening: ["06:00 PM", "06:30 PM", "07:00 PM", "07:30 PM"],
  };

  const totalSlots = slots.Afternoon.length + slots.Evening.length + slots.Morning.length;

 const handleDateSelect = (day) => {
    setSelectedDate(day);
    
  };

  const handleSlotSelect = (slot) => {
    setSelectedSlot(slot);
    setOpen(true)
    // if (selectedDate) {
    //   // Pass updated booking details to parent
    //   const bookingDetails = {
    //     date: datesList.find((d) => d.day === selectedDate)?.date || selectedDate,
    //     time: slot,
    //   };
    //   confirmBooking(bookingDetails);
    // }
  };


    const handleConfirm = () =>{
      const bookingDetails = {
        date:  selectedDate,
        time: selectedSlot,
        email: email,
      };
      confirmBooking(bookingDetails);
      setOpen(false);
      alert('Booking Confirmed');
    }
    
    
    return (
    <Box sx={{ p: 4, maxWidth: '100%', mx: "auto" }}>
      {/* Date Navigation */}
      <Box
        sx={{
          mb: 3,
        }}
      >

        <Swiper
          modules={[Navigation]}
          navigation={true}
          slidesPerView={3}
          spaceBetween={10}
          style={{
            "--swiper-navigation-color": "rgba(42, 167, 255, 1)",
            "--swiper-navigation-size": "20px",
          }}
        >

          {datesList.map((date,idx) => (
            <SwiperSlide key={idx}>
              <Box onClick={()=> handleDateSelect(date)} sx={{textAlign: 'center'}}>
                <Typography variant="subtitle1" component="p" fontWeight={isEqual(selectedDate, date) ? "bold" : "normal"}>
                  {customDate(date)}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: isEqual(selectedDate, date) ? "green" : "gray"  }}
                >
                  {totalSlots} Slots Available
                </Typography>
                {isEqual(selectedDate, date) && (
                  <Box
                    sx={{
                      width: "80%",
                      height: "3px",
                      backgroundColor: "rgba(42, 167, 255, 1)",
                      mx: "auto",
                      mt: 1,
                    }}
                  />
                )}
              
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>

        

      {/* Time Slots */}
      
      <Stack>
        {slots.Morning.length > 0 && (
          <Stack 
            direction='row' 
            alignItems="center"
            px={{ xs: 0, md: 6 }}
            flexWrap={"wrap"} 
            sx={{mb: 2}}
          >
            <Typography >
              Morning
            </Typography>
            {slots.Morning.map((slot) => (
              <Chip 
                  label={slot}
                  onClick={() => handleSlotSelect(slot)}
                  variant={selectedSlot === slot ? "filled" :"outlined"}
                  backgroundColor= {selectedSlot === slot ? "rgba(42, 167, 255, 1)" : "white"}
                  sx={{fontSize: { xs: 10, md: 14 }, ml: 5, borderColor: 'rgba(42, 167, 255, 1)' , borderRadius: '5px'}}
                />
            ))}
          </Stack>
        )}

        {slots.Afternoon.length > 0 && (
          <Stack 
            direction='row' 
            alignItems="center"
            px={{ xs: 0, md: 6 }}
            flexWrap={"wrap"} 
            sx={{mb: 2}}
            >
            <Typography >
              Afternoon
            </Typography>
            {slots.Afternoon.map((slot) => (
              <Chip 
                  label={slot}
                  onClick={() => handleSlotSelect(slot)}
                  variant='outlined'
                  backgroundColor= {selectedSlot === slot ? "rgba(42, 167, 255, 1)" : "white"}
                  sx={{fontSize: { xs: 10, md: 14 }, ml: 5, borderColor: 'rgba(42, 167, 255, 1)' , borderRadius: '5px'}}
                />
            ))}
          </Stack>
        )}

        {slots.Evening.length > 0 && (
          <Stack 
            direction='row' 
            alignItems="center"
            px={{ xs: 0, md: 6 }}
            flexWrap={"wrap"}
            sx={{mb: 2}}
            
          >
            <Typography fontSize={14}>
              Evening
            </Typography>
            {slots.Evening.map((slot) => (
              <Chip 
                  label={slot}
                  variant={selectedSlot === slot ? "filled" :"outlined"}
                  backgroundColor= {selectedSlot === slot ? "rgba(42, 167, 255, 1)" : "white"}
                  onClick={() => handleSlotSelect(slot)}
                  sx={{fontSize: { xs: 10, md: 14 }, ml: 5, borderColor: 'rgba(42, 167, 255, 1)' , borderRadius: '5px' , }}
                />
            ))}
          </Stack>
        )}
      </Stack>

        <Modal open={open} onClose={() =>setOpen(false)}>
          <Box 
            backgroundColor= 'white'
            height= 'max-content'
            width= 'max-content'
            sx={{p: 2 , position: 'absolute' , top: '30%', left: '30%'}}
            >
              <Typography variant="h5" component="h2" gutterBottom>
                Confirm Booking
              </Typography>
              <Typography variant="body1" component='p' gutterBottom >
                 Please enter your email to confirm the appointment for {' '}
                 <Typography component='span' fontWeight='bold'>
                  {selectedSlot}
                 </Typography> {' '} 
                 on {' '}
                 <Typography  component='span' fontWeight='bold'>
                   {format(selectedDate, "E, d LLL yyyy")}
                 </Typography>
              </Typography>
              <Box 
                component="form" 
                sx={{ mt: 2 }}
                onSubmit= {() => {
                    if(!email.trim()) {
                      alert('Email is required');
                      return;
                    }
                    handleConfirm();
                } } 
                >
                  <input
                  type="email"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                   placeholder="Enter your email"
                  style={{
                   width: "80%",
                   padding: "8px",
                   marginBottom: "16px",
                   borderRadius: "4px",
                   border: "1px solid #ccc",
                  }}
                   />
           
              <Stack direction='row' spacing={2}>
                <Button 
                type="submit"
                variant="contained"
                
                > 
                  Confirm
                </Button>
                <Button 
                variant="outlined"
                onClick={() => setOpen(false)}
                >
                  Cancel
                </Button>
              </Stack>
            </Box>
          </Box>
        </Modal>
    </Box>
  );
};

export default SlotBooking;
