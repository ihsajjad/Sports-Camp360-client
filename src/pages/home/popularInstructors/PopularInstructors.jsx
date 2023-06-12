import Instructor from "../../../components/Instructor";
import SectionTitle from "../../../components/SectionTitle";
import useInstructorsData from "../../../hooks/useInstructorsData";


const PopularInstructors = () => {
    const [instructors] = useInstructorsData();

    return (
        <div className="md:py-12 py-8">
            <SectionTitle title={"Popular Instructors"} subTitle={"Unlock Your Potential with Seasoned Experts!"}> </SectionTitle>
            <div className="grid md:grid-cols-3 grid-cols-1 gap-8 p-5">
                {
                    instructors.map((instructor, i) => <Instructor key={i} instructor={instructor}/>)
                }
            </div>
        </div>
    );
};

export default PopularInstructors;