const { MongoClient } = require("mongodb");
require("dotenv").config();
const { MONGO_URI } = process.env;

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

module.exports = async (req, res) => {
    const client = await MongoClient(MONGO_URI, options);

    try {
        await client.connect();
        const db = client.db("akulla_belka");
        console.log("connected!");

        const data = await db.collection("rates").find().toArray();

        res.status(200).json({
            status:200,
            data,
        });

    } catch(err) {
        console.log(err.stack);
        res.status(500).json({status: 500, data, message: err.message})
    }
    client.close();
        console.log("disconnected!");
}