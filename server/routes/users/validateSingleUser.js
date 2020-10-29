const { MongoClient, ObjectId } = require("mongodb");
require("dotenv").config();
const { MONGO_URI } = process.env;

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

module.exports = async (req, res) => {
    const { email, password } = req.params;
    const client = await MongoClient(MONGO_URI, options);
    try {
      await client.connect();
  
      const db = client.db("akulla_belka");
      console.log("connected!");
  
      await db.collection("users").findOne({ email }, (err, user) => {
          console.log(user);
        user.password === password
          ? res.status(200).json({ status: 200, user })
          : res.status(404).json({ status: 404, message: "User not found" });
        client.close();
        console.log("disconnected!");
      });
    } catch (err) {
      console.log(err.stack);
      res.status(500).json({status:500, data, message: err.message})
    }
  };