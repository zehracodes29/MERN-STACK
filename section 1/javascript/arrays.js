const arr = [1,true,'helloooo',45.98]

console.log(arr);
console.log(typeof arr);
console.log(Array.isArray(arr));

const movies = ['avengers','Simba','Titanic','Sholay','TMK', 'Inception']

console.log(movies.length);

//INDEXING
console.log(movies[0]);
console.log(movies[movies.length - 1]);
console.log(movies[2]);
console.log(movies.indexOf('Titanic'));
console.log(movies[-2]);//undefined because negative indexing is not supported in JavaScript from this method
console.log(movies.at(-3));//negative indexing supported in JavaScript
console.log(movies.at(2));//this method works for both negative and positive indexing
movies[2] = 'WAR2';
console.log(movies[2]);
console.log(movies);

//movies=[1,2,4];//error because of const


//SLICING

console.log(movies.slice(1, 4));
console.log(movies.slice(-3));
console.log(movies.slice(2, -1));
console.log(movies.slice(4));

