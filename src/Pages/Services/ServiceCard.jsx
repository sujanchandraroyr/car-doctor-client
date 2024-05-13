import PropTypes from 'prop-types';

const ServiceCard = ({ service }) => {

    const {img,title,price} = service;

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={img} alt="Service" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                
                <div className="card-actions flex justify-between items-center">
                    <p className="text-orange-500 font-semibold">Price: {price}</p>
                    <button className="btn">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

ServiceCard.propTypes = {
    service:PropTypes.object
}

export default ServiceCard;