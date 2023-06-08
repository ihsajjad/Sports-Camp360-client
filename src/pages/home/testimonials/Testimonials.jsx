import SectionTitle from "../../../components/SectionTitle";
import { FaFacebook, FaInstagram, FaStar, FaTwitter } from "react-icons/fa";


const Testimonials = () => {
    const testimonials = [
        {
            name: "Emma Johnson",
            img: "https://rb.gy/8q7wm",
            description: "Sports Camp 360 has been an incredible experience for me! I have learned so much and made lifelong friendships. Highly recommended!",
        },
        {
            name: "Daniel Rodriguez",
            img: "https://rb.gy/59p4j",
            description: "Attending Sports Camp 360 was the best decision I ever made. The coaches are exceptional, and the training has taken my skills to the next level.",
        },
        {
            name: "Sophia Chen",
            img: "https://rb.gy/tyefa",
            description: "Sports Camp 360 provided me with opportunities to explore various sports and discover my true passion. It's been an unforgettable journey!",
        },
    ];

    return (
        <div className="md:py-12">
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