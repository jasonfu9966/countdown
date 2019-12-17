import React, { Component } from 'react';
const cntdn = require('./cntdn.js');

export default class numbers extends Component {
  constructor() {
    super();
    this.state = { numbers: [], eqs: [] }
  }

  solveNums(e) {
    e.preventDefault();
    // run algorithm
    let boxes = document.querySelectorAll('.numInput');
    let nums = [].map.call(boxes, input => input.value).map(x => parseInt(x));
    let target = nums.pop();

    // console.log(cntdn.solve_numbers(nums, target, false));
    this.setState({ eqs: cntdn.findEquations(nums, target) });
  }

  clearNums(e) {
    e.preventDefault();
    this.setState({ numbers: [], eqs: [] });
    let numInputs = document.querySelectorAll('.numInput');
    for (let box of numInputs) {
      box.value = "";
    }
  }

  render() {
    return (
      <div>
        <h2>Numbers Solver</h2>
        <p>Enter your six numbers here.</p>
        <input id="0" className="numInput"/>
        <input id="1" className="numInput"/>
        <br />
        <input id="2" className="numInput"/>
        <input id="3" className="numInput"/>
        <br />
        <input id="4" className="numInput"/>
        <input id="5" className="numInput"/>
        <br />
        <br />
        Target:
        <input id="target" className="numInput"/>
        <br />
        <button onClick = {e => this.solveNums(e)}
          className="numbersButton"
          >Solve</button>

        <button onClick = {e => this.clearNums(e)}
          className="numbersButton"
          >Clear</button>

        <p>Answers:</p>
        <div id="numberAnswers">
        <ul>{this.state.eqs.map(eq => 
          <li key={eq}>{eq}</li>)}
        </ul>
        </div>
      </div>
    );
  }
}