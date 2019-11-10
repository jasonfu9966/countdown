import React from 'react';
import ReactTable from "react-table";
import "react-table/react-table.css";
// import AppHeader from './header';

// const queryMongo = require('./mongo');

const AWS = require('aws-sdk');
const config = require('./config/config');

// const isDev = process.env.NODE_ENV !== 'production';
// const port = process.env.PORT || 8080;

AWS.config.update(config.aws_local_config);

// var ddb = new AWS.DynamoDB({ apiVersion: '2012-08-10' });
var docClient = new AWS.DynamoDB.DocumentClient();

var params = {
  TableName: "Users",
  Key: 'id'
};

var empty = [];
var data = [{
  name: 'Roy Agasthyan',
  age: 26
}, {
  name: 'Sam Thomason',
  age: 22
}, {
  name: 'Michael Jackson',
  age: 36
}, {
  name: 'Samuel Roy',
  age: 56
}, {
  name: 'Rima Soy',
  age: 28
}, {
  name: 'Suzi Eliamma',
  age: 28
}]

export const handleClick = (e, value) => {
  // this.setState({ source: e.value });
  console.log(value);
};

export const handleClear = e => {
  e.preventDefault();
  // don't know how to do this
}

const columns = [{
  Header: 'ID',
  accessor: 'id'
}, {
  Header: 'First Name',
  accessor: 'First Name'
}, {
  Header: 'Last Name',
  accessor: 'Last Name'
}, {
  Header: 'Gender',
  accessor: 'Gender'
}, {
  Header: 'E-mail',
  accessor: 'E-mail'
}, {
  Header: 'IP Address',
  accessor: 'IP Address'
}];

class MainForm extends React.Component {
  constructor() {
    super();
    this.state = { data, columns };
    this.handleClear = this.handleClear.bind(this);
    this.fetchData();
  }

  handleClear(e) {
    e.preventDefault();
    this.setState({ data: empty, columns: empty });
    // I don't know how to make this work and also re-render after clearing
  }

  fetchData() {
    docClient.scan(params, (err, dataP) => {
      if (err) throw err;

      this.setState({
        data: dataP.Items.sort((a, b) => a.id - b.id)
      });
    });
  }

  render() {
    return (
      <div>
        <ReactTable 
          data={this.state.data}
          columns={columns}
          defaultPageSize = {25}
          pageSizeOptions = {[25, 50, 100]} /> 
        </div>);
  }
}

export default MainForm;