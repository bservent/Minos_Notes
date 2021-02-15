//WHAT IS SQL?
//SQL = Structured Query Language designed to store, modify, create databases
//very logical program
//declarative program
//use commands in English
//draw/manipulate data before analyzing it in Pandas

//SQL DATA TYPES
//Integer = +/- whole numbers 
//Text = a text string
//Real = any decimal value
//Specify data types when creating/modifying tables

//QUERYING
//SELECT,FROM = most basic query to see data in table
//SQL queries are in all caps with semicolon representing end of statement
//SELECT takes in columns as its arugments & FROM takes a table 
//If we wanted to select unique column values, we can specify SELECT DISTINCT, followed by the same syntax
//EX: SELECT ID, Fruit_Name, Fruit_Color FROM Fruits
//SELECT * FROM Fruits = select all columns
//WHERE can be added at end to find out where in the table is the info
//EX: SELECT * FROM Fruits WHERE Fruit_Color = 'Red';
//AND/OR are optional arguments that Where takes
//EX: SELECT * FROM Fruit_Color = 'Red' AND Fruit_color = 'Yellow';
//Boolean Operators = LIKE'% melon' or BETWEEN'h' AND 'm'
