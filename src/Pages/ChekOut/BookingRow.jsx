
const BookingRow = ({booking}) => {
    const {service, price, img, email, date, coustomerName} = booking;
    return (
        <div>
            <table className="table">
               

                    <tr>
                        <th>
                            <label>
                                <input type="checkbox" className="checkbox" />
                            </label>
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
                                    <div className="text-sm opacity-50">{}</div>
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
                            <button className="btn btn-ghost btn-xs">details</button>
                        </th>
                    </tr>


                
            </table>
        </div>
    );
};

export default BookingRow;