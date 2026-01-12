
interface Person {
    firstName: string;
    lastName: string;
    age: number;
    address: Address;
}

interface Address {
    postalCode: string;
    city: string;
}

const persona: Person = {
    firstName: 'Katt',
    lastName: 'Mercado',
    age: 28,
    address: {
        postalCode: "577abc",
        city: ""
    }
};

const spiderman: Person = {
    firstName: "Petter",
    lastName: "Parker",
    age: 22,
    address: {
        postalCode: "abc123",
        city: ""
    }
}

persona.firstName = "Valeria";
persona.age = 26;

console.log(persona);