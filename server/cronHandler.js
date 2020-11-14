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
    
    const job = new CronJob('0-59/10 * * * * *', async function(req,res) {
      const d = new Date();
      const data = await db.collection("loans").update(
        {dueDate: {$lt: new Date()}},
        {$inc: {loanAmount: loanAmount*selectedRate}},
        {multi: true}
      );

      if (data) {
      console.log("data updated");
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