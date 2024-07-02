import React from "react";
import { ProfileProps } from "../interface/Person";

// React.FC<ProfileProps> - specifies that our props that we pass to PersonDisplay should be the type ProfileProps (means it has to include name, age, message, email (optional) and state (optional))
//OPTION 1
/*
const PersonDisplay: React.FC<ProfileProps> = (props) => {
  return (
    <>
      <h1>Person Details</h1>
      <h2>Name: {props.person.name}</h2>
      <p>Age: {props.person.age}</p>
      <p>Email: {props.person.email}</p>
      <p>State: {props.person.state}</p>
      <p>Message: {props.message}</p>
    </>
  );
};
*/

//OPTION 2 (preferred)
//or you can overlook React.FC and just destructure the props you need by passing them like so
// ({properties}:PropType)
// ({person: {name, age, email, state}, message}: ProfileProps)
const PersonDisplay = ({person: {name, age, email, state}, message}: ProfileProps) => {
    return (
      <>
        <h1>Person Details</h1>
        <h2>Name: {name}</h2>
        <p>Age: {age}</p>
        <p>Email: {email || "Email not provided"}</p>
        <p>State: {state}</p>
        <p>Message: {message}</p>
      </>
    );
  };
export default PersonDisplay;
