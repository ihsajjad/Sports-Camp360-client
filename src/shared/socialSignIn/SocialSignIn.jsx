import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { FaGoogle } from 'react-icons/fa';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import useAxiosSecure from '../../hooks/useAxiosSecure';

const SocialSignIn = () => {
    const { googleSignIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const [axiosSecure] = useAxiosSecure();

    // Login with Google
    const handleGoogleSignIn = () => {
        googleSignIn()
            .then((result) => {
                const loggedUser = result.user;
                console.log(loggedUser);
                
            
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Successfully logged in with Google',
                    showConfirmButton: false,
                    timer: 2000
                })

                // Taking user data
                axiosSecure.post('/users', {email: loggedUser.email, name: loggedUser.displayName, role : ''});
                
                navigate('/', {replace: true})
                
            })
            .catch(() => { })
    }

    return (
        <div className='text-center mb-4'>
            <div onClick={handleGoogleSignIn} className='btn btn-circle text-xl text-[#fb00d9]'><FaGoogle /></div>
        </div>
    );
};

export default SocialSignIn;