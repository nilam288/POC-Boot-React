
import React from 'react';
import {Link} from 'react-router-dom';

const Createprojectbutton=()=>{

    return(

        <React.Fragment>
            {/*<Link to="/addproject" className="nav-item nav-link">
             Create  a project
            </Link>*/}

            <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link to="/addproject" className="nav-link" href="/dashboard">
                            Create  a project
                         </Link>
                    </li>
            </ul>
        </React.Fragment>
    );
}

export default Createprojectbutton;