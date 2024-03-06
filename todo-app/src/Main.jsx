import React, { useState } from "react";
import "./App.css";
import ItemList from "./ItemList";

const Main = () => {
  const [item, setItem] = useState("");
  const [list, setList] = useState([]);

  const itemEvent = (e) => {
    setItem(e.target.value);
  };

  const addItem = () => {
    setList((olditems) => {
      return [...olditems, item];
    });
    setItem("");
  };

  const deleteItem = (id) => {
    setList((olditems) => {
      return olditems.filter((arrEl, index) => {
        return index !== id;
      });
    });
  };

  return (
      <div className="container mt-5">
        <div className="justify-content-between d-flex align-items-center">
          <div className="head">
            <h1
              style={{
                color: "#003566",
                fontSize: "2.5rem",
                fontWeight: "bold"
              }}
            >
              ToDo List
            </h1>
            <p>What Needs to be done.</p>
          </div>
          <div className="img" />
        </div>
        <div className="input-group mb-4">
          <input
            type="text"
            className="form-control"
            placeholder="Add item"
            onChange={itemEvent}
            value={item}
            style={{ color: "#1160aa", fontWeight: "500" }}
          />
          <button className="btn btn-primary" type="button" onClick={addItem}>
            Add
          </button>
        </div>
        <div className="listItems">
          <ol style={{ fontSize: "1.1rem" }}>
            {/* <li>{item}</li><hr /> */}
            {list.map((itemVal, index) => {
              return (
                <ItemList
                  key={index}
                  id={index}
                  text={itemVal}
                  onSelect={deleteItem}
                />
              );
            })}
          </ol>
        </div>
      </div>
  );
};
export default Main;
