export type extract = {
    value: number;
    date: number;
    description: string;
  };
  
  export type account = {
    cpf: string;
    name: string;
    birthDate: string | Date;
    balance: number;
    statement: extract[];
  };
  
  export let accounts: account[] = [
    {
      name: "Bruno Monteiro",
      cpf: "11727716779",
      birthDate: "2020-04-30T00:00:00.000Z",
      balance: 2000,
      statement: [
        {
          value: 1000,
          date: 1610154121076,
          description: "Depósito de dinheiro",
        },
        {
          value: 1000,
          date: 1610154141962,
          description: "Depósito de dinheiro",
        },
      ],
    },
    {
      name: "Mariana Rodrigiues",
      cpf: "11456716779",
      birthDate: "1980-02-10T00:00:00.000Z",
      balance: 0,
      statement: [],
    },
    {
      name: "Davi Figueiredo",
      cpf: "36985147879",
      birthDate: "2000-09-25T00:00:00.000Z",
      balance: 0,
      statement: [],
    },
    {
      name: "Lara Alves",
      cpf: "11456147879",
      birthDate: "1998-11-17T00:00:00.000Z",
      balance: 0,
      statement: [],
    },
  ];