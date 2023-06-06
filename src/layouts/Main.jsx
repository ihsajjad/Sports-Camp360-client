import { Outlet } from "react-router-dom";
import NavBar from "../shared/navbar/NavBar";


const Main = () => {
    return (
        <div>
            <NavBar />
            <Outlet />
        </div>
    );
};

export default Main;