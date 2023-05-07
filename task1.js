// Напиши функцию, которая принимает массив чисел и возвращает массив, состоящий только из нечетных чисел.


const findOddNums = (nums) =>{
    return nums.filter( num => num%2 !== 0)
}

console.log(findOddNums([1,2,3,4]));