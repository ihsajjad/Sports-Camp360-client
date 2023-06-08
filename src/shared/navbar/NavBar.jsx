import { Link, NavLink } from "react-router-dom";


const NavBar = () => {

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
                to="/login"
                className={({ isActive, }) =>
                    isActive
                    ? "activeItem" : ""
                }
            >
                Login
            </NavLink>
        </li>
        <li>
            <NavLink
                to="/"
                className={({ isActive, }) =>
                    isActive
                    ? "activeItem" : ""
                }
            >
                Contact
            </NavLink>
        </li>
    </>
    return (
        <div className="navbar bg-base-100">
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
                <ul className="menu menu-horizontal px-1">
                    {menuItems}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn">Button</a>
            </div>
        </div>
    );
};

export default NavBar;