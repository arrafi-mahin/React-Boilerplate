import Loading from "@/pages/Loading/Landing";
import { useAuth } from "../store/Context/AuthProvider";
import { Navigate } from "react-router-dom";
import React from 'react';

export default function PrivateRoute({ children }) {
    const { user, isLoading } = useAuth();
    if (isLoading) return <Loading />;
    return user.id ? children : <Navigate to='/auth/signup' />;
}