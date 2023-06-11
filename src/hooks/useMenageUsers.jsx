import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";


const useMenageUsers = () => {
    const [axiosSecure] = useAxiosSecure();
    const {refetch, data: users = []} = useQuery({
        queryKey: ['users'],
        queryFn: async()=>{
            const res = await axiosSecure.get('/menage-users');
            return res.data;
        } 
    })
    
    return [users, refetch];
};

export default useMenageUsers;