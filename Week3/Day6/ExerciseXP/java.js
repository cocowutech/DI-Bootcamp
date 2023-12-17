// Exercise 1
// Part I - Review About Arrays
const people = ["Greg", "Mary", "Devon", "James"];
people.shift(); 
people[people.indexOf("James")] = "Jason";
people.push("Coco"); 
console.log(people.indexOf("Mary"));
const peopleCopy = people.slice(1, -1);
console.log(people.indexOf("Foo")); 
// It returns -1 because "Foo" is not in the array
const last = people[people.length - 1];

// Part II - Loops
for (let person of people) {
    console.log(person);
  }

  for (let person of people) {
    console.log(person);
    if (person === "Devon") break;
  }
  
// Exercise 2
const colors = ["blue", "darkblue", "green", "darkgreen", "orange"];
const suffixes = ["st", "nd", "rd", "th", "th"];
for (let i = 0; i < colors.length; i++) {
let suffix = suffixes[i];
let message = "My " + (i + 1) + suffix + " choice is " + colors[i];
console.log(message);}


// // Exercise 3
let number = prompt("Enter a number:");
number = Number(number);

while (number < 10) {
number = prompt("Enter a number greater than or equal to 10:");
number = Number(number);
}
  
// Exercise 4
const building = {
  numberOfFloors: 4,
  numberOfAptByFloor: {
      firstFloor: 3,
      secondFloor: 4,
      thirdFloor: 9,
      fourthFloor: 2,
  },
  nameOfTenants: ["Sarah", "Dan", "David"],
  numberOfRoomsAndRent:  {
      sarah: [3, 990],
      dan:  [4, 1000],
      david: [1, 500],
  },
}

// Console.log the number of floors in the building
console.log(building.numberOfFloors);
// Console.log how many apartments are on the floors 1 and 3
console.log(building.numberOfAptByFloor.firstFloor + building.numberOfAptByFloor.thirdFloor);
// Console.log the name of the second tenant and the number of rooms he has in his apartment
const secondTenant = building.nameOfTenants[1]; 
const secondTenantRooms = building.numberOfRoomsAndRent[secondTenant.toLowerCase()][0];
console.log(secondTenant, secondTenantRooms);

// Check if the sum of Sarah’s and David’s rent is bigger than Dan’s rent
const sarahsRent = building.numberOfRoomsAndRent.sarah[1];
const davidsRent = building.numberOfRoomsAndRent.david[1];
const dansRent = building.numberOfRoomsAndRent.dan[1];

if (sarahsRent + davidsRent > dansRent) {
    building.numberOfRoomsAndRent.dan[1] = 1200;
}
// To verify the change, let's console.log Dan's new rent
console.log("Dan's new rent:", building.numberOfRoomsAndRent.dan[1]);


// Exercise 5
const family = {
  father: "WU1",
  mother: "WU2",
  son: "WU3",
  daughter: "Coco"
};

for (let key in family) {
  console.log(key);
}

for (let key in family) {
  console.log(family[key]);
}

// Exercise 6
const details = {
my: 'name',
is: 'Rudolf',
the: 'raindeer'
};
  
let sentence = '';
for (let key in details) {
sentence += key + ' ' + details[key] + ' ';
}

console.log(sentence.trim()); 

// Exercise 7
const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];
const societyName = names.map(name => name[0]).sort().join('');
console.log(societyName);


