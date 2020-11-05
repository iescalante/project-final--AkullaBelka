const { MongoClient, ObjectID } = require("mongodb");
require("dotenv").config();
const { MONGO_URI } = process.env;

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

module.exports = async (req, res) => {
    const { userId } = req.params;
    const client = await MongoClient(MONGO_URI, options);
    try {
      await client.connect();
  
      const db = client.db("akulla_belka");
      console.log("connected!");
  
      const transactions = await db.collection("transactions").find({userId}).hint( { $natural : -1 } ).toArray();
      console.log(transactions);
      res.status(200).json({
        status:200,
        transactions,
    });
        client.close();
        console.log("disconnected!");
      ;
    } catch (err) {
      console.log(err.stack);
      res.status(500).json({status:500, transactions, message: err.message})
    }
  };