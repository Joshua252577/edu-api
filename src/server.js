const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const PORT = 4000;

const app = express();

app.use(cors({
  credentials: true,
  origin: true
}));

app.options('*', cors());

app.use(express.json());
app.use(routes)
app.listen(process.env.PORT || PORT, () => {
  console.log(`API education is on ${PORT}`);
})