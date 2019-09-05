import React from 'react';
import Display from './Components/Display';
import Dashboard from './Components/Dashboard';

import './App.css';

class App extends React.Component {

  state = {
    balls: 0,
    strikes: 0,
    hits: 0
  }

  handleDisplay = str => {
    switch(str) {
      // Strike logic
      case 'strike' || 'foul':
        if(this.state.strikes === 2) {
          this.setState({ 
            strikes: 0, balls: 0 });
        } else { this.setState({ strikes: this.state.strikes + 1 }) };
    break; //end strike || foul logic

    // balls logic
    case 'balls':
    if(this.state.balls === 4) {
      this.setState({ strikes: 0, balls: 0, });
    } else {this.setState({ balls: this.state.balls + 1 })};
    break; //end balls logic

    case 'hits':
      this.setState({ strikes: 0, balls: 0, hits: this.state.hits + 1})
    break;

    default: console.log('this is not a valid start');

  } //end switch
} // end handle display

  render() {
  return (
    <div className="App">
      <h1>Hello from App</h1>
      <Display 
      ball={this.state.balls}
      strike={this.state.strikes}
      foul={this.state.fouls}
      hit={this.state.hits}
      />
      <Dashboard 
      handleDisplay={this.handleDisplay}
      />
    </div>
  )
 }
}

export default App;
