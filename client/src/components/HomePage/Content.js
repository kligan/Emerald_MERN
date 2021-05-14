import React from 'react';
import {Link} from "react-router-dom";

const Content = () => {
    return (
        <div className="LoginBtn">
            <li>
                <Link to="/contents">Contents</Link>
                <h6>Protected Route: Press login to gain access</h6>
            </li>
        </div>
    );
};

export default Content;