import { useContext } from "react";
import SingleClass from "../../components/SingleClass";
import useClasses from "../../hooks/useClasses";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const AllClasses = () => {
    const {user} = useContext(AuthContext);
    const [, classes] = useClasses();
    const [axiosSecure] = useAxiosSecure();

    const handleSelect = (item) => {
        const {image, name, price, instructor} = item;

        const selectedItem = {name, image, price, instructor, studentEmail: user.email};
        
        axiosSecure.post('/selected', {selectedItem})
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
    console.log(classes);

    return (
        <div className="grid md:grid-cols-3 grid-cols-1 gap-8 p-5">
            {
                classes.map((singleClass, i) => <SingleClass key={i} singleClass={singleClass} handleSelect={handleSelect}/>)
            }
        </div>
    );
};

export default AllClasses;