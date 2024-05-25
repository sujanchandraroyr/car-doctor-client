import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import BookingRow from "./BookingRow";
import toast from "react-hot-toast";
import axios from "axios";


const Bookings = () => {
    const {user} = useContext(AuthContext);
    const [bookings, setBookings] = useState([]);
    
    const url = `http://localhost:5000/bookings/?email=${user.email}`
    
    useEffect(() => {
        axios.get(url, {withCredentials: true})
    .then(res => {
        setBookings(res.data)
    })
        // fetch(url)
        // .then(res => res.json())
        // .then(data => setBookings(data))
    },[url])

    const handleDeleteService = (id) => {

      const procced = confirm('Are you sure delete service')
      

      if(procced){
          fetch(`http://localhost:5000/bookings/${id}`, {
          method: 'DELETE',
          
      })
      .then(res => res.json())
      .then(data => {
         
          if(data.deletedCount > 0){
              toast.success('Delete Service Successfully ')
              const remaing = bookings.filter(booking => booking._id !== id)
              
              setBookings(remaing)
          }
      })
      }

  }

  const handleBookingConfirm = (id) => {
    fetch(`http://localhost:5000/bookings/${id}`, {
        method: 'PATCH',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({status: 'confirm'})
    })
    .then(res => res.json())
    .then(data => {
        console.log(data)
        if(data.modifiedCount > 0){
            const remaining = bookings.filter(booking => booking._id !== id);
            const update = bookings.find(booking => booking._id === id);
            update.status = 'confirm'
            const newBookings = [update, ...remaining]
            setBookings(newBookings)
        }
    })
  }

    return (
        <div>
            <div className="overflow-x-auto">
  <table className="table w-full">
    
   
      <tr>
        <th></th>
        <th></th>
        <th>Service</th>
        <th>Coustomer Name</th>
        <th>Email</th>
        <th>Date</th>
        <th>Price</th>
        <th></th>
      </tr>
    
  </table>
  
</div>
{
        bookings.map((booking) => <BookingRow key={booking._id} booking={booking} handleDeleteService={handleDeleteService} handleBookingConfirm={handleBookingConfirm}></BookingRow>)
    }
        </div>
    );
};

export default Bookings;