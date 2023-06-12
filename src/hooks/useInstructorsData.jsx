import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from "./useAxiosSecure";

const useInstructorsData = () => {
    const [axiosSecure] = useAxiosSecure();
    
    const { refetch, data: instructors = [] } = useQuery({
        queryKey: ['instructors'],
        queryFn: async() =>{

            const res = await axiosSecure.get("/instructors");
            return res.data;
        }
    })

    return [instructors, refetch]
}
    

export default useInstructorsData;