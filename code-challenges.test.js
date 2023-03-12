// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// ********* TEST TEMPLATE ************
// describe("aFunction", () => {
//       it("description of what aFunction outputs with a given input", () => {
//         expect(aFunction()).toEqual("expected outcome")
//       })
//     })

// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.

// a) Create a test with an expect statement using the variable provided.
// HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray

describe("removeAndShuffle", () => {
  const colors1 = ["purple", "blue", "green", "yellow", "pink"];
  // Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
  const colors2 = [
    "chartreuse",
    "indigo",
    "periwinkle",
    "ochre",
    "aquamarine",
    "saffron",
  ];
  // Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]
  it("removes the first item from the array and shuffles the remaining content", () => {
    expect(removeAndShuffle(colors1)).toEqual(
      expect.arrayContaining(["yellow", "blue", "pink", "green"])
    );
    expect(removeAndShuffle(colors2)).toEqual(
      expect.arrayContaining([
        "saffron",
        "aquamarine",
        "periwinkle",
        "indigo",
        "ochre",
      ])
    );
  });
});

// ReferenceError: removeAndShuffle is not defined

// b) Create the function that makes the test pass.

// pseudo:
// create a function called removeAndShuffle that takes in an array
//.slice() is a built in method that returns a portion of an array, we just have to pass in the index that we want to start. In this case we are wanting to not include the first index of the input array, so our slice should look like this .slice(1). When only providing one index in slice, it assumes that you want everything starting at that index, to the end of the array it was called upon.
// sweet, now we have our original array minus the first index to work with.
// Now we need to randomly sort the values of the rest of the array. We will use .sort() after our .slice(1), but we have to give our .sort() a definition of how to sort the remaining values (you already know I spent a lot of time with this in the past lol).
// Within our .sort() we are going to use Math.random() to essentially return a decimal number between 0 and 1 for each value in the array. In order to help randomize our sort we need to take the return we get from Math.random and subtract 0.5 from it. This gives the potential final return to be a negative decimal. .sort(() => Math.random() - 0.5)
// place a return in our function to return the result
// We can also move all this to one line, but it may be better to keep it at at least 2 for readability

const removeAndShuffle = (array) => {
  return array.slice(1).sort(() => Math.random() - 0.5);
};

// --------------------2) Create a function that takes in an object that contains up votes and down votes and returns the end tally.

// a) Create a test with expect statements for each of the variables provided.

describe("voteTally", () => {
  const votes1 = { upVotes: 13, downVotes: 2 };
  // Expected output: 11
  const votes2 = { upVotes: 2, downVotes: 33 };
  // Expected output: -31
  it("takes in an object that contains up votes and down votes and returns the end tally", () => {
    expect(voteTally(votes1)).toEqual(11);
    expect(voteTally(votes2)).toEqual(-31);
  });
});

// ReferenceError: voteTally is not defined

// b) Create the function that makes the test pass.

// pseudo:
// create a function called voteTally that takes in an object that contains up votes and down votes as an argument
// in our function, subtract the objects downVotes value from the objects upVotes
// since our prompt actually requires our argument object to have an upVote key and a downVote key, all we have to do is do very basic math with those keys values.
// So in our function, to pull both of those values we can actually call on them using object.upVotes and object.downVotes. object is the parameter for our argument object, this lets us more dynamically pass through multiple instances of objects that have the same keys.
// we can do this one all on one line! yayyyyyyy!

const voteTally = (object) => object.upVotes - object.downVotes;

// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

// a) Create a test with an expect statement using the variables provided.

describe("arrayCombiner", () => {
  const dataArray1 = ["array", "object", "number", "string", "Boolean"];
  const dataArray2 = ["string", "null", "Boolean", "string", "undefined"];
  const dataArray3 = ["string", "smelly", "spread", "string", "spread"];
  // Expected output: ["array", "object", "number", "string", "Boolean", "null", "undefined"]
  it("takes in two arrays as arguments and returns one array with no duplicate values", () => {
    expect(arrayCombiner(dataArray1, dataArray2, dataArray3)).toEqual([
      "array",
      "object",
      "number",
      "string",
      "Boolean",
      "null",
      "undefined",
      "smelly",
      "spread",
    ]);
  });
});

//  ReferenceError: arrayCombiner is not defined

// b) Create the function that makes the test pass.

// pseudo:
// create a function called arrayCombiner that takes in two arrays as arguments
// within our function, declare a variable called combinedArray and assign to it the argument arrays combined using .concat(), const combinedArray = array1.concat(array2)
// after combining our arrays we still need to get rid of all of the duplicate strings within our new array
// .filter() is a higher order function that we can use here to return a new array with none of those duplicates. within our filter we want to pass through value and index, then use the .indexOf() built in method on our combinedArray to return the first index that an element can be found within an array, if we pass our arrays value through our indexOf() and have each value strictly equal the first index that it occurs, we can return falsey for extra iterations of those values, thus filtering them out on our returned array. (combinedArray.indexOf(value)===index)

// const arrayCombiner = (array1, array2) => {
//   const combinedArray = array1.concat(array2);
//   return combinedArray.filter((value, index) => {
//     return combinedArray.indexOf(value) === index;
//   });
// };

// STRETCH pseudo:
// create a function called arrayCombiner that can take in any number of arrays using a spread operator
// (...arrays).
// Using the spread operator allows us to pass in any number of arguments, but the argument arrays are seperate multidimensional arrays within one large array.
// We will then use the .flat() built in method, which concatenates all of the input arrays into one.
// arrays.flat()
// This does not solve the issue of each value in the array being unique, we could use the same method above to filter over our new array, or we can create a new Set. A Set is a built in object in JS that lets us store UNIQUE values of any type in an object. This will get rid of all of the duplicates in our new array, but it will no longer be an array.
// new Set(arrays.flat())
// Finally, we can use our new friend the spread operator (...) to create a new array from our new Set object by placing the spread operator in front of 'new' and wrapping our code block in brackets.
// [...new Set(arrays.flat())]
// !!!!!!!The best part is that this can all be on one line!!!!!!!
// (this one was a lot of fun to learn and research, I learned a lot about the spread operator and using a Set which i had never used before. :)  I really like the JS documentation compared to the Ruby docs, I can't really pinpoint why though)

const arrayCombiner = (...arrays) => [...new Set(arrays.flat())];
