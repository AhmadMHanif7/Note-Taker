const router = require('express').Router();

const noteRoutes = require('../apiRoutes/noteRoutes');

router.use(noteRoutes);                                         //middleware for the routes which are being served by the specific router

module.exports = router;