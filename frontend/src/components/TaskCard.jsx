import API from "../api";


function TaskCard({task,refresh}){



const remove=async()=>{


await API.delete(
`/tasks/${task._id}`
);


refresh();


};




const complete=async()=>{


await API.put(

`/tasks/${task._id}`,

{
completed:!task.completed
}

);


refresh();


};



return (

<div className="card">


<h3>
{task.title}
</h3>


<p>
{task.description}
</p>


<p>

Status:

{
task.completed
?
" Completed"
:
" Pending"
}

</p>



<button onClick={complete}>
Toggle
</button>


<button onClick={remove}>
Delete
</button>


</div>

);


}


export default TaskCard;