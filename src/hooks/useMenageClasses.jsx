import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";


const useMenageClasses = () => {
    const [axiosSecure] = useAxiosSecure();
    const {refetch, data: classes = []} = useQuery({
        queryKey: ['classes'],
        queryFn: async()=>{
            const res = await axiosSecure.get('/menage-classes');
            return res.data;
        } 

    })
    
    return [refetch, classes];
};

export default useMenageClasses;