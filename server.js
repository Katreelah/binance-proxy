const express = require('express');
const fetch = require('node-fetch');
const app = express();
const PORT = 3000;

app.get('/api/eth-price', async (req, res) => {
  try {
    const response = await fetch('https://api.binance.com/api/v3/avgPrice?symbol=ETHUSDT');
    const data = await response.json();
    res.set('Access-Control-Allow-Origin', '*');
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch ETH price' });
  }
});

app.listen(PORT, () => {
  console.log(`Proxy server running on http://localhost:${PORT}`);
});
