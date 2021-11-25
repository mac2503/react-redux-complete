import React, {Component} from 'react';
import Ninjas from './Ninjas';

class App extends Component {
  state = {
    ninjas: [
      {name: 'Mahek', age: 19, belt: 'black', id:1},
      {name: 'Nikita', age: 21, belt: 'green', id:2},
      {name: 'Muskan', age: 20, belt: 'pink', id:3}
    ]
  }
  render() {
    return (
      <div className="App">
        <h1>My first React app!</h1>
        <p>Welcome :)</p>
        {/* name, age, belt are props */}
        {/* <Ninjas name="Nikita" age="21" belt="black"/> */}
        <Ninjas ninjas={this.state.ninjas}/>
      </div>
    );
  }
}

export default App;

// Props are a way for us to pass data from 1 component of the parent to the child component