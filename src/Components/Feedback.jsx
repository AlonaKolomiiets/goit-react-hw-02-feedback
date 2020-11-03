import React, { Component } from "react";

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };


  
  render() {
    const { good, neutral, bad } = this.state;
    return (
      <>
        <div>
          <h2>Please leave feedback</h2>
          <button type="button" >Good</button>
          <button type="button">Neutral</button>
          <button type="button">Bad</button>
        </div>
        <div>
          <h2>Statistics</h2>
          <ul>
            <li>Good: {good}</li>
            <li>Neutral: {neutral}</li>
            <li>Bad: {bad}</li>
          </ul>
        </div>
      </>
    );
  }
}

export default Feedback;
