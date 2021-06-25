
// list the properties of a js object
var student = { name : "David Rayy", sclass : "VI", rollno : 12 };

let properties = Object.getOwnPropertyNames(student);
for (let i = 0; i < properties.length; i++) {
    console.log(properties[i]);
};
console.log(" ");


//delete a property from an object
var student = { name : "David Rayy", sclass : "VI", rollno : 12 };

console.log(student.rollno);
delete student.rollno;
console.log(" ");


//get the length of a javascript object
var student = { name : "David Rayy", sclass : "VI", rollno : 12 };
keys = Object.keys(student);
len = keys.length;
console.log(len);


//TODO:display the reading status
var library = [ { author: 'Bill Gates', title: 'The Road Ahead', readingStatus: true }, 
{ author: 'Steve Jobs', title: 'Walter Isaacson', readingStatus: true }, 
{ author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', readingStatus: false }];

for (let i = 0; i < library.length; i++) {
    console.log(`Title: ${library[i].title}`);
    console.log(`Author: ${library[i].author}`);
    console.log(`Reading Status: ${library[i].readingStatus}`);
    console.log(" ");
};


//TODO:sort an array of objects
var library = [ 
    { title: 'The Road Ahead', author: 'Bill Gates', libraryID: 1254 },
     { title: 'Walter Isaacson', author: 'Steve Jobs', libraryID: 4264 }, 
     { title: 'Mockingjay: The Final Book of The Hunger Games', author: 'Suzanne Collins', libraryID: 3245 }];
      // Expected Output: 
      // [[object Object] { author: "Walter Isaacson", libraryID: 4264, title: "Steve Jobs" }, 
      // [object Object] { author: "Suzanne Collins", libraryID: 3245, title: "Mockingjay: The Final Book of The Hunger Games" },
      // [object Object] { author: "The Road Ahead", libraryID: 1254, title: "Bill Gates" }]
      // sort by the name of the property



