import useUser from "@/utils/hooks/useUser";
import React, { createContext, useContext } from "react";

const authCtx = createContext();
export default function AuthProvider({ children }) {
    const data = useUser();
    return (
        <authCtx.Provider value={data}>
            {children}
        </authCtx.Provider>
    );
}
export const useAuth = () => useContext(authCtx);