// Напишите программу, которая принимает на вход массив объектов, 
// каждый объект представляет собой информацию о книге: название, автор, жанр и год издания.
// Программа должна отфильтровать массив по жанру, который введет пользователь, и вернуть массив, 
// отсортированный по году издания.
// Кроме того, программа должна вывести в консоль название 
// и автора самой старой книги из отфильтрованного массива.

// Для решения этой задачи нужно знать, как работать с массивами 
// и объектами в JavaScript, а также использовать методы для работы с массивами, такие как filter, sort.
// Также нужно знать, как работать с пользовательским вводом через prompt или input.
//  Для получения от юзера информации о жанре можно использовать метод prompt

const books = [{
name:'The Picture of Dorian Gray ',
author:'Oscar Wilde',
genre: 'Gothic fiction',
year:'1890',
},{
name:'The Picture',
author:'Oscar',
genre: 'Gothic fiction',
year:'1990',
},{
name:'Pride and Prejudice',
author:'Austen Jane',
genre: 'Romantic novel',
year:'2013',
},{
name:'Pride',
author:'Austen',
genre: 'Romantic novel',
year:'1913',
},{
name:'Pr',
author:'Link',
genre: 'Romantic novel',
year:'3013',
},{
name:'The Great Gatsby',
author:'Fitzgerald Francis Scott',
genre: 'Tragedy',
year:'1925',
},{
name:'The Great',
author:'Fitzgerald',
genre: 'Tragedy',
year:'1725',
}]

let askGenre = prompt('type genre').toLowerCase();


const sortedBooks = (arr) => {
if(askGenre == ''|| askGenre == null) alert('Please enter genre');
   let choosenGenre =  arr.filter(item => item.genre.toLowerCase() == askGenre).sort((a,b) => a.year - b.year);
   arr.sort((a,b) => a.year - b.year);
   let result = Array.from(new Set ([...choosenGenre,...arr]));
   console.log(result[0].name,',',result[0].author);
   return result; 
}

console.log(sortedBooks(books));