import { Link, useNavigate } from 'react-router-dom'
import SocialSignIn from '../../shared/socialSignIn/SocialSignIn';
import { useContext, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../hooks/useAxiosSecure';


const Register = () => {
    const { createUser } = useContext(AuthContext);
    const [error, setError] = useState();
    const [axiosSecure] = useAxiosSecure();
    const navigate = useNavigate();

    // creating user using email and password
    const handleSignUp = (event) => {
        event.preventDefault();
        setError('');
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        const role = 'student';

        // Password validation
        if (password !== confirm) {
            return setError("password doesn't match");
        } else if (password.length < 6) {
            return setError('password should have minimum 6 Characters');
        } else if (!/^(?=.*[0-9])/.test(password)) {
            return setError('Password should have minimum one Number');
        } else if (!/(?=.*[A-Z])/.test(password)) {
            return setError("Password should have minimum one Capital letter");
        }

        /* else if(!/(?=.*[!@#$%^&*])/.test(password)){
            return setError("Password should have minimum one Special Character");
        } */

        createUser(email, password)
            .then(result => {
                form.reset();
                const createdUser = result.user;
                if (createdUser) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Account created successfully',
                        showConfirmButton: false,
                        timer: 1500
                    })

                    navigate('/', {replace: true})

                    // Taking user data
                    axiosSecure.post('/users', {email, name, role});
                }
            })
            .catch(error => {
                setError(error.message);
            })
    }


    return (
        <div className="hero min-h-screen bg-base-200 md:py-12 p-5">
            <div className="card md:w-2/4 w-full shadow-2xl bg-base-100 border-[#fb00d979] border-2">
                <h2 className="text-3xl font-bold text-center mt-3">Please Register!</h2>
                <form onSubmit={handleSignUp} className="card-body">
                    <div className='grid md:grid-cols-2 grid-cols-1 md:gap-3'>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name*</span>
                            </label>
                            <input type="text" name="name" placeholder="Full Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email*</span>
                            </label>
                            <input type="text" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password*</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Confirm Password*</span>
                            </label>
                            <input type="password" name="confirm" placeholder="Confirm Password" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo Url*</span>
                            </label>
                            <input type="url" name="photo" placeholder="Photo URL" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Address</span>
                            </label>
                            <input type="text" name="address" placeholder="Address" className="input input-bordered" />
                        </div>
                    </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Gender</span>
                            </label>
                            <select name="gender" id="" className="input input-bordered">
                                <option value="female">Female</option>
                                <option value="male">Male</option>
                                <option value="custom" selected>Custom</option>
                            </select>
                        </div>
                    <p className="label text-red-600">
                        {error}
                    </p>
                    <div className="form-control mb-0">
                        <button className="custom-btn-outline">Register</button>
                    </div>
                </form>
                <div className="divider">OR</div>

                {/* Socials sign in including google */}
                <SocialSignIn />

                <p className="text-center mb-4">Already have an account? please <Link to="/login" className="underline text-[#fb00d9]">Login</Link></p>
            </div>
        </div>
    );
};

export default Register;