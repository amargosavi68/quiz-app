import { Link } from "react-router-dom";

function Nav(props) {
     console.log(props.status)
     return (
          <nav>
               {
                    props.status && 
                    <ul>
                         <Link to='/login'>
                              <li>Dashboard</li>
                         </Link>
                         <Link to='/register'>
                              <li>Add Problem</li>
                         </Link>
                         <Link to='/login'>
                              <li>Logout</li>
                         </Link>
                    </ul>
               }
          </nav>
     );
}

export default Nav;