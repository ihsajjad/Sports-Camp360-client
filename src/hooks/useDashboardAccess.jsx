import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";


const useDashboardAccess = () => {
    const { user, loading } = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure();

    const { data: dashboardUser, isLoading: isDashboardUserLoading } = useQuery({
        queryKey: ['dashboardUser', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/dashboard/${user?.email}`);
            return res.data;
        }
    })

    return {dashboardUser, isDashboardUserLoading};
};

export default useDashboardAccess;