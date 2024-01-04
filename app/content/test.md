---
title: Python from the word ...Go
datePosted: May 24, 2022
dateUpdated: Jun 27, 2022
image: https://res.cloudinary.com/practicaldev/image/fetch/s--IREhjX26--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/f4i466ovwzbp4axpnab6.jpeg
---

**_<u>Basics Part1</u>_**

## Introduction

`What is programming?`
In simple terms, programming is a way for us to give instructions to computers. "Giving it an _instruction manual_, and the computer follows".

Computers don't understand English or any other human language for that matter. Computers speak in 1s and 0s; _On or Off_ (So is all the other electronic component).
But for humans, it would be gibberish or rather difficult to communicate in 1s or 0s. Humans have then developed programming languages that work in between human language and machine language (0s / 1s).
Some programming languages are low-level (closer to machine language) while others are high-level (closer to human language).
Examples of low-level programming languages include:

-   Assembly

Examples of high-level programming languages include:

-   Python
-   JavaScript

What then is a `programming language`?
A programming language is any set of rules that convert strings, or graphical program elements, to various kinds of machine code output (that is understandable to the computer).

`Note:` At the end of the day, all programming languages do the same thing, _they tell the machine what to do_. However, different languages have different modes of doing it.
The beauty is that "most languages have very similar principles."

> The hardest part is only in learning the first language.

In between the programming language and the machine language, we need a 'translator' that understands both the programming language (source code) and machine language and hence can translate our code to machine language for the computers to understand.
`*The translator ain't a person` but rather another program that can either be an interpreter or a compiler.
Like a _translator_, an interpreter goes line by line throughout the code and executes the code on the machine. In contrast, a compiler takes the code and reads the entire file all at once and translates it to machine code. (_Their other major differences are a little complicated and beyond the scope of the course_)
**Python usually uses an interpreter** hence to use python you have to download the interpreter.

`Note:` To learn or understand more on any of the topics below, here is a link to the official [Python Documentation.](https://docs.python.org/3/tutorial/index.html)

---

## Python interpreter

To download the python interpreter, we first visit [python.org](https://www.python.org/).

![Python Official Site](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/r8q93ltm8o3yly7ezv16.PNG)

Under Downloads; Click on either Windows or Mac OS depending on one's operating system. (_The system will automatically detect the specifications of your computer and either suggest 32bit or 64bit for they using Windows OS_)

![Python Interpreter](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/w2c95wjax8696uci7wrc.PNG)

After downloading is complete, click to load the setup.
**Note:** While installing, don't forget to mark 'checked' for the option "Add Python to PATH" as shown below:

![Add Python to PATH](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/tofdweqhqxvpl184z4y2.PNG)

After clicking 'Install Now', the installation will commence immediately:

![Installation in Progress](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ed6x8t45t9l1ew7zb3tx.PNG)

...and after a successful installation, the program will notify you:

![Successful Installation](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/khv6r55p26i6bg2cghjk.PNG)

After installing python, you can use the terminal, (or on Windows) use Command Prompt or PowerShell to confirm whether Python has successfully been added to PATH.
"Open either Command Prompt or PowerShell and type 'python' then click 'Enter' to run the command".
For a successful installation and adding to PATH, both Command Prompt(Image1) and PowerShell(Image2), after running 'python', should look like the image below:

![Successfully added to PATH](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/46674216ym8sfoqja332.PNG)

...but by chance there probably was a problem in installation or adding to PATH, after running the 'python' command, it will return an error but one can re-install the interpreter and remember to check 'Add Python to PATH'.

---

## First "Hello World" Program

After setting up the interpreter, we can use the terminal (Command Prompt, GIT Bash, PowerShell, Termux ...etc) to run a few of python commands.
Open the terminal and first run 'python' command. Secondly, use the python command "print" to display characters.

```
>>> print("I am using python")
I am using python
```

---

## Setting up the environment (IDE Setup)

We have previously just run our first python program but in a profession, one cannot run the entire company's program on the terminal. It is mainly used for quick testing.
In most cases, we use code editors or IDEs to run python programs.

> Why not write code in a word document or a text file?

In a word document, the code will be in form of text hence in case of a syntax error, no information will be returned. In addition, professional developers need some extra tools that code editors and IDEs provide that help them to be more efficient with their code.

`What is a code editor and an IDE, and what is their difference?`
Code editors are lightweight and give some features like auto-completion, while IDEs are full-fledged environments and provide a tone of extra features like debugging, auto-completion, code formatting, code snippets ...etc.
The most popular code editors and IDEs for Python include: Sublime Text, Visual Studio Code, PyCharm and Jupyter Notebooks.

-   To install, setup, customize and use Sublime Text: [Link](https://drive.google.com/file/d/1SjQNaNU1WzLl7MV_1XZNkkH2-TdXyP3F/view?usp=sharing)

-   To install, setup, customize and use Visual Studio Code: [Link](https://drive.google.com/file/d/1K3alOYWFujDQQXoa2qZGg3xveCVErptM/view?usp=sharing)

-   To install, setup, customize and use PyCharm: [Link](https://drive.google.com/file/d/1LBjXb1NoQYp0mrgZmtOLL__zB6Ixnywc/view?usp=sharing)

-   To install, setup, customize and use Jupyter Notebooks: [Link](https://drive.google.com/file/d/1f_gcqYW51v6nItLxOBKsSEji-vbl_BGw/view?usp=sharing)

---

## Python Basics

In order for any programmer to learn a language, there are 4 key things that they really need to master:

i). Terms of the language - Different words and definitions are used in the language eg. Variables, statements, and instantiation.
ii). Language Data Types - Integers, strings ...etc.
iii). Actions - Using memory and performing some actions.
iv). Best practices of writing a language.

##### 1. Variables

Variables are memory locations that store information that can be used in a program.
They act like _'containers'_ that store/hold an item(s).
They can hold user(s) input, values ..etc.
eg.

```
>>> name = "Mark"
>>> print(name)
Mark

Hence, 'name' is a variable that stores the name, Mark.

>>> iq = 190
>>> print(iq)
190
```

`Note:` Assigning a value to a variable is known as binding.

##### <u>Rules of declaring variables</u>

-   snake_case

```
>>> user_iq = 190
```

-   start with lowercase or underscore

```
>>> _useriq = 190
```

-   letters, numbers, underscores

```
>>> us4er_iq = 190
```

-   Case sensitive

```
>>> user_iq = 190
>>> user_IQ = 200

>>> print(user_iq)
190

>>> print(user_IQ)
200
```

-   Don't overwrite python keywords -
    `One cannot assign values to python keywords.`
    To find the list of complete keywords in python, click the following [link.](https://www.w3schools.com/python/python_ref_keywords.asp)

Variables can also be re-assigned.

```
>>> iq = 190
>>> user_age = iq/4
>>> print(user_age)
47.5
```

`Constants` - These are variables that are not meant to change.
They are written in uppercase.

```
>>> PI = 3.14
```

`Dunder Variables` - Preceded by a double underscore. (Will look at them later in the course)
Examples:

```
__debug__
__loader__
__import__
```

Assigning values to variables multiple times:

```
>>> a, b, c = 1, 2, 3
>>> print(a)
1
>>> print(b)
2
>>> print(c)
3
```

`Note:` **Variables should be descriptive.**

**<u>Expressions Vs Statements</u>**

```
>>> iq = 100
>>> user_age = iq / 5
```

-   Expression is a piece of code that produces a value.
    eg: `iq / 5`
-   Statement is the entire line of code that performs some sort of action.
    eg: `iq = 100`, `user_age = iq / 5`

-   Augmented Assignment Operator

```
>>> some_value = 5
>>> some_value = some_value + 2
>>> print(some_value)
7
```

(Can also be written as)

```
>>> some_value = 5
>>> some_value += 2
>>> print(some_value)
7

>>> some_value = 5
>>> some_value -= 2
>>> print(some_value)
3

>>> some_value = 5
>>> some_value *= 2
>>> print(some_value)
10
```

##### 2. Python Data Types

A data type is a classification of data which tells the compiler or interpreter how the programmer intends to use the data. It is a classification that specifies which type of value a variable has and what type of mathematical, relational or logical operations can be applied to it without causing an error.
In Python, data types include:

-   Fundamental Data Types

```
-Text Type:
str - string

-Numeric Types:
int - integer
float
complex

-Sequence Types:
list
tuple
range

-Mapping Type:
dict - dictionary

-Set Types:
set
frozenset

-Boolean Type:
bool - boolean

-Binary Types:
bytes
bytearray
memoryview

```

-   Custom Data Types - Created from classes
-   Specialized Data Types - Extensions from Modules
-   None Type - `None`

a.) int - Integer
An integer is a whole number with no decimal point; 1, 2, 3, 4, 456, -4643, -77.

```
>>> print(2 + 4)
6

>>> print(2 - 4)
-2

>>> print(2 * 4)
8

>>> print(type(2))
<class 'int'>

>>> print(type(-29))
<class 'int'>

>>> print(type(2 + 4))
<class 'int'>

>>> print(type(2 - 4))
<class 'int'>
```

b.) float
These are numbers with a decimal point; 5.7, 8.0, 3.5554, 0.00003, -0.543, -4.229.

```
>>> print(2 / 4)
0.5

>>> print(type(2.7))
<class 'float'>

>>> print(type(-27.554))
<class 'float'>

>>> print(type(2.8 + 4))
<class 'float'>

>>> print(type(2 / 4))
<class 'float'>
```

`Note:` - floats take up a lot of space in memory than integers.
This is because the number(s) need to be stored in memory in binary form. But when there's a decimal place eg. 10.56, it is difficult to represent that in a binary form(0s / 1s) because of the point `'.'` hence a floating-point number is stored in two different locations eg. one for 10 and the other for 56.

To learn more about floating-point numbers, here is a link to the python documentation on [floating-point numbers.](https://docs.python.org/3/tutorial/floatingpoint.html)

-   Operations on integers and floats.

`operators` + , - , \* , / , \*\* , // , %

`+ ----- addition`
`- ----- subtraction`
`* ----- multiplication`
`/ ----- division`

\*\* ---- 'power of'
eg.

```
>>> print(2 ** 4)
16

>>> print(7 ** 9)
40,353,607
```

// ---- 'rounds down the quotient to the nearest whole number'
eg.

```
>>> print(2 // 4)
0

>>> print(3 // 4)
0

>>> print(4 // 4)
1

>>> print(5 // 4)
1

>>> print(7 // 4)
1

>>> print(9 // 4)
2
```

% ---- 'returns the remainder'
eg.

```
>>> print(5 % 4)
1

>>> print(5 % 2)
1

>>> print(5 % 3)
2
```

-   Math Functions (Actions performed on integers and floats).

i) round - rounds off the number to the nearest whole number.

```
>>> print(round(3.1))
3

>>> print(round(3.9))
4
```

ii) abs - returns the absolute value of the argument.

