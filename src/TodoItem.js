import React, { Component } from 'react';

class TodoItem extends Component {

    render() {
        return <li>{this.props.content}</li>
    }
}

export default TodoItem;