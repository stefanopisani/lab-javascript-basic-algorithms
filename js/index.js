// Iteration 1: Names and Input
const hacker1 = "Stefano";
console.log(`The driver's name is ${hacker1}`);

const hacker2 = "João";
console.log(`The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`)
} else if (hacker1.length === hacker2.length) {
    console.log(` Wow, you both have equally long names, ${hacker1.length} characters!.`)
} else {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
}

// Iteration 3: Loops

//3.1
let auxString = ""
for (let i = 0; i < hacker1.length; i++) {
    auxString = auxString + hacker1[i].toUpperCase() + " "
}
console.log(auxString);

//3.2
let reverseName = ""
for (let i = hacker2.length - 1; i >= 0; i--) {
    reverseName = reverseName + hacker2[i]
}
console.log(reverseName);

//3.2



// 3.3


// for (let i = 0; i < hacker2.length; i++) {
//     if (hacker1[i] < hacker2[i]) {
//         console.log('The drivers name goes first');
//     } else if (hacker1[i] === hacker2[i]) {
//         console.log('What?! You both have the same name?');
//     } else {
//         console.log('Yo, the navigator goes first definitely.');
//     }
// }


let names = [hacker1, hacker2];
a = names.sort((a, b) => a.localeCompare(b));
console.log(names)

for (let i = 0; i < names; i++) {
    if (hacker1[i] < hacker2[i]) {
        console.log('The drivers name goes first');
    } else if (hacker1[i] === hacker2[i]) {
        console.log('What?! You both have the same name?');
    } else {
        console.log('Yo, the navigator goes first definitely.');
    }
}