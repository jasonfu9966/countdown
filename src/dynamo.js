const AWS = require('aws-sdk');
const config = require('./config/config');

const isDev = process.env.NODE_ENV !== 'production';
const port = process.env.PORT || 8080;

AWS.config.update(isDev ? config.aws_remote_config : config.aws_local_config);

function switchToDynamo() {

}

export default switchToDynamo;