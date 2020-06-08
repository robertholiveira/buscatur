let db = require("../models");

exports.create = async (req, res) => {
    
    try {   

        console.log(req.body)
        let {
            title,
            description,
            price, 
            date_departure,
            date_back,
            destination,
            origin,
            have_tours,
            have_lunch,
            have_dinner,
            have_breakfast,
        } = req.body;    

        if(price <= 0)
            return res.status(401).json({ message: 'Preço de excursão deve ser maior que 0.'});
        
        let now = new Date();
        date_departure = new Date(date_departure);
        date_back = new Date(date_back);
        console.log(date_back)
        console.log(date_departure)
        if(isNaN(date_departure) || isNaN(date_back))
            return res.status(401).json({ message: 'Data de ida ou volta inválida.' });
    
        if(now > date_departure || now > date_back)
            return res.status(401).json({ message: 'Data de ida ou volta anterior à hoje.' });



        let trip = await db.trip.create({
            title: title,
            description: description,
            price: price,
            date_departure: date_departure,
            date_back: date_back,
            destination: destination,
            origin: origin,
            have_tours: have_tours,
            have_lunch: have_lunch,
            have_dinner: have_dinner,
            have_breakfast: have_breakfast,
            organizerId: req.userData.id
        });


        /* criando upload */
        let files = req.files.map( async file => {
            const { originalname: name, size, key, location: url = "" } = file;
            
            let media = await db.media.create({
                tripId: trip.id,
                name: name,
                size: size,
                key: key,
                url: url
            });
            return media;
        });

        files = await Promise.all(files);

        return res.status(200).json({ message: 'Excursão criada com sucesso.', trip: trip});

    } catch (error) {

        console.log(error);
        return res.status(500).send("Houve um problema ao registrar excursão.");

    }

};



exports.get_all = async (req, res) => {
    const trips = await db.trip.findAll({ include : [{ model: db.media, as: 'gallery'}] });
    res.json(trips);
}
    
exports.get_one = async (req, res) => {
    trip_id = req.params.id;
    const trip = await db.trip.findByPk(trip_id, { include : [{ model: db.media, as: 'gallery'}, { model: db.organizer, as: 'organizer'} ] });
    res.json(trip);
}

exports.update = (req, res) => {
    db.trip.update({
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
    db.trip.destroy({
        where: {
          id: req.params.id
        }
    }).then( (result) => res.json(result) );
}