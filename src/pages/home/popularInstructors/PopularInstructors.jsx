import Instructor from "../../../components/Instructor";
import SectionTitle from "../../../components/SectionTitle";
import useInstructorsData from "../../../hooks/useInstructorsData";


const PopularInstructors = () => {
    const [data] = useInstructorsData();
    console.log(data);
    const instructors = [
        {
            "image": "https://rb.gy/xa5fu",
            "name": "John Smith",
            "email": "john.smith@example.com",
            "numClasses": 5,
            "classNames": ["Basketball Fundamentals", "Advanced Tennis", "Soccer Skills"],
            "numStudents": 30
        },
        {
            "image": "https://rb.gy/a7ncn",
            "name": "Emily Johnson",
            "email": "emily.johnson@example.com",
            "numClasses": 3,
            "classNames": ["Swimming Basics", "Volleyball Techniques"],
            "numStudents": 20
        },
        {
            "image": "https://rb.gy/fqjit",
            "name": "Michael Davis",
            "email": "michael.davis@example.com",
            "numClasses": 4,
            "classNames": ["Gymnastics for Beginners", "Flexibility Training"],
            "numStudents": 25
        },
        {
            "image": "https://rb.gy/j36x1",
            "name": "Sarah Thompson",
            "email": "sarah.thompson@example.com",
            "numClasses": 2,
            "classNames": ["Yoga for Athletes"],
            "numStudents": 15
        },
        {
            "image": "https://rb.gy/e0i75",
            "name": "David Wilson",
            "email": "david.wilson@example.com",
            "numClasses": 6,
            "classNames": ["Baseball Techniques", "Football Drills"],
            "numStudents": 35
        },
        {
            "image": "https://rb.gy/o5cyh",
            "name": "Jessica Anderson",
            "email": "jessica.anderson@example.com",
            "numClasses": 3,
            "classNames": ["Track and Field Skills", "CrossFit Training"],
            "numStudents": 20
        }
    ]

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