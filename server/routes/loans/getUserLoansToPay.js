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
  
      const loansToPay = await db.collection("loans").find({userId}).hint( { $natural : -1 } ).toArray();
      res.status(200).json({
        status:200,
        loansToPay,
    });
        client.close();
        console.log("disconnected!");
    } catch (err) {
      console.log(err.stack);
      res.status(500).json({status:500, loansToPay, message: err.message})
    }
  };