import { Link, Outlet } from 'react-router-dom';
import { FaBars, FaBookmark, FaClipboardList, FaCreditCard, FaEdit, FaHome, FaUserGraduate, FaUsersCog, FaWrench } from 'react-icons/fa';
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import useDashboardAccess from '../hooks/useDashboardAccess';
import Spinner from '../components/Spinner';

const Dashboard = () => {
    const {loading} = useContext(AuthContext);
    const {dashboardUser, isDashboardUserLoading} = useDashboardAccess();

    if(loading || isDashboardUserLoading){
        return <div className="min-h-screen flex items-center justify-center"><Spinner /></div>
    }

    const {isInstructor, isStudent, isAdmin} = dashboardUser;

    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center relative">
                <div className='flex w-full justify-between items-center bg-[#3EC5C7] text-white text-2xl py-2 px-3 lg:flex-row-reverse sticky top-0 z-10'>
                    <div>
                        <label htmlFor="my-drawer-2" className=" drawer-button lg:hidden text-2xl "><FaBars /></label>
                    </div>
                    <div>
                        <h1>{isInstructor && 'Instructor' ||
                            isAdmin && 'Admin' ||
                            isStudent && 'Student'} Dashboard</h1>
                    </div>
                </div>
                <Outlet />


            </div>
            <div className="drawer-side z-20">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 h-full bg-[#3ec5c776] text-base-content">
                    {/* Sidebar content here */}
                    <li><Link to="/"><FaHome />Home</Link></li>
                    {
                        isInstructor &&
                        <>
                            <li><Link to="/dashboard/add-class"><FaEdit />Add New Class</Link></li>
                            <li><Link to="/dashboard/my-classes"><FaClipboardList />My Classes</Link></li>
                        </>
                        ||
                        isStudent &&
                        <>
                            <li><Link to="/dashboard/selected-classes"><FaBookmark />My Selected Classes</Link></li>
                            <li><Link to="/dashboard/enrolled-classes"><FaUserGraduate />My Enrolled Classes</Link></li>
                            <li><Link to="/dashboard/history"><FaCreditCard />My Payment History</Link></li>
                        </>
                        ||
                        isAdmin &&
                        <>
                            <li><Link to="/dashboard/menage-classes"><FaWrench /> Menage Classes</Link></li>
                            <li><Link to="/dashboard/menage-users"><FaUsersCog /> Menage Users</Link></li>
                        </>
                    }
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;