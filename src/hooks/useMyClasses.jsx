import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";


const useMyClasses = () => {
    const {user, loading} = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure();

    const {refetch, data: myClasses = []} = useQuery({
        queryKey: ['classes', user?.email],
        enabled: !loading,
        queryFn: async()=>{
            const res = await axiosSecure.get(`/my-classes?email=${user?.email}`);
            return res.data;
        } 
    })
    
    return [refetch, myClasses];
};

export default useMyClasses;