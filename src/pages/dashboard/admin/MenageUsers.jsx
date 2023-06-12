
import { FaTrashAlt, FaUserShield } from "react-icons/fa";
import useMenageUsers from "../../../hooks/useMenageUsers";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useState } from "react";

const MenageUsers = () => {
    const [users, refetch] = useMenageUsers();
    const [axiosSecure] = useAxiosSecure();
    const [disableMakeAdminBtn, setDisableMakeAdminBtn] = useState(false);
    const [disableMakeInstructorBtn, setDisableMakeInstructorBtn] = useState(false);

    // Retrieve the number of user role
    let instructors = users.filter(item => item.role === 'instructor');
    let admins = users.filter(item => item.role === 'admin');
    let students = users.filter(item => item.role === 'student');

    const handleDeleteUser = (id) => {

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/menage-users/${id}`).then(res => {
                    if (res.data.deletedCount > 0) {
                        refetch();
                        Swal.fire(
                            'Deleted!',
                            'An user has been deleted.',
                            'success'
                        )
                    }
                })
            }
        })

    }

    const handleMakeAdmin = (id) =>{
        axiosSecure.patch(`/make-admin/${id}`);
        refetch();
        setDisableMakeAdminBtn(true);
    }
    const handleMakeInstructor = (id) =>{
        axiosSecure.patch(`/make-instructor/${id}`);
        refetch();
        setDisableMakeInstructorBtn(true);
    }

    return (
        <div className="overflow-x-auto w-full px-5">
            <h3 className="text-3xl text-center my-5">User Management</h3>
            <div className="flex justify-between m-5 text-2xl">
                <div>
                    <h2>Total Classes: {users.length}</h2>
                    <h2>Total Admins: {admins.length}</h2>
                </div>
                <div>
                    <h2>Total Instructors: {instructors.length}</h2>
                    <h2>Total Students: {students.length}</h2>
                </div>
            </div>
            <table className="table table-zebra">
                {/* head */}
                <thead>
                    <tr>
                        <th>SL</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th className="text-center">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user, i) =>
                            <tr key={user._id}>
                                <th>{i + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.role}</td>
                                <td className="flex items-center justify-center space-x-2">

                                    <button onClick={() => handleMakeAdmin(user._id)} className="text-white bg-green-700 hover:bg-green-800 rounded-lg text-xl px-3 flex items-center justify-center text-sm" disabled={disableMakeAdminBtn}><FaUserShield  className="text-xl"/>Make Admin</button>

                                    <button onClick={() => handleMakeInstructor(user._id)} className="text-white bg-purple-700 hover:bg-purple-800 rounded-lg text-xl px-3 flex items-center justify-center text-sm" disabled={disableMakeInstructorBtn}><FaTrashAlt className="text-xl"/>Make Instructor</button>

                                    <button onClick={() => handleDeleteUser(user._id)} className="text-white bg-red-500 hover:bg-red-600 h-8 w-8 p-2 rounded-full flex items-center justify-center text-lg"><FaTrashAlt /></button>

                                   
                                </td>
                            </tr>)
                    }

                </tbody>
            </table>
        </div>
    );
};

export default MenageUsers;