let arrayOfObjects = [
  {
    name: 'John',
    age: 25,
    hobbies: ['Reading', 'Traveling'],
    address: {
      street: '123 Main St',
      city: 'New York',
      zip: '10001'
    }
  },
  {
    name: 'Alice',
    age: 30,
    skills: ['JavaScript', 'React', 'Node.js'],
    projects: [
      { title: 'Project A', completed: true },
      { title: 'Project B', completed: false }
    ]
  },
  {
    title: 'Special Object',
    data: [1, 2, 3],
    metadata: { key: 'value' }
  },
  {
    // An object with no specific properties
  },
  {
    anotherObject: true,
    nestedArrays: [
      [1, 2, 3],
      ['a', 'b', 'c']
    ],
    additionalProperty: 'Extra'
  }
];


// Accessing properties of the first object
console.log(arrayOfObjects[0].name); // Output: John
console.log(arrayOfObjects[0].hobbies[0]); // Output: Reading
// Accessing properties of the second object
console.log(arrayOfObjects[1].skills[2]); // Output: Node.js
console.log(arrayOfObjects[1].projects[0].title); // Output: Project A
// Accessing properties of the third object
console.log(arrayOfObjects[2].metadata.key); // Output: value
// Accessing properties of the fourth object
console.log(arrayOfObjects[3]); // Output: {}
// Accessing properties of the fifth object
console.log(arrayOfObjects[4].anotherObject); // Output: true
console.log(arrayOfObjects[4].additionalProperty); // Output: Extra