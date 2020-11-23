import React from "react";

export const AppContext = React.createContext(null);

export const AppProvider = ({children}) => {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [userData, setUserData] = React.useState({currentUser:{}});
    const [loanConfirmation, setLoanConfirmation] = React.useState(null);
    const [paymentConfirmation, setPaymentConfirmation] = React.useState(null);

    return (
        <AppContext.Provider value={{ 
            email,
            setEmail,
            password, 
            setPassword,
            userData,
            setUserData,
            loanConfirmation,
            setLoanConfirmation,
            paymentConfirmation,
            setPaymentConfirmation
        }}>
          {children}
        </AppContext.Provider>
    )
};