//AGGREGATE FUNCTIONS

//SUM() function
//arg = name of column
//returns sum of all values in given column
//only works for numerical columns

//MAX() and MIN()
//arg= name of column
//MAX() returns max value of given column
//MIN() returns min value of given column
//non-numerical columns = lexicographic order

//AVG()
//arg = name of column
//return = ave value of given column
//only for numerical columns
//very useful with WHERE and HAVING clauses

//GROUP BY clause
//groups rows by identical values in one or more columns
//Useful to see all your data in from a distributional viewpoint for an attribute
//comes after FROM and WHERE 
//must come before ORDER BY and LIMIT, both of which modify GROUP BY's output

//HAVING clause
//statement used to furth filter result form GROUP BY
//narrow down desired data
//can use aggregate functions with it

//ROUND() Function
//arg = number, # of decimal places
//return given number rounded to specified number of places
//ROUND(AVG(gasprice),3) gasprice = column name

//JOINS


