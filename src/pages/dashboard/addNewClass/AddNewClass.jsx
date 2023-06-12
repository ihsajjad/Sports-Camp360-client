import { useContext, useState } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";


const AddNewClass = () => {
    const {user} = useContext(AuthContext);
    const [error, setError] = useState('');
    const [axiosSecure] = useAxiosSecure();

    const handleAddNew = (event) => {
        event.preventDefault();
        setError('');
        const form = event.target;
        const instructor = user.displayName;
        const email = user.email;
        const name = form.name.value;
        const availableSeats = parseInt(form.availableSeats.value);
        const price = parseFloat(form.price.value);
        const image = form.image.value;
        const status = 'Pending';
        const enrolledStudents = 0;
        const feedback = "";


        // Class data validation
        if(isNaN(price)){
            return setError("Price have to be a Number");
        } else if(price < 0){
            return setError("Price have to be a Positive Number");
        } else if(availableSeats < 0){
            return setError("Available seats can't be a negative number");
        }
        
        // Sending new class data to the server
        axiosSecure.post('/add-new-class', {instructor, email, name, availableSeats, price, image, status, enrolledStudents, feedback})
        .then(res => {
            console.log(res.data)
            if(res.data.acknowledged){
                Swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    title: 'Class added successfully',
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        });
        form.reset();
    }
    return (
        <div className="hero min-h-screen p-5">

            <div className="card md:w-3/4 w-full shadow-2xl bg-base-100 border-[#fb00d979] border-2">
                <h2 className="text-3xl font-bold text-center mt-3">Add A New Class</h2>
                <form onSubmit={handleAddNew} className="card-body">
                    <div className='grid md:grid-cols-2 grid-cols-1 md:gap-3'>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Instructor Name*</span>
                            </label>
                            <input className="input input-bordered" defaultValue={user?.displayName} readOnly/>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email*</span>
                            </label>
                            <input className="input input-bordered" defaultValue={user?.email} readOnly/>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Class Name*</span>
                            </label>
                            <input type="text" name="name" placeholder="Class Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Available Seats*</span>
                            </label>
                            <input type="number" name="availableSeats" placeholder="Available sits" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input type="text" name="price" placeholder="$" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo Url*</span>
                            </label>
                            <input type="url" name="image" placeholder="Photo URL" className="input input-bordered" required />
                        </div>
                    </div>

                    <p className="label text-red-600">
                        {error}
                    </p>

                    <div className="form-control mt-5">
                        <button className="custom-btn-outline">Add Class</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddNewClass;