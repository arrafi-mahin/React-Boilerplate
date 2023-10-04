import axios from 'axios';
import  { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

const useFetch = ({method,endpoint, payload}) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetcher = async () => {        
            const response = await axios.get(`${import.meta.env.SERVER_URL}${endpoint}`);
            return response;
    }
    useEffect(()=>{
        const promise = fetcher();
        toast.promise(promise,{
            loading: () => {setLoading(true); return 'loading...'},
            success: (response) => {setData(response.data); return 'Successful' } ,
            error: (error) => {setError({code:error.code , message:error.message}); return (error.message) } ,
        })
        
    },[]);
    return {data, loading, error};
};

export default useFetch;