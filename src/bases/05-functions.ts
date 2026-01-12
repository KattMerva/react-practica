function greet(name: string): string {
    return `Hola ${name}`;
}
// Funciones de flecha o función anonima
const greet2 = (name: string): string => {
    return `Hola ${name}`;
};

// ^ es lo mismo que v

const greet3 = (name: string) => `Hola, ${name}`;

// No cambia a lo que apunta this y no se podrá cambiar el valor porque es una constante
// greet2 = () => {}

// greet = function() { return 'Hola Pedro'; }
// ^ Esto si se puede hacer porque JS lo permite aunque TypeScript no

const message = greet('Katt');
const message2 = greet2('Valeria');
console.log(message, message2);

interface User {
    uid: string;
    username: string;
    addNumber: () =>void; // Metodo
}

function getUser (): User {
    return {
        uid: 'ABC-123',
        username: 'el_papi123',
    };
}

// Simplificada, se ponen (); antes del return porque es un objeto (return implicito), no el cuerpo de la función
const getUser2 = () => ({
    uid: 'ABC-123',
    username: 'El_papi123'
});

const user = getUser2();
console.log(user);


// Ejemplo de como simplifica

const myNumbers: number[] = [1, 2, 3, 4, 5];
myNumbers.forEach(function(value) {
    console.log({ value });
});

myNumbers.forEach((value) => {
    console.log({ value });
});

myNumbers.forEach(console.log);