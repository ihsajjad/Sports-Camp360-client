import { Link, useLocation, useNavigate } from "react-router-dom";
import SocialSignIn from "../../shared/socialSignIn/SocialSignIn";
import Swal from "sweetalert2";
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { FaEye, FaEyeSlash } from "react-icons/fa";


const Login = () => {
    const {signIn} = useContext(AuthContext);
    const [error, setError] = useState();
    const [show, setShow] = useState(true);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from;

    // creating user using email and password
    const handleSignIn = (event) => {
        event.preventDefault();
        setError('');
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
        .then(result => {
            form.reset();
            const loggedUser = result.user;
            if(loggedUser){
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Sign In Successful',
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
            navigate(from, {replace: true})
        })
        .catch(error => {
            setError(error.message);
        })
    }
    

    return (
        <div className="hero min-h-screen bg-base-200 md:py-12 py-5">
            <div className="card w-full max-w-sm shadow-2xl bg-base-100 border-[#fb00d979] border-2">
                <form onSubmit={handleSignIn} className="card-body">
                    <h2 className="text-3xl font-bold">Please Login!</h2>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="email" className="input input-bordered" />
                    </div>
                    <div className="form-control relative">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type={`${show ?"password" : "text"}`} name="password" placeholder="password" className="input input-bordered" />

                        <span onClick={()=>setShow(!show)} className="absolute right-4 top-[52px] text-xl">{show ? <FaEye /> : <FaEyeSlash />}</span>

                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                        <p className="label text-red-600">
                            {error}
                        </p>
                    </div>
                    <div className="form-control">
                        <button className="custom-btn-outline">Login</button>
                    </div>
                </form>

                <div className="divider">OR</div>
                <SocialSignIn />

                <p className="text-center mb-4">New to SC360? please <Link to="/register" className="underline text-[#fb00d9]">Register</Link></p>
            </div>
        </div>
    );
};

export default Login;