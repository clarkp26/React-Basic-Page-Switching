import React from 'react';
import { Link } from 'react-router-dom';


const Page3= () => {

    return(
        <div>
            <h3>Page 3</h3>
            <Link to="/Page1">Navigate back to Page 1</Link>
        </div>
    );
};
export default Page3