import React, { Component } from 'react';
import Todoitem from './components/Todoitem'

class App extends Component {
  constructor() {
    super();
    this.todoItems = [
      { title: 'Mua bim bim', isComplete: true },
      { title: 'Đi đá bóng', isComplete: true },
      { title: 'Đi đổ xăng' }
    ];
  }
  render(){
    return (
      <div className="App">
          {
            this.todoItems.map((item, index) =>
              <Todoitem key={index} item={item}/>
            )
          }
      </div>
    );
  }
}

export default App;
