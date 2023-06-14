import { Outlet } from "react-router-dom";
import NavBar from "../shared/navbar/NavBar";
import Footer from "../shared/footer/Footer";


const Main = () => {
    return (
        <>
            <NavBar />
            <div className="min-h-screen">
                <Outlet />
            </div>
            <Footer />
        </>
    );
};

export default Main;