import Location from "../../Components/Location/Location";
import Services from "../Services/Services";
import AboutUs from "./AboutUs";
import Banner from "./Banner";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AboutUs></AboutUs>
            <div className="mt-3">
                <Services></Services>
            </div>
            <div className="my-32">
                <Location></Location>
            </div>
        </div>
    );
};

export default Home;