var cartas =

    [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],     // oros
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],     // espadas
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],     // copas
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]      // bastos
    ];

function mezclarPila(){
    var nums = [];
    for(let i = 0; i < 40; i++){
        nums.push(i);
    }
    nums.sort(() => Math.random() - 0.5);

    console.log(nums);

    var e = 0;

    for (let i = 0; i < 4; i++){
        for (let j = 0; j < 10; j++) {
            cartas [i][j] = nums[e];
            e++;
        }
    }
}

mezclarPila();

console.log(cartas);