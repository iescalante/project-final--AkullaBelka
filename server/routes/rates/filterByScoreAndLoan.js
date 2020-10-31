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
    const lowScore = 0;
    const highScore = 1000;
    const lowLoan = 100;
    const highLoan = 1000;
    try {
      await client.connect();
      const db = client.db("akulla_belka");
      console.log("connected!");

      if (score < lowScore || score > highScore) {
        res.status(400).json({ status: 400, message:`Score can only be ${lowScore} to ${highScore}` });
        return;
      }
      if (loanAmount < lowLoan || loanAmount > highLoan) {
        res.status(400).json({ status: 400, message:`Loans can only be from ${lowLoan} to ${highLoan}` });
        return;
      }
      let query = {minScore: {$lte: Number(score)}, maxScore: {$gte:Number(score)}, minLoan: {$lte: Number(loanAmount)}, maxLoan: {$gte: Number(loanAmount)}};
      console.log(query);

      const availableRate = await db.collection("rates").findOne(query);
      res.status(200).json({availableRate});
      
      client.close();
      console.log("disconnected!");
    } catch (err) {
      console.log(err.stack);
      res.status(500).json({status:500, message: err.message})
    }
  };