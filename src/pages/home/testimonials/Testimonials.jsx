import SectionTitle from "../../../components/SectionTitle";
import { FaFacebook, FaInstagram, FaStar, FaTwitter } from "react-icons/fa";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useEffect, useState } from "react";


const Testimonials = () => {
    const [axiosSecure] = useAxiosSecure();
    const [testimonials, setTestimonials] = useState([]);

    useEffect(()=>{
        const fetchData = async() => {
            const response = await axiosSecure.get('/testimonials');
            setTestimonials(response.data);
        }
        fetchData();
    },[]);

    
    return (
        <div className="md:py-12 md:px-20 px-2 bg-[#F0F0F0]">
            <SectionTitle title={"Testimonials"} subTitle={"Hear From Beginner to Champion, Our Students Share Their Stories!"}> </SectionTitle>
            <div className="grid md:grid-cols-3 grid-cols-1 gap-8 p-5 md:px-8">
                {
                    testimonials.map((testimonial, i) => <div key={i} className=" border border-[#fb00d993] rounded-lg flex flex-col items-center space-y-2 p-5 text-center">
                        <img src={testimonial.img} alt="car!" className="h-28 w-28 rounded-full border-2 border-[#fb00d993]" />
                        <h2 className="card-title">{testimonial.name}</h2>
                        <p>{testimonial.description}</p>
                        <div className="flex gap-1">
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                        </div>
                        <div className="flex gap-2 text-xl mt-4">
                            <FaFacebook />
                            <FaInstagram />
                            <FaTwitter />
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Testimonials;