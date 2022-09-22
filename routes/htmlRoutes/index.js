const router = require('express').Router();                                 //Brings in router from express
const path = require('path');                                               //Brings in the path module

router.get('/', (req,res) => {                                              //Homepage pulled from the public folder
    res.sendFile(path.join(__dirname, '../../public/index.html'))
});

router.get('/notes', (req,res) => {                                         //Notes page pulled from the public folder
    res.sendFile(path.join(__dirname, '../../public/notes.html'))
});

router.get('*', (req,res) => {                                              //Wildcard directed to homepage from the public folder
    res.sendFile(path.join(__dirname, '../../public/index.html'))
});

module.exports = router;                                                    //Experts the router