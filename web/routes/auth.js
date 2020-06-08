const controller = require('../controllers/auth');
const checkauth = require('../middleware/check-auth');

module.exports = (app) => {

    app.get( "/verify-token", controller.verifyToken );
    
};

