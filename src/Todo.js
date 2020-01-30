import React from 'react';

export class Todo extends React.Component {

    constructor(props) {
        super(props);
    }   

    render() {
        return ( 
            <div>
                <p>{this.props.text}</p>
                <p>{this.props.priority}</p>
                {<p>{"due date:"+this.props.dueDate}</p>}
            </div>
             
        );
    }

}