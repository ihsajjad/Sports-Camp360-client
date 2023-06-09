import { FaTrashAlt } from "react-icons/fa";
import useMyClasses from "../../../hooks/useMyClasses";
import Swal from "sweetalert2";


const MyClasses = () => {
    const [refetch, myClasses] = useMyClasses();

    const handleDeleteClass = (id) => {
        fetch(`http://localhost:5000/my-classes/${id}`,{
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {

            if(data.deletedCount > 0){
                refetch();
                Swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    title: 'Class deleted successfully',
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
    }

    return (
        <div className="overflow-x-auto">
            <h3 className="text-2xl">Total Classes: {myClasses.length}</h3>
            <table className="table table-zebra">
                {/* head */}
                <thead>
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
                                <td><div className={`bg-${myClass?.status === 'pending' && 'orange' || myClass?.status === 'approved' && 'green' || myClass?.status === 'denied' && 'red'}-600 text-white px-3 py-2 rounded-lg`}>{myClass?.status}</div></td>
                                <td>
                                    <button onClick={()=> handleDeleteClass(myClass._id)} className="text-white bg-red-400 hover:bg-red-600 h-8 w-8 rounded-full flex items-center justify-center text-lg"><FaTrashAlt /></button>
                                </td>
                            </tr>)
                    }

                </tbody>
            </table>
        </div>
    );
};

export default MyClasses;