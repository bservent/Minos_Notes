//INTRO

//Data Structures = way to organize and store data in a way that can be manipulated

//Complexity = efficiency of algorithm whether that is time or space
//Complextity is expressed in big O notation as the limiting case or worst case scenario of an execution of a function

//Time Complexity = usually represented by big O notation as the limiting factors of a function
//It measures the efficiency of an algorithm in time
//It represents the time or number of basic operations it takes to execute an algorithm as a function of the size input (n)
//Ex: Suppose an algorithm adds 10 to the first element of any array.
// This would be O(1) since it doesn’t depend on the size of the array. On the contrary if I add 10 to every element this would be O(n)
// as it would depend on the array size

//Space Complexity = the space needed of memory to execute a particular algorithm
//depends on the size of the data structure
//algorithms are designed to take up more space to execute faster or they take more time and less memory

//Ex: Suppose we want to find the total product of all elements of an array of size n, containing integers. Since integers have 4 bytes each, we would need 4*n. Bytes of space to store the array and some extra bytes for extra variables.
//Space complexity would therefore be O(n), i.e. space required increases linearly with the array size n

//TIME COMPLEXITIES

//Constant, O(1) = algorithm doesn't depend on size of the input (only one operation is being performed on the array)

//Linear, O(n) = algorithm execution time depends on the input size of data
//Ex: single loop probs

//Quadratic O(n^2)= has growth rate of n^2 therefore an input of 4 will do c*16 operations where c is constant 
//Ex: nested loops, bubble sort, insertion sort, selection sort

//Polynomial, O(n^c) = when c>1 it is considered polynomial. Polynmial complexities are very inefficient and are seen in algorithms with 3 or more nested loops. A runtime of 3 nested loops would be O of n cubed O(n^3)

//Logarithmic, 0(Log n) = this complexity encompasses algorithms that divide in half and therefore halfing the execution time compared to linear executions
//Ex: binary search halfs data until needed index is found in ascending order

//Linearithmic, O(n log n) = this complexity is slightly less efficient than O(n) algorithm but more efficient than O(n^2) algorithm
//Ex: merge sort, quicksort 

//Order fo complexities (best to worst):
//O(log n) < O(n) < O(n log n) < O(n^c) < O(n!)

//Big O = Big O notation (with a capital letter O, not a zero), also called Landau's symbol, is a symbolism used in complexity theory, computer science, and mathematics to describe theasymptotic behavior of functions. Basically, it tells you how fast a function grows or declines.