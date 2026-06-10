# User Full Name Extractor (Array Mapping)

A lightweight JavaScript utility that processes an array of user objects and extracts their formatted full names into a clean, single-dimensional array.

## 🚀 Purpose

When working with API responses, user data often arrives split into separate properties like `firstName` and `lastName`. This script demonstrates how to efficiently transform and consolidate that structured data into a user-friendly format using modern JavaScript array methods.

## 💻 Code Example

```javascript
const users = [
  { firstName: "Jack", lastName: "Son", age: 30 },
  { firstName: "Tom", lastName: "lee", age: 20 },
  { firstName: "Anna", lastName: "page", age: 40 },
];

// Transform the array of objects into an array of formatted strings
const result = users.map((user) => {
  // Ensure the first letter of each name part is capitalized
  const format = (name) => name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
  
  return `${format(user.firstName)} ${format(user.lastName)}`;
});

console.log(result);
// Expected Output: ["Jack Son", "Tom Lee", "Anna Page"]
