const transactionAndDueDates = (days) => {
  let dueTime = 1000*60*60*24*days;
  let startDate = new Date();
  let endDate = new Date(startDate.getTime() + dueTime).toUTCString();

  return { 
    transactionDate: startDate.toUTCString(),
    dueDate: endDate
  };
}

module.exports = { transactionAndDueDates };