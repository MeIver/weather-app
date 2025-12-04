const express = require('express');
const axios = require('axios');
const helmet = require('helmet');
require('dotenv').config();

const app = express();
const PORT = 3000;

app.use(helmet());
app.use(express.static('public'));

// 模拟天气数据
const mockWeatherData = {
  'Beijing': { temp: 22, condition: 'Sunny', humidity: 45 },
  'Shanghai': { temp: 25, condition: 'Cloudy', humidity: 60 },
  'Guangzhou': { temp: 28, condition: 'Rainy', humidity: 75 }
};

app.get('/api/weather/:city', (req, res) => {
  const city = req.params.city;
  const weather = mockWeatherData[city] || { temp: 20, condition: 'Unknown', humidity: 50 };
  res.json(weather);
});

app.get('/api/forecast/:city', (req, res) => {
  const city = req.params.city;
  const forecast = [
    { day: 'Today', temp: 22, condition: 'Sunny' },
    { day: 'Tomorrow', temp: 24, condition: 'Partly Cloudy' },
    { day: 'Day after', temp: 21, condition: 'Rainy' }
  ];
  res.json({ city, forecast });
});

app.listen(PORT, () => {
  console.log(`天气应用运行在 http://localhost:${PORT}`);
});