import { Link, NavLink } from "react-router-dom";


const NavBar = () => {

    const menuItems = <>
        <li>
            <NavLink
                to="/"
                className={({ isActive, }) =>
                    isActive
                    && "activeItem"
                }
            >
                Home
            </NavLink>
        </li>
        <li>
            <NavLink
                to="/a"
                className={({ isActive, }) =>
                    isActive
                    && "activeItem"
                }
            >
                About
            </NavLink>
        </li>
        <li>
            <NavLink
                to="/c"
                className={({ isActive, }) =>
                    isActive
                    && "activeItem"
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
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
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