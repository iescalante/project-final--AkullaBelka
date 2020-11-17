const { MongoClient, ObjectID } = require("mongodb");
const { transactionAndDueDates } = require("../../utilities");
require("dotenv").config();
const { MONGO_URI } = process.env;

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

module.exports = async (req, res) => {
    const client = await MongoClient(MONGO_URI, options);
    const { userId, lenderId } = req.params;
    const { loanAmount, selectedRate, daysToPay,paidAmount, balance, lastTimeChecked } = req.body;
    const userIndex = 0;
    try {
        await client.connect();
        const db = client.db("akulla_belka");
        console.log("connected!");
        const user = await db.collection("users").find({_id:ObjectID(userId)}).toArray();
        
        if (user[userIndex].totalLoaned + loanAmount > user[userIndex].loanLimit) {
          res.status(400).json({status:400, message:"You can't ask more that the limit!"})
        } else {
            await db.collection("users").findOneAndUpdate({ _id: ObjectID(userId) },{$inc: {totalLoaned: loanAmount}});
            await db.collection("users").findOneAndUpdate({_id: ObjectID(lenderId)}, {$inc:{"lenderProfile.totalLoan": loanAmount}});
            await db.collection("users").findOneAndUpdate({_id: ObjectID(lenderId)}, {$push:{"lenderProfile.usersId": {userId, loanAmount}}});
            await db.collection("transactions").insertOne({
              userId,
              transactionDate: transactionAndDueDates(daysToPay).transactionDate,
              loanAmount,
              lenderId,
              dueDate: transactionAndDueDates(daysToPay).dueDate,
              selectedRate,
            });
            await db.collection("loans").insertOne({
                userId,
                transactionDate: transactionAndDueDates(daysToPay).transactionDate,
                loanAmount,
                paidAmount,
                balance,
                lenderId,
                dueDate: transactionAndDueDates(daysToPay).dueDate,
                selectedRate,
                lastTimeChecked: new Date()
              })
    
            res.status(200).json({
                status:200,
                userId,
                lenderId,
                loanAmount,
                balance,
                transactionDate: transactionAndDueDates(daysToPay).transactionDate,
                dueDate: transactionAndDueDates(daysToPay).dueDate,
                selectedRate,
                daysToPay,
                lastTimeChecked,
            });
        }
    } catch(err) {
        console.log(err.stack);
        res.status(500).json({status: 500, message: err.message})
    }
    client.close();
        console.log("disconnected!");
}