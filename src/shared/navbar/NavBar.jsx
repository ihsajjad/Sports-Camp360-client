import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";


const NavBar = () => {
    const { logOut, user, loading } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => {
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Log Out successful',
                    showConfirmButton: false,
                    timer: 1500
                })
            })
            .catch(() => { })
    }

    const menuItems = <>
        <li>
            <NavLink
                to="/"
                className={({ isActive, }) =>
                    isActive
                        ? "activeItem" : ""
                }
            >
                Home
            </NavLink>
        </li>
        <li>
            <NavLink
                to="/instructors"
                className={({ isActive, }) =>
                    isActive
                        ? "activeItem" : ""
                }
            >
                Instructors
            </NavLink>
        </li>
        <li>
            <NavLink
                to="/classes"
                className={({ isActive, }) =>
                    isActive
                        ? "activeItem" : ""
                }
            >
                Classes
            </NavLink>
        </li>
        {
            user
                &&
                <>
                    <li >
                        <NavLink
                            to="/dashboard"
                            className={({ isActive, }) =>
                                isActive
                                    ? "activeItem" : ""
                            }
                        >
                            Dashboard
                        </NavLink>
                    </li>
                </>
        }
    </>

    return (
        <div className="navbar bg-[#3EC5C7] md:px-20 px-2">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 z-10">
                        {menuItems}
                    </ul>
                </div>
                <Link to="/" className="text-2xl font-bold text-slate-600">Sports<span className="sc-color">Camp</span>360</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 md:space-x-3">
                    {menuItems}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user
                        ? <>
                            <button onClick={handleLogOut} className="bg-base-200 px-3 py-2 rounded-lg text-center mr-3 border-2 border-[black] font-bold text-xs">Log Out</button>

                            <div className="tooltip tooltip-bottom" data-tip={`${user?.displayName ? user.displayName : 'Profile'}`}>
                                <img src={`${user?.photoURL ? user.photoURL : "https://i.postimg.cc/d1bNpF8n/user-solid.png"}`} className="h-12 w-12 rounded-full" />
                            </div>
                        </>
                        : <Link to="/login">
                            Login
                        </Link>
                }
            </div>
        </div>
    );
};

export default NavBar;