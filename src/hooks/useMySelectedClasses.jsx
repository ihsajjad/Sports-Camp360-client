import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";


const useMySelectedClasses = () => {
    const {user} = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure();

    const {refetch, data: selectedClasses = []} = useQuery({
        queryKey: ['classes', user.email],
        queryFn: async()=>{

            const res = await axiosSecure.get(`selected?email=${user.email}`);
            return res.data;
        } 
    })
    return [refetch, selectedClasses];
};

export default useMySelectedClasses;