import React, {useState, useReducer} from "react";
import {initialState, reducer} from "./reducers/TodoReducer";
​
​
export const TodoForm = () => {
​
    const [state, dispatch] = useReducer(reducer, initialState);
    const [input, setInput] = useState("");
​
    
    //console.log(dispatch, state)
​
    const handleChanges = e => {
        setInput(e.target.value)
    }
​
    return(
        <div>
            <form>  <input
              className="todo-input"
              type="text"
              task="newTodo"
              placeholder = "Add To-Do"
              value={newTodo}
              onChange={handleChanges}

                <input
                    className="inputField"
                    type="text"
                    value={input}
                    name="item"
                    onChange={handleChanges}
                />
            </form>
​
            <p>{setInput}</p>
​
            <button onClick={() => 
            dispatch({type: "ADD_ITEM", payload: input})} > 
            Add </button>
​
            <button>Clear Completed</button>
            
        </div>
    )