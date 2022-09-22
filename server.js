const express = require('express');                         //Pull in the express library

const PORT = process.env.PORT || 3001;                      //Look up port in the environment variable, default 3001

const app = express();

const apiRoutes = require('./routes/apiRoutes');            //Link to API routes
const htmlRoutes = require('./routes/htmlRoutes');          //Link to HTML routes

app.use(express.urlencoded({ extended: true }));            //Converts POST data to key value pairing
app.use(express.static('public'));                          //Creates a static folder for access
app.use(express.json());                                    //Parse incoming JSON data

app.use('/api', apiRoutes);                                 //Pull in the API routes
app.use('/', htmlRoutes);                                   //Pull in the HTML routes

app.listen(PORT, () => {                                    //Listens to the PORTs
    console.log(`API server now on port ${PORT}.`);
});