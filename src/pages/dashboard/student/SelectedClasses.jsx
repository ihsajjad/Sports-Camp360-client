import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import useMySelectedClasses from "../../../hooks/useMySelectedClasses";
import { Link } from "react-router-dom";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useTitle from "../../../hooks/useTitle";

const SelectedClasses = () => {
    const [refetch, selectedClasses] = useMySelectedClasses();
    const [axiosSecure] = useAxiosSecure();
    useTitle('Selected Classes');

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
                axiosSecure.delete(`/selected/${id}`)
                .then(res =>{
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
            <h3 className="dashboard-content-title">Take Actions for selected classes</h3>
            <h3 className="dashboard-sub-title">Total Selected: {selectedClasses.length}</h3>
            <table className="table table-zebra custom-t-bg">
                {/* head */}
                <thead className="custom-t-head">
                    <tr>
                        <th>SL</th>
                        <th>Class Name</th>
                        <th>Instructor</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        selectedClasses.map((selectedClass, i) =>
                            <tr key={selectedClass._id}>
                                <th>{i + 1}</th>
                                <td>{selectedClass.name}</td>
                                <td>{selectedClass.instructor}</td>
                                <td>${selectedClass.price}</td>
                                <td className="flex space-x-2">
                                    <Link to="/dashboard/payment" state={{item: selectedClass}} >
                                        <button className="text-white bg-orange-400 hover:bg-orange-600 rounded-lg text-center px-3 py-2">Pay</button>
                                    </Link>

                                    <button onClick={() => handleDeleteClass(selectedClass._id)} className="text-white bg-red-400 hover:bg-red-600 h-8 w-8 rounded-full flex items-center justify-center text-lg"><FaTrashAlt /></button>
                                </td>
                            </tr>)
                    }

                </tbody>
            </table>
        </div>
    );
};

export default SelectedClasses;