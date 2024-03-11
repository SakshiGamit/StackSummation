import React, { useState } from "react";

const ToDo = () => {
    const [inputdata, setInputData] = useState("");

    const [items, setItems] = useState([]);
    const addItem = () => {
        if (!inputdata) {
            alert("Add some task.");
        } else if (inputdata && !toggleSub) {
            setItems(
                items.map((elem) => {
                    if (elem.id === isEditItem) {
                        return { ...elem, name: inputdata };
                    }
                    return elem;
                })
            );
            setToggleSub(true);

            setInputData("");

            setIsEditItem(null);
        } else {
            const allInputData = {
                id: new Date().getTime().toString(),
                name: inputdata,
            };
            setItems([...items, allInputData]);
            setInputData("");
        }
    };
    //edit item
    const [toggleSub, setToggleSub] = useState(true); //for 1st edit button besides dustbin
    const [isEditItem, setIsEditItem] = useState(null);
    const newEditItem = (id) => {
        let newEditedItems = items.find((elem) => {
            return elem.id === id;
        });
        console.log(newEditedItems);

        setToggleSub(false);

        setInputData(newEditedItems.name);

        setIsEditItem(id);
    };
    //delete item
    const delItem = (index) => {
        const updatedList = items.filter((elem) => {
            return index !== elem.id;
        });
        setItems(updatedList);
    };
    //remove all
    const removeAll = () => {
        setItems([]);
    };

    return (
        <>
            <div className="container-fluid">
                <div className="main p-4">
                    <div className="header d-flex align-items-center flex-wrap">
                        <div className="heading">
                            <h1 className="fw-bold m-0">ToDo List</h1>
                            <p className="fw-normal ms-2">What needs to be done.</p>
                        </div>
                        <figure>
                            <img src={require("./to.png")} alt="logo"></img>
                        </figure>
                    </div>
                    <div className="input-group mb-3">
                        <input
                            type="text"
                            name="add"
                            className="form-control"
                            style={{color:"#0077b6"}}
                            placeholder="Add your item here..."
                            value={inputdata}
                            onChange={(e) => {
                                setInputData(e.target.value);
                            }}
                        />
                        {toggleSub ? (
                            <button
                                className="btn add btn-primary"
                                title="Add item"
                                type="button"
                                onClick={addItem}
                            >
                                Add
                            </button>
                        ) : (
                            <button
                                className="fa-solid fa-edit btn btn-primary"
                                title="Add item"
                                type="button"
                                onClick={addItem}
                            ></button>
                        )}
                    </div>
                    <div className="list">
                        {items.map((elem) => {
                            return (
                                <ul
                                    className="eachItem d-flex align-items-center justify-content-between fw-bold m-0"
                                    key={elem.id}
                                >
                                    <li className="flex-grow-1">{elem.name}</li>
                                    <i
                                        className="fa-solid fa-edit btn btn-outline-primary border-0"
                                        onClick={() => newEditItem(elem.id)}
                                    ></i>
                                    <i
                                        className="fa-solid fa-trash btn btn-outline-primary border-0"
                                        onClick={() => delItem(elem.id)}
                                    ></i>
                                </ul>
                            );
                        })}
                    </div>
                    <div className="d-flex align-items-center justify-content-center w-100">
                        <button className=" rmv btn btn-warning mt-3" onClick={removeAll}>
                            Remove All
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};
export default ToDo;
