import SectionTitle from "../../../components/SectionTitle";


const PopularInstructors = () => {
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
            "image": "instructor4.jpg",
            "name": "Sarah Thompson",
            "email": "sarah.thompson@example.com",
            "numClasses": 2,
            "classNames": ["Yoga for Athletes"],
            "numStudents": 15
        },
        {
            "image": "instructor5.jpg",
            "name": "David Wilson",
            "email": "david.wilson@example.com",
            "numClasses": 6,
            "classNames": ["Baseball Techniques", "Football Drills"],
            "numStudents": 35
        },
        {
            "image": "instructor6.jpg",
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
            <div className="grid md:grid-cols-3 grid-cols-1 gap-5 p-5">
                {
                    instructors.map((instructor, i) => <div key={i} className=" border border-[#fb00d993] rounded-lg">
                        <figure><img src={instructor.image} alt="car!" className="h-60 w-full"/></figure>
                        <div className="p-4 space-y-2">
                            <h2 className="card-title">{instructor.name}</h2>
                            <p><span className="font-bold">Email : </span>{instructor.email}</p>
                            <p><span className="font-bold">Number of the Classes :</span>  {instructor.numClasses}</p>
                            <p><span className="font-bold">Number of the Students:</span>  {instructor.numStudents}</p>
                            <p><span className="font-bold">Name of the Classes:</span>
                                <ul>
                                    {
                                        instructor.classNames.map((item, i) => <li key={i}>{i + 1}. {item}</li>)
                                    }
                                </ul>
                            </p>
                            <div className="card-actions justify-end">
                                <button className="custom-btn-outline">See Classes</button>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default PopularInstructors;