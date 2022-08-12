//construtores privados
//Singleton - GoF | factory method - gof 
//singleton -> criar apenas uma instancia de metoodo
export class Database{
   private static database: Database;

    private constructor( 
         private host: string, 
         private user: string,
         private password: string)
    {}


    conect(): void{
        console.log(`conectando: ${this.host}, ${this.user}, ${this.password}`)
    }

    static getDatabase(host: string, user: string, password: string ): Database{
        if(Database.database){
            console.log('Retornando instancia ja criada')
            return Database.database
        } 
        console.log('criando nova instancia');
        Database.database = new Database(host, user, password)
        return Database.database
    }
}


const db1 =  Database.getDatabase('localhost', 'root', '12345')
db1.conect()

const db2 = Database.getDatabase('localhost', 'root', '6789')
db2.conect()



