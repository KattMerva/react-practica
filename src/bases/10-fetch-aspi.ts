import type { GiphyRandomResponse } from "../data/giphy.response";

// Constantes van en MAYUSCULAS
const API_KEY = 'aGcrawGrwx4x8i59yB5eqMCNCI7VRY5b';

const myRequest = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ API_KEY }`);

/* myRequest.then((response) => {
    response.json().then( data => { PROMESA EN CADENA (Una dentro de otra)
        console.log(data);
    })
}).catch( err => {
    console.error(err);
}) */ 

const createImageOnDOM = ( imgUrl: string ) => {
    const imgElement = document.createElement('img');
    imgElement.src = imgUrl;
    document.body.append(imgElement);
}

myRequest
    .then((response) => response.json())
    .then(({ data }: GiphyRandomResponse) => {
        const imageUrl = data.images.original.url;
        createImageOnDOM(imageUrl);
    })
    .catch((err) => console.error(err));