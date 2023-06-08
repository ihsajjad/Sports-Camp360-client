import { Link } from "react-router-dom";
import SocialSignIn from "../../shared/socialSignIn/SocialSignIn";


const Login = () => {
    return (
        <div className="hero min-h-screen bg-base-200 md:py-12 py-5">
            <div className="card w-full max-w-sm shadow-2xl bg-base-100 border-[#fb00d979] border-2">
                <form className="card-body">
                    <h2 className="text-3xl font-bold">Please Login!</h2>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text" name="email" placeholder="email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="text" name="password" placeholder="password" className="input input-bordered" />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                        <p className="label text-red-600">
                            {"error"}
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