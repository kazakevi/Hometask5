
let pullOfPoints = [];
for (let i=0; i<6; i++) {
    pullOfPoints.push(Math.floor(Math.random()*7));
}
console.log(pullOfPoints);

let sum1 = pullOfPoints[0]+pullOfPoints[2]+pullOfPoints[4];
console.log(sum1);

let sum2 = pullOfPoints[1]+pullOfPoints[3]+pullOfPoints[5];
console.log(sum2);

if (sum1 > sum2) {
    console.log('Выиграл первый игрок!');
}
    else if (sum2>sum1) {
        console.log('Выиграл второй игрок!');              
    }
    else{
        console.log('Ничья!');
    }
