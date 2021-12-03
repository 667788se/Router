
import '../App.css';
import {Link} from 'react-router-dom' 
function Profile() {
  return (
    <div className="App">
     <h1>this is a profile</h1>
     <button>
       <Link to='/'>Go to Home</Link>
     </button>
    </div>
  );
}

export default Profile
