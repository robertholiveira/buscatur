const controller = require('../controllers/trip');
const checkauth = require('../middleware/check-auth');
const uploadFiles = require('../middleware/upload');

module.exports = (app) => {

    app.get( "/api/trips",  controller.get_all);

    app.post( "/api/trips", checkauth, uploadFiles, controller.create );

    app.get( "/api/trips/:id" , controller.get_one);
    
    app.put( "/api/trips/:id", checkauth , controller.update);

    app.delete( "/api/trips/:id", checkauth , controller.delete);

}