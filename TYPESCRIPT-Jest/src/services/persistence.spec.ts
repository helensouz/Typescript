import { Persistence } from './persistence'


describe('persistency', () => {
    afterEach(() => jest.clearAllMocks())  //limpar a cada mock 


    it('should return undefined', () => {
        const sut = new Persistence(); //classe a ser testado
        expect(sut.saveOrder()).toBeUndefined() //testando o retorno do metodo


    })

    it('should call console.log once', () => {
        const sut = new Persistence(); //classe a ser testado
       const consoleSpy = jest.spyOn(console, 'log')
       sut.saveOrder() 
       expect(consoleSpy).toHaveBeenCalledTimes(1) // retorno chamado 1 vez 
    })
    it('should call console.log once', () => {
        const sut = new Persistence(); //classe a ser testado
       const consoleSpy = jest.spyOn(console, 'log')
       sut.saveOrder() 
       expect(consoleSpy).toHaveBeenCalledTimes(1) // retorno chamado 1 vez 
    })

    it('should call console.log with -> pedido salvo com sucesso...', () => {
        const sut = new Persistence(); //classe a ser testado
       const consoleSpy = jest.spyOn(console, 'log')
       sut.saveOrder() 
       expect(consoleSpy).toHaveBeenCalledWith('pedido salvo com sucesso...') // retorno chamado 1 vez 
    })
})