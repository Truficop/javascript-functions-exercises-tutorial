// Your code goes here
const rapid = (string) => {
    const vowels = ['a', 'e', 'i', 'o', 'u',];
    let result = '';

    for (let i = 0; i < string.length; i++) {
        if (!vowels.includes(string[i])) {
            result += string[i].toUpperCase();
        }
    }

    return result;
};


// Work above this line; do not change code below
let str = "John";
console.log(rapid(str));
