import {Messaging} from './messagins'
import { Persistence } from './persistence'

const createSut = () => {
    return new Messaging()
}

describe('Messaging', () => {
    afterEach(() => jest.clearAllMocks())  //limpar a cada mock 


    it('should return undefined', () => {
        const sut = createSut(); //classe a ser testado
        expect(sut.sendMessage('teste')).toBeUndefined() //testando o retorno do metodo


    })

    it('should call console.log once', () => {
        const sut = createSut(); //classe a ser testado
       const consoleSpy = jest.spyOn(console, 'log')
       sut.sendMessage('teste') 
       expect(consoleSpy).toHaveBeenCalledTimes(1) // retorno chamado 1 vez 
    })
    it('should call console.log once', () => {
        const sut = createSut(); //classe a ser testado
       const consoleSpy = jest.spyOn(console, 'log')
       sut.sendMessage('teste') 
       expect(consoleSpy).toHaveBeenCalledTimes(1) // retorno chamado 1 vez 
    })

    it('should call console.log with "mensagem enviada and" msg', () => {
        const sut = createSut(); //classe a ser testado
       const consoleSpy = jest.spyOn(console, 'log')
       sut.sendMessage('teste') 
       expect(consoleSpy).toHaveBeenCalledWith('mensagem enviada: ', 'teste') // retorno chamado 1 vez 
    })
})


