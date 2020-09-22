import React from 'react';
import { Link } from 'react-router-dom';

const Page1 = () => {

    return(
        <div>
            <h3>Page 1</h3>
            <Link to="/Page2">Navigate to Page 2</Link>
        </div>
    )
}
export default Page1