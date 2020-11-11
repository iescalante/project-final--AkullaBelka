const { MongoClient } = require("mongodb");
require("dotenv").config();
const { MONGO_URI } = process.env;

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

module.exports = async (req, res) => {
    const client = await MongoClient(MONGO_URI, options);
    const { loanAmount, userId } = req.params;
    console.log(loanAmount);
    try {
        await client.connect();
        const db = client.db("akulla_belka");
        console.log("connected!");

        const data = await db.collection("users").find({ 
          $and: [
            { "lenderProfile.lender" : true },
            { "lenderProfile.availableLoan": { $gte: Number(loanAmount) } }
          ]
        }).toArray();

        const validateLoan = data.reduce((acc, lender) => {
          let difference = (lender.lenderProfile.availableLoan - lender.lenderProfile.totalLoan);
          if (String(userId) !== String(lender._id) && difference >= loanAmount && difference >= 100) {
            return [...acc, lender];
          }
          return acc;
        }, []);

        res.status(200).json({
            status:200,
            data: validateLoan
        });
    } catch(err) {
        console.log(err.stack);
        res.status(500).json({status: 500, data, message: err.message})
    }
    client.close();
        console.log("disconnected!");
}