const marvel = ["ironman", "spiderman", "captain america", "thor", "hulk"];
const dc = ["batman", "superman", "wolverine", "flash", "aquaman"];

marvel.push(dc)
console.log(marvel);//["ironman", "spiderman", "captain america", "thor", "hulk", Array(5)]
//since array can take any data so it took arrays as a data
console.log(marvel.length);//6
//to access a value from the nested array
console.log(marvel[5][1]);//superman

//to fix this we can use concat method
const marvel1 = ["ironman", "spiderman", "captain america", "thor", "hulk"];
const dc1 = ["batman", "superman", "wolverine", "flash", "aquaman"];
const heroes = marvel1.concat(dc1);
console.log(heroes);//["ironman", "spiderman", "captain america", "thor", "hulk", "batman", "superman", "wolverine", "flash", "aquaman"]

//a better way to do this is using spread operator ...
const allHeroes = [...marvel1, ...dc1];
console.log(allHeroes);//["ironman", "spiderman", "captain america", "thor", "hulk", "batman", "superman", "wolverine", "flash", "aquaman"]

//what if there is array inn array in array

const ek_aur= [1,2,3,[34,65,34],8,53,5,3,[56,67 , [7,34,344],45],356];
//we can use flat method to flatten the array
const flatArray = ek_aur.flat(Infinity);//depth of the array to be flattened

//to check if the data is an array or not
console.log(Array.isArray(ek_aur));//true
//converting a data to an array
const data = "hello";
const data1 = Array.from(data);
console.log(data1);//["h", "e", "l", "l", "o"]

//forming array from key:value pairs
const data2 = {0: "hello", 1: "world", 2: "javascript"};
const data3 = Array.from(data2);
console.log(data3);//["hello", "world", "javascript"]