```
>>> print(abs(-20))
20

>>> print(abs(-354))
354

>>> print(abs(44))
44
```

iii) pow - used to calculate a number to its specific power.

```
>>> print(pow(2,3))
8

>>> print(pow(4,3))
64
```

iv) max - returns the highest number.

```
>>> print(max(2,3))
3

>>> print(max(2,-9))
2
```

v) min - returns the least number.

```
>>> print(min(3,8))
3

>>> print(min(2,-9))
-9
```

For most of the other mathematical functions to be used, they have to be 'imported' from the math module.
`from math import *`
The \* symbol means 'everything' hence we import all the functions from the math module.

i) floor - rounds down the number.

```
>>> from math import *

>>> print(floor(3.7))
3

>>> print(floor(5.9))
5
```

ii) ceil - rounds up the number.

```
>>> from math import *

>>> print(ceil(3.2))
4

>>> print(ceil(5.9))
5

>>> print(ceil(5.3))
5
```

iii) sqrt - returns the square root of a number

```
>>> from math import *

>>> print(sqrt(4))
2.0

>>> print(sqrt(9))
3.0

>>> print(sqrt(121))
11.0
```

`To get more mathematical functions used in python,` [click the following link.](https://docs.python.org/3/library/math.html)

-   Operator Precedence (BODMAS)

B - brackets
O - power off
D - division
M - multiplication
A - addition
S - subtraction

```
>>> print(20 - 3 * 4)
8

>>> print((20 - 3) * 4)
68

>>> print((20 - 3) + 2 ** 2)
21
```

-   Conversion to binary \*`optional`

```
>>> print(bin(5))
0b101

>>> print(int('0b101', 2))
5
```

c.) str - String
A string is a piece of text. It can either be written with double or single quotation marks.

```
>>> greetings = "hi, hello there!"
>>> print(greetings)
hi, hello there!

>>> greetings = 'Welcome!'
>>> print(greetings)
Welcome!

>>> print(type("hi, hello there!"))
<class 'str'>
```

For long strings/sentences (strings that include a lot of lines) we use triple quotes:

```
>>> passage = ''' Mark Gatere is a student.
    He is currently at University pursuing his degree program.
    He wants to become a Data Scientist in future.'''
>>> print(passage)
Mark Gatere is a student.
He is currently at University pursuing his degree program.
He wants to become a Data Scientist in future.
```

-   Working with strings

