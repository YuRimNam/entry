import React, { Component } from 'react';
import ToDoListTemplate from './Components/ToDoListTemplate.js';
import Form from './Components/Form.js';
import ToDoItemList from './Components/ToDoItemList';

class App extends Component {

  id = 0

  state = {
    input: '',
    todos: [
    ]
  }

  handleChange = (e) => {
    this.setState({
      input: e.target.value
    });
  }

  handleCreate = () => {
    const { input, todos } = this.state;

    if (input !== '') {
        this.setState({
          input: '', 
          todos: todos.concat({
            id: this.id++,
            text: input,
            checked: false
          })
        });
    }
  }

  handleKeyPress = (e) => {
    if(e.key === 'Enter') {
      this.handleCreate();
    }
  }

  handleToggle = (id) => {
    const { todos } = this.state;

    const index = todos.findIndex((todo) => todo.id === id);
    const selected = todos[index]; 

    const nextTodos = [...todos]; 

    nextTodos[index] = { 
      ...selected, 
      checked: !selected.checked
    };

    this.setState({
      todos: nextTodos
    });
  }

  handleRemove = (id) => {
    const { todos } = this.state;
    this.setState({
      todos: todos.filter((todo) => todo.id !== id)
    });
  }

  render() {
    const { input, todos } = this.state;
    const {
      handleChange,
      handleCreate,
      handleKeyPress,
      handleToggle,
      handleRemove
    } = this;

    return (
      <ToDoListTemplate Form={(
        <Form 
          value={input}
          onKeyPress={handleKeyPress}
          onChange={handleChange}
          onCreate={handleCreate}
        />
      )}>
        <ToDoItemList todos={todos} onToggle={handleToggle} onRemove={handleRemove} />
      </ToDoListTemplate>
    );
  }
}

export default App;
