const express = require('express');
const mongoose = require('mongoose');
import bodyParser from "body-parser";
const app = express();
const port = 5000;

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => app.listen(PORT), console.log(`App is launched on http://localhost:${PORT}`))
  .catch((err) => console.log(err));

app.set("view engine", "ejs");
app.set("views", "./views");

app.use(express.static("public"));

app.get('/', (req, res) => {
    
    res.render("home");
});

app.listen(port, () => {
    console.log(`Now listening on port ${port}`); 
});