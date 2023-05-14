const express = require('express');
const bodyParser = require('body-parser'); //middleware to parse incoming requests as JSON.
const cors = require('cors');
const helmet = require('helmet');
const compression = require('compression');

const database = require('./utils/database');
const contactRoutes = require('./routes/contactRoutes');

const app = express();

// Set up middleware
app.use(bodyParser.json());
app.use(cors());
app.use(helmet());
app.use(compression());

// Set up routes
// Inject the database connection into the contactRoutes module
app.use('/contacts', contactRoutes);

// Handle errors
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Internal Server Error');
});

// Start the server

const PORT = process.env.PORT || 4000;

database.sync({ force: true }).then(() => {
  app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });
});
/*
app.listen(4000,"localhost",()=>{

  console.log("server is running");
});*/
