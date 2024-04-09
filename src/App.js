import React, { useState } from "react";
import "./App.css";
import ToDoList from "./ToDoList";

function App(props) {
  const [inputList, setInputList] = useState("");

  const [items, setItems] = useState([]);

  const listOfItems = () => {
    setItems((oldItems) => {
      return [...oldItems, inputList];
    });
    setInputList("");
  };

  const deleteItems = (id) => {
    console.log("deleted");

    setItems((oldItems) =>{
      return oldItems.filter((arrElement,index) =>{
        return index !== id;
      });
    });
  };

  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1>ToDo List</h1>
          <br />
          <input
          style={{fontWeight:"bolder"}}
            type="text"
            placeholder="Add a Item"
            value={inputList}
            onChange={(e) => {
              setInputList(e.target.value);
            }}
          />
          <button onClick={listOfItems}>+</button>

          <ol>
            {items.map((itemVal, index) => {
              return (
                <ToDoList
                  key={index}
                  id={index}
                  text={itemVal}
                  onSelect={deleteItems}
                />
              );
            })}
          </ol>
        </div>
      </div>
    </>
  );
}

export default App;
