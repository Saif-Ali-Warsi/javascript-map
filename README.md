# User Full Name Extractor (Array Mapping)

A lightweight JavaScript utility that processes an array of user objects and extracts their full names into a single-dimensional array.

## 🚀 Purpose

When working with API responses, user data often arrives split into separate properties like `firstName` and `lastName`. This script demonstrates how to efficiently transform and consolidate that structured data into a user-friendly format using modern JavaScript array methods.

## 💻 Code Example

```javascript
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
