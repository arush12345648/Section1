const arr=[6841,'aman',true,null];
console.log(arr);
typeof(arr);
const movies=['ice age','jeene nhi duga','kaliya','hunger games'];
console.log(movies.length);
const mymovie='animal';
console.log(mymovie.length);


//indexing
console.log(movies[3]);
console.log(movies.at(-1));
console.log(movies[56]);
console.log(movies.indexOf('kaliya'));


//slicing
console.log(movies.slice(1,4));
console.log(movies.slice(3));
console.log(movies.slice(2,50));

//adding new elememnt

movies.push('the dark night');// add at the end
movies.unshift('the nun');//add a beginning
console.log(movies);

//remove
movies.pop();
movies.shift();
console.log(movies);

