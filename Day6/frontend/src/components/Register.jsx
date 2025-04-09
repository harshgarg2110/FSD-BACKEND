// http://https://fsd-backend-26dz.onrender.com/users
import React from "react";
import axios from "axios";
import "../App.css";
const Register = () => {
  const handleregister = async (e) => {
    e.preventDefault();
    const user = {
      name: e.target.name.value,
      age: e.target.age.value,
    };
    await axios.post(
      "http://https://fsd-backend-26dz.onrender.com/users",
      user
    );
    alert("User Registered Successfully");
  };
  return (
    <div>
      <form onSubmit={handleregister}>
        <label>Name:</label> <input type="text" name="name" />
        <label>Age:</label> <input type="text" name="age" />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};
export default Register;
