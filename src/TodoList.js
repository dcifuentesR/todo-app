import React from 'react';
import {Todo} from './Todo';

export class TodoList extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const todoList = this.props.todoList;
        const list = todoList.map((todo,i) =>
        <h1 key={i}>
            {
                <Todo
                text={todo.text}
                priority={todo.priority}
                dueDate={todo.dueDate}
            />
            }
            
        </h1>
            
        );
        
        return (
            <ul>
                {list}
            </ul>

        );
    }

}