const controller = require('../controllers/user');
const checkauth = require('../middleware/check-auth');

module.exports = (app) => {

  app.post( "/users/register", controller.register );

  app.post( "/users/login", controller.login );

  app.get( "/users", checkauth,  controller.get_all);

  app.post( "/users/:id/trips", checkauth,  controller.favorite_trip);
  
  app.get( "/users/:id", checkauth , controller.get_one);
  
  app.put( "/users/:id", checkauth , controller.update);

  app.delete( "/users/:id", checkauth , controller.delete);

}