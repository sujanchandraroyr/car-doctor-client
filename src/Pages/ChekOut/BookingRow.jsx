import PropTypes from 'prop-types'


const BookingRow = ({ booking, handleDeleteService, handleBookingConfirm }) => {
    
    const { service, price, img, email, date, coustomerName, _id, status } = booking;
    
    return (
        <div>


            <table className="table w-full">
            <tr>
                <th>
                <button onClick={() => handleDeleteService(_id)} className="btn btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
                </th>
                <td>
                    <div className="flex items-center gap-3">
                        <div className="avatar">
                            <div className=" w-24 rounded h-24">
                                <img src={img} alt="Avatar Tailwind CSS Component" />
                            </div>
                        </div>
                        <div>
                            <div className="font-bold">{service}</div>
                            <div className="text-sm opacity-50">{ }</div>
                        </div>
                    </div>
                </td>
                <td>{coustomerName}</td>
                <td>
                    <p>{email}</p>
                </td>
                <td>{date}</td>
                <td>{price}</td>
                <th>
                {status === 'confirm' ? <p className='text-primary font-bold'>Confirm</p> :
                    <button onClick={() => handleBookingConfirm(_id)} className="btn ">
                    Pelease Confirm
                </button>}
                </th>
            </tr>
        </table>
</div>



    );
};

BookingRow.propTypes = {
    booking: PropTypes.object,
    handleDeleteService: PropTypes.func,
    handleBookingConfirm: PropTypes.func
}
export default BookingRow;