import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      list: window.listData
    }
  }

  render() {
    return (
      <div id='root'>
        <ul>
          {
            this.state.list.map(function(item){
              return (
                <li key={item.id}>{item.label}</li>
              );
            })
          }
        </ul>
      </div>
    );
  }
}

export default App;
