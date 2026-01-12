import { heroes, type Hero, Owner } from "../data/heroes.data" // -> cuando no hay export default heroes
// el type se pone en interfaces y tipos por velocidad
// import misHeroes from "../data/heroes.data" -> cuando si se puso export default heroes
// import { heroes as misHeroes } from "../data/heroes.data" -> renombra cuando hay 2 objetos llamados iguales

// La función getHeroById recibe un numero (ID) y devuelve Hero o Undefinido
const getHeroById = ( id: number ): Hero | undefined => {
    
    const hero = heroes.find( (hero) => {
        return hero.id === id;
    });

    /* if( !hero ) {
        throw new Error(`No existe un heroe con el ID ${ id }`);
    } Esto se puede usar para no usar : Hero|undefined en la función */

    return hero;
}

// console.log( getHeroById(20) );


// Tarea:
export const getHeroesByOwner = ( casa: Owner ) => {

    /*heroes.find( (hero) => {
        if ( casa == hero.owner ) {
            console.log(hero.name);
        }
    }); MI SOLUCIÓN */

    // Solución Real:
    const heroesByOwner = heroes.filter(
        hero => hero.owner === casa
    );
    return heroesByOwner;
}

/* PERO SE HACE ASÍ:
    export const getHeroesByOwner = (casa: Owner) => heroes.filter((hero) => hero.owner === casa);
*/