// / Herança 

// EX 1
class User {
    private id: string;
    private email: string;
    private name: string;
    private password: string;

    constructor(
        id: string,
        email: string,
        name: string,
        password: string
    ) {
        console.log("Chamando o construtor da classe User")
        this.id = id
        this.email = email
        this.name = name
        this.password = password
    }

    public getId(): string {
        return this.id
    }

    public getEmail(): string {
        return this.email
    }

    public getName(): string {
        return this.name
    }

// EX 4 e 5
    public introduceYourself(): string {
        return `Olá, sou ${this.name}. Bom dia!`
    }
}
// EX 1
const newUser = new User("001", "bruno@gmail.com", "Bruno", "12345")
console.log(newUser.getId())
console.log(newUser.getEmail())
console.log(newUser.getName())

// a) Não é possível pois o password é privado e não teria como acessar fora da classe.
// b) Ela aparece apenas uma vez

// EX 2
class Customer extends User {
    public purchaseTotal: number = 0;
    private creditCard: string;

    constructor(
        id: string,
        email: string,
        name: string,
        password: string,
        creditCard: string
    ) {
        super(id, email, name, password);
        console.log("Chamando o construtor da classe Customer");
        this.creditCard = creditCard;
    }

    public getCreditCard(): string {
        return this.creditCard;
    }
}

const newCustomer = new Customer("001", "bruno@gmail.com", "Bruno", "111111", "11111122222333334444455555")

// a) Ela aparece apenas uma vez
// b) Ela aparece apenas uma vez pq user é herdada do customer e o construtor da classe user é chamado primeiro.

// EX 3
console.log(newCustomer.getId())
console.log(newCustomer.getEmail())
console.log(newCustomer.getName())
console.log(newCustomer.purchaseTotal)
console.log(newCustomer.getCreditCard())
//a) Não é possível pois ela é privada e não conseguimos acessar fora da classe.

// EX 4
console.log(newCustomer.introduceYourself())
