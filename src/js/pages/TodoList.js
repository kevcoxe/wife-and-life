import React from "react";

import * as TodoActions from "../actions/TodoActions";
import TodoStore from "../stores/todoStore";

export default class TodoList extends React.Component {
  constructor() {
    super();
    this.getTodos = this.getTodos.bind(this);
    this.state = {
      todos: TodoStore.getAll(),
    };
  }

  componentWillMount() {
    TodoStore.on("change", this.getTodos);
  }

  componentWillUnmount() {
    TodoStore.removeListener("change", this.getTodos);
  }

  getTodos() {
    this.setState({
      todos: TodoStore.getAll(),
    });
  }

  createTodo() {
    TodoActions.createTodo(Date.now());
  }

  reloadTodos() {
    TodoActions.reloadTodos();
  }

  render() {

    const { todos } = this.state;
    const todoComponents = todos.map((todo) => {
      return <li key={todo.id}>{ todo.text } { todo.complete.toString() }</li>;
    });

    return (
      <div>
        <h1>Todos</h1>
        <ul>
          { todoComponents }
        </ul>
        <br />
        <button className="btn btn-success" onClick={this.reloadTodos.bind(this)}>Reload</button>
      </div>
    );
  }
}
