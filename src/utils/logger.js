// File: src/utils/logger.js (JavaScript)

const fs = require('fs');
const path = require('path');

const logFilePath = path.join(__dirname, '../../logs/log.txt');

const logger = {
  log: (message) => {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] ${message}\n`;

    fs.appendFile(logFilePath, logMessage, (err) => {
      if (err) {
        console.error('Error writing to log file:', err);
      }
    });
  },
};

module.exports = logger;