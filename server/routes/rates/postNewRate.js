const { MongoClient } = require("mongodb");
require("dotenv").config();
const { MONGO_URI } = process.env;

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}

module.exports = async (req, res) => {
    const client = await MongoClient(MONGO_URI, options);
  
    try {
      await client.connect();
  
      const db = client.db("akulla_belka");
      console.log("connected!");
  
      await db.collection("rates").insertOne(req.body);
      res.status(201).json({ status: 201, rate: req.body });
    } catch (err) {
      console.log(err.stack);
      res.status(500).json({ status: 500, message: err.message });
    }
    client.close();
    console.log("disconnected!");
  };