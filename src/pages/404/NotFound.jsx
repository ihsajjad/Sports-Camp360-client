import { Link, useRouteError } from "react-router-dom";
import bg from '../../assets/vecteezy_a-white-robot-searching-for-a-404-error-with-a-torch-light_8249822_419.mp4'

const NotFound = () => {
    const error = useRouteError();
    return (
        <div className="relative">
            <video className="w-full h-full object-cover" autoPlay loop muted>
                <source src={bg} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="absolute bg-opacity-25 inset-0 bg-black flex items-center justify-center w-full h-full">
                <div className="text-center font-bold text-yellow-800">
                    <p className="text-5xl">{error?.statusText}</p>
                    <p className="text-3xl">{error?.error?.message}</p>
                    <p className="text-2xl">Back to <Link to="/" className="sc-color">Home</Link></p>
                </div>
            </div>
        </div>
    );
};

export default NotFound;