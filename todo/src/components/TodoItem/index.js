import React, { Component } from "react";
import "./style.css";

export default class TodoItem extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <li>
          <p>{this.props.todo.name}</p>
          <p onClick={()=> this.props.handleDelet(this.props.todo.id)}> X </p>
        </li>
      </div>
    );
  }
}
