const express = require('express');
const fs = require('fs');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.get('/api/ecodrone', (req, res) => {
  fs.readFile('Crop.json', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error reading data');
      return;
    }

    const jsonData = JSON.parse(data);
    const ecodrone = Object.keys(jsonData).map(key => {
      return {
        id: key,
        content: jsonData[key].label,
        temperature: jsonData[key].temperature,
        humidity: jsonData[key].humidity,
        windSpeed: jsonData[key].windSpeed || 'N/A', 
        N: jsonData[key].N,
        P: jsonData[key].P,
        K: jsonData[key].K,
        rainfall: jsonData[key].rainfall
      };
    });

    res.send(ecodrone);
  });
});

app.listen(port, () => {
  console.log(`Server running at ${port}`);
});
