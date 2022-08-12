/**
 * Criar com classes
 * criar um sistema de votacao com opcoes de linguagem de programacao
 * e de cor preferida
 * criar apenas 1 estrutura de dados 
 * 
 * 
 * 
 */
type VotationOptions = {
    numberOfvotes: number;
    option: string;
};

export class Votation {
    private _votationOptions: VotationOptions[] = [];
    constructor(public details: string ){}


    addVotationOption(votationOption: VotationOptions):void {
        this._votationOptions.push(votationOption)
    }

    vote(votationIndex: number): void{
        if(!this._votationOptions[votationIndex]) return;
        this._votationOptions[votationIndex].numberOfvotes += 1 
    }

    get votationOption(): VotationOptions[]{
        return this._votationOptions
    }
}

    export class VotationApp {
    private votations: Votation[] = [];

    addVotation(votation: Votation): void{
        this.votations.push(votation)
    }

    showVotations(): void{
        for(const votation of this.votations){
            console.log(votation.details);
            for(const votationOption of votation.votationOption){
                console.log(votationOption.option, votationOption.numberOfvotes)
            }

            console.log('/////')
        }
    }
}

const votation1 = new Votation('qual sua linguagem de programacao favorita? ')
votation1.addVotationOption({option: 'Python', numberOfvotes: 5})
votation1.addVotationOption({option: 'Javascript', numberOfvotes: 10})
votation1.addVotationOption({option: 'C', numberOfvotes: 0})

votation1.vote(1)

const votationApp = new VotationApp();
votationApp.addVotation(votation1)

votationApp.showVotations()