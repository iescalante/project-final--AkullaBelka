import React from 'react';
import {Link} from "react-router-dom";

const Homepage = () => {
    return (
        <>
        <h1>Welcome, First Name!</h1>
        <p><Link to="/signout">Sign Out</Link></p>
        <div>
          <ul>
            <li>Profile</li>
            <li>Get a Loan</li>
            <li>Transactions</li>
            <li>Available Rates</li>
          </ul>
        </div>
        </>
    )
    };
export default Homepage;