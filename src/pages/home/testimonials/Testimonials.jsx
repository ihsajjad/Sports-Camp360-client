import SectionTitle from "../../../components/SectionTitle";


const Testimonials = () => {
    return (
        <div className="md:py-12">
            <SectionTitle title={"Testimonials"} subTitle={"Hear From Beginner to Champion, Our Students Share Their Stories!"}> </SectionTitle>
            <div className="bg-[#fb00d993]">
                <div className=" border border-[#fb00d993] rounded-lg">
                    <div className="h-60  rounded-bl-3xl">
                        <img src={"instructor.image"} alt="car!" className="h-28 w-28 rounded-full" />
                    </div>
                    <div className="p-4 space-y-2 flex flex-col bg-white rounded-tr-3xl">
                        <h2 className="card-title">{"name"}</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, ratione quas cum accusamus repellendus neque facilis! Adipisci non quis cum.</p>
                        <div className="card-actions justify-end mt-auto">
                            <button className="custom-btn-outline">See Classes</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;