import React, { useState } from 'react';

export default function AddTodo(props) {

    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    
    let submit=(e)=>{
       e.preventDefault();
       if(!title || !desc)
       alert("Title and desc cannot be empty!!");
       else
       props.addTodo(title,desc);
       setTitle("");
       setDesc("");
   }
    return (
        <div className="container">
            <h3 className="text-center">Add your List</h3>
            <form onSubmit={submit}>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Enter the title</label>
                    <input type="text" className="form-control" onChange={(e)=>{setTitle(e.target.value)}} value={title} id="exampleInputEmail1" aria-describedby="emailHelp"/>
                        {/* <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small> */}
                </div>
                    <div className="form-group my-2">
                        <label htmlFor="exampleInputPassword1">Enter description</label>
                        <input type="text" value={desc} onChange={(e)=>{setDesc(e.target.value)}} className="form-control" id="exampleInputPassword1"/>
                    </div>
                <button type="submit" className="btn btn-primary">Add Todo</button>
            </form>
        </div>
    )
}
