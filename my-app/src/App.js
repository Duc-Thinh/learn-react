import React, { Component } from 'react';
import Todoitem from './components/Todoitem'
import tick from './img/tick.svg'

class App extends Component {
  constructor() {
    super();
    this.state = {
      newItem: '',
      todoItems: [
        {title: "code", isComplete: false},
        {title: "code", isComplete: false}
      ]
    };
    this.onKeyUp = this.onKeyUp.bind(this)
    this.onChange = this.onChange.bind(this)
  }

  onItemClicked(item){
    return () => {
      const isComplete = item.isComplete
      let { todoItems } =  this.state
      let index = todoItems.indexOf(item)
      // todoItems[index].isComplete = !isComplete; //cách 1
      this.setState({
        // TodoItem: todoItems
        //cách 2
        // todoItems: [
        //   ...todoItems.map(function(value){
        //     return((value === item) ? {...value, isComplete: !isComplete} : {...value})
        //   })
        // ]
        //cách 3
        todoItems: [
          ...todoItems.slice(0,index),
          {
            ...item,
            isComplete: !isComplete
          },
          ...todoItems.slice(index + 1)
        ]
      })
    }
  }

  onClickRemove(item){
    let { todoItems } =  this.state
    let index = todoItems.indexOf(item)
    return() => {
      let result = this.state.todoItems.splice(index,1)
      this.setState({
        todoItems: [
          ...todoItems
        ]
      })
    }
  }

  onKeyUp(event){
    console.log(event)
    if(event.keyCode === 13){// enter key
      let text = event.target.value;
      if(!text) {
        return;
      }

      text = text.trim();
      if (!text) { return; }
      this.setState({
        newItem: '',
        todoItems: [
          {title: text, isComplete: false},
          ...this.state.todoItems
        ]
      })
    }
  }
  onChange(event){
    this.setState({
      newItem: event.target.value
    })
  }

  render(){
    const { todoItems, newItem } = this.state
    const { item} = this.props
    return (
      <div className="App">
          <div className="Header">
            <img src = {tick} width={32} height={32} />
            <input
              type="text"
              placeholder="Add a new item"
              value={newItem}
              onChange={this.onChange}
              onKeyUp={this.onKeyUp}
            />
          </div>
          {
            todoItems.length === 0 && 'Nothing here'
          }
          { todoItems.length > 0 && todoItems.map((item, index) =>
              <Todoitem
                key={index}
                item={item}
                onClick={this.onItemClicked(item)}
                onClickRemove={this.onClickRemove(item)}
              />
            )
          }
      </div>
    );
  }
}

export default App;
