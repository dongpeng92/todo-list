import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

var todos = [
  {
    todoTitle: 'Do some coding',
    todoDescription: 'Todo description',
    todoPriority: 'medium'
  },
  {
    todoTitle: 'Drink Coffee',
    todoDescription: 'Todo description',
    todoPriority: 'high'
  },
  {
    todoTitle: 'Do some more coding',
    todoDescription: 'Todo description',
    todoPriority: 'low'
  }
]

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      todos
    };

    this.handleAddTodo = this.handleAddTodo.bind(this);
  }

  handleRemoveTodo(index) {
    this.setState({
      todos: this.state.todos.filter(function(e, i) {
        return i !== index;
      })
    })
  }

  handleAddTodo(todo) {
    this.setState({
      todos: [...this.state.todos, todo]
    });
  }

  render() {
    return (
      <div className="container">
        <nav className="navbar navbar-dark bg-dark">
          <img src={logo} className="App-logo" alt="logo" />
          <h4 className="navbar-brand">
            ToDo Count: <span className="badge badge-pill badge-primary">{this.state.todos.length}</span>
          </h4>
        </nav>

        <div className="row md-5">
          <br/>
          <TodoInput onAddTodo={this.handleAddTodo}/>
          <hr/>
        </div>

        <div className="row md-5">
          <div className="col">
            <br/>
            <ul className="list-group">
              { this.state.todos.map ((todo, index) =>
                <li className="list-group-item" key={index} >
                  <h4 className="list-group-item-heading"> { todo.todoTitle } <small><span className="badge badge-secondary"> { todo.todoPriority } </span></small></h4>
                  <p className="test-justify"> { todo.todoDescription } </p>
                  <button className="btn btn-danger btn-sm float-right" onClick={this.handleRemoveTodo.bind(this, index)}><span><i className="fa fa-user-circle-o" aria-hidden="true"></i></span>&nbsp;&nbsp; Delete</button>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

class TodoInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todoTitle: '',
      todoDescription: '',
      todoPriority: 'lowest'
    }

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name] : value
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onAddTodo(this.state);
    this.setState({
      todoTitle: '',
      todoDescription: '',
      todoPriority: 'lowest'
    })
  }

  render() {
    return(
      <div className="col">
        <br/><br/><br/>
        <h4>Add New ToDo</h4>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <input name="todoTitle" type="text" className="form-control" id="inputTodoTitle" 
            value={this.state.todoTitle} onChange={this.handleInputChange} aria-describedby="Todo Title" placeholder="Enter Title"></input>
          </div>
          <div className="form-group">
            <lable htmlFor="inputTodoDescription" className="control-lable text-muted">Description</lable>
            <textarea name="todoDescription" type="text" className="form-control" id="inputTodoDescription" 
              value={this.state.todoDescription} onChange={this.handleInputChange} aria-describedby="Todo Description"></textarea>
          </div>
          <div className="form-group">
            <lable htmlFor="inputTodoPriority" className="control-lable text-muted">Priority</lable>
            <select name="todoPriority" type="text" className="form-control" id="inputTodoPriority" 
              value={this.state.todoPriority} onChange={this.handleInputChange} aria-describedby="Todo Priority">
              <option>lowest</option>
              <option>low</option>
              <option>medium</option>
              <option>high</option>
              <option>emergency</option>
            </select><br/>
          </div>
          <div className="form-group">
            <button className="btn btn-primary float-right" type="submit"> Add ToDo</button>
          </div>
        </form>
      </div>
    )
  }
}

export default App;
