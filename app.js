debugger;


var game = {
    min: 10,
    max: 20,
    randomNumber: null,
    attemps: 1,
    score: [],




}

function getRandomIntInclusive(max, min = 10) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


function play() {


    game.attemps =1

    // Génére un nombre entre 1 et 500


    game.randomNumber = getRandomIntInclusive(game.max, game.min);
    console.log(game)


    // Possible de le faire en une fois en faisant toutes les actions sur la même ligne
    // var randomNumber = Math.round(Math.random() * 500);

    // On doit maintenant le faire trouver à l'utilisateur
    // On demande à l'utilisateur de saisir un nombre
    var proposition = prompt('Quel est le nombre à trouver ?');
    // On pense à transformer sa saisie en nombre
    proposition = Number(proposition); // parseInt(proposition);

    // Tant que la valeur saisie n'est pas la bonne, on lui demande à nouveau
    while (proposition !== game.randomNumber) {
        // Si la saisie est trop petite on pourrait l'indiquer
        if (proposition < game.randomNumber) {
            proposition = Number(prompt("C'est plus"));
        }
        // Sinon on pourrait dire que c'est trop grand  
        else {
            proposition = Number(prompt("C'est moins"));
        }

        // L'utilisateur à fait une nouvelle proposition, on incrémente le score
        game.attemps+=1;
    }

    // C'est gagné
    // Si l'utilisateur sort de ma boucle while c'est que le nombre a été trouvé
    alert(`Super ! T'es trop fort BG, le nombre est bien ${proposition}, tu as trouvé en ${game.attemps} fois`);


    game.score.push(game.attemps)
    console.table(game.score)
    play()


}


play()