const controller = require('../controllers/auth');
const checkauth = require('../middleware/check-auth');

module.exports = (app) => {

    app.get( "/api/verify-token", controller.verifyToken );
    
};

