
import './App.css';
import Header from "./MyComponents/header";
import Footer from "./MyComponents/Footer";
import Todos from "./MyComponents/Todos";
import About from "./MyComponents/About";
import React, { useState,useEffect } from 'react';
import AddTodo from "./MyComponents/AddTodo";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  let init;
  if(localStorage.getItem("todos") === null)
  {
    init = [];
  }
  else{
    init = JSON.parse(localStorage.getItem("todos"));
  }
  let onDelete=(todo)=>{
    settodosarr(todosarr.filter((e)=>{
        return e!==todo;
    }))
    // localStorage.setItem("todos",JSON.stringify(todosarr));
  }

  const addTodo=(title,desc)=>{
     let sno;
     if(todosarr.length===0)
     sno=1;
     else
     sno=todosarr[todosarr.length-1].sno+1;
     const myTodo={
       sno: sno,
       title: title,
       desc: desc
     }
     settodosarr([...todosarr,myTodo]);
     console.log(myTodo);
  }
  const [todosarr, settodosarr] = useState(init);
  useEffect(() => {
    localStorage.setItem("todos",JSON.stringify(todosarr));
    
  }, [todosarr])
  return (
    <>
    <Router>
      <Header title ="Todos List" />
      <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/" render={()=>
          {
            return(
              <>
              <AddTodo addTodo={addTodo}/>
              <Todos todos={todosarr} onDelete={onDelete}/>
              </>
            )
          }}>
          </Route>
        </Switch>
      <Footer/>
    </Router>
    </>
  );
}

export default App;
