const { MongoClient, ObjectId } = require("mongodb");
require("dotenv").config();
const { MONGO_URI } = process.env;

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

module.exports = async (req, res) => {
    const { score, loanAmount } = req.params;
    const client = await MongoClient(MONGO_URI, options);
    try {
      await client.connect();
      const db = client.db("akulla_belka");
      console.log("connected!");

      if (score < 0 || score > 1000) {
        res.status(400).json({ status: 400, message:"Score can only be 0 to 1000" });
      }
      if (-1 < score < 500) {
        const data = await db.collection("rates").find({ minScore: { $eq: 0 } }).toArray();
        res.status(200).json({ status:200, data });
      }
      else if (score > 500) {
        const data = await db.collection("rates").find({ minScore: { $eq: 500 }}).toArray();
        res.status(200).json({ status: 200, data });
      }
      // if (loanAmount < 0 || loanAmount > 1000) {
      //   res.status(400).json({ status: 400, message: "Loan can only be from 100 to 1000" });
      // }
      // if (99 < loanAmount < 401){
      //   const lowLoanAmountRate = await db.collection("rates").find({ minLoan : { $eq: 100}}).toArray();
      //   res.status(200).json({ status:200, lowLoanAmountRate });
      // }
      // if (400 < loanAmount < 801) {
      //   const mediumLoanAmountRate = await db.collection("rates").find({ minLoan: { $eq: 401 }}).toArray();
      //   res.status(200).json({ status: 200, mediumLoanAmountRate });
      // }
      // if (800 < loanAmount < 1001) {
      //   const highLoanAmountRate = await db.collection("rates").find({ minLoan : { $eq: 801 }}).toArray();
      //   res.status(200).json({ status:200, highLoanAmountRate });
      // }
      // if (499 < score < 1001 ) {
        
      // }
      client.close();
      console.log("disconnected!");
    } catch (err) {
      console.log(err.stack);
      res.status(500).json({status:500, data, message: err.message})
    }
  };