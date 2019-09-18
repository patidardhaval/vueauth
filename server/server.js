const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

// Enable CORS
app.all('/*', function(req, res, next) {
  // CORS headers
  res.header("Access-Control-Allow-Origin", "*"); // restrict it to the required domain
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  // Set custom headers for CORS
  res.header('Access-Control-Allow-Headers', 'Content-type,Accept,X-Access-Token,X-Key');
  if (req.method == 'OPTIONS') {
    res.status(200).end();
  } else {
    next();
  }
});

app.get('/users', (req, res) => {
  return res.send('GET HTTP method on user resource');
});
app.post('/login', (req, res) => {
	let login = {}
	login.success = true;
	login.message = "User Login successfully.", 
	login.data = {};
	login.data.token = 123, 
    res.json(login);
});

app.listen(PORT, () => console.log(`Express server currently running on port ${PORT}`));