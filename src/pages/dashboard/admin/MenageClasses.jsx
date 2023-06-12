import { FaEdit, FaSave, FaTrashAlt } from "react-icons/fa";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import useMenageClasses from "../../../hooks/useMenageClasses";


const MenageClasses = () => {
    const [refetch, classes] = useMenageClasses();
    const [axiosSecure] = useAxiosSecure();

    // Retrieve the number of status
    let approvedClasses = classes.filter(item => item.status === 'Approved');
    let pendingClasses = classes.filter(item => item.status === 'Pending');
    let deniedClasses = classes.filter(item => item.status === 'Denied');

    // Delete class permanently
    const handleDeleteClass = (id, name) => {
        Swal.fire({
            title: 'Are you sure?',
            text: `You are deleting ${name}`,
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

    // Save updated data to the server
    const handleSave = (id) => {
        const selectedValue = document.querySelector(`[name="status_${id}"]`).value;

        Swal.fire({
            title: `Are you sure to change the status?`,
            text: ` ${selectedValue === 'Approved' && "This class will be available for the users" || selectedValue === 'Pending' && "This class will be pending and hide from the website" || selectedValue === 'Denied' && "This class will be denied and  hide from the website"}`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Update it!'
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.patch(`/classes/${id}`, { status: selectedValue }).then(res => {
                    if (res.data.modifiedCount > 0) {
                        refetch();
                        Swal.fire(
                            `${selectedValue}!`,
                            `The Class is ${selectedValue}.`,
                            'success'
                        )
                    }
                })
            }
        })

    };



    return (
        <div className="w-full ml-5">
            <div className="flex justify-between m-5 text-2xl">
                <div>
                    <h2>Total Classes: {classes.length}</h2>
                    <h2>Approved Classes: {approvedClasses.length}</h2>
                </div>
                <div>
                    <h2>Pending Classes: {pendingClasses.length}</h2>
                    <h2>Denied Classes: {deniedClasses.length}</h2>
                </div>
            </div>

            <table className="table table-zebra">
                {/* head */}
                <thead>
                    <tr>
                        <th>SL</th>
                        <th>Image</th>
                        <th>Class</th>
                        <th>Instructor</th>
                        <th>Instructor Email</th>
                        <th>Available Seats</th>
                        <th>Price</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        classes.map((singleClass, i) => <tr key={singleClass._id}>
                            <td>
                                {i + 1}
                            </td>
                            <td>
                                <div className="w-20 h-16">
                                    <img src={singleClass.image} alt="cover photo" className="h-full w-full rounded-lg" />
                                </div>
                            </td>
                            <td>
                                {singleClass.name}
                            </td>
                            <td>
                                {singleClass.instructor}
                            </td>
                            <td>
                                {singleClass.email}
                            </td>
                            <td>
                                {singleClass.availableSeats}
                            </td>
                            <td>${singleClass.price}</td>

                            {/* Displaying status btn conditionally */}
                            <td><div className={`${singleClass?.status === 'Pending' && 'custom-pending-btn' || singleClass?.status === 'Approved' && 'custom-approved-btn' || singleClass?.status === 'Denied' && 'custom-denied-btn'}`}>{singleClass?.status}</div></td>
                            <td className="flex space-x-2">

                                {/* Changing class status */}
                                <select name={`status_${singleClass._id}`} defaultValue={singleClass.status}>
                                    <option value="Approved" selected={singleClass?.status === 'Approved'}>Approved</option>
                                    <option value="Pending" selected={singleClass?.status === 'Pending'}>Pending</option>
                                    <option value="Denied" selected={singleClass?.status === 'Denied'}>Denied</option>
                                </select>

                                {/* delete class handler */}
                                <button onClick={() => handleDeleteClass(singleClass._id, singleClass.name)} className="text-white bg-red-400 hover:bg-red-600 h-8 w-8 rounded-full flex items-center justify-center text-lg"><FaTrashAlt /></button>

                                {/* The button to open modal */}
                                <label htmlFor={`${singleClass._id}`} className="bg-orange-600 hover:bg-orange-700 h-8 w-8 rounded-full text-white  flex items-center justify-center text-lg"><FaEdit /></label>

                                {/* Put this part before </body> tag */}
                                <input type="checkbox" id={`${singleClass._id}`} className="modal-toggle" />
                                <div className="modal">
                                    <div className="modal-box">
                                        <h3 className="font-bold text-lg">Feedback for {singleClass.name}</h3>
                                        <textarea name={`feedback_${singleClass._id}`} id="" cols="30" rows="3" className="textarea w-full mt-2" placeholder="Your class is..."></textarea>
                                        <div  className="modal-action">
                                            <label  onClick={() => handleSave(singleClass._id)}  htmlFor={`${singleClass._id}`} className="btn"> <FaSave /> Save</label>
                                        </div>
                                    </div>
                                </div>

                                {/* Save change handler */}
                                <button onClick={() => handleSave(singleClass._id)} className="text-white bg-green-700 hover:bg-green-800 h-8 w-8 rounded-full flex items-center justify-center text-lg"><FaSave /></button>

                                
                            </td>
                        </tr>)
                    }
                </tbody>
            </table >
        </div >
    );
};

export default MenageClasses;



