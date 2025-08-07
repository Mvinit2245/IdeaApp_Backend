//server file

const express = require('express');
const app = express();
const port = 7070;

app.use(express.json());


// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

const idea_route = require("./routes/ideas.routes.js")
app.use("/ideas_app/v1", idea_route);


app.listen(port, () => {
  console.log(`server started on port ${port}`)
})