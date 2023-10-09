import axios from 'axios';
import  { useState } from 'react';

const useFetch = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const get = async (endpoint) =>{
        try{
            setLoading(true);
            const response = await axios.get(`${endpoint}`)
            .then(res => {setData(res.data); return res.data})
            .finally(()=> setLoading(false));
            return response;
        }catch(error){
            setError(error);
        }
    }
    const post = async (endpoint, payload) =>{
        const header = {
            withCredentials: true,
        };
        try{
            setLoading(true);
            const response = await axios.post(`${import.meta.env.SERVER_URL}${endpoint}`,{payload}, {headers:header})
            .then(res => {setData(res.data); return res.data})
            .finally(()=> setLoading(false));
            return response;
        }catch(error){
            setError(error);
        }
    }
    
    return {data, loading, error, post, get };
};

export default useFetch;