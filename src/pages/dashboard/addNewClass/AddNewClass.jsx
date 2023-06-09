import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import Swal from "sweetalert2";


const AddNewClass = () => {
    const {user} = useContext(AuthContext);

    const handleAddNew = (event) => {
        event.preventDefault();
        const form = event.target;
        const instructor = user.displayName;
        const email = user.email;
        const name = form.name.value;
        const availableSeats = parseInt(form.availableSeats.value);
        const price = parseFloat(form.price.value);
        const image = form.image.value;

        const newClass = {instructor, email, name, availableSeats, price, image};

        fetch('http://localhost:5000/add-new-class', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newClass)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.acknowledged){
                Swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    title: 'Class added successfully',
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        });
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
                                <span className="label-text">AvailableSeats*</span>
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

                    <div className="form-control mt-5">
                        <button className="custom-btn-outline">Add New</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddNewClass;