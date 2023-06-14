import { FaTrashAlt } from "react-icons/fa";
import useMyClasses from "../../../hooks/useMyClasses";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useTitle from "../../../hooks/useTitle";


const MyClasses = () => {
    const [refetch, myClasses] = useMyClasses();
    const [axiosSecure] = useAxiosSecure();

    useTitle('My Classes');

    const handleDeleteClass = (id) => {

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
                axiosSecure.delete(`/my-classes/${id}`).then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })

    }

    return (
        <div className="overflow-x-auto">

            <h3 className="dashboard-content-title">Classes, Those You Have Published</h3>
            <h3 className="dashboard-sub-title">Total Classes: {myClasses.length}</h3>
            <table className="table table-zebra custom-t-bg">
                {/* head */}
                <thead className="custom-t-head">
                    <tr>
                        <th>SL</th>
                        <th>Name</th>
                        <th>Enrolled</th>
                        <th>Available Sits</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        myClasses.map((myClass, i) =>
                            <tr key={myClass._id}>
                                <th>{i + 1}</th>
                                <td>{myClass.name}</td>
                                <td>{myClass.enrolledStudents}</td>
                                <td>{myClass.availableSeats}</td>
                                <td><div className={`${myClass?.status === 'Pending' && 'custom-pending-btn' || myClass?.status === 'Approved' && 'custom-approved-btn' || myClass?.status === 'Denied' && 'custom-denied-btn'}`}>{myClass?.status}</div></td>
                                <td>
                                    <button onClick={() => handleDeleteClass(myClass._id)} className="text-white bg-red-400 hover:bg-red-600 h-8 w-8 rounded-full flex items-center justify-center text-lg"><FaTrashAlt /></button>
                                </td>
                            </tr>)
                    }

                </tbody>
            </table>
        </div>
    );
};

export default MyClasses;