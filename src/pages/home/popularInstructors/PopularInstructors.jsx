import { useEffect, useState } from "react";
import Instructor from "../../../components/Instructor";
import SectionTitle from "../../../components/SectionTitle";
import useInstructorsData from "../../../hooks/useInstructorsData";
import useAxiosSecure from "../../../hooks/useAxiosSecure";


const PopularInstructors = () => {
    const [instructors, setInstructors] = useState([]);
    const [axiosSecure] = useAxiosSecure();
    useEffect(()=>{
        const fetchData = async() =>{
            const res = await axiosSecure.get("/instructors?limit=6");
            setInstructors(res.data);
        }
        fetchData();
    },[])

    return (
        <div className="md:py-12 py-8 md:px-20 px-2">
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