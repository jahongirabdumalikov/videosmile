// 1
const arr = [0, "apple", false, "", "banana", NaN, 42];
const result = [];

for (let i = 0; i < arr.length; i++) {
  if (arr[i]) {
    result.push(arr[i]);
  }
}

console.log(result);
//3
const numbers = [3, 1, 4, 1, 5, 9, 2, 6];

for (let i = 0; i < numbers.length; i++) {
  for (let j = 0; j < numbers.length - 1; j++) {
    if (numbers[j] > numbers[j + 1]) {
      const temp = numbers[j];
      numbers[j] = numbers[j + 1];
      numbers[j + 1] = temp;
    }
  }
}

const uniqueNumbers = [];
for (let num of numbers) {
  if (!uniqueNumbers.includes(num)) {
    uniqueNumbers.push(num);
  }
}

const secondLargest = uniqueNumbers[uniqueNumbers.length - 2];

console.log(secondLargest);
//4
const animals = ["antelope", "alligator", "bear", "cat", "cheetah"];
const grouped = {};

for (let i = 0; i < animals.length; i++) {
  const firstLetter = animals[i][0];

  if (!grouped[firstLetter]) {
    grouped[firstLetter] = [];
  }

  grouped[firstLetter].push(animals[i]);
}

console.log(grouped);
//5
const nestedArr = [[1, 2], [3, 4], [1, 2], [5]];
const uniqueValues = [];

for (let i = 0; i < nestedArr.length; i++) {
  for (let j = 0; j < nestedArr[i].length; j++) {
    const value = nestedArr[i][j];

    if (!uniqueValues.includes(value)) {
      uniqueValues.push(value);
    }
  }
}

console.log(uniqueValues);
//6
const people = [
  { name: "John", age: 30 },
  { name: "Jane", age: 25 },
  { name: "Jack", age: 20 },
];

const names = [];

for (let i = 0; i < people.length; i++) {
  names.push(people[i].name);
}

console.log(names);
