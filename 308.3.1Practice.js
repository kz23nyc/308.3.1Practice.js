//Part 1:Fizz Buzz
// Loop through all numbers from 1 to 100.
for (let x=1; x <= 100; x++) {


// If a number is divisible by both 3 and 5, log “Fizz Buzz.”
if (x%3 === 0 && x%5 === 0) {
    console.log('Fizz Buzz');        
}

// If a number is divisible by 3, log “Fizz.”
else if (x%3 === 0) {
    console.log("Fizz");        
} 


// If a number is divisible by 5, log “Buzz.”
else if ( x% 5 === 0) {
    console.log("Buzz");        
}

// If a number is not divisible by either 3 or 5, log the number.
else {
        console.log(`${x}:Not divisible by 3 or 5`)
    }
}

// Part 2: Prime Time

//Declare an arbitrary number, n.
 

//Create a loop that searches for the next prime number, starting at n and incrementing from there.
//As soon as you find the prime number, log that number and exit the loop.
   
// Function to check if a number is prime
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// Function to find the next prime number
function findNextPrime(n) {
    let nextPrime = n + 1;
    while (!isPrime(nextPrime)) {
        nextPrime++;
    }
    return nextPrime;
}

// Example usage
let n = 4; // You can change this value to test with different numbers
let nextPrime = findNextPrime(n);
console.log(`The next prime number after ${n} is: ${nextPrime}`);

// Part 3: Feeling Loopy

function parseCSV(csvString) {
    // Split the CSV string into rows
    const rows = csvString.split('\n');
    
    // Loop through each row
    for (let row of rows) {
        // Split the row into cells
        const cells = row.split(',');
        
        // Log each cell in the row
        console.log(cells[0], cells[1], cells[2], cells[3]);
    }
}

// Example CSV string
const csvData = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";

// Parse and log the CSV data
parseCSV(csvData);

// Test with another CSV string
const testCsvData = "Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232";

// Parse and log the test CSV data
parseCSV(testCsvData);