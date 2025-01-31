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

// Task 3: Employee Performance Tracking Scenario
let employee = {
    name: "Gabriela Sanchez",
    role: "Data analyst",
    performanceScore: 85,
    isActive: true
}; // Declaring an employee object 
employee.performanceScore = 92; // Updating the performanceScore property 
employee.promotionEligible = employee.performanceScore >= 90; // Adding a new property 
console.log("Updated Employee Record:", employee); // Logging the updated employee object 

// Task 4: Customer Feedback Records Scenario
let feedback = [
    {
        customerName: "Julia Ramos",
        feedbackText: "Great service and fast delivery!",
        rating: 5
    },
    {
        customerName: "Pierina Bustamante",
        feedbackText: "The product quality was really good!",
        rating: 5
    },
    {
        customerName: "Luana Shinsato",
        feedbackText: "Had an issue with my order, but customer service resolved it quickly.",
        rating: 4
    }
]; // Declaring an array with initial feedback objects 
feedback.push({
    customerName: "Jonathan Pacheco",
    feedbackText: "Good product, but tracking was unclear.",
    rating: 4
}); // Adding a new feedback object to the array
console.log("Customer Feedback Records:", feedback); // Logging the updated feedback list 
