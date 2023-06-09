import { FaTrashAlt } from "react-icons/fa";
import useMyClasses from "../../../hooks/useMyClasses";


const MyClasses = () => {
    const [refetch, myClasses] = useMyClasses();

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
                                <td>
                                    <button className="text-white bg-red-400 hover:bg-red-600 h-8 w-8 rounded-full flex items-center justify-center text-lg"><FaTrashAlt /></button>
                                </td>
                            </tr>)
                    }

                </tbody>
            </table>
        </div>
    );
};

export default MyClasses;