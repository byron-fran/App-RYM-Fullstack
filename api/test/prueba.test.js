const {sumar, unArray} = require('../index');
//Y que son los test AAA?


describe('suma de numeros', () => {
    test('tiene que ser un numero', () => {
        expect(sumar( 2,3)).toBe(5);

    });
    test('el array no debe de tener mas de 5 elementos', () => {
        expect(unArray()).toHaveLength(5);
       
    })
  
    
})