**String Concatenation**
Concatenation is the action of linking things together in a series hence, string concatenation is joining multiple strings to one in series.

```
>>> first_name = "Mark"
>>> second_name = "Gatere"
>>> full_name = first_name + second_name
>>> print(full_name)
MarkGatere

>>> first_name = "Mark"
>>> second_name = "Gatere"
>>> full_name = first_name + ' ' + second_name
>>> print(full_name)
Mark Gatere
```

**Type Conversion**
This is converting a value from one data type to another.

```
>>> print(type(str(100)))
<class 'str'>

>>> a = str(100)
>>> b = int(a)
>>> a_type = type(a)
>>> b_type = type(b)
>>> print(a_type)
<class 'str'>
>>> print(b_type)
<class 'int'>
```

**Escape Sequences**
We use a backslash.

```
>>> weather = 'It\'s sunny'
>>> print(weather)
It's sunny

>>> weather = "It's \"kind of\" sunny"
>>> print(weather)
It's "kind of" sunny

>>> weather = 'It\\s sunny'
>>> print(weather)
It\s sunny
```

\t is used to add a tab to the output.

```
>>> weather = '\t It\'s sunny'
>>> print(weather)
    It's sunny
```

\n is used to take the part after it to a new line.

```
>>> weather = "It's sunny \n hope you have a good day."
>>> print(weather)
It's sunny
hope you have a good day
```

**Formatted Strings** (f-string)
An 'f' is added at the start of the expected output.

```
>>> name = "Johnny"
>>> age = 55
>>> print ("hi" + name + ". You are" + str(age) + "years old.")
hi Johnny. You are 55 years old.

(can also be written as)

>>> name = "Johnny"
>>> age = 55
>>> print (f"hi {name}. You are {age} years old.")
hi Johnny. You are 55 years old.
```

In python 2 (but also works in python 3):

```
>>> name = "Johnny"
>>> age = 55
>>> print ("hi {}. You are {} years old.".format(name, age))
hi Johnny. You are 55 years old.

>>> name = "Johnny"
>>> age = 55
>>> print ("hi {1}. You are {0} years old.".format(name, age))
hi 55. You are Johnny years old.
```

**String Indexes**
A string is stored in a memory as ordered pieces of characters.

`my name is`
`0123456789`

To access each character in a string, we use an index. Indexing starts from zero(0).

```
>>> sentence = "my name is Mark"
>>> print(sentence[3])
n

>>> sentence = "my name is Mark"
>>> print(sentence[8])
i
```

**String Slicing**
[start:stop] - We start from the stated index but stop at but not including the index given.

```
>>> number = '01234567'
>>> print(number[0:7])
0123456

>>> number = '01234567'
>>> print(number[0:8])
01234567

>>> sentence = "my name is Mark"
>>> print(sentence[1:10])
y name is

```

[start:stop:stepover]

```
>>> number = '01234567'
>>> print(number[0:8:2])
0246

>>> sentence = "my name is Mark"
>>> print(sentence[1:15:2])
ynm sMr
```

Extra ways to access the values using the indexes:

```
>>> number = '01234567'
>>> print(number[1:])
1234567

>>> number = '01234567'
>>> print(number[:5])
01234

>>> number = '01234567'
>>> print(number[::2])
0246

>>> number = '01234567'
>>> print(number[-1])
7

>>> number = '01234567'
>>> print(number[-2])
6

>>> number = '01234567'
>>> print(number[-3])
5

>>> number = '01234567'
>>> print(number[::-1])
76543210

>>> number = '01234567'
>>> print(number[::-2])
7531
```

**Immutability**
Strings in Python are immutable (they cannot be changed).

**Built-in string Functions and methods**
len() - used to find the number of characters in a string.

```
>>> greet = "Hello"
>>> print(len(greet))
5

```

x.upper() - capitalizes or changes the entire string to uppercase.

```
>>> greet = "Hello"
>>> print(greet.upper)
HELLO
```

x.lower() - changes the entire string to lowercase.

```
>>> greet = "HELLO"
>>> print(greet.lower)
hello
```

x.capitalize() - capitalizes the first character at the beginning of the string.

```
>>> greet = "hello"
>>> print(greet.capitalize)
Hello
```

x.isupper() - returns either True or False on whether the string is in uppercase.

x.islower() - returns either True or False on whether the string is in lowercase.

-   Using functions in combination with each other.

```
>>> phrase = "My name is Mark"
>>> print(phrase.upper().isupper())
True
```

x.find() - returns the index of the character(s) you're looking for in the string.

```
>>> quote = "to be or not to be"
>>> print(quote.find("be"))
3
```

x.replace() - used to replace character(s) in a string with new character(s).

```
>>> quote = "to be or not to be"
>>> print(quote.replace("be", "me"))
to me or not to me

>>> quote = "to be or not to be"
>>> print(quote.replace("t", "y"))
yo be or noy yo be
```

x.index - returns the index of a specific character or the index where the characters start.

```
>>> greet = "hello"
>>> print(greet.index("e"))
1

>>> greet = "hello"
>>> print(greet.index("l"))
2

>>> greet = "hello"
>>> print(greet.index("lo"))
3
```

`To learn more on string methods,` click the following [link](https://www.w3schools.com/python/python_ref_string.asp)

d.) bool - booleans
This data type consists of either True or False.

```
>>> is_cool = True
>>> print(is_cool)
True

>>> is_tall = False
>>> print(is_tall)
False

>>> print(bool(1))
True

>>> print(bool(0))
False

>>> print(bool('True'))
True

>>> print(bool('False'))
True

>>> print(bool())
False
```

`Note:` A Boolean value is always True as far as there's a value. 0 or empty data will always return False as shown in the examples above.

---

An important concept to learn before getting to learn more data types is - **Getting input from Users.**
You've encountered a form that requires to be filled out.
The form is usually blank and requires specific details for each section including Name, Email address, and contact. An example is shown below:

![Form](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/0pyz1wz30p92d5pxeia4.jpg)

In Python, we also create programs that require input from the users hence allowing users of the program to input information into the program. To create these programs, we use the keyword `input` which tells the interpreter that we require input from the user to continue with the other command.

![Input](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/lphcfvsfuezkyhk6ji0n.gif)

`Note:` Every input from the user is stored by default as a string (including numbers) hence for any mathematical calculation, the input has to be converted to numerical, either integer or float.

```
>>> birth_year = input("What year were you born? ")
>>> age = 2022 - birth_year
>>> print(f"Your age is: {age} years old")
What year were you born? _2001_
#Will return an error as birth_year(string) cannot
 be subtracted from 2022(integer).

>>> birth_year = input("What year were you born? ")
>>> age = 2022 - int(birth_year)
>>> print(f"Your age is: {age} years old")
What year were you born? _2001_
Your age is: 21 years old
```

