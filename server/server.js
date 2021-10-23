const express = require('express')
const yokatlasapi = require('yokatlas-api')

const app = express()
const cors = require('cors')
const port = 3001

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.post('/yokatlas', (req, res) => {
  new yokatlasapi(req.body).search(results => res.json(results))
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})