import { createContext, useContext, useMemo, useState } from "react";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => ({
    id: localStorage.getItem("userId"),
    nombre: localStorage.getItem("userName"),
    apellido: localStorage.getItem("userApellido"),
    correo: localStorage.getItem("userCorreo"),
    rol: localStorage.getItem("userRol"),
  }));

  const login = (data) => {
    localStorage.setItem("userId", data.id);
    localStorage.setItem("userName", data.nombre);
    localStorage.setItem("userApellido", data.apellido);
    localStorage.setItem("userCorreo", data.correo);
    localStorage.setItem("userRol", data.rol);
    setUser(data);
  };

  const logout = () => {
    localStorage.removeItem("userId");
    localStorage.removeItem("userName");
    localStorage.removeItem("userApellido");
    localStorage.removeItem("userCorreo");
    localStorage.removeItem("userRol");
    setUser({ id: null, nombre: null, apellido: null, correo: null, rol: null });
  };

  const value = useMemo(() => ({ user, login, logout }), [user]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
