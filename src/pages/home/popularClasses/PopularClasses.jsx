import { Link, useLocation, useNavigate } from "react-router-dom";
import SectionTitle from "../../../components/SectionTitle";
import SingleClass from "../../../components/SingleClass";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";


const PopularClasses = () => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const [axiosSecure] = useAxiosSecure();
    const [classes, setClasses] = useState([]);
    const from = location.pathname;

    useEffect(() => {
        const fetchData = async () => {
            const response = await axiosSecure.get("/classes?limit=6");
            setClasses(response.data);
        }
        fetchData();
    }, [setClasses]);



    const handleSelect = (item) => {

        if (!user) {
            Swal.fire({
                title: 'Can not select without Login',
                text: "You have to login before select",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, Login!'
            }).then((result) => {
                if (result.isConfirmed) {
                    return navigate('/login', { state: { from: from } });
                }
            })
        }
        if(user){
            const { image, name, price, instructor, _id } = item;
        axiosSecure.post('/selected', { name, image, price, instructor, studentEmail: user?.email, classId: _id })
            .then(res => {
                if (res.data.insertedId) {
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
    }


    return (
        <div className="md:py-12 py-8  md:px-20 px-2 bg-[#EBF5F6]">
            <SectionTitle title={"Popular Classes"} subTitle={"Discover the Best Classes at Sports Camp 360"}> </SectionTitle>
            <div className="grid md:grid-cols-3 grid-cols-1 gap-8 p-5">
                {
                    classes.map((singleClass, i) => <SingleClass key={i} singleClass={singleClass} handleSelect={handleSelect} />)
                }
            </div>
            <div className="text-center">
                <Link to="/classes" className="custom-btn-outline">See All Classes</Link>
            </div>
        </div>
    );
};

export default PopularClasses;