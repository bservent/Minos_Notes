//Pandas Part 1

//COMMON DATA FILES
//CSV=Comma Seperated Values
//TBS=Tab Seperated Values
//JSON=JavaScript Object Notation (Ordered Structures)
//HTML=Hypertext Markup Language(Internet Files)

//Pandas is a Python library that simplifies the manipulation of tabular data
//import pandas as pd
//to use it we just call a function as pd.function() and use dot notation
//panda makes working with alot of data easy which shows Pythons flexibility
//use 2d array to organize tabular data
//see image for ex
//you can also import (EX: pd.read_csv('my_csv_file.csv))

//SERIES
//to create 1d array structure = 
series = pd.Series(data = ['Luke', 'Marta'])

//EXAMINING DATA FRAMES
df.head() //first row of data frame
df.tail() //last row of data frame
//rows can be specified but the default is 5
df.shape // (2,2), tuple with (rows,columns)
df.size // (4), number of entries
df.columns // Index (['Name', 'Age']) , names columns
df.values // values of dataframe as lists
df.dtypes // retreive datatypes of columns (ex: int, str)
df.astype // change data types in columns
//this functions are non mutating (tuples) therefor results need to be saved in variables

//SORTING VALUES
//sorts rows of data by frame based on columns created
//Ex: see image
//Inplace describes if the operation is mutable

//COUNT OCCURRANCES
//value_counts() = function that counts number of occurances of each value of a series 
//Ex: see photo

//INDEX
//index = row names of table
//retrieve = df.index
//set column as index = df.set_index('Name', inplace = True)

