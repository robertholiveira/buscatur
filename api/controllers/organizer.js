const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");

let db = require("../models");

exports.register = async (req, res) => {
    
    try {
        
        let organizer = await db.organizer.findOne({ where: { email: req.body.email }});

        if(organizer)
            return res.status(401).send("Organizador já cadastrado.");
      
        const hashedPassword = bcrypt.hashSync(req.body.password, 8);
        
        organizer = await db.organizer.create({
          name : req.body.name,
          email : req.body.email,
          phone: req.body.phone,
          password : hashedPassword,
          instagram: req.body.instagram,
          description: req.body.description
        });

        const token = jwt.sign({ id: organizer.id }, process.env.JWT_SECRET, {
            expiresIn: 86400 
        });

        res.status(200).send({ auth: true, token: token });

    } catch (error) {
        console.log(error);
        return res.status(500).send("Houve um problema ao registrar organizador")
    }

};


exports.login = async (req, res) => {

    try {

        let organizer = await db.organizer.findOne({ where: { email: req.body.email }});

        if (!organizer) return res.status(404).send('Organizador não encontrado.');
            
        let passwordIsValid = bcrypt.compareSync(req.body.password, organizer.password);
        if (!passwordIsValid) return res.status(401).send({ auth: false, token: null });
            
        let token = jwt.sign({ id: organizer.id }, process.env.JWT_SECRET, {
            expiresIn: 86400 // expires in 24 hours
        });
            
        res.status(200).send({ auth: true, token: token });
        
    } catch (error) {
       
        console.log(err);
        return res.status(500).send('Error on the server.');

    }
    
};

exports.get_all = async (req, res) => {
    const organizers = await db.organizer.findAll();
    res.json(organizers);
}
    
exports.get_one = async (req, res) => {
    organizer_id = req.params.id;
    const organizer = await db.organizer.findByPk(organizer_id);
    res.json(organizer);
}

exports.update = (req, res) => {
    db.organizer.update({
            title: req.body.title,
            content: req.body.content
        },
        {
        where: {
            id: req.params.id
        }
    })
    .then( (result) => res.json(result) );
}

exports.delete = (req, res) => {
    db.organizer.destroy({
        where: {
          id: req.params.id
        }
    }).then( (result) => res.json(result) );
}

