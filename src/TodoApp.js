import React from "react";
import { TodoList } from "./TodoList";

export class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        { text: "Learn React", priority: 5, dueDate: new Date() },
        {
          text: "Learn about APIs",
          priority: 4,
          dueDate: new Date(2020, 1, 23)
        },
        { text: "write TODO App", priority: 3, dueDate: new Date(2020, 1, 30) }
      ],
      text: "",
      priority: ""
    };
    this.handleChangeText = this.handleChangeText.bind(this);
    this.handleChangePriority = this.handleChangePriority.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  render() {
    return (
      <div>
        <h3>TODO</h3>

        <form style={{ marginLeft: 10 }} onSubmit={this.handleSubmit}>
          <label>
            text:
            <input
              type="text"
              name="text"
              onChange={this.handleChangeText}
              value={this.state.text}
            />
          </label>{" "}
          <br />
          <label>
            priority:
            <input
              type="number"
              name="priority"
              onChange={this.handleChangePriority}
              value={this.state.priority}
            />
          </label>{" "}
          <br />
          <input type="submit" value="Submit" />
        </form>
        <TodoList todoList={this.state.items} />
      </div>
    );
  }
  handleChangeText(e) {
    this.setState({ text: e.target.value });
  }
  handleChangePriority(e) {
    this.setState({ priority: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (!this.state.text.length || !this.state.priority.length) {
      return;
    }
    const newItem = {
      text: this.state.text,
      priority: this.state.priority,
      dueDate: new Date()
    };
    this.setState(prevState => ({
      items: prevState.items.concat(newItem),
      text: "",
      priority: ""
    }));
  }
}