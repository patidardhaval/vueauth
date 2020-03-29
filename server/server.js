const express = require('express');
const cors = require('cors');
const app = express();

const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://root:Dhaval123%23@cluster0-jswyk.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true,useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
})

const PORT = 3000;
app.all('*', function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.header('Access-Control-Allow-Headers', '*');
    next();
});
app.get('/users', (req, res) => {
        products.find({}, function(err, products) {
           console.log(products)
        });
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
