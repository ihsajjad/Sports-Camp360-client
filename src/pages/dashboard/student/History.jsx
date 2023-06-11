
import useHistory from "../../../hooks/useHistory";


const History = () => {
    const enrolledClasses = useHistory();
    const total = enrolledClasses.reduce((sum, enrolledClass) => sum + enrolledClass?.payment?.price, 0);

    return (
        <div className="overflow-x-auto">
            <h3 className="text-3xl text-center my-5">Your Payment History</h3>
            <div className="flex justify-between">
            <h3 className="text-2xl inline-block">Total Enrolled: {enrolledClasses.length}</h3>
            <h3 className="text-2xl inline-block">Total Cost: ${total.toFixed(2)}</h3>
            </div>
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