#### _Exercise 1_ (Done Below)

> Create a simple calculator that asks for two numbers from the user, finds their sum and outputs the sum.

```
(Note the two different programs)

>>> num1 = input("Enter a number: ")
>>> num2 = input("Enter a second number: ")
>>> sum = num1 + num2
>>> print(sum)
Enter a number: _12_
Enter a second number: _5.2_
125.2

# Correct Program
>>> num1 = input("Enter a number: ")
>>> num2 = input("Enter a second number: ")
>>> sum = int(num1) + int(num2)
>>> print(sum)
Enter a number: _12_
Enter a second number: _5.2_
17.2
```

#### _Exercise 2_ (Done Below)

> Create a simple password checker that outputs the password in hidden format and outputs the number of characters in the password.

```
>>> user_name = input("Enter your username: ")
>>> password = input("Enter your Password: ")
>>> pass_length = len(password)
>>> pass_hidden = 'x' * pass_length
>>> print(f"Hello {user_name}, your password: {pass_hidden} is {pass_length} characters long.")
Enter your username: _gateremark_
Enter your Password: _swddbb243tbfbd_
Hello gateremark, your password: xxxxxxxxxxxxxx is 14 characters long.
```

![Exercise2](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/e8e5b5uqxzgr3v8ibbdh.gif)

---

Let's kick-off off our next data type:

e.) Lists
A list is an ordered sequence of objects of any type. It is denoted by square brackets [].
It can have a collection of items of different data types and can at times be referred to as an array though there's a slight difference between a list and an array. (Will cover this later in the course).

```
>>> li = [1, 2, 3, 4, 5]
>>> li2 = ['a', 'b', 'c', 'f']
>>> li3 = [1, 2, 'r', 'u', True]
>>> print(li)
>>> print(li2)
>>> print(li3)
[1, 2, 3, 4, 5]
['a', 'b', 'c', 'f']
[1, 2, 'r', 'u', True]
```

Lists are **Data Structures.**
A _Data Structure_ is a data organization, management, and storage format that enables efficient access and modification.

-   Accessing individual items in a list (using index)

```
>>> li3 = [1, 2, 'r', 'u', True]
>>> print(li3[2])
>>> print(li3[4])
r
True

>>> amazon_cart = ["notebooks", "sunglasses", "earphones"]
>>> print(amazon_cart[2])
earphones

>>> amazon_cart = ["notebooks", "sunglasses", "earphones"]
>>> print(amazon_cart[3])
#Returns an error for the index is out range.
```

-   List Slicing

As we did in strings, we can use the index [start:stop] to access a specific range of items in a list.
`Remember` eg. [1:7] selects all items from index 1 to but not including the item in index 7 hence the last item is the item in index 6.

```
>>> amazon_cart = ["notebooks",
                   "sunglasses",
                   "earphones",
                   "toys",
                   "grapes"]
>>> print(amazon_cart[0:4])
['notebooks', 'sunglasses', 'earphones', 'toys']
```

[start:stop:stepover]

```
>>> amazon_cart = ["notebooks",
                   "sunglasses",
                   "earphones",
                   "toys",
                   "grapes"]
>>> print(amazon_cart[::2])
['notebooks', 'earphones', 'grapes']
```

-   Modifying elements in a list

**Lists**, unlike strings, **are mutable** hence one can modify elements in a list.

```
>>> amazon_cart = ["notebooks",
                   "sunglasses",
                   "earphones",
                   "toys",
                   "grapes"]
>>> amazon_cart[0] = "Laptop"
>>> print(amazon_cart)
['Laptop', 'sunglasses', 'earphones', 'toys', 'grapes']

>>> amazon_cart = ["notebooks",
                   "sunglasses",
                   "earphones",
                   "toys",
                   "grapes"]
>>> amazon_cart[0] = "Laptop"
>>> new_cart = amazon_cart[0:3]
>>> new_cart[1] = "gum"
>>> print(new_cart)
>>> print(amazon_cart)
['Laptop', 'gum', 'earphones']
['Laptop', 'sunglasses', 'earphones', 'toys', 'grapes']
```

`Note:` When you assign a list to a different variable, it points to the memory location of the original list hence modification of the list in the new variable leads to modification of the original list in the previous variable.
Example:

```
>>> amazon_cart = ["notebooks",
                   "sunglasses",
                   "earphones",
                   "toys",
                   "grapes"]
>>> amazon_cart[0] = "Laptop"
>>> new_cart = amazon_cart
>>> new_cart[0] = "gum"
>>> print(new_cart)
>>> print(amazon_cart)
['gum', 'sunglasses', 'earphones', 'toys', 'grapes']
['gum', 'sunglasses', 'earphones', 'toys', 'grapes']
```

To avoid modification of the original list after one has modified the list assigned in the new variable, we use [:] after the list variable to copy the entire list and store it as a new list in a different variable.

```
>>> amazon_cart = ["notebooks",
                   "sunglasses",
                   "earphones",
                   "toys",
                   "grapes"]
>>> amazon_cart[0] = "Laptop"
>>> new_cart = amazon_cart[:]
>>> new_cart[0] = "gum"
>>> print(new_cart)
>>> print(amazon_cart)
['gum', 'sunglasses', 'earphones', 'toys', 'grapes']
['Laptop', 'sunglasses', 'earphones', 'toys', 'grapes']
```

-   Matrix (These are multi-dimensional lists/arrays)

```
>>> matrix = [
      [2, 4, 6],
      [9, 5, 7],
      [3, 8, 1]
    ]
>>> print(matrix)
[[2, 4, 6], [9, 5, 7], [3, 8, 1]]

```

Accessing elements in a multi-dimensional list/array.

```
>>> matrix = [
      [2, 4, 6],
      [9, 5, 7],
      [3, 8, 1]
    ]
>>> print(matrix[1][2])
>>> print(matrix[0][1])
7
4

>>> matrix = [
      [2, 4, 6],
      [9, 5, 7],
      [3, 8, 1]
    ]
>>> print(matrix[2][3])
#Returns an error for the index is out of range.
```

-   **List Functions and Methods/Actions**

len() - Find the length of a list (number of items in a list).

```
>>> basket = [1, 2, 3, 4, 5]
>>> print(len(basket))
5
```

x.append() - Used to add a value to an original list.
It modifies the list _inplace_ hence does not create a copy of the original list.

