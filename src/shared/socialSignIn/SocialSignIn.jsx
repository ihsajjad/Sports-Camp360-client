import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { FaGoogle } from 'react-icons/fa';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const SocialSignIn = () => {
    const { googleSignIn } = useContext(AuthContext);
    const navigate = useNavigate();

    // Login with Google
    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(() => {
                
            navigate('/', {replace: true})
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Successfully logged in with Google',
                    showConfirmButton: false,
                    timer: 2000
                })
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