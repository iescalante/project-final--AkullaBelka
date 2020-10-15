const { MongoClient, ObjectId } = require("mongodb");
require("dotenv").config();
const { MONGO_URI } = process.env;

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

module.exports = async (req, res) => {
    const { _id } = req.params;
    const client = await MongoClient(MONGO_URI, options);
    try {
      await client.connect();
  
      const db = client.db("akulla_belka");
      console.log("connected!");
  
      await db.collection("users").findOne({ _id: ObjectId(_id) }, (err, result) => {
          console.log(result);
        result
          ? res.status(200).json({ status: 200, _id, data: result })
          : res.status(404).json({ status: 404, _id, data: "Not Found" });
        client.close();
        console.log("disconnected!");
      });
    } catch (err) {
      console.log(err.stack);
      res.status(500).json({status:500, data, message: err.message})
    }
  };