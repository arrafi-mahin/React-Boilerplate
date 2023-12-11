import axios from 'axios';
import  { useState } from 'react';

const useFetch = () => {
    const [loading, setLoading] = useState(false);

    const header = {
        withCredentials: true,
    };

    const get = async (endpoint) =>{
     
        try{
            setLoading(true);
            const response = await axios.get(`${endpoint}`, {headers:header})
            .then(res => res.data)
            .finally(()=> setLoading(false));
            return response;
        }catch(error){
            throw Error(error);
        }
    }
    const post = async (endpoint, payload) =>{
      
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
            const response = await axios.delete(`${endpoint}`,  {headers:header})
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