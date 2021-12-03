import {Link} from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css";

function Navbar(){
return(
<div>
<li>
<Link to="/">Home</Link>
</li>

<li>
<Link to="/aboutus">About us</Link>
</li>
<li>
<Link to="/Profile">profile </Link>
</li>
</div>
);
}

export default Navbar