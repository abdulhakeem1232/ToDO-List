import './App.css'
import { useState,useRef,useEffect } from 'react';

function App() {
  const inputRef=useRef(null)
  const [toDoList,setToDoList]=useState([])
  const [toDO,setToDO]=useState('')
  useEffect(()=>{
    inputRef.current.focus()
  })
  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Not OneDay, it's Day One 📊 </h2>
      </div>
      <div className="input">
        <input type="text" placeholder=" Add New One..." value={toDO} onChange={(e)=>setToDO(e.target.value)} ref={inputRef}/>
        <i className="fas fa-plus" onClick={()=>{if(toDO.trim()!=''){setToDoList([...toDoList,{id:Date.now(),text:toDO,status:false}]);setToDO('')}}}></i>
      </div>
      <div className="todos">
        {toDoList.map((list)=>{
        return (<div className="todo">
          <div className="left">
            <input type="checkbox" value={list.status} onChange={(e)=>{
              setToDoList(toDoList.filter((obj)=>{
                if(list.id==obj.id){
                  obj.status=e.target.checked
                }
                return obj
              }))
            }}/>
            <p>{list.text}</p>
          </div>
          <div className="right">
            <i className="fas fa-times" onClick={()=>{
              setToDoList(toDoList.filter((obj)=>{
                if(obj.id==list.id){
                  return null
                }
                return obj
              }))
            }}></i>
          </div>
        </div>)
         })}
      </div>
    </div>
  );
}

export default App;
