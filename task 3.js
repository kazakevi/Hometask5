
let num = 10; // Введите любое исходное число
let partsCount = 3;  //Введите любое число частей
let minPart =1;
let myArr = [];
let sum=num;

for (i=0; i<partsCount-1; i++) {
    let m=partsCount - i;
    let border = sum-(m-1)*minPart;
    let r=Math.random();
    let part = Math.floor(r*(border+1-minPart)+minPart);
    sum-=part;
    myArr.push(part);
}
myArr.push(sum);
console.log(myArr);
