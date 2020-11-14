const transactionAndDueDates = (days, payDay) => {
  let dueTime = 1000*60*60*24*days;
  let startDate = new Date();
  let endDate = new Date(startDate.getTime() + dueTime);
  let currentDate = Date.parse(new Date());
  let daysPassed = (Date.parse(payDay)- currentDate)/(1000*60*60*24);
  
  return { 
    transactionDate: startDate,
    dueDate: endDate,
    daysPassed
  };
}
// console.log(transactionAndDueDates(20,'Sun, 29 Nov 2020 01:18:33 GMT' ));
module.exports = { transactionAndDueDates };