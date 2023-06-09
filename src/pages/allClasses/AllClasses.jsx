import { useContext } from "react";
import SingleClass from "../../components/SingleClass";
import useClasses from "../../hooks/useClasses";
import { AuthContext } from "../../providers/AuthProvider";

const AllClasses = () => {
    const {user} = useContext(AuthContext);
    const [, classes] = useClasses();

    const handleSelect = (item) => {
        const {image, name, price, instructor} = item;

        const selectedItem = {name, image, price, instructor, studentEmail: user.email};
        
        fetch('http://localhost:5000/selected',{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(selectedItem)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })

    }

    return (
        <div className="grid md:grid-cols-3 grid-cols-1 gap-8 p-5">
            {
                classes.map((singleClass, i) => <SingleClass key={i} singleClass={singleClass} handleSelect={handleSelect}/>)
            }
        </div>
    );
};

export default AllClasses;