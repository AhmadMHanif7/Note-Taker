const path = require('path');
const router = require('express').Router();

router.get('/', (req,res) => {                                      //Home page linked to html
    res.sendFile(path.join(__dirname, '../../public/index.html'));
});

router.get('/notes', (req,res) => {                                 //Note page linked to html
    res.sendFile(path.join(__dirname, '../../public/notes.html'));
});

router.get('*', (req,res) => {                                      //Wild card linked to home html
    res.sendFile(path.join(__dirname, '../../public/index.html'));
});

module.exports = router;                                            //Exports the router