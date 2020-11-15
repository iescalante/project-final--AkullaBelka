const CronJob = require('cron').CronJob;
const { MongoClient, ObjectID } = require("mongodb");
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
      const loansPastDue = await db.collection("loans").find({dueDate: {$lt: new Date()}}).toArray();
      const realLoansPastDue = loansPastDue.filter((loan) => {
        return loan.loanAmount > loan.paidAmount;
      });
  
      if (realLoansPastDue) {
        console.log(realLoansPastDue);
        realLoansPastDue.forEach(async (loan) => {
          const realLoanToPay = loan.loanAmount - loan.paidAmount;
          console.log(realLoanToPay);
          if (realLoanToPay > 0) {
            await db.collection("loans").findOneAndUpdate({_id:ObjectID(loan._id)},{$inc:{loanAmount: Math.round(realLoanToPay*loan.selectedRate)}});
            await db.collection("users").findOneAndUpdate({_id:ObjectID(loan.userId)},{$inc:{score: -20}});
          }
        });
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