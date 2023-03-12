# ASSESSMENT 4: Ruby Coding Practical Questions
# MINASWAN ✌️

# --------------------1) Create a method that takes in a number and determines if the number is even or odd. Use the test variables provided.

# pseudo:
# create a method called even_or_odd that takes a number as an argument
# create an if conditional that takes the argument number and divide it by 2 with a modulo (%) that returns the remainder of that division. If the remainder of that division is strictly equal to 0 then return that the argument number is even using string interpolation "#{num} is even". else, return that the number is odd using string interpolation "#{num} is odd".
# call on our function using 'p' with each test variable as an argument to display our method works correctly in the terminal.

num1 = 7
# Expected output: '7 is odd'
num2 = 42
# Expected output: '42 is even'
num3 = 221
# Expected output: '221 is odd'

def even_or_odd (num)
    if num % 2 == 0
        "#{num} is even"
    else
        "#{num} is odd"
    end
end

p even_or_odd(num1)
# "7 is odd"
p even_or_odd(num2)
# "42 is even"
p even_or_odd(num3)
# "221 is odd"

# -------------------2) Create a method that takes in a string and removes all the vowels from the string. Use the test variables provided. 
# HINT: Check out this resource: https://ruby-doc.org/core-2.6/String.html#method-i-delete

# pseudo
# create a method called vowel_movement (sorry this is just really funny to me) that takes in a string as an argument
# within our method we can use the built in method .delete to remove individual characters from the argument string, which is pretty nice. all we have to do is pass through vowels both uppercased and lowercased as what we want to delete ("AEIOUaeiou") (I know the () arent required here, but I dont want to get used to not using them because JS needs them for similar operations)
# call on our function using 'p' and pass through each test variable as an argument

beatles_album1 = 'Rubber Soul'
# Expected output: 'Rbbr Sl'
beatles_album2 = 'Sgt Pepper'
# Expected output: 'Sgt Pppr'
beatles_album3 = 'Abbey Road'
# Expected output: 'bby Rd'

def vowel_movement (string)
    string.delete("AEIOUaeiou")
end

p vowel_movement(beatles_album1)
# "Rbbr Sl"
p vowel_movement(beatles_album2)
# "Sgt Pppr"
p vowel_movement(beatles_album3)
# "bby Rd"


# -------------------3) Create a method that takes in a string and checks if the string is a palindrome. A palindrome is the same word spelled forward or backward. Use the test variables provided.

# pseudo
# create a method called palindrome_detector that takes in a string as an argument
# create a conditional statement in our method that checks if the argument string is strictly equal to the argument string reversed using the .reverse built in method. 
    # also need to consider capital letters in the argument, so use the .downcase or .upcase methods when calling on our argument string within our conditional
    # string.downcase == string.downcase.reverse
# if our 'if' is true, return that the argument string is a palindrome using string interpolation ("#{string} is a palindrome")
# else return ("#{string} is not a palindrome"), indicating that the argument string is not the same word spelled forwards and backwards. 
# call on our function using 'p' and pass through each test variable as an argument

palindrome_tester1 = 'Racecar'
# Expected output: 'Racecar is a palindrome'
palindrome_tester2 = 'LEARN'
# Expected output: 'LEARN is not a palindrome'
palindrome_tester3 = 'Rotator'
# Expected output: 'Rotator is a palindrome'

def palindrome_detector (string)
    if string.downcase == string.downcase.reverse
        "#{string} is a palindrome"
    else 
        "#{string} is not a palindrome"
    end
end

p palindrome_detector(palindrome_tester1)
# "Racecar is a palindrome"
p palindrome_detector(palindrome_tester2)
# "LEARN is not a palindrome"
p palindrome_detector(palindrome_tester3)
# "Rotator is a palindrome"

