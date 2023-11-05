import { useEffect, useState } from "react";

 
 
const Assignment = () => {
    const [bookings, setBookings] = useState([])
    const url = 'http://localhost:5000/create-assignment'
    useEffect(()=>{
      fetch(url)
      .then(res => res.json())
      .then(data => setBookings(data))
    }, [])
    return (
        <div className="mt-4">
           
        </div>
    );
};

export default Assignment;