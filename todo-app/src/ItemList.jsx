import React from "react";

const ItemList = (props) => {
  return (
    <>
      <div className="list d-flex align-items-center">
        <li className="w-100">{props.text}</li>
        {/* <i class="fa-solid fa-trash" style={{color:"#003566"}}></i> */}
        <button
          className="btn btn-outline-primary fa-solid fa-trash flex-shrink-1"
          type="button"
          onClick={()=>{
            props.onSelect(props.id);
          }}
        ></button>
        <hr />
      </div>
    </>
  );
};
export default ItemList;