```
>>> basket = [1, 2, 3, 4, 5]
>>> basket.append(100)
>>> print(basket)
[1, 2, 3, 4, 5, 100]

>>> basket = [1, 2, 3, 4, 5]
>>> new_list = basket.append(100)
>>> print(basket)
>>> print(new_list)
[1, 2, 3, 4, 5, 100]
None

>>> basket = [1, 2, 3, 4, 5]
>>> basket.append(100)
>>> new_list = basket
>>> print(basket)
>>> print(new_list)
[1, 2, 3, 4, 5, 100]
[1, 2, 3, 4, 5, 100]
```

x.insert() - Used to insert a value anywhere in the list on a specific index.
It too modifies the list _inplace_ hence does not create a copy of the original list.

```
>>> basket = [1, 2, 3, 4, 5]
>>> new_list = basket.insert(4, 100)
>>> print(basket)
>>> print(new_list)
[1, 2, 3, 4, 100, 5]
None

>>> basket = [1, 2, 3, 4, 5]
>>> basket.insert(4, 100)
>>> new_list = basket
>>> print(basket)
>>> print(new_list)
[1, 2, 3, 4, 100, 5]
[1, 2, 3, 4, 100, 5]
```

x.extend() - Used to append another list to the original list.
It too modifies the list _inplace_ hence does not create a copy of the original list.

```
>>> basket = [1, 2, 3, 4, 5]
>>> new_list = basket.extend([100, 101, 107])
>>> print(basket)
>>> print(new_list)
[1, 2, 3, 4, 5, 100, 101, 107]
None

>>> basket = [1, 2, 3, 4, 5]
>>> basket.extend([100, 101, 107])
>>> new_list = basket
>>> print(basket)
>>> print(new_list)
[1, 2, 3, 4, 5, 100, 101, 107]
[1, 2, 3, 4, 5, 100, 101, 107]

numbers = [1, 2, 3, 4]
friends = ["Kelvin", "Karen", "Jim"]
friends.extend(numbers)
print(friends)
['Kelvin', 'Karen', 'Jim', 1, 2, 3, 4]
```

x.pop() - Automatically removes (pops off) the last element from the list or from the given index. It returns the element that has been popped off.

```
>>> basket = [1, 2, 3, 4, 5]
>>> basket.pop()
>>> print(basket)
[1, 2, 3, 4]

>>> friends = ["Kelvin", "Karen", "Jim"]
>>> friends.pop()
>>> print(friends)
['Kelvin', 'Karen']

>>> basket = [1, 2, 3, 4, 5]
>>> basket.pop(0)
>>> print(basket)
[2, 3, 4, 5]

>>> basket = [1, 2, 3, 4, 5]
>>> basket.pop(2)
>>> print(basket)
[1, 2, 4, 5]

>>> basket = [1, 2, 3, 4, 5]
>>> new_list = basket.pop(4)
>>> print(new_list)
5
```

x.remove() - Removes an element/value from a list. Works 'inplace'.

```
>>> basket = [1, 2, 3, 4, 5]
>>> basket.remove(4)
>>> print(basket)
[1, 2, 3, 5]
```

x.clear() - Clears the entire list. Works 'inplace'.

```
>>> basket = [1, 2, 3, 4, 5]
>>> basket.clear()
>>> print(basket)
[]
```

x.index() - Used to check the index of an element in the list.

```
>>> basket = ['a', 'b', 'c', 'd', 'e']
>>> print(basket.index('d'))
3

Checking from a specific index in the list.

>>> basket = ['a', 'b', 'c', 'd', 'e']
>>> print(basket.index('d', 0, 3)) #Checking from index 0 to index 3 (but not including index 3).
#returns an error as 'd' is in index 3 yet index 3 is not included in the range.
```

-   Finding whether an element is or is not in a list.

We use the keyword 'in' which returns whether True or False.

```
>>> basket = ['a', 'b', 'c', 'd', 'e']
>>> print('d' in basket)
True

>>> basket = ['a', 'b', 'c', 'd', 'e']
>>> print('i' in basket)
False

>>> print('a' in 'My name is Mark')
True

>>> print('z' in 'What is the time?')
False
```

x.count() - Used to count the number of items an element appears in the list.

```
>>> basket = ['a', 'b', 'c', 'd', 'e']
>>> print(basket.count('d'))
1

>>> basket = [1, 2, 3, 4, 2, 5, 2]
>>> print(basket.count(2))
3
```

x.sort() - Used to sort the list in ascending order. If the list contains names, they are sorted in alphabetical order. Works 'inplace'.

```
>>> basket = [5, 2, 3, 4, 1, 3, 2]
>>> basket.sort()
>>> print(basket)
[1, 2, 2, 3, 3, 4, 5]

>>> friends = ["Karen", "Toby", "Elijah"]
>>> friends.sort()
>>> print(friends)
['Elijah', 'Karen', 'Toby']
```

sorted() - Used to sort the list in ascending order. If the list contains names, they are sorted in alphabetical order. Unlike the method x.sort(), sorted() is a function that produces a new array and hence does not work inplace.

```
>>> friends = ["Karen", "Toby", "Elijah"]
>>> print(sorted(friends))
['Elijah', 'Karen', 'Toby']

>>> basket = [5, 2, 3, 4, 1, 3, 2]
>>> print(sorted(basket))
[1, 2, 2, 3, 3, 4, 5]
```

x.copy() - Works the same as [:] by copying the entire list and creating a new one exactly like the original list.

```
>>> friends = ["Karen", "Toby", "Elijah"]
>>> new_friends = friends.copy()
>>> print(new_friends)
['Karen', 'Toby', 'Elijah']
```

x.reverse() - Used to reverse the elements in the list from the element in the last index to the element in the first index. Works 'inplace'.
(It does not follow the ascending or any order; It just swaps the elements).

```
>>> friends = ["Karen", "Toby", "Elijah"]
>>> friends.reverse()
>>> print(friends)
['Elijah', 'Toby', 'Karen']

>>> numbers = [1, 5, 3, 8, 7]
>>> numbers.reverse()
>>> print(numbers)
[7, 8, 3, 5, 1]

>>> numbers = [1, 5, 3, 8, 7]
>>> numbers.sort()
>>> numbers.reverse()
>>> print(numbers)
[8, 7, 5, 3, 1]
```

-   Common List Patterns

**Reversing a list with list slicing**
This creates a new list from the original, that is, it does not work inplace.

```
>>> numbers = [1, 5, 3, 8, 7]
>>> numbers.sort()
>>> numbers.reverse()
>>> print(numbers)
>>> print(numbers[::-1])
[8, 7, 5, 3, 1]
[1, 3, 5, 7, 8]
```

`Note:` You can reverse a list using list slicing (-1) or using the x.reverse() method as shown above.

**range()** - Generates a list of numbers from up to but not including the last number stated.

