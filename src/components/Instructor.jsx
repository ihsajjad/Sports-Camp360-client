import { Link } from "react-router-dom";

const Instructor = ({ instructor }) => {
    const { image, name, email, numClasses, numStudents, classNames, _id } = instructor;

    return (
        <div className=" border border-[#fb00d993] rounded-lg">
            <figure><img src={image} alt="car!" className="h-60 w-full rounded-t-lg" /></figure>
            <div className="p-4 space-y-2">
                <h2 className="card-title">{name}</h2>
                <p><span className="font-bold">Email : </span>{email}</p>
                <p><span className="font-bold">Number of the Classes :</span>  {numClasses}</p>
                <p><span className="font-bold">Number of the Students:</span>  {numStudents}</p>
                <p><span className="font-bold">Popular Classes:</span></p>
                <ul>
                    {
                        classNames?.map((item, i) => <li key={i}>{i + 1}. {item}</li>)
                    }
                </ul>

                <div className="card-actions justify-end">
                    <Link to={`/instructors/${_id}`}>
                        <button className="custom-btn-outline">See Classes</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Instructor;