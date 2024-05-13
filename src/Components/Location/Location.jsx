import { LuCalendarDays } from "react-icons/lu";
import { BiSolidPhoneCall } from "react-icons/bi";
import { MdAddLocationAlt } from "react-icons/md";

const Location = () => {
    return (
        <div className="flex flex-col md:flex-row my-3 md:my-0 justify-around py-16 md:py-20 px-10 md:px-14 bg-black">

            <div className="flex gap-2 items-center">
                <div className="text-white text-4xl"><LuCalendarDays /></div>
                <div>
                    <p className="text-white text-base">We are open monday-friday</p>
                    <h2 className="text-white text-2xl font-bold">7:00 am - 9:00 pm</h2>
                </div>
            </div>

            <div className="flex  gap-2 items-center">
                <div className="text-white text-4xl"><BiSolidPhoneCall /></div>
                <div>
                    <p className="text-white text-base">Have a question?</p>
                    <h2 className="text-white text-2xl font-bold">+2546 251 2658</h2>
                </div>
            </div>

            <div className="flex gap-2 items-center">
                <div className="text-white text-4xl"><MdAddLocationAlt /></div>
                <div>
                    <p className="text-white text-base">Need a repair? our address</p>
                    <h2 className="text-white text-2xl font-bold">Liza Street, New York</h2>
                </div>
            </div>
            
            
        </div>
    );
};

export default Location;