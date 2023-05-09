// CodeFlow

let languages = [
  "JavaScript",
  "Python",
  "Java",
  "Ruby",
  "PHP",
  "C++",
  "CSS",
  "C#",
  "Go",
  "C",
  "TypeScript",
  "Swift"
];
// langschreibweise
const sortierung = (a, b) => {
    return a-b
};

languages.sort(sortierung);

console.log(languages.sort());

//kurzschreibweise
languages.sort((a,b) => a-b);

console.log(languages.sort()); 

//Lev 1_2

languages.sort(sortierung).reverse();

console.log(languages.sort().reverse());


//Lev 1_3

var numArray1 = ["36", "24", "22", "3", "2", "98", "88",];

 numArray1.sort((a, b) => a - b);

console.log(numArray1);


//Lev 2_2

let numArray2 = [36, 324, 122, 62, 98, 88, 99, 1000];

numArray2.sort((a, b) => a - b);

console.log(numArray2);









