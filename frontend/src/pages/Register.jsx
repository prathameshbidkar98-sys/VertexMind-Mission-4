import {useState} from "react";
import API from "../api";

import {useNavigate} from "react-router-dom";

import {useAuth} from "../context/AuthContext";


function Register(){


const [data,setData]=useState({});


const navigate=useNavigate();


const {login}=useAuth();



const submit=async(e)=>{


e.preventDefault();


const res =
await API.post(
"/auth/register",
data
);


login(res.data);


navigate("/dashboard");


};



return (

<div className="form">


<h1>Register</h1>


<form onSubmit={submit}>


<input
placeholder="Name"
onChange={
e=>setData({...data,name:e.target.value})
}
/>


<input
placeholder="Email"
onChange={
e=>setData({...data,email:e.target.value})
}
/>


<input
type="password"
placeholder="Password"
onChange={
e=>setData({...data,password:e.target.value})
}
/>


<button>
Create Account
</button>


</form>

</div>

);


}


export default Register;