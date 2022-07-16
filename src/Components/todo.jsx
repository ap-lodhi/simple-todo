import React from "react";
import { useState } from "react";
import List from "./List";


const Todo=()=>{
    const [inputList , setInputList]=useState("")
    const [item, setItem] =useState([]);
    const itemEvent =(e)=>{
        setInputList(e.target.value)
    }
    const handleAdd=()=>{

        setItem((old)=>{
            return[...old, inputList]
        })
        setInputList("");
    }
    
    const deleteitem = (id)=>{
        console.log('deleted')
        setItem((old)=>{
            return old.filter((ele, ind)=>{
                return ind !== id;
            });
        });
    }
    return(
        <>
        <div className="main_div">
        <div className="center_div">
            <br />
            <p>You can add your task here </p>
            <h1>TODO List</h1>
            <br />
            <input type='text' placeholder='Add a Items' onChange={itemEvent}
            value={inputList}/>
            <button onClick={handleAdd}>+</button>

            <ol>
                {item.map((val, ind)=>{
                  return  <List  text={val}
                                key={ind}
                                id={ind}
                                onSelect={deleteitem}
                  />
                } )}
                
            </ol>
        </div>
        
        </div>
        </>
    )
}

export default Todo;