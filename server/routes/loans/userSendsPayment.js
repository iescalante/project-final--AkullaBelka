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
    const { paidAmount, loanId } = req.body;
    console.log(paidAmount, loanId);
    try {
        await client.connect();
        const db = client.db("akulla_belka");
        console.log("connected!");

        const loanToPay = await db.collection("loans").findOne({_id: ObjectID(loanId)});
        console.log(loanToPay.loanAmount);

        if (paidAmount + loanToPay.paidAmount > loanToPay.loanAmount) {
          res.status(400).json({
            status: 400,
            paidAmount,
            message: "Sorry, you can't pay more than what you owe!"
          })
        } else {
            await db.collection("users").findOneAndUpdate({ _id: ObjectID(userId) },{$inc: {totalLoaned: -Number(paidAmount)}});
            await db.collection("users").findOneAndUpdate({_id: ObjectID(lenderId)}, {$inc:{"lenderProfile.totalLoan": -Number(paidAmount)}});
            await db.collection("users").findOneAndUpdate({_id: ObjectID(lenderId)}, {$push:{"lenderProfile.usersId": {userId, paidAmount: Number(paidAmount)}}});
            await db.collection("loans").findOneAndUpdate({ _id: ObjectID(loanId) },{$inc: {paidAmount: Number(paidAmount)}});
            await db.collection("transactions").insertOne({
              userId,
              transactionDate: transactionAndDueDates(0).transactionDate,
              paidAmount,
              lenderId,
            });

            res.status(200).json({
              status:200,
              userId,
              lenderId,
              loanId,
              paidAmount,
              transactionDate: transactionAndDueDates(0).transactionDate,
            });
        }
    } catch(err) {
        console.log(err.stack);
        res.status(500).json({status: 500, message: err.message})
    }
    client.close();
        console.log("disconnected!");
}