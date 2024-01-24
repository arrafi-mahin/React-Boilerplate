import React, { createContext, useContext } from 'react';
import useUser from '@/utils/hooks/useUser';

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
