import React from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
//import Card '../UI/Card';
function AddUser(props) {
  const addSubmitHandler = (event) => {
    event.preventDefault();
  };
  return (
    <Card className={classes.input}>
      <form onSubmit={addSubmitHandler}>
        <label htmlFor="username">Username</label>
        <input type="text" id="username"></input>
        <label htmlFor="age">Age</label>
        <input type="number" id="age"></input>
        <button type="submit">Add User</button>
      </form>
    </Card>
  );
}
export default AddUser;
