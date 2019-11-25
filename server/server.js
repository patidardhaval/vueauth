const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;
app.all('*', function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.header('Access-Control-Allow-Headers', '*');
    next();
});
app.get('/users', (req, res) => {
    return res.send('GET HTTP method on user resource');
});
app.post('/products', (req, res) => {
    let products = {};
    products.data = [{
        name: "prod1",
        image: "https://png.pngtree.com/png-clipart/20190705/original/pngtree-user-icon-vector-illustration-in-glyph-style-for-any-purpose-png-image_4246274.jpg",
        detail: "details"
    }, {
        name: "prod1",
        image: "https://png.pngtree.com/png-clipart/20190705/original/pngtree-user-icon-vector-illustration-in-glyph-style-for-any-purpose-png-image_4246274.jpg",
        detail: "details"
    }]
    res.json(products);
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
