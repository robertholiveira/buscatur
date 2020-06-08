let express = require('express');
let bodyParser = require('body-parser');
let faker = require("faker");
const path = require("path");
let times = require("lodash.times");

let db = require("./models");

let authRoutes = require("./routes/auth");
let userRoutes = require("./routes/user");
let organizerRoutes = require("./routes/organizer");
let tripRoutes = require("./routes/trip");

// Initialize the app
let app = express();

// Configure bodyparser to handle post requests
app.use(bodyParser.json({limit: '10mb', extended: true}))
app.use(bodyParser.urlencoded({limit: '10mb', extended: true, parameterLimit: 1000000 }))


// configuração de headers
app.use((req, res, next) =>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Request-With, Content-Type, Accept, Authorization');
    if(req.method === 'OPTIONS'){
        res.setHeader('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        res.status(200).json({});
    }
    next();
});

app.use(
    "/files",
    express.static(path.resolve(__dirname, "..", "tmp", "uploads"))
);


// Set default API response
app.get('/api', function (req, res) {
    res.json({
        status: 'API Its Working',
        message: 'Welcome to RESTHub crafted with love!',
    });
});

authRoutes(app);
userRoutes(app);
organizerRoutes(app);
tripRoutes(app);

db.sequelize.sync().then(() => {
    /*
    // populate post table with dummy data
    db.user.bulkCreate(
        times(10, () => ({
            name: faker.name.firstName(),
            phone: faker.phone.phoneNumber(),
            date: faker.date.past()
        }))
    );
    */
    // Setup server port
    var port = process.env.PORT || 5000;
    app.listen(port, () => console.log("App listening on port 8080!"));
});