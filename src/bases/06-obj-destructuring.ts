const person = {
    name: "Tony",
    age: 45,
    key: 'Ironman',
};

// const name = person.name;
// const key = person.key;
// const age = person.age;

const { key, name: ironmanName, age:ironmanAge } = person;

console.log({ironmanName, ironmanAge, key});


interface Hero {
    name: string;
    age: number;
    key: string;
    rank?: string;
}

// const useContext = ( hero: Hero) => {
//  const { key, name, age, rank } = hero;
//  return {
//      keyName: "ABC"
//  }
// }; Esto es igual a lo de abajo

// Se desestructuro antes de : Hero para evitar otra linea
const useContext = ({ key, name, age, rank = "NA" }: Hero) => {
    return {
        keyName: key,
        user: {
            name: name,
            age, // si la prop es igual al nombre de la variable, se puede omitir el :
        },
        rank: rank
    };
};

// const context = useContext(person);
// console.log(context);

// const {
//     keyName,
//     user:{ name },
//     rank
// } = useContext(person);

const {
    keyName,
    user, // user es un objeto, por lo que se puede desestructurar nuevamente
    rank,
} = useContext(person);

const {
    name,
    age,
} = user;   // user desestructurado nuevamente

console.log({ rank, keyName, name, age });