import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";


const useMyClasses = () => {
    const {user} = useContext(AuthContext);
    const token = localStorage.getItem('sports-access-token');
    
    const {refetch, data: myClasses = []} = useQuery({
        queryKey: ['classes', user.email],
        queryFn: async()=>{
            const res = await fetch(`http://localhost:5000/classes?email=${user.email}`,{
                method: 'GET',
                headers: {
                    authorization: `Bearer ${token}`
                }
            });
            
            return res.json();
        } 
    })
    return [refetch, myClasses];
};

export default useMyClasses;