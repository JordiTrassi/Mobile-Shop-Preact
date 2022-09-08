import { verifyInputValue } from '../../src/helpers/verifyInputValue';


describe('Pruebas en verifyInputValue', () => {

    test('Debe retornar los strings en minúscula y dentro de un array', () => {
      
        const inputValue = " FABRIcante mODELo ";

        const newArrayTestedValue = verifyInputValue(inputValue);
         
        expect(newArrayTestedValue).toStrictEqual([ 'fabricante', 'modelo' ]);

    });
    
});
