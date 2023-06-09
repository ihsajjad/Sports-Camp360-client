import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { useQuery } from "@tanstack/react-query";


const useMySelectedClasses = () => {
    const {user} = useContext(AuthContext);
    const token = localStorage.getItem('sports-access-token');
    
    const {refetch, data: selectedClasses = []} = useQuery({
        queryKey: ['classes', user?.email],
        queryFn: async()=>{
            const res = await fetch(`http://localhost:5000/selected?email=${user?.email}`,{
                method: 'GET',
                headers: {
                    authorization: `Bearer ${token}`
                }
            });

            return res.json();
        } 
    })
    return [refetch, selectedClasses];
};

export default useMySelectedClasses;