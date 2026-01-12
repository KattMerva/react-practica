export interface Hero {
    id: number;
    name: string;
    owner: Owner;
}

// type Owner = 'DC' | 'Marvel'; // Valores especificos 

export enum Owner {
    DC = "DC",
    Marvel = "Marvel",
}

// Poner "export" antes de una función le da
// la habilidad de poder exportarse tradicionalmente
export const heroes: Hero[] = [
    {
      id: 1,
      name: 'Batman',
      owner: Owner.DC,
    },
    {
      id: 2,
      name: 'Spiderman',
      owner: Owner.Marvel,
    },
    {
      id: 3,
      name: 'Superman',
      owner: Owner.DC,
    },
    {
      id: 4,
      name: 'Flash',
      owner: Owner.DC,
    },
    {
      id: 5,
      name: 'Wolverine',
      owner: Owner.Marvel,
    },
    {
      id: 6,
      name: 'Deadpool',
      owner: Owner.Marvel,
    }
  ];

export default heroes;