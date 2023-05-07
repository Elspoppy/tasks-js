// Напишите функцию, которая принимает строку 
// и возвращает эту же строку, но в обратном порядке.


const reverseStr = (str) => {
    return str.split('').reverse().join('')
}

console.log(reverseStr('Hello'));

