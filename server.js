const express = require('express');                         //Imports Server

const PORT = process.env.PORT || 3001;                      //Select port
const app = express();                                      //Express to app
// const apiRoutes = require('./routes/apiRoutes');            //Call the API Routes
const htmlRoutes = require('./routes/htmlRoutes');          //Call the HTML Routes


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));                          //Creates the static folder, allows for the use of all folders

// app.use('/api', apiRoutes);                                 //API Routes, will be straight JSON
app.use('/', htmlRoutes);                                   //This will load pages

app.listen(PORT, () =>{                                     //This is going to listen to the server, confirms that it is working as expected
    console.log(`API server is now on port ${PORT}`)
})