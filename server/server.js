const express = require('express');
const cors = require('cors')
const app = express();
const PORT = 3000;

if (NODE_ENV !== 'production') {
   app.use(cors())
}

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