import {useEffect,useState} from "react";

import API from "../api";

import Navbar from "../components/Navbar";

import TaskCard from "../components/TaskCard";


function Dashboard(){


const [tasks,setTasks]=useState([]);

const [title,setTitle]=useState("");

const [description,setDescription]=useState("");



const getTasks=async()=>{


const res =
await API.get("/tasks");


setTasks(res.data);


};



useEffect(()=>{

getTasks();

},[]);





const addTask=async(e)=>{


e.preventDefault();


await API.post("/tasks",{

title,
description

});


setTitle("");

setDescription("");


getTasks();


};





return (

<>

<Navbar/>


<div className="dashboard">


<h1>
My Tasks
</h1>



<form onSubmit={addTask}>


<input

placeholder="Task title"

value={title}

onChange={
e=>setTitle(e.target.value)
}

/>


<input

placeholder="Description"

value={description}

onChange={
e=>setDescription(e.target.value)
}

/>


<button>
Add Task
</button>


</form>



<div>


{

tasks.map(task=>(

<TaskCard

key={task._id}

task={task}

refresh={getTasks}

/>

))


}


</div>


</div>


</>


);


}


export default Dashboard;