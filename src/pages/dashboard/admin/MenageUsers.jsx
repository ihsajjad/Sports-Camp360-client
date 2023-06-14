import { FaTrashAlt, FaUserShield } from "react-icons/fa";
import useMenageUsers from "../../../hooks/useMenageUsers";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useState } from "react";

const MenageUsers = () => {
    const [users, refetch] = useMenageUsers();
    const [axiosSecure] = useAxiosSecure();
    const [disabledButtons, setDisabledButtons] = useState([]);

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
    };

    const handleMakeAdmin = (id) => {
        axiosSecure.patch(`/make-admin/${id}`);
        refetch();
        setDisabledButtons((prevState) => [...prevState, `admin-${id}`]);
    };

    const handleMakeInstructor = (id) => {
        axiosSecure.patch(`/make-instructor/${id}`);
        refetch();
        setDisabledButtons((prevState) => [...prevState, `instructor-${id}`]);
    };

    const isButtonDisabled = (type, id) => {
        return disabledButtons.includes(`${type}-${id}`);
    };

    return (
        <div className="overflow-x-auto w-full px-5">
            <h3 className="dashboard-content-title">User Managements</h3>
            {/* Rest of your code */}
            <table className="table table-zebra custom-t-bg">
                {/* head */}
                <thead className="custom-t-head">
                    <tr>
                        <th>SL</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th className="text-center">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, i) => (
                        <tr key={user._id}>
                            <th>{i + 1}</th>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.role}</td>
                            <td className="flex items-center justify-center space-x-2">
                                <button
                                    onClick={() => handleMakeAdmin(user._id)}
                                    className="text-white bg-green-700 hover:bg-green-800 rounded-lg px-3 py-2 flex items-center justify-center text-sm"
                                    disabled={isButtonDisabled('admin', user._id)}
                                >
                                    <FaUserShield className="text-xl mr-2" />
                                    Make Admin
                                </button>
                                <button
                                    onClick={() => handleMakeInstructor(user._id)}
                                    className="text-white bg-purple-700 hover:bg-purple-800 rounded-lg text-sm px-3 py-2 flex items-center justify-center"
                                    disabled={isButtonDisabled('instructor', user._id)}
                                >
                                    <FaTrashAlt className="text-xl mr-2" />
                                    Make Instructor
                                </button>
                                <button
                                    onClick={() => handleDeleteUser(user._id)}
                                    className="text-white bg-red-500 hover:bg-red-600 h-8 w-8 p-2 rounded-full flex items-center justify-center text-lg"
                                >
                                    <FaTrashAlt />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default MenageUsers;
