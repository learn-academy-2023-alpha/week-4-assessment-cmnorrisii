# ASSESSMENT 4: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is object-oriented programming? How is it different than functional programming?

Your answer: Ruby is a language built around OOP, which is to say that everything in Ruby is an object with unique properties. Treating everything as an object helps streamline code and make it more modular and diverse to work with. Variables and data in OOP can be changed and mutated by the methods that are applied them. Functional programming is more strict in the sense that functions typically produce the same output given the same input. Variables in functional programming are typically declared and not changed as they are used as arguements for functions.

Researched answer: OOP is a model of programming where everything is an object that holds data, and within those objects are methods that are used to change the program's state (or memory at a given point in the program's execution). Code in OOP is considered Imperitive, meaning that it describes how a method or program is supposed to work step-by-step. This is useful when adding new data or classes seperate from existing data or classes, we can use methods on the new data without changing the existing data. We define how we want our code to operate, which makes it easier to add new things later on. Functional programming is a form of programming that is centered around building functions that typically do not change state and avoids changing data. An ouput of a function in FP should be the same given the same input, ehich makes FP useful for testing. Variables in FP are considered immutable, which means that ones the variable is declared, it cannot be changed. The only way to change the value of a given variable is to assign the new value to a new variable. In contrast to OOP having an Imperitive model, FP uses a Declarative programming model that describes what the program needs to accomplish, not HOW it should be accomplished. FP allows for parallel computing which can be used to divide large processes into smaller ones that can be solved in tandem with each other, decreases processing time.  
(sources - https://www.educative.io/blog/functional-programming-vs-oop, https://www.geeksforgeeks.org/difference-between-functional-programming-and-object-oriented-programming/, https://en.wikipedia.org/wiki/Imperative_programming, https://medium.com/@shaistha24/functional-programming-vs-object-oriented-programming-oop-which-is-better-82172e53a526)

2. What is the difference between a Float and an Integer in Ruby?

Your answer: A Float is a Class in ruby that is a number with a decimal (1.5, 3.14, 2.0), and an Integer is a Class in ruby that are whole numbers with no decimals (1, 4, 62)

**_(outside of doing research on this one, I'm not sure there is much more to say about either with my answer above, apologies if this doesn't suffice)_**

Researched answer: (I am not a math guy, so a lot of what makes a Float a Float is over my head, so this may be completely wrong lol) Float in Ruby represents a non-exact or inexact number (numbers with decimals), meaning that the way arithmetic is applied to floats does not necessarily work the same way as with regular integers, because a floating-point number cannot precisely represent all real numbers while rounding them beyond a decimal point (This is as deep as I can actually understand what's going on here, beyond this I would just be submitting something I dont understand as an answer). An Integer in Ruby is a class that holds integer/ number values, normal arithmetic works as expected on Integers in Ruby.
(sources - https://www.rubyguides.com/2016/07/numbers-in-ruby/, https://ruby-doc.org/core-2.5.0/Integer.html,https://docs.oracle.com/cd/E19957-01/806-3568/ncg_goldberg.html, https://en.wikipedia.org/wiki/Floating-point_arithmetic#Accuracy_problems)

3. Ruby has an implicit return. What does that mean?

Your answer: An implicit return means that the return is "implied", we don't physically have to code a return in our methods in Ruby. It's important to understand that the only return implied in a ruby method is the final line within the def or conditional. So if we have multiple things happening after a condition is met, or we are passing arguments through a method and manipulating the data in place and not permanently, the only implied return is the last line.

Researched answer: An implicit return means that if there is no return specified in a method, then the value of the last line of a method is automatically returned. The only implied return in a method is the final statement inside the method. The capability of having implicit returns lets a programmer be less verbose in defining their methods, which typically makes code look cleaner and more readable.
(sources- https://github.com/learn-academy-2023-alpha/Syllabus/blob/main/ruby/conditionals.md, https://www.learnhowtoprogram.com/ruby-and-rails/basic-ruby/defining-methods-in-ruby)

4. What is a block in Ruby?

Your answer: A block in Ruby is a method that can be applied within a method that defines the behavior of the parent method. They can take arguments like regular methods using |P I P E S| (||), and are defined using do and end. Everything within "do" and "end" is the actual block. Example time!

def random_method (array)
array.map do |value|
value \* 2
end
end

Here we have a method called random_method that takes in an array as an argument, within our method we have a .map that holds a block that takes the value (passed through |P I P E S|) of each index in an array and multiplies it by two, then returns an array containing those new values. Blocks are directly comparable to higher order functions in JS.

Researched answer: Blocks are anonymous fuunctions that can be passed into methods in Ruby. They are declared/defined using the `do` and `end` keywords, and arguments can be passed to them using |P I P E S|. Blocks in ruby have implicit return, meaning that we do not need to use the return keyword within our block, and it will return the last statement in the block.
(source - https://www.rubyguides.com/2016/02/ruby-procs-and-lambdas/, https://github.com/learn-academy-2023-alpha/Syllabus/blob/main/ruby/blocks.md)

5. How do you extract a value in a Ruby hash?

Your answer: To extract a value from a hash in Ruby, we can call on the hash, then in brackets call on the key of that holds the value we are wanting to extract. Example!

cats = Hash.new

cats[:cat1] = "dobby"
cats[:cat2] = "crookshanks"
cats[:cat3] = "miney"
cats[:cat4] = "hagrid"

p cats[:cat3]

<!-- output: "miney" -->

Our hash called 'cats' hold four key/value pairs, on line 58 we are extracting the value of cat3 which is 'miney'. Using this we can update or change the value that is being held in cat3 by assigning a new value.

cats[:cat3] = "hermione"
p cats[:cat3]

<!-- output: "hermione" -->

(yes i have 4 cats, no i dont want to talk about how much litter we have to use)

Researched answer: Values in a hash can be accessed by using bracket notation. After the hash name input a set of brackets with the name of the key that holds the value that you are trying to access. Alternatively, if you want to return all of the values within a given hash, you only need to call on the hash name. This will also pull the key names associated with each value, which may not be the desired outcome. An alternative to using bracket notation is using the fetch and fetch_value methods on a hash name, which works the same way except you would use () instead of [].
(sources - https://www.codecademy.com/learn/learn-ruby/modules/learn-ruby-arrays-and-hashes-u/cheatsheet, https://ruby-doc.org/core-2.5.1/Hash.html)

## Looking Ahead: Terms for Next Week

1. Class Inheritance: A fundamental OOP feature that helps us create specific versions of any class. Basically classes within classes that share similar properties. Children classes may or not share specific properties of other children classes of the same level, but they can still share properties that belong to a parent (or super) class. This allows developers to define broad properties to a class, then give more and more specific and dynamic properties to children classes. We can bring all of the children together using composition to tie together children classes that can't operate the same way another child class can.
   (source - https://www.rubyguides.com/2019/01/what-is-inheritance-in-ruby/)

2. RSpec: RSpec is a testing environment for Ruby. RSpec was created for Behavior Driven Development which is a child of Test Driven Development. BDD helps us write tests that are easier to understand and maintain, by writing tests to specify system behavior. Writing tests this way helps us think about what the system does, rather than how it does it.
   (sources - https://semaphoreci.com/community/tutorials/getting-started-with-rspec, https://semaphoreci.com/community/tutorials/behavior-driven-development)

3. CRUD: Create, Read, Update, Delete

- Four basic functions that we should be able to do with data
- Create - We can create new data, or create methods/functions to create new data within our code
- Read - We can read data within objects or elements in our code, we can broadly define the means to read that data, or specify from what is available what we want to read
- Update - We can update, or create methods to update data within objects or elements within our code. We can code methods that can change data belonging to objects
- Delete - We can remove or delete data from an element, and then when we call on that element, it will not contain the deleted data. (big duh on that one lol)
  (sources - https://www.codecademy.com/article/what-is-crud, https://github.com/learn-academy-2023-alpha/Syllabus/blob/main/ruby/hashes.md )

4. Test-driven development: Writing code with testing at the front of the process, establishing a test environment before actually writing the code. It allows the programmer to focus on the design of the code before attempting to actually code. It also allows the developer to think of extra use-cases with the application of their program, and how to implement more dynamic and efficient code. If we already know what the expected outcome of a function should be, it makes it easier to clearly write what the code to make that happen.
   (source - https://semaphoreci.com/blog/test-driven-development)

5. HTTP: HTTP is a protocol for fetching resources on web apps. It works as a foundation of data exchange between a client and a server. When a client initiates a request frim the server, the server provides a complete document of comprised of subdocuments. HTTP is designed to be readable and simple, so that it can be understood by human users and orivude easier testing for developers. HTTP cookies allow HTTP to hold state for a user in between sessions, without cookies HTTP would not be able to hold state.
   (source - https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview)
