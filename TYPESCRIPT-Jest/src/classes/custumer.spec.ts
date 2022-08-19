import { IndividualCustomer, EnterpriseCustomer } from "./custumer"

const createIndividualCustomer = ( firstName: string, lastName: string, cpf: string, cnpj:string): IndividualCustomer  => {
    return new IndividualCustomer(firstName,lastName, lastName, cnpj )
}

const createEnterpriseCustomer = ( name: string, cnpj:string): EnterpriseCustomer => {
    return new EnterpriseCustomer(name, cnpj)
}


describe('Individual customer', () => {
    afterEach(() => jest.clearAllMocks())  //limpar a cada mock 


    it('should return property firstName', () => {
        const sut = createIndividualCustomer('helen', 'souza', '4343.3535.35335.35', '3443434343'); 
        expect(sut).toHaveProperty('firstName')
        expect(sut.firstName).toBe('helen')
        expect(sut.lastName).toBe('souza')
    })
})


 describe('Enterprise customer', () => {
    afterEach(() => jest.clearAllMocks())

    it('should return property cnpj', () => {
        const sut = createEnterpriseCustomer('empresa ibm', '1234567891')
        expect(sut.cnpj).toHaveLength(10)
    })

    it('should return property name', () => {
        const sut = createEnterpriseCustomer('IBM', '1234567891')
        expect(sut.name).toBe('IBM')
    })

    
 })