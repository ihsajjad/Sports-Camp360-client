import { useContext } from "react";
import useClasses from "../../hooks/useClasses";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import SingleClass from "../../components/SingleClass";
import { useLocation, useNavigate } from "react-router-dom";

const AllClasses = () => {
    const {user} = useContext(AuthContext);
    const [, classes] = useClasses();
    const [axiosSecure] = useAxiosSecure();
    const location = useLocation();
    const navigate = useNavigate();

    
    const handleSelect = (item) => {
        if(!user){
            const from = location.pathname;
           return navigate('/login', {state: {from: from}});
        }
        const {image, name, price, instructor} = item;
        
        axiosSecure.post('/selected', {name, image, price, instructor, studentEmail: user.email})
        .then(res => {
            if(res.data.insertedId){
                Swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    title: 'Class successfully selected',
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })

    }

    return (
        <div className="grid md:grid-cols-3 grid-cols-1 gap-8 p-5">
            {
                classes.map((singleClass) => <SingleClass key={singleClass._id} singleClass={singleClass} handleSelect={handleSelect}> </SingleClass>)
            }
        </div>
    );
};

export default AllClasses;