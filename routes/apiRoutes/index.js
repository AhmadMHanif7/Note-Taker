const router = require('express').Router();
const notesRoute = require('./notesRoutes');    //Requires the noteRoutes

router.use(notesRoutes);                        //calls the notesRoutes

module.exports = router;                        //Exports the router