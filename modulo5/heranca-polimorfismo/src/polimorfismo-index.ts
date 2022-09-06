// EX 1
export interface Client {
    name: string;
    // Refere-se ao nome do cliente
  
    registrationNumber: number;
    // Refere-se ao número de cadastro do cliente na concessionária
      // como se fosse um id
  
    consumedEnergy: number;
    // Refere-se à energia consumida pelo cliente no mês
  
    calculateBill(): number;
    // Retorna o valor da conta em reais
  }

  const client: Client = {
    name: "Bruno",
    registrationNumber: 1,
    consumedEnergy: 100,
    calculateBill: () => {
        return 2
    }
}
// a)Todas 4 propriedades foram impressas.

// EX 2
abstract class Place {
    constructor(protected cep: string) { }
  
    public getCep(): string {
      return this.cep;
    }
  }
  // a)Erro: Cannot create an instance of an abstract class.
 //  b)É necessário declarar uma classe filha e criar uma instância.

 // EX 3
 export class Residence extends Place {
    constructor(
        protected residentsQuantity: number,
        // Refere-se ao número de moradores da casa

        cep: string
    ) {
        super(cep);
    }

    public getResidentsQuantity(): number {
        return this.residentsQuantity;
    }

}
export class Commerce extends Place {
    constructor(
        protected floorsQuantity: number,
        // Refere-se à quantidade de andares do lugar

        cep: string
    ) {
        super(cep);
    }

    public getFloorsQuantity(): number {
        return this.floorsQuantity;
    }

}

export class Industry extends Place {
    constructor(
        protected machinesQuantity: number,
        // Refere-se à quantidade de máquinas do local 

        cep: string
    ) {
        super(cep);
    }

    public getMachinesQuantity(): number {
        return this.machinesQuantity;
    }

}

const residencia = new Residence(4, "12345-678")
console.log('CEP residencia:', residencia.getCep());
const comercio = new Commerce(7, "11111-222")
console.log('CEP comercio:', comercio.getCep());
const industria = new Industry(5, "33333-333")
console.log('CEP industria:', industria.getCep());
console.log('residentsQuantity:', residencia.getResidentsQuantity());
console.log('floorsQuantity:', comercio.getFloorsQuantity());
console.log('machinesQuantity:', industria.getMachinesQuantity());
 
// EX 4
class ResidentialClient extends Residence implements Client {
    constructor(
        public name: string,
        public registrationNumber: number,
        public consumedEnergy: number,
        private cpf: string,
        public cep: string,
        public residentsQuantity: number
    ) {
        super(residentsQuantity, cep)
    }

    public getCpf(): string {
        return this.cpf;
    }

    public calculateBill(): number {
        return this.consumedEnergy * 0.75;
    }

    public getResidentsQuantity(): number {
        return this.residentsQuantity
      }
}

//a) A classe ResidentialClient é filha de Residence, ela herda todos os atributos e métodos da classe Residence.

// EX 5
class CommercialClient extends Commerce implements Client {
    constructor(
        public name: string,
        public registrationNumber: number,
        public consumedEnergy: number,
        private cnpj: string,
        public cep: string,
        public floorsQuantity: number
    ) {
        super(floorsQuantity, cep)
    }

    public getCnpj(): string {
        return this.cnpj;
    }

    public calculateBill(): number {
        return this.consumedEnergy * 0.55;
    }

}
// a) Sao semelhantes pq herdam os mesmos atributos e ambas sao implementadas por uma interface client.
// b) Sao diferentes pq a classe CommercialClient herda o atributo floorsQuantity, pq é um comercio.

// EX 6
class IndustrialClient extends Industry implements Client {
    constructor(
        public name: string,
        public registrationNumber: number,
        public consumedEnergy: number,
        private industryNumber: string,
        public cep: string,
        public machinesQuantity: number
    ) {
        super(machinesQuantity, cep)
    }

    public getIndustryNumber(): string {
        return this.industryNumber;
    }

    public calculateBill(): number {
        return this.consumedEnergy * 0.45 + this.machinesQuantity * 100;
    }
}

// a) É filha de Industry, pois ela herda todos os atributos e métodos da classe Industry. E a classe IndustrialClient herda o atributo machinesQuantity, pois é uma indústria.

// b) Implementa a interface Client, porque ela herda todos os atributos e métodos da interface Client para que possa ser usada como um cliente.

// c) Pq so queremos os dados e infos do cliente