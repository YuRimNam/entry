import React, { Component } from 'react';
import './CSS/ToDoItem.css';

class TodoItem extends Component {
    render() {
      const { text, checked, id, onToggle, onRemove } = this.props;
      return (
        <div className="list-item" onClick={() => onToggle(id)}>
          <div className="remove" onClick={(e) => {
            e.stopPropagation();
            onRemove(id)}
          }>&times;</div>
          <div className={`todo-content ${checked && 'checked'}`}>
            <div>{text}</div>
          </div>
          {
            checked && (<div className="check-mark">✓</div>)
          }
        </div>
      );
    }
  }

export default TodoItem;