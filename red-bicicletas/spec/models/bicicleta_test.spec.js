var Bicicleta = require('../../models/bicicleta');

beforeEach( () => { Bicicleta.allBicis = []; });




describe('Bicicletas.allBicis' , () => {
    it('comienza vacio' , () => {
        expect(Bicicleta.allBicis.length).toBe(0);
    });
});



describe('Bicicleta.add', () => {
    it('agregamos una' , () => {
        expect(Bicicleta.allBicis.length).toBe(0);

        var a = new Bicicleta(1, 'rojo', 'urbana', [-31.4485668,-64.1849058,19]);
        expect(Bicicleta.add(a));

        expect(Bicicleta.allBicis.length).toBe(1);
        expect(Bicicleta.allBicis[0]).toBe(a);

    });
});

describe('Bicicleta.FindById', () => {
    it('debe devolver la bici con id = 1' , () => {
        expect(Bicicleta.allBicis.length).toBe(0);
        var aBici = new Bicicleta(1 , 'verde', 'urbana');
        var aBici2 = new Bicicleta(2 , 'rojo', 'montaña');

        expect(Bicicleta.add(aBici));
        expect(Bicicleta.add(aBici2));

        var targetBici = Bicicleta.findById(1);
        expect(targetBici.id).toBe(1);
        expect(targetBici.color).toBe(aBici.color);    
        expect(targetBici.modelo).toBe(aBici.modelo); 
        expect(Bicicleta.allBicis.length).toBe(2);


    });
});

describe('Bicicleta.removeById', () => {
    it('eliminamos el elemento id = 5', () => {
        expect(Bicicleta.allBicis.length).toBe(0);
        var aBici = new Bicicleta(1 , 'verde', 'urbana');
        var aBici2 = new Bicicleta(5 , 'rojo', 'montaña');
        expect(Bicicleta.add(aBici));
        expect(Bicicleta.add(aBici2));
        
        expect(Bicicleta.removeById(5));
        //expect(Bicicleta.findById(5));
        expect(Bicicleta.allBicis.length).toBe(1);

    });
});