```
>>> print (list(range(1, 50)))
[1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
11, 12, 13, 14, 15, 16, 17, 18,
19, 20, 21, 22, 23, 24, 25, 26,
27, 28, 29, 30, 31, 32, 33, 34,
35, 36, 37, 38, 39, 40, 41, 42,
43, 44, 45, 46, 47, 48, 49]

>>> print (list(range(50)))
[0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
10, 11, 12, 13, 14, 15, 16, 17,
18, 19, 20, 21, 22, 23, 24, 25,
26, 27, 28, 29, 30, 31, 32, 33,
34, 35, 36, 37, 38, 39, 40, 41,
42, 43, 44, 45, 46, 47, 48, 49]

>>> print (list(range(51)))
[0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
10, 11, 12, 13, 14, 15, 16, 17,
18, 19, 20, 21, 22, 23, 24, 25,
26, 27, 28, 29, 30, 31, 32, 33,
34, 35, 36, 37, 38, 39, 40, 41,
42, 43, 44, 45, 46, 47, 48, 49,
50]
```

-   **Getting the length of a list** - Number of items in a list.

```
>>> basket = [1, 2, 6, 8, 4, 0]
>>> print(len(basket))
6

>>> names = ["Mark", "Enoch", "Vivian", "Yvonne", "Mercy"]
>>> print(len(names))
5
```

**_.join_**
This is a string method used to join items in a list with the given 'character'. It creates a new item and hence does not work inplace.

```
>>> sentence = '!'
>>> new_sentence = sentence.join(['hi', 'my', 'name', 'is', 'JOJO'])
>>> print(new_sentence)
hi!my!name!is!JOJO

>>> sentence = '.'
>>> new_sentence = sentence.join(['hi', 'my', 'name', 'is', 'JOJO'])
>>> print(new_sentence)
hi.my.name.is.JOJO

>>> sentence = ' '
>>> sen2 = ['hello', 'welcome', 'to', 'the', 'city']
>>> new_sentence = sentence.join(sen2)
>>> print(new_sentence)
hello welcome to the city

>>> new_sentence = '!'.join(['hi', 'my', 'name', 'is', 'JOJO'])
>>> print(new_sentence)
hi!my!name!is!JOJO

>>> new_sentence = ' '.join(['hi', 'my', 'name', 'is', 'JOJO'])
>>> print(new_sentence)
hi my name is JOJO
```

-   **List Unpacking**

This is assigning a variable to each item in a list. Works like multiple assigning of values in variables.

```
>>> a,b,c = [1, 2, 3]
>>> print(a)
>>> print(b)
>>> print(c)
1
2
3
```

In list unpacking, you can add more values, unpack the values assigned in the variables then store the remaining items in their own variable. You just add the \* sign and the name of the variable.

```
>>> a,b,c *other = [1, 2, 3, 4, 5, 6, 7, 8, 9]
>>> print(a)
>>> print(b)
>>> print(c)
>>> print(other)
1
2
3
[4, 5, 6, 7, 8, 9]

>>> a,b,c, *other, d = [1, 2, 3, 4, 5, 6, 7, 8, 9]
>>> print(a)
>>> print(b)
>>> print(c)
>>> print(other)
>>> print(d)
1
2
3
[4, 5, 6, 7, 8]
9
```

f.) None type
This is a special data type that represents the absence of values.

```
>>> weapons = None
>>> print(weapons)
None
```

g.) Tuples
These are like lists but immutable data types. Data stored in tuples can never be changed eg. coordinates.

-   Can't add elements to it.

-   Can't erase elements from it.

-   Can't modify elements in it.

Tuples are also data structures.
They use the parenthesis '()' to store data and can store data of different data types in a single tuple.

```
>>> my_tuple = (1, 2, 4, 7, 5)
>>> print(my_tuple)
(1, 2, 4, 7, 5)

>>> my_tuple = (1, 2, 'a', True)
>>> print (my_tuple)
(1, 2, 'a', True)

>>> my_tuple = (1, 2, 4, 7, 5)
>>> print(my_tuple[3])
7

>>> my_tuple = (1, 2, 4, 7, 5)
>>> print(3 in my_tuple)
False

>>> my_tuple = (1, 2, 4, 7, 5)
>>> print(5 in my_tuple)
True

>>> my_tuple = (1, 2, 4, 7, 5)
>>> my_tuple[3] = 9
>>> print(my_tuple)
#returns an error as tuples cannot be modified
```

-   Tuples can be sliced (similar to list slicing)

```
>>> my_tuple = (1, 2, 3, 4, 5)
>>> new_tuple = my_tuple[1:4]
>>> print(new_tuple)
(2, 3, 4)

>>> my_tuple = (1, 2, 3, 4, 5)
>>> new_tuple = my_tuple[1:2]
>>> print(new_tuple)
(2,)

>>> x, y, z, *other = (1, 2, 3, 4, 5)
>>> print(x)
>>> print(y)
>>> print(z)
>>> print(other)
1
2
3
[4, 5]
```

Tuples have two main methods:

-   x.count()

-   x.index()

```
>>> my_tuple = (1, 5, 3, 4, 5)
>>> print(my_tuple.count(5))
2

>>> my_tuple = (1, 5, 3, 4, 5)
>>> print(my_tuple.index(4))
3
```

-   To get the length of a tuple:

```
>>> my_tuple = (1, 5, 3, 4, 5)
>>> print(len(my_tuple))
5
```

-   A list of tuples:

```
>>> coordinates = [(4, 5), (6, 7), (80, 34)]
>>> print(coordinates)
[(4, 5), (6, 7), (80, 34)]

>>> coordinates = [(4, 5), (6, 7), (80, 34)]
>>> print(coordinates[1])
(6, 7)

>>> coordinates = [(4, 5), (6, 7), (80, 34)]
>>> print(coordinates[1][1])
7
```

h.) Dictionaries
This is a special data structure that allows one to organize or store data in unordered key-value pairs. It uses curly braces '{}'.

```
dictionary = {
   'key' : value,
   'key' : value
   }
```

