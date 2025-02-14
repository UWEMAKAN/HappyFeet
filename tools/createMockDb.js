/* eslint-disable no-console */
const fs = require('fs');
const path = require('path');
const mockData = require('./mockData');

const { shoes } = mockData;
const data = JSON.stringify({ shoes });
const filepath = path.join(__dirname, 'db.json');

fs.writeFile(filepath, data, (err) => {
  // eslint-disable-next-line no-unused-expressions
  err ? console.log(err) : console.log('Mock DB created.');
});
