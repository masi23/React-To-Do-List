import './App.css';
import React from 'react';
import ListItem from './ListItem'

class App extends React.Component {

  state = {
    activities: ["Pet the cat", "Feed fish in aquarium", "Practice some coding"],
    inputValue: '',
    checkedActivities: []
  }

  handleSubmit = (event) => {
    if(this.state.inputValue) {
      this.setState( {
        activities: [...this.state.activities, this.state.inputValue],
        inputValue: ''
      })
    }
    event.preventDefault();
  }

  handleInputChange = (event) => {
    this.setState({
      inputValue: event.target.value
    });
  }

  handleClick = (e) => {

    var value = e.target.value;

    this.setState({
      checkedActivities: [...this.state.checkedActivities, value],
      activities: this.state.activities.filter(function(activity) {
        return activity !== value;
      })
    })
  }

  render() {
    return (
      <div className="App">
        <div className="left-panel">
          <h1>React planner</h1>
          <form onSubmit={this.handleSubmit}>
            <label>Activity
            <input type="text" value={this.state.inputValue} onChange={this.handleInputChange}/>
            </label>
            <input type="submit" value="Add activity" />
          </form>
          <div className="list">
            <ul>
              {
                this.state.activities.map((item, i) => (
                  <li key={i}>{item}<button value={item} onClick={this.handleClick}>Done</button></li>
                ))
              }
            </ul>
          </div>
        </div>
        <div className="right-panel">
          <h2>Checked activities</h2>
          <div className="list">
            <ul>
                {this.state.checkedActivities.map((item, i) => (
                  <ListItem key={i} item={item}/>
                ))
                }
            </ul>
          </div>
          
        </div>
      </div>
    );
  }
}

export default App;