The key must always be unique (shouldn't be repeated).
To access the value, we use the key.

```
>>> my_dict = {
      'a' : 1,
      'b' : 2,
      'x' : 4
      }
>>> print(my_dict)
{'a': 1, 'b': 2, 'x': 3}

>>> my_dict = {
      'a' : 1,
      'b' : 2,
      'x' : 4
      }
>>> print(my_dict['b'])
2

>>> my_dict = {
      'a' : 1,
      'b' : 2
      'x' : 4
      }
>>> print(my_dict['c'])
#returns an error for the key is not defined.
```

`Note:` Elements in a dictionary are stored in different memory locations which are not necessarily in order:

```
>>> my_dict = {
      'a' : 1,
      'b' : 2,
      'x' : 4
      }
>>> print(my_dict)
{'a': 1, 'b': 2, 'x': 3}

At times the output may be as shown below.

>>> my_dict = {
      'a' : 1,
      'b' : 2,
      'x' : 4
      }
>>> print(my_dict)
{'x': 4, 'a': 1, 'b': 2}
```

Dictionary keys can store values of different data types (same as lists and tuples).

```
>>> my_dict = {
      'a' : [1, 2, 3],
      'b' : "hello",
      'x' : True,
      't' : 5
      }
>>> print(my_dict)
{'a': [1, 2, 3], 'b': 'hello', 'x': True, 't': 5}

>>> my_dict = {
      'a' : [1, 2, 3],
      'b' : "hello",
      'x' : True,
      't' : 5
      }
>>> print(my_dict['a'])
[1, 2, 3]

>>> my_dict = {
      'a' : [1, 2, 3],
      'b' : "hello",
      'x' : True,
      't' : 5
      }
>>> print(my_dict['a'][1])
2

>>> my_dict = {
      'a' : [1, 2, 3],
      'b' : "hello",
      'x' : True,
      't' : 5
      }
>>> print(my_dict['b'][4])
o
```

-   A dictionary in a list.

```
>>> my_list = [
       {
        'a' : [1, 2, 3],
        'b' : "hello",
        'x' : True,
        't' : 5
        },

       {
        'a' : [4, 5, 6],
        'b' : "welcome",
        'x' : False,
        't' : 5
       }
    ]
>>> print(my_list[0]['a'][2])
3
```

-   Dictionary Keys

Dictionary keys are immutable types and should be unique. This means that a string, a number, a tuple and a Boolean can be a key while a list cannot.
`Note:` When one re-assigns a key to another value, the original value in the key is overwritten.

```
>>> dictionary = {
         123 : [1, 2, 5, 6],
         True : 'hello',
         'a' : ('a', 't', 'u'),
         [100] : False
     }
>>> print (dictionary[100])
#returns an error as a list is mutable and hence cannot be used as a key.

>>> dictionary = {
         '123' : [1, 2, 5, 6],
         True : 'hello',
         '123' : ('a', 't', 'u')
     }
>>> print(dictionary['123'])
('a', 't', 'u')
```

-   Dictionary Methods

x.get() - A method used to check whether a key is present in a dictionary. At times it returns a default value given if a key is missing.

```
>>> user = {
         '123' : [1, 2, 5, 6],
         True : 'hello',
         'basket' : ('a', 't', 'u')
     }
>>> print(user.get('age'))
None

>>> user = {
         '123' : [1, 2, 5, 6],
         True : 'hello',
         'basket' : ('a', 't', 'u')
     }
>>> print(user.get('age', 55))
55

>>> user = {
         '123' : [1, 2, 5, 6],
         True : 'hello',
         'basket' : ('a', 't', 'u'),
         'age' : 20
     }
>>> print(user.get('age', 55))
20
```

-   A second way of creating a dictionary:

By using the keyword 'dict(key = value)'.
The key cannot be an expression, that is, it should be a variable when using 'dict'.

```
>>> user2 = dict(name = 'John')
>>> print(user2)
{'name': 'John'}

>>> user2 = dict(name = 'John', name2 = 'Mark')
>>> print(user2)
{'name': 'John', 'name2': 'Mark'}
```

-   'in' keyword can also be used in dictionaries.

It returns either True or False on whether a key is present or absent in a dictionary.

```
>>> user = {
         '123' : [1, 2, 5, 6],
         True : 'hello',
         'basket' : ('a', 't', 'u')
     }
>>> print('size' in user)
False

>>> user = {
         '123' : [1, 2, 5, 6],
         True : 'hello',
         'basket' : ('a', 't', 'u')
     }
>>> print('basket' in user)
True
```

x.keys() - Used to check whether a specific key is present in a dictionary.

```
>>> user = {
         '123' : [1, 2, 5, 6],
         True : 'hello',
         'basket' : ('a', 't', 'u')
     }
>>> print('123' in user.keys())
True

>>> user = {
         '123' : [1, 2, 5, 6],
         True : 'hello',
         'basket' : ('a', 't', 'u')
     }
>>> print('age' in user.keys())
False
```

x.values() - Used to check whether a specific value is present in a dictionary.

```
>>> user = {
         '123' : [1, 2, 5, 6],
         True : 'hello',
         'basket' : ('a', 't', 'u')
     }
>>> print('hello' in user.values())
True

>>> user = {
         '123' : [1, 2, 5, 6],
         True : 'hello',
         'basket' : ('a', 't', 'u')
     }
>>> print(('a', 't', 'u') in user.values())
True

>>> user = {
         '123' : [1, 2, 5, 6],
         True : 'hello',
         'basket' : ('a', 't', 'u')
     }
>>> print([1, 2, 6, 5] in user.values())
False
```

x.items() - Returns the entire items in a dictionary as tuples.

```
>>> user = {
         '123' : [1, 2, 5, 6],
         True : 'hello',
         'basket' : ('a', 't', 'u')
     }
>>> print(user.items())
dict_items([('123', [1, 2, 5, 6]), (True, 'hello'), ('basket', ('a', 't', 'u'))])
```

x.clear() - clears the dictionary and returns an empty dictionary.

```
>>> user = {
         '123' : [1, 2, 5, 6],
         True : 'hello',
         'basket' : ('a', 't', 'u')
     }
>>> print(user.clear())
None

>>> user = {
         '123' : [1, 2, 5, 6],
         True : 'hello',
         'basket' : ('a', 't', 'u')
     }
>>> user.clear()
>>> print(user)
{}
```

x.copy() - creates a copy of a dictionary.

```
>>> user = {
         '123' : [1, 2, 5, 6],
         True : 'hello',
         'basket' : ('a', 't', 'u')
     }
>>> user2 = user.copy()
>>> print(user2)
{'123': [1, 2, 5, 6], True: 'hello', 'basket': ('a', 't', 'u')}
```

x.pop() - Removes key with its value from the dictionary and returns the value.

```
>>> user = {
         '123' : [1, 2, 5, 6],
         True : 'hello',
         'basket' : ('a', 't', 'u'),
         'age' : 20
     }
>>> user.pop('age')
>>> print(user)
20
{'123': [1, 2, 5, 6], True: 'hello', 'basket': ('a', 't', 'u')}
```

x.popitem() - Removes a random pair of key-value.

```
>>> user = {
         '123' : [1, 2, 5, 6],
         True : 'hello',
         'basket' : ('a', 't', 'u'),
         'age' : 20
     }
>>> user.popitem()
>>> print(user)
('age', 20)
{'123': [1, 2, 5, 6], True: 'hello', 'basket': ('a', 't', 'u')}
```

x.update() - Used to update the keys in the dictionary or by adding a new key and value.

```
>>> user = {
         '123' : [1, 2, 5, 6],
         True : 'hello',
         'basket' : ('a', 't', 'u'),
         'age' : 20
     }
>>> user.update({'age' : 55})
>>> print(user)
{'123': [1, 2, 5, 6], True: 'hello', 'basket': ('a', 't', 'u'), 'age': 55}

>>> user = {
         '123' : [1, 2, 5, 6],
         True : 'hello',
         'basket' : ('a', 't', 'u'),
         'age' : 20
     }
>>> user.update({'age2' : 55})
>>> print(user)
{'123': [1, 2, 5, 6], True: 'hello', 'basket': ('a', 't', 'u'), 'age': 20, 'age2': 55}
```

i.) Sets
These are an unordered collection of unique objects. It uses curly brackets and returns only the unique objects.

