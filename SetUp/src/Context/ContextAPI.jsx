// import React, { useState } from 'react'
// // Import createContext
// import { createContext } from "react";
// import Content from "../Components/Content"
// import Demo from "../Components/Demo"

// // Export createContext
// export const uc = createContext();

// function ContextAPI() {
//     const [name, setName] = useState("Javakar");
//     const [age, setAge] = useState(0);

//     const values = {name, setName, age, setAge}

//     return (
//         <uc.Provider value={values}>
//             <Content />
//             <Demo />
//         </uc.Provider>
//     );
// }
// export default ContextAPI


import { createContext, useContext, useState } from "react";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
    const [name, setName] = useState("Javakar");
    const [age, setAge] = useState(0);
    const value = { name, setName, age, setAge};
    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    );
};

export const UseAppContext = () => {
    return useContext(AppContext);
};
