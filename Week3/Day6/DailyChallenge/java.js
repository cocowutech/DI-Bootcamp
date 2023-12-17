// Exercise1
const fruits = ["Banana", "Apples", "Oranges", "Blueberries"];
fruits.shift();
fruits.sort();
fruits.push("Kiwi");
fruits.splice(fruits.indexOf("Apples"), 1);
fruits.reverse();
console.log(fruits);

// Exercise2
const moreFruits = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
console.log(moreFruits[1][1][0]);