
const myPromise = new Promise<number>((resolve, reject) => {

    setTimeout(() => {
        // Dinero
        resolve(250);
        //reject("Me bloqueo para no pagarme");
    }, 2000);
});

myPromise.then( // Si algo sucede entra al then
    (myMoney) => {
        console.log(`${ myMoney } fueron pagados`);
    }
).catch((reason) => { // Si no sucede entra al catch
    console.warn(reason);
}).finally(() => { // Pero siempre resulta en finally
    console.log('La vida es dura');
})
