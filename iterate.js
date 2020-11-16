
for (let x=0; x<=20; x++) {
    if (x === 0) {
            console.log(x +  " is even");
            document.write(x +  " is even"+ "<br />");
    }
    else if (x % 2 === 0) {
            console.log(x + " is even");  
            document.write(x + " is even"+ "<br />");   
    }
    else {
            console.log(x + " is odd");
            document.write(x + " is odd"+ "<br />");
    }
}
let sum = 0;
for (let x = 0; x < 200; x++)
{
    if (x % 3 === 0 || x % 5 === 0)
    {
       sum += x;
    }
}
console.log(sum);
document.write(sum);
