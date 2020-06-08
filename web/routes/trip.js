const controller = require('../controllers/trip');
const checkauth = require('../middleware/check-auth');

module.exports = (app) => {

    app.get( "/trips", checkauth,  controller.get_all);

    app.post( "/trips", checkauth, controller.create );

    app.get( "/trips/:id", checkauth , controller.get_one);
    
    app.put( "/trips/:id", checkauth , controller.update);

    app.delete( "/trips/:id", checkauth , controller.delete);

}