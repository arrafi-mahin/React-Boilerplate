import useUser from "@/utils/hooks/useUser";
import React, { createContext, useContext } from "react";

const AuthCtx = createContext();
export default function AuthProvider({ children }) {
    const data = useUser();
    return (
        <AuthCtx.Provider value={data}>
            {children}
        </AuthCtx.Provider>
    );
}
export const useAuth = () => useContext(AuthCtx);