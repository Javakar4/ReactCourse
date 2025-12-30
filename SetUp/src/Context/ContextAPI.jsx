import { createContext, useContext, useState } from "react";
export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
    const [isLogin, setIsLogin] = useState(false);
    const [name, setName] = useState("Javakar");
    const [age, setAge] = useState(0);
    const value = { name, setName, age, setAge, isLogin, setIsLogin};
    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    );
};

export const UseAppContext = () => {
    return useContext(AppContext);
};
