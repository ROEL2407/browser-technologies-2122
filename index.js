const express = require('express');
const mongoose = require('mongoose');
const Enquete = require('./models/enquete.js');
const bodyParser = require('body-parser');

const app = express();
const port = 5000;

const dbURL = "mongodb+srv://admin:Roel1911@browser-tech.423rf.mongodb.net/browser-tech?retryWrites=true&w=majority";

mongoose.connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => app.listen(port), console.log(`App is launched on http://localhost:${port}`))
  .catch((err) => console.log(err));

app.set("view engine", "ejs");
app.set("views", "./views");

app.use(express.static("public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    
    res.render("home");
});

// ingevulde enquete opslaan
// redirect naar /end
app.post('/', (req, res) => {
    console.log(req.body);
    const enquete = new Enquete(req.body)
  
    enquete.save()
      .then((result) => {
        res.redirect('/')
      })
      .catch((err) => {
        console.log(err);
      });
  });