import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";


const useClasses = () => {
    const [axiosSecure] = useAxiosSecure();
    const {refetch, data: classes = []} = useQuery({
        queryKey: ['classes'],
        queryFn: async()=>{
            const res = await axiosSecure("/classes");
            return res.data;
        } 

    })
    
    return [refetch, classes];
};

export default useClasses;