import SingleClass from "../../components/SingleClass";
import useClasses from "../../hooks/useClasses";

const AllClasses = () => {
    const [, classes] = useClasses();

    return (
        <div className="grid md:grid-cols-3 grid-cols-1 gap-8 p-5">
            {
                classes.map((singleClass, i) => <SingleClass key={i} singleClass={singleClass} />)
            }
        </div>
    );
};

export default AllClasses;