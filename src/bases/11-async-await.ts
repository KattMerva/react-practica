import type { GiphyRandomResponse } from "../data/giphy.response";
const API_KEY = 'aGcrawGrwx4x8i59yB5eqMCNCI7VRY5b';

const createImageOnDOM = ( imgUrl: string ) => {
    const imgElement = document.createElement('img');
    imgElement.src = imgUrl;
    document.body.append(imgElement);
}

/* Poner async despues de la definición de la variable 
    crea el mismo efecto que devolver una promesa */

const getRandomGifUrl = async (): Promise<string> => {
    const response = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ API_KEY }`);
    //const data = (await response.json()) as GiphyRandomResponse; esto es lo mismo que la lidea de abajo
    const { data }: GiphyRandomResponse = await response.json();

    return data.images.original.url;
}

getRandomGifUrl().then(createImageOnDOM);