import axios from 'axios';
import  { useState } from 'react';

const useFetch = () => {
    const [loading, setLoading] = useState(false);

    const get = async (endpoint) =>{
        try{
            setLoading(true);
            const response = await axios.get(`${endpoint}`)
            .then(res => res.data)
            .finally(()=> setLoading(false));
            return response;
        }catch(error){
            throw Error(error);
        }
    }
    const post = async (endpoint, payload) =>{
        const header = {
            withCredentials: true,
        };
        try{
            setLoading(true);
            const response = await axios.post(`${import.meta.env.SERVER_URL}${endpoint}`,{payload}, {headers:header})
            .then(res => res.data)
            .finally(()=> setLoading(false));
            return response;
        }catch(error){
            throw Error(error);
        }
    }
    
    const patch = async (endpoint, payload) =>{
        const header = {
            withCredentials: true,
        };
        try{
            setLoading(true);
            const response = await axios.patch(`${import.meta.env.SERVER_URL}${endpoint}`,{payload}, {headers:header})
            .then(res => res.data)
            .finally(()=> setLoading(false));
            return response;
        }catch(error){
            throw Error(error);
        }
    }

    const remove = async (endpoint) =>{
        try{
            setLoading(true);
            const response = await axios.delete(`${endpoint}`)
            .then(res => res.data)
            .finally(()=> setLoading(false));
            return response;
        }catch(error){
            throw Error(error);
        }
    }
    return {loading, get, post, patch, remove };
};

export default useFetch;