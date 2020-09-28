var Bicicleta =  require('../../models/bicicleta');
const router = require('../../routes/bicicletas');

exports.bicicleta_list = function(req, res){
    res.status(200).json({
        bicicletas: Bicicleta.allBicis
    })
}

