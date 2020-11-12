const CronJob = require('cron').CronJob;
const { MongoClient } = require("mongodb");
require("dotenv").config();
const { MONGO_URI } = process.env;

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

console.log('Before job instantiation');
const cronInit = async(req,res) => {
  const client = await MongoClient(MONGO_URI, options);

  try {
    await client.connect();
    const db = client.db("akulla_belka");
    console.log("connected!");

    
    const job = new CronJob('0-59/10 * * * * *', async function() {
      const d = new Date();
      const data = await db.collection("loans").find({dueDate: {$lt: new Date()}}).toArray();
      if (data) {
      console.log(data);
      }
      console.log({tenSecond: d})
    });
    console.log('After job instantiation');
    job.start();

  } catch(err) {
    console.log(err.stack);
  }

  // client.close();
  // console.log("disconnected!");
};

module.exports = {cronInit};