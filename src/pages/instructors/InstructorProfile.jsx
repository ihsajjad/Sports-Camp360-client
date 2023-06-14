import { useParams } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useEffect, useState } from "react";


const InstructorProfile = () => {
    const {id} = useParams();
    const [axiosSecure] = useAxiosSecure();
    const [instructor, setInstructor] = useState({});

    useEffect(()=>{
        const fetchData = async () => {
            try {
              const response = await axiosSecure.get(`/instructors/${id}`);
              setInstructor(response.data);
            } catch (error) {
              console.error("Error fetching instructor:", error);
            }
          };
      
          fetchData();
    },[id]);


    const {classNames, email, image, name, numClasses, numStudents} = instructor;
    

    return (
        <div className="w-full md:my-12 my-4">
            <div className="w-5/6 mx-auto space-y-3">
                <img src={image} alt="" className=" w-full rounded-lg" />
                <h3 className="text-3xl font-bold text-slate-700">Name: {name}</h3>
                <h4><span className="font-bold">Email: </span>{email}</h4>
                <p><span className="font-bold">Total Classes: </span>{numClasses}</p>
                <p><span className="font-bold">Total Students: </span>{numStudents}</p>
                <ol> 
                    <h4 className="font-bold mb-2">Popular Classes:</h4>
                    {
                        classNames?.map((item, i)=> <li key={i}><span className="font-bold">{i + 1}. </span>{item}</li>)
                    }
                </ol>
            </div>
        </div>
    );
};

export default InstructorProfile;