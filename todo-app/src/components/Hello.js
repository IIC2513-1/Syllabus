import React from "react";

const Hello = (props) => {
  console.log(props);
  return (<h1>Hola a todos, especialmente a {props.name}</h1>)
}

export default Hello;