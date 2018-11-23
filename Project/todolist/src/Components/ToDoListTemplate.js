import React from 'react'
import './CSS/ToDoListTemplate.css'; 

const ToDoListTemplate = ({ Form, children }) => {
    return(
        <div className="todo-list-main">
            <div className="header">
                Today I do
            </div>
            <div className="input">
                {Form}
            </div>
            <div>
                {children}
            </div>
        </div>
    );
}

export default ToDoListTemplate;