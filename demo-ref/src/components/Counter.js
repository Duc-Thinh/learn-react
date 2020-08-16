import React, { Components } from 'react'

class Counter extends Components {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        };
    }

    increase() {
        this.setState({
            count: this.state.count + 1
        });
    }

    decrease(){
        this.setState({
            count: this.state.count - 1 
        })
    }

    render() {
        return(
            <div className='counter'>
                <button onClick={()=> this.decrease()}>-</button>
                <span>{ this.state.count }</span>
                <button onClick={()=> this.increase()}>+</button>
            </div>
        )
    }

    
}

export default Counter