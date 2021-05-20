import React from 'react'
import Todo from "./Todo";

export default function Todos(props) {
   let myStyle={
       minHeight: "52vh"
   }
    return (
        <div className="container" style={myStyle}>
            <h3 className="text-center my-3">To do list</h3>
            <div className="container-fluid d-flex justify-content-center flex-wrap">
            {
                props.todos.length===0?"Nothing to display":
                props.todos.map((todo)=>{
                    return (
                       <Todo todoo={todo} key={todo.sno} ondelete={props.onDelete} />
                    )
                })
            }
            </div>
        </div>
    )
}
