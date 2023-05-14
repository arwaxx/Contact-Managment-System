const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const database = require('./src/utils/database.js');
const contactRoutes = require('./src/routes/contactRoutes.js');

// Set up body-parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Set up database connection 
database.connect();

// Set up contact routes 

app.use('/contacts', contactRoutes);

// Start the server

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});

/*app.listen(4000,"localhost",()=>{

  console.log("server is running");
});*/
