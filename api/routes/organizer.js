const controller = require('../controllers/organizer');
const checkauth = require('../middleware/check-auth');

module.exports = (app) => {

  app.post( "/api/organizers/register", controller.register );

  app.post( "/api/organizers/login", controller.login );

  app.get( "/api/organizers", checkauth,  controller.get_all);

  app.get( "/api/organizers/:id", checkauth , controller.get_one);
  
  app.put( "/api/organizers/:id", checkauth , controller.update);

  app.delete( "/api/organizers/:id", checkauth , controller.delete);

}