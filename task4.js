// 4. Напиши функцию, которая будет считать количество гласных букв в переданной строке.


const calculateVowels = (str) => {
    const vowels =['а', 'я', 'у', 'ю', 'о', 'е', 'ё', 'э', 'и', 'ы'];
    let result = 0;
    vowels.map( item => str.includes(item) ? result++ : 0);
    return result;
}

console.log(calculateVowels('привет'));