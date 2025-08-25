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

console.log(movies.slice(1,4));
console.log(movies.slice(-3));
console.log(movies.slice(2,-1));
console.log(movies.slice(4));
console.log(movies.slice(-2));//gives the same outpt as the above line of code
console.log(movies.slice(0));
console.log(movies.slice(1));
console.log(movies.slice(2));
console.log(movies.slice(3));
console.log(movies.slice(4));
console.log(movies.slice(5));
console.log(movies.slice(-1));
console.log(movies.slice(-2));
console.log(movies.slice(-3));
console.log(movies.slice(-4));
console.log(movies.slice(-5));
console.log(movies.slice(-6));
console.log(movies.slice(-6,4));
console.log(movies.slice(-5,4));
console.log(movies.slice(-4,4));
console.log(movies.slice(-3,4));
console.log(movies.slice(-6,6));
console.log(movies.slice(-6,5));
console.log(movies.slice(-6,3));
console.log(movies.slice(-6,2));
console.log(movies.slice(-6,1));
console.log(movies.slice(-5,1));
console.log(movies.slice(-5,2));
console.log(movies.slice(-5,3));
console.log(movies.slice(-5,4));
console.log(movies.slice(-5,5));
console.log(movies.slice(-5,6));
console.log(movies.slice(-4,6));
console.log(movies.slice(-4,5));
console.log(movies.slice(-4,4));
console.log(movies.slice(-4,3));
console.log(movies.slice(-4,2));
console.log(movies.slice(-3,6));
console.log(movies.slice(-3,5));
console.log(movies.slice(-3,4));
console.log(movies.slice(-3,3));
console.log(movies.slice(-2,6));
console.log(movies.slice(-2,5));
console.log(movies.slice(1,-1));
console.log(movies.slice(2,-1));
console.log(movies.slice(3,-1));
console.log(movies.slice(4,-1));
console.log(movies.slice(5,-1));
console.log(movies.slice(1,-2));
console.log(movies.slice(1,-3));
console.log(movies.slice(1,-4));
console.log(movies.slice(1,-5));
console.log(movies.slice(2,-1));
console.log(movies.slice(2,-2));
console.log(movies.slice(2,-3));
console.log(movies.slice(3,-1));
console.log(movies.slice(3,-2));
console.log(movies.slice(4,-1));
console.log(movies.slice(3,6));
console.log(movies.slice(2,6));
console.log(movies.slice(1,6));
console.log(movies.slice(0,6));
console.log(movies.slice(0,5));
console.log(movies.slice(0,4));
console.log(movies.slice(0,3));
console.log(movies.slice(0,2));
console.log(movies.slice(0,1));
console.log(movies.slice(1,2));
console.log(movies.slice(1,3));
console.log(movies.slice(1,4));
console.log(movies.slice(1,5));
console.log(movies.slice(1,6));
console.log(movies.slice(2,3));
console.log(movies.slice(2,4));
console.log(movies.slice(2,5));
console.log(movies.slice(2,6));
