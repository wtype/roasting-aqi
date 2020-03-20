const fs = require('fs');

fs.readFile('./aqi.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log('Successfully loaded file');
  const split = data.split(',').map(str => parseInt(str));
  const PM25 = [];
  const PM10 = [];

  for (let i = 0; i < split.length; i++) {
    if (i % 2 === 0) PM25.push(split[i]);
    else PM10.push(split[i]);
  }

  const scaleFactor = 6;

  const PM25row = new Array(PM25.length).fill('◼︎');
  for (let i = 0; i < PM25.length / scaleFactor; i++) {
    for (let j = 0; j < PM25[i]; j++) {
      PM25row[i] += '◼︎';
    }
  }

  const PM10row = new Array(PM10.length).fill('◼︎');
  for (let i = 0; i < PM10.length; i++) {
    for (let j = 0; j < PM10[i] / scaleFactor; j++) {
      PM10row[i] += '◼︎';
    }
  }
  // console pseudo-graphs
  console.log(PM25row);
  console.log(PM10row);
});
