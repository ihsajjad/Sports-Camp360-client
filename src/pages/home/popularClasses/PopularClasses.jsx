import { useLocation, useNavigate } from "react-router-dom";
import SectionTitle from "../../../components/SectionTitle";
import SingleClass from "../../../components/SingleClass";
import useClasses from "../../../hooks/useClasses";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";


const PopularClasses = () => {
    const {user} = useContext(AuthContext);
    const [, classes] = useClasses();
    const navigate = useNavigate();
    const location = useLocation();
    const [axiosSecure] = useAxiosSecure();

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
        <div className="md:py-12 py-8">
            <SectionTitle title={"Popular Classes"} subTitle={"Discover the Best Classes at Sports Camp 360"}> </SectionTitle>
            <div className="grid md:grid-cols-3 grid-cols-1 gap-8 p-5">
                {
                    classes.map((singleClass, i) => <SingleClass key={i} singleClass={singleClass} handleSelect={handleSelect}/>)
                }
            </div>
        </div>
    );
};

export default PopularClasses;