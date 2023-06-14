import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const useAxiosSecure = () => {
  const { logOut } = useContext(AuthContext);
  const navigate = useNavigate();
  const [loadingAxios, setLoadingAxios] = useState(false);

  const axiosSecure = axios.create({
    baseURL: 'https://sports-camp360-server-ihsajjad.vercel.app',
  });

  useEffect(() => {
    
      axiosSecure.interceptors.request.use((config) => {
        setLoadingAxios(true);
        const token = localStorage.getItem('access-token');
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
      });

      
        axiosSecure.interceptors.response.use(
          (response) =>  response,
          async (error) => {
            setLoadingAxios(false);
            if (error.response && (error.response.status === 401 || error.response.status === 403)) {
              await logOut();
              navigate('/login');
            } 
            return Promise.reject(error);
          }
        );
  }, [ logOut, navigate, axiosSecure]);

  return [axiosSecure, loadingAxios];
};

export default useAxiosSecure;
