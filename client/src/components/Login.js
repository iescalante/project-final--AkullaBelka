import React from "react";
import Logo from '../assets/akullabelka_logo.svg';
import {useHistory} from "react-router-dom";

const Login = () => {
    const history = useHistory();

    const handleLogin = (ev) => {
        ev.preventDefault();
        history.push("/homepage");
    }
    const handleSignin = (ev)=>{
        ev.preventDefault();
        history.push("/create-user");
    }
    return (
        <>
        <img src={Logo} alt="akullabelka logo"/>
        <form onSubmit ={handleLogin}>
          <label>
              Email:
              <input type="email" name="email"/>
          </label>
          <label>
              Password:
              <input type="password" name="password"/>
          </label>
          <input type="submit" value="Log In!"/>
        </form>
        <div>
            <p>First Time here?</p>
            <button onClick={handleSignin} type="button">Sign In!</button>
        </div>
        
        </>
    )
};

export default Login;