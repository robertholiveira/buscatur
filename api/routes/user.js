const controller = require('../controllers/user');
const checkauth = require('../middleware/check-auth');

module.exports = (app) => {

  app.post( "/api/users/register", controller.register );

  app.post( "/api/users/login", controller.login );

  app.get( "/api/users", checkauth,  controller.get_all);

  app.post( "/api/users/:id/trips", checkauth,  controller.favorite_trip);
  
  app.get( "/api/users/:id", checkauth , controller.get_one);
  
  app.put( "/api/users/:id", checkauth , controller.update);

  app.delete( "/api/users/:id", checkauth , controller.delete);

}