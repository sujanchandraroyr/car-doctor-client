import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import BookingRow from "./BookingRow";


const Bookings = () => {
    const {user} = useContext(AuthContext);
    const [bookings, setBookings] = useState([]);
    
    const url = `http://localhost:5000/bookings/?email=${user.email}`
    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(data => setBookings(data))
    },[])
    return (
        <div>
            <div className="overflow-x-auto">
  <table className="table">
    
   
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <th></th>
        <th>Name</th>
        <th>Email</th>
        <th>Date</th>
        <th>Price</th>
      </tr>
    
  </table>
  
</div>
{
        bookings.map((booking) => <BookingRow key={booking._id} booking={booking}></BookingRow>)
    }
        </div>
    );
};

export default Bookings;