import React, { Component } from 'react';
const cntdn = require('./cntdn.js');

export default class letters extends Component {
  constructor() {
    super();
    this.state = { letters: '', words: [] }
  }

  changeLetters(e) {
    e.preventDefault();
    this.setState({ letters: e.target.value });
    // anagram lookup
  }

  clearLetters(e) {
    e.preventDefault();
    this.setState({ letters: '', words: [] });
  }

  render() {
    return (
      <div>
      <h2>Letters Solver</h2>
        <input onChange = {e => this.changeLetters(e)} 
          value={this.state.letters}
        />
        <button onClick = {e => this.clearLetters(e)}
          >Clear</button>

        <p>Answers:</p>
        <div id="letterAnswers"><ul>{this.state.eqs.map(eq => 
          <li key={eq}>{eq}</li>)}
        </ul></div>
      </div>
    );
  }
}