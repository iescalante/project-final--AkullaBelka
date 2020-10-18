import React from "react";
import Logo from '../assets/akullabelka_logo.svg';

const CreateUser = () => {
    const handleSubmit = (ev) => {
        ev.preventDefault();
        alert("The form was submitted");
    }
    return (
        <>
        <h1> First thing first!</h1>
        <img src={Logo} alt="akullabelka logo"/>
        <form onSubmit={handleSubmit}>
          <label>
              First Name:
              <input type="text" name="first-name"/>
          </label>
          <label>
              Last Name:
              <input type="text" name="last-name"/>
          </label>
          <label>
              Email:
              <input type="email" name="email"/>
          </label>
          <label>
              Password:
              <input type="password" name="password"/>
          </label>
          <label>
              Lender?
              <div>
                <label for="true">Yes</label>
                <input type="radio" name="lender-type" value="true"/>
              </div>
              <div>
                <label for="false">No</label>
                <input type="radio" name="lender-type" value="false"/>
              </div>
          </label>
          <label>
              Starting Score:
              <input type="number" name="score" value="500"/>
          </label>
          <label>
              Loan Limit ($):
              <input type="number" name="loan-limit" value="400"/>
          </label>
          <label>
              Total Loaned ($):
              <input type="number" name="total-loaned" value="0"/>
          </label>
          <input type="submit" value="Create Account"/>
        </form>
        </>
    )
};

export default CreateUser;