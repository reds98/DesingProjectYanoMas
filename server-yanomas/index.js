const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const db = require('./queries')
const port = 3030;

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.get("/", (request, response) => {
  response.json({ info: "Node.js, Express, and Postgres API" });
});
app.get('/users', db.getUsers)
app.get('/users/:id', db.getUserById)
app.post('/users', db.createUser)
app.post('/alerts', db.createAlert)
app.post('/login', db.getUserByIdAndPassword)
app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});
