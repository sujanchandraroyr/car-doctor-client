import { useLoaderData } from "react-router-dom";
import chekimg from "../../assets/images/checkout/checkout.png"
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import toast from "react-hot-toast";


const ChekOut = () => {
    const service = useLoaderData();
// console.log(service)
    const { title, price, _id, img } = service;
    const {user} = useContext(AuthContext);
    // console.log(user)

    const handleChekOutService = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const date = form.date.value;
        const email = user?.email;

        const booking = {
            coustomerName: name,
            img,
            email,
            date,
            service: title,
            sericeId: _id,
            price: price
        }
        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.insertedId){
                toast.success('Booking Successfully!')
            }
        })
        
    }
    return (
        <div>
            <h2>Service: {title}</h2>
            <div className="card w-full bg-base-100 shadow-xl image-full">
                <figure><img src={chekimg} alt="Shoes" /></figure>
                <div className="card-body">

                    <div className="card-actions justify-start">
                        <h2 className="text-white font-bold text-3xl">ChekOut</h2>
                    </div>
                </div>
            </div>

            <div className="hero  bg-base-200">
                <form onSubmit={handleChekOutService} className="card-body">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">First Name:</span>
                            </label>
                            <input type="text" name="name" defaultValue={user?.displayName} placeholder=" name" className="input w-full input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Date:</span>
                            </label>
                            <input type="date" name="date" placeholder="last name" className="input w-full input-bordered" required />

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email:</span>
                            </label>
                            <input type="email" name="email"  defaultValue={user?.email} className="input w-full input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Due Amount:</span>
                            </label>
                            <input type="text" name="dueamount" defaultValue={'$' + price} className="input w-full input-bordered" required />

                        </div>
                    </div>
                    <div className="form-control mt-6">

                        <input className="btn btn-primary btn-block" type="submit" value="Order Now" />
                    </div>
                </form>
            </div>

        </div>
    );
};

export default ChekOut;