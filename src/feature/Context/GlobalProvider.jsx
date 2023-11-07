import useGlobal from "@/utils/hooks/useGlobal";
import useModal from "@/utils/hooks/useModal";
import React, { createContext, useContext } from "react";

const globalCtx = createContext();
export default function GlobalProvider({ children }) {
    return (
        <globalCtx.Provider value={{ ...useGlobal(), ...useModal() }}>
            {children}
        </globalCtx.Provider>
    );
}
export const useGlobalXtx = () => useContext(globalCtx);