import { useEffect, useState } from "react";

import ServiceCard from "./ServiceCard";


const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('/services.json')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])

    return (
        <div>
            
            <div className="text-center space-y-5">
                <h2 className="text-orange-500 font-medium">Service</h2>
                <h3 className="text-5xl font-bold">Our Service Area</h3>
                <p className="mb-2">the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which do not look even slightly believable. </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-3">
            {
                services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
            }
            </div>
            <div className="flex justify-center my-3">
            <button className="btn btn-outline btn-error">More Services</button>
            </div>
        </div>
    );
};

export default Services;