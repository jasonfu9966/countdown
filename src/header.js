import React from 'react';
import './App.css';
const mainForm = require('./MainForm');

// const mf = new MainForm();

function AppHeader() {
  return (
    <div className="App">
  	<header className="App-header">
  	<table className="header-table">
	  	<tbody>
	  		<tr> 
	  			<td>
	  				<a className="App-link"
	  					href="/#"
	  					value="mongo">
	  					Mongo Table
	  				</a>
	  			</td>
	  			<td>
	  				<a className="App-link"
	  					href="/#"
	  					// which one is right? this one?
	  					onClick={(e, value) => mainForm.handleClick(e, 'dynamo')}>
	  					Dynamo Table
	  				</a>
	  			</td>
	  			<td>
	  				<a className = "App-link"
		  				href="/#"
		  				// or this one?
		  				onClick={e => mainForm.handleClear(e)}>
		  				Clear all
	  				</a>
	  			</td>
	  		</tr>
  		</tbody>
  	</table>
	</header>
	</div>
  );
}

export default AppHeader;