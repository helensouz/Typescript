//testando assercoes

describe('Primitive values', () => {

    it('should test jest assertions', () => {
        const number = 10
        expect(number).toBeGreaterThanOrEqual(10) //maior ou igual
        expect(number).toBeLessThanOrEqual(10)
    })
    //dividindo testes dentro de um descibre
    it('should split ', () => {
        const number = 10
        expect(number).toBeCloseTo(10, 1)
        expect(number).not.toBeNull()
    })


})

describe('Objects', () => {
    it('should test jest assertions with objcts', () => {
        const person = {name: 'helen', age: 20};
        const anotherPerson = {...person}

        expect(person).toEqual(anotherPerson)
        expect(person).toHaveProperty('age')
        expect(person).toHaveProperty('age', 20)
    })
})

 