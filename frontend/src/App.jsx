import {
Routes,
Route,
Navigate
}
from "react-router-dom";


import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";


import {useAuth} from "./context/AuthContext";


function App(){

const {user}=useAuth();


return (

<Routes>

<Route 
path="/"
element={
user?
<Navigate to="/dashboard"/>
:
<Navigate to="/login"/>
}
/>


<Route
path="/login"
element={<Login/>}
/>


<Route
path="/register"
element={<Register/>}
/>


<Route
path="/dashboard"
element={
user?
<Dashboard/>
:
<Navigate to="/login"/>
}
/>


</Routes>

);

}

export default App;