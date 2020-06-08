const jwt = require("jsonwebtoken");

let db = require("../models");

exports.verifyToken = (req, res) =>{
    try{
        
        if(req.headers.authorization){
            const token = req.headers.authorization.split(" ")[1];
            const decoded = jwt.verify(token, process.env.JWT_KEY);  
                if(decoded) {
                    res.status(200).json({
                    message: 'Token válido',
                    decoded: decoded
                })
            }
        }
        else{
            res.status(401).json({
                message: 'Empty token'
            })
        }
    } 
    catch(error){
        console.log(error)
        return res.status(401).json({
            message: 'Falha na autenticação',
            error: error
        });
    }
}