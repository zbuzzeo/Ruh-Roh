'use strict';
const getReport = require('./email-module.js');
const getEmails = getReport.logEmails();

console.log(getEmails.duplicatedMails);