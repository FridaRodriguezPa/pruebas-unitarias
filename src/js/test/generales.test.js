

describe('Probando Jest', () =>{
   
    test('Prueba de dos objetos iguales', () => {
       
        const datos = {
            nombre: 'Carlos Eduardo',
            edad: 31
        };
       
        const datos2 = {
            nombre: 'Carlos Eduardo',
            edad: 31
        };
       
        expect(datos).toEqual(datos2);
    })
});