```
>>> my_set = {1, 2, 3, 4, 5, 5}
>>> print(my_set)
{1, 2, 3, 4, 5}

>>> my_set = {1, 2, 3, 4, 5, 5}
>>> my_set.add(2)
>>> my_set.add(100)
>>> print(my_set)
{1, 2, 3, 4, 5, 100}

>>> my_list = [1, 2, 2, 3, 5, 5]
>>> print(set(my_list))
{1, 2, 3, 5}
```

Objects in a set are not indexed and hence cannot be accessed using an index.

```
>>> my_set = {1, 2, 3, 4, 5, 5}
>>> print(my_set[0])
#returns an error as items cannot be accessed using indexes in sets

>>> my_set = {1, 2, 3, 4, 5, 5}
>>> print(1 in my_set)
True

>>> my_set = {1, 2, 3, 4, 5, 5, 7, 7}
>>> print(6 in my_set)
False

>>> my_set = {1, 2, 3, 4, 5, 5, 7, 7}
>>> print(len(my_set))
6
```

-   Converting a set to a list.

```
>>> my_set = {1, 2, 3, 4, 5, 5, 7, 7}
>>> print(list(my_set))
[1, 2, 3, 4, 5, 7]
```

x.copy - Copies a set.

```
>>> my_set = {1, 2, 3, 4, 5, 5, 7, 7}
>>> new_set = my_set.copy()
>>> my_set.clear()
>>> print(new_set)
>>> print(my_set)
{1, 2, 3, 4, 5, 7}
set()
```

-   Methods in sets

x.difference() - Finds the difference of two sets.

```
>>> my_set = {1, 2, 3, 4, 5}
>>> your_set = {4, 5, 6, 7, 8, 9, 10}
>>> print(my_set.difference(your_set))
{1, 2, 3}
```

x.discard() - Removes an element from a set if it is a member. Works inplace.

```
>>> my_set = {1, 2, 3, 4, 5}
>>> my_set.discard(5)
>>> print(my_set)
{1, 2, 3, 4}
```

x.difference_update() - Removes all elements of another set from the previous set.

```
>>> my_set = {1, 2, 3, 4, 5}
>>> your_set = {4, 5, 6, 7, 8, 9, 10}
>>> print(my_set.difference_update(your_set))
{1, 2, 3}
```

x.intersection() - Returns the common values in both sets.

```
>>> my_set = {1, 2, 3, 4, 5}
>>> your_set = {4, 5, 6, 7, 8, 9, 10}
>>> print(my_set.intersection(your_set))
{4, 5}
```

`Note:` You can also use the & symbol for intersection.

```
>>> my_set = {1, 2, 3, 4, 5}
>>> your_set = {4, 5, 6, 7, 8, 9, 10}
>>> print(my_set & your_set)
{4, 5}
```

x.isdisjoint() - Returns either False or True if they have or don't have common values respectively.

```
>>> my_set = {1, 2, 3, 4, 5}
>>> your_set = {4, 5, 6, 7, 8, 9, 10}
>>> print(my_set.isdisjoint(your_set))
False

>>> my_set = {1, 2, 3}
>>> your_set = {4, 5, 6, 7, 8, 9, 10}
>>> print(my_set.isdisjoint(your_set))
True
```

x.union() - Returns the union of two sets and removes the duplicates.

```
>>> my_set = {1, 2, 3}
>>> your_set = {4, 5, 6, 7, 8, 9, 10}
>>> print(my_set.union(your_set))
{1, 2, 3, 4, 5, 6, 7, 8, 9, 10}
```

`Note:` For union, you can also use the | symbol.

```
>>> my_set = {1, 2, 3}
>>> your_set = {4, 5, 6, 7, 8, 9, 10}
>>> print(my_set | your_set)
{1, 2, 3, 4, 5, 6, 7, 8, 9, 10}
```

x.issubset() - Returns either True or False on whether a set is a subset of the other.

```
>>> my_set = {4, 5}
>>> your_set = {4, 5, 6, 7, 8, 9, 10}
>>> print(my_set.issubset(your_set))
True
```

x.issuperset() - Returns either True of False on whether a set is a superset of the other.
_Superset is the opposite of subset._

```
>>> my_set = {4, 5}
>>> your_set = {4, 5, 6, 7, 8, 9, 10}
>>> print(my_set.issuperset(your_set))
False

>>> my_set = {4, 5}
>>> your_set = {4, 5, 6, 7, 8, 9, 10}
>>> print(your_set.issuperset(my_set))
True
```

---

> Below are attached links to more resources on the topics discussed above:

-   More on [Floating-point-numbers](https://www.youtube.com/watch?v=PZRI1IfStY0).

-   [Math-Functions-in-Python](https://www.programiz.com/python-programming/modules/math).

-   [Base-Numbers](https://www.geeksforgeeks.org/python-int-function/).

-   [Python-Keywords](https://www.w3schools.com/python/python_ref_keywords.asp).

-   [Built-in-Functions](https://docs.python.org/3/library/functions.html).

-   [Python-String-Methods](https://www.w3schools.com/python/python_ref_string.asp).

-   [List-Methods](https://www.w3schools.com/python/python_ref_list.asp).

-   [Dictionary-Methods](https://www.w3schools.com/python/python_ref_dictionary.asp).

-   [Tuple-Methods](https://www.w3schools.com/python/python_ref_tuple.asp).

-   [Sets-Methods](https://www.w3schools.com/python/python_ref_set.asp).

---

Congratulations on completing the first milestone _**Python Basics Part1**_.
To recap, we have covered variables and data types in Python which includes a few data structures in Python.
Next, in [_Python Basics Pt2_](https://dev.to/gateremark/python-from-the-word-go-pt2-31k0), we gonna be diving more into Python working with control structures, loops and many more...

> **See you Then!**
