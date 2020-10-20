import React from "react";

export const AppContext = React.createContext(null);

export const AppProvider = ({children}) => {
//Login page
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [userData, setUserData] = React.useState({currentUser:{}});

    return (
        <AppContext.Provider value={{ email,setEmail,password, setPassword,userData, setUserData}}>
            {children}
        </AppContext.Provider>
    )
};