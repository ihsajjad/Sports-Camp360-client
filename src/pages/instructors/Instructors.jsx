import Instructor from "../../components/Instructor";
import useInstructorsData from "../../hooks/useInstructorsData";
import useTitle from "../../hooks/useTitle";


const Instructors = () => {
    const [instructors] = useInstructorsData();
    useTitle('All Instructors');

    return (
        <div className="md:py-12 py-8">
            <div className="grid md:grid-cols-3 grid-cols-1 gap-8 p-5">
                {
                    instructors.map((instructor, i) => <Instructor key={i} instructor={instructor} />)
                }
            </div>
        </div>
    );
};

export default Instructors;