// Task 1: Product Price Management Scenario
let prices = [12, 20, 28, 32, 35]; // Declaring an array with initial prices
prices.push (40); // Adding a new price to the array
prices.shift(); // Removing the first price from the array
console.log("Updated Price List:", prices); // Logging the updated price list

// Task 2: Modifying Customer Orders Scenario
let orders = [2, 15, 12, 9, 5]; // Declaring an array with initial order quantities 
orders[2] += 5; // Increasing the third order quantity by 5
let totalOrders = orders.reduce((sum, quantity) => sum + quantity, 0); // Calculating the total number of all orders
console.log("Updated Order List:", orders); // Logging the updated order list
console.log("Total Order Count:", totalOrders); // Logging the total order count
