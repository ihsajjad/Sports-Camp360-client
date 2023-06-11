
import useHistory from "../../../hooks/useHistory";


const History = () => {
    const enrolledClasses = useHistory();

    console.log(enrolledClasses);
    return (
        <div className="overflow-x-auto">
            <h3 className="text-2xl">Total Enrolled: {enrolledClasses.length}</h3>
            <table className="table table-zebra">
                {/* head */}
                <thead>
                    <tr>
                        <th>SL</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Date</th>
                        <th>TransitionId</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        enrolledClasses.map((enrolledClass, i) =>
                            <tr key={enrolledClass._id}>
                                <th>{i + 1}</th>
                                <td>{enrolledClass.payment?.name}</td>
                                <td>${enrolledClass.payment?.price}</td>
                                <td>{enrolledClass?.payment?.date}</td>
                                <td>{enrolledClass.payment?.transitionId}</td>
                            </tr>)
                    }

                </tbody>
            </table>
        </div>
    );
};

export default History;