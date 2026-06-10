// Expected Output:
// ["Jack Son", "Tom Lee", "Anna Page"]

const users = [
  {
    firstName: "Jack",
    lastName: "Son",
    age: 30,
  },
  {
    firstName: "Tom",
    lastName: "lee",
    age: 20,
  },
  {
    firstName: "Anna",
    lastName: "page",
    age: 40,
  },
];

const result = users.map((user) => user.firstName + " " + user.lastName);

console.log(result);
