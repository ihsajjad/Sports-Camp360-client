import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";


const useMyClasses = () => {
    const {user} = useContext(AuthContext);
    const {refetch, data: myClasses = []} = useQuery({
        queryKey: ['classes', user.email],
        queryFn: async()=>{
            const res = await fetch(`http://localhost:5000/classes?email=${user.email}`);
            return res.json();
        } 
    })
    return [refetch, myClasses];
};

export default useMyClasses;