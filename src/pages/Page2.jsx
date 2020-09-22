import React from 'react';
import { Link } from 'react-router-dom';

const Page2 = () => {

    return(
        <div>
            <h3>Page 2</h3>
            
            <Link to="/Page3">Navigate to Page 3</Link>
        </div>
    )
}
export default Page2