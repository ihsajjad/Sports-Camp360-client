import SectionTitle from "../../../components/SectionTitle";


const PopularClasses = () => {
    const classes = [
        {
            "image": "https://rb.gy/eqxpn",
            "name": "Basketball Fundamentals",
            "instructor": "John Smith",
            "availableSeats": 15,
            "price": 99,
            "enrolledStudents": 25
        },
        {
            "image": "https://rb.gy/s2uhy",
            "name": "Tennis Techniques",
            "instructor": "Emily Johnson",
            "availableSeats": 10,
            "price": 79,
            "enrolledStudents": 18
        },
        {
            "image": "https://rb.gy/l3y42",
            "name": "Soccer Skills Training",
            "instructor": "Michael Davis",
            "availableSeats": 20,
            "price": 89,
            "enrolledStudents": 30
        },
        {
            "image": "https://rb.gy/hck3u",
            "name": "Swimming Lessons",
            "instructor": "Sarah Thompson",
            "availableSeats": 12,
            "price": 69,
            "enrolledStudents": 15
        },
        {
            "image": "https://rb.gy/drnv4",
            "name": "Gymnastics for Beginners",
            "instructor": "David Wilson",
            "availableSeats": 8,
            "price": 79,
            "enrolledStudents": 12
        },
        {
            "image": "https://rb.gy/dedm9",
            "name": "Volleyball Skills Workshop",
            "instructor": "Jessica Anderson",
            "availableSeats": 15,
            "price": 69,
            "enrolledStudents": 20
        }
    ]

    return (
        <div className="md:py-12 py-8">
            <SectionTitle title={"Popular Classes"} subTitle={"Discover the Best Classes at Sports Camp 360"}> </SectionTitle>
            <div className="grid md:grid-cols-3 grid-cols-1 gap-8 p-5">
                {
                    classes.map((item, i) => <div key={i} className=" border border-[#fb00d993] rounded-lg">
                        <figure><img src={item.image} alt="car!" className="h-60 w-full rounded-t-lg" /></figure>
                        <div className="p-4 space-y-2">
                            <h2 className="card-title">{item.name}</h2>
                            <p><span className="font-bold">Instructor : </span>{item.instructor}</p>
                            <p><span className="font-bold">Available Seats :</span>  {item.availableSeats}</p>
                            <p><span className="font-bold">Enrolled :</span>  {item.enrolledStudents}</p>
                            <p><span className="font-bold">Price :</span> ${item.price}
                            </p>
                            <div className="card-actions justify-end">
                                <button className="custom-btn-outline">Add to Cart</button>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default PopularClasses;