const CronJob = require('cron').CronJob;

console.log('Before job instantiation');
const cronInit = () => {
  const job = new CronJob('0-59/2 * * * * *', function() {
    const d = new Date();
    console.log('Every second:', d);
  });
  console.log('After job instantiation');
  job.start();
};

module.exports = {cronInit};