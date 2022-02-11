const express = require('express');
const app = express();

require("dotenv").config();
const cors = require('cors');
const AppRouter = require('./src/controllers');
app.use(cors())

const mongo = require('./src/mongo');
const port = 5001;
app.listen(port, () => {
  console.log(`servidor iniciado en http://localhost:${port}`)
})

app.use(express.json());
app.use('/api', AppRouter);


