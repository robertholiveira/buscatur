const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");

let db = require("../models");

exports.register = async (req, res) => {
    
    try {
        
        let user = await db.user.findOne({ where: { email: req.body.email }});

        if(user)
            return res.status(401).json({status: 401, message: 'Usuário já cadastrado.'});
      
        const hashedPassword = bcrypt.hashSync(req.body.password, 8);
        
        user = await db.user.create({
          name : req.body.name,
          email : req.body.email,
          phone: req.body.phone,
          password : hashedPassword,
        });

        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
            expiresIn: 86400 
        });

        res.status(200).json({ 
            auth: true,
            user: {
                name: user.name,
                email: user.email,
                id: user.id
            }, 
            token: token 
        });

    } catch (error) {
        console.log(error);
        return res.status(500).send("There was a problem registering the user.")
    }

};


exports.login = async (req, res) => {

    try {

        let user = await db.user.findOne({ where: { email: req.body.email }});

        if (!user) return res.status(401).json({status: 404, message: 'Usuário ou senha incorretos.'});

            
        let passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
        if (!passwordIsValid) return res.status(401).json({ auth: false, token: null, message: 'Usuário ou senha incorretos.' });
            
        let token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
            expiresIn: 86400 // expires in 24 hours
        });
            
        res.status(200).json({ 
            auth: true,
            user: {
                name: user.name,
                email: user.email,
                id: user.id
            }, 
            token: token 
        });
        
    } catch (error) {
       
        console.log(err);
        return res.status(500).send('Error on the server.');

    }
    
};

exports.get_all = async (req, res) => {
    const users = await db.user.findAll();
    res.json(users);
}
    
exports.get_one = async (req, res) => {
    user_id = req.params.id;
    const user = await db.user.findByPk(user_id, {
        include: [{
            model: db.trip,
            as: 'favoriteTrips',
            required: false,
            through: { attributes: ['id', 'title'] }
        }]
    });
    res.json(user);
}

exports.update = (req, res) => {
    db.user.update({
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
    db.user.destroy({
        where: {
          id: req.params.id
        }
    }).then( (result) => res.json(result) );
}


exports.favorite_trip = async (req, res) => {
    try {
        const { id } = req.params;

        const favorite_trip = await db.favorite.create({
            userId: id,
            tripId: req.body.tripId
        });

        return res.status(200).json(favorite_trip);

    } catch (err) {
        console.log(err)
        return res.status(500).json({ err });
    }
};
