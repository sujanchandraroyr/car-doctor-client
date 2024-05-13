import person from '../../assets/images/about_us/person.jpg';
import parts from '../../assets/images/about_us/parts.jpg';


const AboutUs = () => {
    return (
        <div className="hero ">
            <div className="hero-content flex-col lg:flex-row">
                <div className="lg:w-1/2 relative">
                    <img src={person} className=" w-2/3 h-full rounded-lg shadow-2xl" />
                    <img src={parts} className=" w-1/2 h absolute top-1/2 right-10 rounded-lg shadow-2xl" />

                    </div>
                <div className="lg:w-1/2 py-4">
                    <p className='mb-2 text-orange-500 font-bold'>About Us</p>
                    <h1 className="text-5xl font-bold">We are qualified & of experience in this field</h1>
                    <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
                    <p>the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
                    <button className="btn btn-error mt-2">Get more info</button>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;