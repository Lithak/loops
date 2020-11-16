for(let i = 0; i < 11; i++){
    console.log(i);
    document.write(i);
}
for(let n = 10; n >= 0; n--){
    console.log(n);
    document.write(n);
}
// input from the user
const number = parseInt(prompt('Enter an integer: '));

for(let o = 1; o <= 10; o++) {

    // multiply i with number
    const result = o * number;

    // display the result
    console.log(`${number} * ${o} = ${result}`);
}
document.write('Multiples of number')

for(let r = 0; r<101; r++ ){	
    if (r % 2 == 0) {       // 0 for even numbers and 1 for odd numbers.
        document.writeln(r + "<br />");
}
}
let size=5;
let a=5;

for(let j=size; j>=0; j--)
{
document.write(a);
a=a-2;
}
let x=0;
for(x;x<10;x++);
document.write(x); 

let arr=[4,3,,1];
for(i=0;i<4;i++){
document.write(arr[i]);
} 
let h;
for (h = 0; h< 5; h++) {
if (h === 3) {
continue;
}
document.write(h);
} 

