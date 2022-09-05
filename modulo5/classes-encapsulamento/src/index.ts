// EX 1
// a) Um construtor serve para instanciar objetos da classe na qual esse construtor foi definido

// b) Ocorre um erro pq falta o tipo Transaction. A mensagem é impressa uma vez no terminal
class UserAccount {
    private cpf: string;
    private name: string;
    private age: number;
    private balance: number = 0;
    private transactions: Transaction[] = [];

    constructor(
        cpf: string,
        name: string,
        age: number,
    ) {
        console.log("Chamando o construtor da classe UserAccount")
        this.cpf = cpf;
        this.name = name;
        this.age = age;
    }

    public getTransaction() {
        this.transactions
    }

    public setTransaction(transaction: Transaction) {
        this.transactions.push(transaction)

    }
}
// c) Com os getters

// EX 2

class Transaction {
    private description: string;
    private value: number;
    private date: string;

    constructor(date: string, value: number, description: string) {
        this.description = description;
        this.value = value;
        this.date = date;
    }

    public getDescription(): string {
        return this.description
    }

    public getValue(): number {
        return this.value
    }

    public getDate(): string {
        return this.date
    }
}

// EX 3
class Bank {
    private accounts: UserAccount[];
  
    constructor(accounts: UserAccount[]) {
      this.accounts = accounts;
    }
  
    public getCpf(){
      return this.accounts
    }
  }
  
  const newAccount = new UserAccount('123.456.789-10', 'Bruno', 35);
  const transaction1 = new Transaction('depósito', 100, '28/12/2022');
  const transaction2 = new Transaction('conta do telefone', 250, '05/09/2022');
  newAccount.setTransaction(transaction1);
  newAccount.setTransaction(transaction2);
  const bank = new Bank([newAccount]);
  console.log(bank.getCpf())