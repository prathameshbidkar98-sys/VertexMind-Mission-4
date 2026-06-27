import {useAuth} from "../context/AuthContext";


function Navbar(){


const {logout,user}=useAuth();



return (

<nav>


<h2>
Task Manager
</h2>


<div>

<span>
Hi {user?.name}
</span>


<button onClick={logout}>
Logout
</button>


</div>


</nav>

);


}


export default Navbar;