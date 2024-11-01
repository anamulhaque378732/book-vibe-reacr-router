import { Link } from "react-router-dom";
import banner from '../assets/banner-background-png.webp'

const Banner = () => {
    return (
        <div className="hero bg-base-200 lg:px-20 lg:my-5 p-10  rounded-lg min-h-scr">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img
                    src={banner}
                    className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl my-10 font-bold">  Books to freshen up to your BooksSelf</h1>

                    <Link to={'/listedBook'} className="btn  text-xl font-medium mt-5   border-1 mr-1    bg-green-600 rounded-lg">View The List</Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;