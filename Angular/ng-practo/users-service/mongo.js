// Connection URL
// const xurl = 'mongodb://arun:%4010or30d@cluster0-shard-00-00-djaay.mongodb.net:27017,cluster0-shard-00-01-djaay.mongodb.net:27017,cluster0-shard-00-02-djaay.mongodb.net:27017/synechron?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true';
const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';

const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri, { useNewUrlParser: true });
const data =client.connect(err => {
  const db = client.db("synechron");
  const collection = db.collection("synedb");
 // perform actions on the collection object
 collection.insertOne({sepera:123});
  client.close();
});

module.exports = data;