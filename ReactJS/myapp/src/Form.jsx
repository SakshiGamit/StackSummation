import React, { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    pass: "",
  });

  const handleData = (e) => {
    // const value = e.target.value;
    // const name = e.target.name;

    const { value, name } = e.target; //object destructuring

    setFormData((preValue) => {
      if (name === "fName") {
        return {
          fname: value,
          lname: preValue.lname,
          email: preValue.email,
          pass: preValue.pass,
        };
      } else if (name === "lName") {
        return {
          fname: preValue.fname,
          lname: value,
          email: preValue.email,
          pass: preValue.pass,
        };
      } else if (name === "eMail") {
        return {
          fname: preValue.fname,
          lname: preValue.lname,
          email: value,
          pass: preValue.pass,
        };
      } else if (name === "pwd") {
        return {
          fname: preValue.fname,
          lname: preValue.lname,
          email: preValue.email,
          pass: value,
        };
      }
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("form submitted");
  };

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <h1>Sign Up</h1>
        <div className="w-100">
          <label className="form-label">Name</label>
          <input
            className="form-control"
            type="text"
            placeholder="Enter Your Name"
            name="fName"
            onChange={handleData}
            value={formData.fname}
          ></input>
          <p>First Name : {formData.fname}</p>
        </div>
        <div className="w-100">
          <label className="form-label">Last Name</label>
          <input
            className="form-control"
            type="text"
            placeholder="Last Name"
            name="lName"
            onChange={handleData}
            value={formData.lname}
          ></input>
          <p>Last Name : {formData.lname}</p>
        </div>
        <div className="w-100">
          <label className="form-label">E-mail</label>
          <input
            className="form-control"
            type="email"
            placeholder="name@example.com"
            name="eMail"
            onChange={handleData}
            value={formData.email}
          ></input>
          <p>E-mail : {formData.email}</p>
        </div>
        <div className="w-100">
          <label className="form-label">Password</label>
          <input
            className="form-control"
            type="password"
            placeholder="Enter Password"
            name="pwd"
            onChange={handleData}
            value={formData.pass}
          ></input>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};
export default Form;

//1 : in return of main function -> layout of form with onChange function & value from useState hook
// - give event to form tage - onSubmit
//2  : Use useState hook and store the values of input field as object in it.
//3 : Create 2 functions that are mentioned in rerurn(), Here : handleSubmit() & handleData()
//4 : In handleData access name and values using e.target with destructuring object
// - Use if-else stat. with function mentioned in useState hook in same handleData func.