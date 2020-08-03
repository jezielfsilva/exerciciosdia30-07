// Crie uma lista com suas musicas preferidas, e mostre essa lista utilizando forEach. //

var favoriteMusic = ['The Scientist', 'Back At One', 'Light', 'Photograph', 'Ironic'];
favoriteMusic.forEach(music => console.log(music));

// Crie uma lista com o nome de seus amigos, e mostre essa lista utilizando map. //

var friends = ['Edison', 'Jorge', 'David', 'Lucas', 'Carlos Henrique', 'Danilo'];
friends.map(person => console.log(person));

// Crie uma condição que verifeque se você tem mais de 5 músicas preferidas. //

if(favoriteMusic.length > 5) {
    console.log('legal tenho mais que 5 músicas');
} else {
    console.log('Não só tenho 5 músicas');
}

/* Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos;
2. Se qualquer um dos três argumentos não estiverem preenchidos, a função deve retornar a string:
    "Preencha todos os valores corretamente!"
3. O retorno da função deve ser a multiplicação dos 3 argumentos, somando `2` ao resultado da multiplicação. */

var x = 38;
var y = 17;
var z = 74;

const world = (x, y, z) => {
    if(x === 38 && y === 17 && z === 74) {
        console.log('tudo está correto!!!');
    } else {
        console.log('Preencha todos os valores corretamente!');
    }

    return (x*y*z) + 2;
};

console.log(world(38, 0.17, 74));