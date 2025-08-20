//FOR LOOP

for(let i=0;i<10;i++){
    console.log(i);
    //process.stdout.write(i.toString());
    //console.log("\n");
}

//WHILE LOOP

let a = 10;
while (a < 20) {
    console.log(a);
    a++;
}


//DO-WHILE LOOP

let b = 20;
do {
    console.log(b);
    b++;
} while (b < 30);

//NESTED LOOP
for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
        console.log(`i: ${i}, j: ${j}`);
    }
}



//WAP TO PRINT ALL NUMBERS DIVISIBLE BY 7
for (let i = 30; i <= 160; i++) {
    if (i % 7 == 0) {
        console.log(i);
    }
}

//WAP TO CHECK IF A NUMBER IS PRIME OR NOT
let num = 29;
let isPrime = true;
for (let i = 2; i < num; i++) {
    if (num % i == 0) {
        isPrime = false;
        
    }
}
if (isPrime) {
    console.log(" it is a prime number.");
} else {
    console.log("it is not a prime number.");
}

//wap to reverse a number
let n = 142;
let r = 0;
while (n > 0) {
    let digit = n % 10;
    n = Math.floor(n / 10);
    r = r * 10 + digit;
}


console.log("Reversed number is: " + r);