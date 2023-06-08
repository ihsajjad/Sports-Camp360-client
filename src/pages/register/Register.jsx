import { FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className="hero min-h-screen bg-base-200 md:py-12 py-5">
            <div className="card w-full max-w-sm shadow-2xl bg-base-100 border-[#fb00d979] border-2">
                <form className="card-body">
                    <h2 className="text-3xl font-bold">Please Register!</h2>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name="name" placeholder="Full Name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text" name="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="password" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Confirm Password</span>
                        </label>
                        <input type="password" name="confirm" placeholder="Confirm Password" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Profile</span>
                        </label>
                        <input type="file" name="confirm" placeholder="Upload profile" className="file-input file-input-bordered file-input-primary w-full max-w-xs" />
                    </div>
                    <p className="label text-red-600">
                        {"error"}
                    </p>
                    <div className="form-control mb-0">
                        <button className="custom-btn-outline">Register</button>
                    </div>
                </form>
                <div className="divider">OR</div>
                <div className='text-center mb-4'>
                    <div className='btn btn-circle text-xl text-[#fb00d9]'><FaGoogle /></div>
                </div>
                <p className="text-center mb-4">Already have an account? please <Link to="/register" className="underline text-[#fb00d9]">Login</Link></p>
            </div>
        </div>
    );
};

export default Register;