var Bicicleta = require('../../models/bicicleta');
var request = require('request');
const { response } = require('express');
var server = require('../../bin/www');

// beforeEach( () => { console.log('testeando...')});
beforeEach( () => { 'testeando...'});

describe('Bicicleta API', ()=> {
    describe('GET BICICLETAS', ()=> {
        it('Status 200', ()=> {
            expect(Bicicleta.allBicis.length).toBe(0);

            var a = new Bicicleta(1, 'rojo', 'urbana', [-31.4485668,-64.1849058,19]);
            Bicicleta.add(a);

            request.get('http://localhost:5000/api/bicicletas' , function(error, response, body){
                expect(response.statusCode).toBe(200);


            });
        });
    });

    describe('POST BICICLETAS /create', ()=> {
        it('STATUS 200', (done)=> {
            var headers = {'content-type' : 'application/json'};
            var aBici = '{ "id": 10, "color": "rojo", "modelo": "urbana", "lat": -34, "lng": -54}';
            request.post({
                headers: headers,
                url: 'http://localhost:5000/api/bicicletas/create',
                body:   aBici
            },function(error, response, body){
                expect(response.statusCode).toBe(200);
                expect(Bicicleta.findById(10).color).toBe("rojo");
                done();

            });
        });
    });
});

