// 2. Создай объект, содержащий информацию о твоих 
// любимых фильмах (название, год выпуска, режиссер, жанр и т. д.). 
// Напиши функцию, которая будет выводить информацию 
// о каждом фильме в консоль.


const films = [
    {
        name:'Dog',
        year: '1789',
    },
    {
        name:'Cat',
        year: '2002',
    },
]

const getFilmsInfo = (array) =>{
    return array.forEach( film =>{
        console.log(`Фильм называется: ${film.name}, вышел в году: ${film.year} `);
    })
}

console.log(getFilmsInfo(films));
