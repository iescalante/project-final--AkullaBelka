import React from 'react';
import {useHistory} from "react-router-dom";

const Signout = () => {
    const history = useHistory();
    setTimeout(()=>{
        history.push("/")
    },3000);
    return (
        <>
        <h1>
          Thank you for using AkullaBelka!
        </h1>
        <h1>
          See you soon!
        </h1>
        </>
    )
};

export default Signout;