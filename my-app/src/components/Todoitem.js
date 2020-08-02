import React, {Component} from 'react';
import './TodoItem.css'

class Todoitem extends Component {
    render() {
        const {item} = this.props;
        let className = 'Todoitem'
        if (item.isComplete) {
            className += ' TodoItem-done'
        }
        return (
            <div className= {className}>
                <p>{item.title}</p>
            </div>
        );
    }
}

export default Todoitem