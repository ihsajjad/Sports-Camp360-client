import useHistory from "../../../hooks/useHistory";
import useClasses from "../../../hooks/useClasses";


const EnrolledClasses = () => {
    const payedClasses = useHistory();
    const [, allClasses] = useClasses();
    
    let enrolledClasses = [];
    
    for(const payedClass of payedClasses){
        const payedClassName = payedClass.payment?.name
        
        const enrolledClass = allClasses.find(singleClass => singleClass?.name === payedClassName);

        
        enrolledClasses.push(enrolledClass);
    }

    return (
        <div className="overflow-x-auto">
            <h3 className="text-3xl text-center my-5">Classes, Those You Have Enrolled</h3>
            <h3 className="text-2xl">Total Classes: {enrolledClasses.length}</h3>
            <table className="table table-zebra">
                {/* head */}
                <thead>
                    <tr>
                        <th>SL</th>
                        <th>Class Name</th>
                        <th>Instructor</th>
                        <th>Price</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        enrolledClasses.map((enrolledClass, i) =>
                            <tr key={enrolledClass?._id}>
                                <th>{i + 1}</th>
                                <td>{enrolledClass?.name}</td>
                                <td>{enrolledClass?.instructor}</td>
                                <td>${enrolledClass?.price}</td>
                                <td>
                                    <div className="custom-approved-btn">Active</div>
                                </td>
                            </tr>)
                    }

                </tbody>
            </table>
        </div>
    );
};

export default EnrolledClasses;