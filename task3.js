// 3. Напиши функцию, которая будет принимать массив 
// объектов, содержащих информацию о людях 
// (имя, возраст, род деятельности и т. д.), 
// и возвращать массив объектов, отсортированный 
// по возрасту от старшего к младшему.


const persons = [
    {
        name:'Alex',
        age: 6,
    },
    {
        name:'lily',
        age: 18,
    },
    {
        name:'John',
        age: 14,
    },
]

const sortByAge = (array) => {
    const clonedArr = JSON.parse(JSON.stringify(array));
    return clonedArr.sort((a,b) => b.age - a.age)
}

console.log(sortByAge(persons));
console.log(persons);