import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import useMySelectedClasses from "../../../hooks/useMySelectedClasses";


const SelectedClasses = () => {
    const [refetch, selectedClasses] = useMySelectedClasses();

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
                fetch(`http://localhost:5000/selected/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
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
            <h3 className="text-2xl">Total Classes: {selectedClasses.length}</h3>
            <table className="table table-zebra">
                {/* head */}
                <thead>
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
                                <td>
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