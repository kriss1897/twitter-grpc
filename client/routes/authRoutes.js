// requirements
const express = require('express');
const grpcRoutes = require('./grpcRoutes');

// new router
const router = express.Router();

// routes
router.post('/login', grpcRoutes.login);
router.post('/register', grpcRoutes.register);

module.exports = router;