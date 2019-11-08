const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

const url = "mongodb://localhost:27017";
const dbName = "Users";

function queryMongo(query, fn) {
  MongoClient.connect(url, function(err, client) {
    if (err) throw err;
    assert.equal(null, err);
    console.log("Connected to server");

    const db = client.db(dbName);
    db.collection("users").find(query).toArray(function(err, result) {
      if (err) throw err;
      console.table(result);
      return fn(result);
    });

    client.close();
  });
}

const query = { id: 1 };

queryMongo(query, function(dataSet) {
  console.log(dataSet);
  return dataSet;
});

export default queryMongo;