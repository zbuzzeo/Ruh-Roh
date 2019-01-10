'use strict';
const dataset = require('./email_log.json');
const getMails = dataset.emails;

function logEmails() {

  const duplicatedMails = getMails
    .reduce((accumulator, userReport) => {
      if (accumulator.hasOwnProperty(userReport.email)) {
        accumulator[userReport.email]++;
      } else {
        accumulator[userReport.email] = 1;
      }

      return accumulator;
    }, {});

  return {
    duplicatedMails: duplicatedMails,
  }
}

module.exports = {
  logEmails: logEmails,
}
