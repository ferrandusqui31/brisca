var cartas =

    [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],     // oros
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],     // espadas
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],     // copas
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]      // bastos
    ];

/* 
Valores del 0-39 indica la posición en la pila.

50 triunfo.

100 mano del jugador 1.
200 mano del jugador 2.

1000 descartados del jugador 1.
2000 descartados del jugador 2.
*/

var cartaPila = 0;      // Indica cuál es la carta que hay arriba de la pila

function mezclarPila(){     // Mezcla TODAS las cartas, incluidas las de la mano, y las pone en la pila.
    var nums = [];
    for(let i = 0; i < 40; i++){
        nums.push(i);
    }
    nums.sort(() => Math.random() - 0.5);

    var e = 0;

    for (let i = 0; i < 4; i++){
        for (let j = 0; j < 10; j++) {
            cartas [i][j] = nums[e];
            e++;
        }
    }
}

mezclarPila();

function repartir(){    // Define el triunfo y reparte 3 cartas a cada jugador en el orden de la pila

}