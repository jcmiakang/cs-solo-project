const express = require('express');
const app = express();
const path = require('path');
const apiRouter = require('./routes/api');
const controllers = require('./controllers/controllers');

const PORT = 3000;

// handle parsing req.body from json
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

if (process.env.NODE_ENV === 'production') {
  // statically serve everything in the build folder on the route '/build'
  app.use('/build', express.static(path.join(__dirname, '../build')));

  // serve index.html on the route '/'
  app.get('/', (req, res) => {
    return res.status(200).sendFile(path.join(__dirname, '../src/index.html'));
  });
}

// use all defined routes to middleware functions
app.use(
  '/api',
  // (req, res, next) => {
  //   console.log('SAM IN SERVER', req.params);
  //   return next();
  // },
  apiRouter
);

// catch-all for route handler for any requests to unknown routes
app.use((req, res) =>
  res.status(404).send("This is not the page you're looking for...")
);

app.listen(PORT, () => console.log(`server running on ${PORT}`)); //listens on port 3000 -> http://localhost:3000/

module.exports = app;
