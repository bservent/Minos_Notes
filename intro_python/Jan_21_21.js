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
//use bracket notation to select columns df[list_of_columns]
//you can also slice one column from data frame df[column_name]
//bracket notation only works for columns
//df[[0]] = error because there are no columns at named 0

//LOCS
//use loc = df.loc[list_of_rows, list_of_columns]
//you can specify amounts with locs or you can us a colon to specify all - see ex photo
//Output types change when combinations of row/columns names or just names
//List + list = data frame
//List + name = Series
//Name + name = Value
//ex: see photo
//slicing with loc looks like this: df.loc[0:1, 'Name': 'Age']
//returns everything btw the two ends of the slice

//ILOC
//has same output values (data frame, series, value) as loc and colon also indicates all rows/columns
//ex: df.iloc[list_of_row_positions, list_of_column_positions]
//slicing with iloc is different as first index is inclusive where the second index is exclusive.
//ex: see photo

//Drop column = df.drop('Age', axis = 1)
//Add column = df['Year of Birth'] = 2019 - df['Age']
//Filtering = use bracket notation to fileter rows based on condition
//df[logical_conditions]
//logical operators & | ~
//multiple conditions = use parathesis
//ex: df['Name'] == 'Marta') & ~ (df['Age'] == 18)]

//NaN VALUES
//NaN = not a number = values we do not know
//we can drop rows with Nan values but there are statistical consequences
//ex: df.dropna()
//we can also replace NaN with a specific value
//ex: df.fillna(value_of_choice_replaces_NaN)



