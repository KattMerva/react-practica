const characterNames = ['Hello Kitty', 'Pompompurin', 'Pocchako'];

const [, , p30] = characterNames;
console.log({p30});

/*const returnsArrayFn = () => {
    return ['AbC', 123] as const; // se utiliza para que siempre devuelva letras en la posicion 0 y numeros en la posicion 1
}*/

//const [ letras, numeros ] = returnsArrayFn();


/* Tarea:
Crea una función llamada useState. Debe cumplir con los siguientes requisitos: 

- La función debe llamarse useState.
- Debe retornar un arreglo con dos elementos:
    #1 - Un string (el valor inicial).
    #2 - Una función anónima de flecha que:
        Recibe un string.
        Imprime ese string en consola. */

const useState = ( nameChar: string ) => { // Función que recibe 1 string
    return [   
        nameChar,                       // Devuelve el string 1
        (newNameChar: string) => {      // Función dentro de la función
            console.log(newNameChar);   // Imprime
        },
    ] as const;                         // Primero devuelve un string y luego una función
};

const [name, setName] = useState('Kuromi');     // String en name, Función en setName
console.log(name);
setName('My Sweet Piano');

// useState es un Hook de React