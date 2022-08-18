describe('testando alguma coisa', () => { //agrupa os testes

    it('should return one(it)', () => {
        const number = 1 ; //espero que o number seja 1
        expect(number).toBe(1)
    }); 
    
    
    test('should return one(test)', () => {
        const string = 'helen' ; //espero que o number seja 1
        expect(string).toBe('helen')
    })
})


