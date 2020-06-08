const controller = require('../controllers/organizer');
const checkauth = require('../middleware/check-auth');

module.exports = (app) => {

  app.post( "/organizers/register", controller.register );

  app.post( "/organizers/login", controller.login );

  app.get( "/organizers", checkauth,  controller.get_all);

  app.get( "/organizers/:id", checkauth , controller.get_one);
  
  app.put( "/organizers/:id", checkauth , controller.update);

  app.delete( "/organizers/:id", checkauth , controller.delete);

}