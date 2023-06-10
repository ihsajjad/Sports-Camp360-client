
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    const isInstructor = false;
    const isStudent = true;
    const isAdmin = false;

    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">

                <Outlet />

                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
                    {/* Sidebar content here */}
                    {
                        isInstructor &&
                        <>
                            <li><Link to="/dashboard/add-class">Add New Class</Link></li>
                            <li><Link to="/dashboard/my-classes">My Classes</Link></li>
                        </>
                        ||
                        isStudent &&
                        <>
                            <li><Link to="/dashboard/selected-classes">Selected Classes</Link></li>
                            <li><Link to="/dashboard/enrolled-classes">Enrolled Classes</Link></li>
                            <li><Link to="/dashboard/history">History</Link></li>
                        </>
                        ||
                        isAdmin &&
                        <>
                            <li><Link to="/dashboard/selected-class">Selected Classes</Link></li>
                            <li><Link to="/dashboard/enrolled-class">Enrolled Classes</Link></li>
                        </>
                    }
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;