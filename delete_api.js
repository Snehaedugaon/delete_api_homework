const express = require("express");
const server = express();

server.use(express.json());

// question 1. 
let orders = [
    { id: 101, item: "Laptop", amount: 50000 },
    { id: 102, item: "Mobile", amount: 15000 }
];

server.delete("/orders/:id", (request, response) => {
    const id = Number(request.params.id);
    const index = orders.findIndex((order) => order.id === id);

    if (index === -1) {
        return response.status(404).json({ message: "Order Not Found" });
    }

    orders.splice(index, 1);
    response.json({ message: "Order Deleted Successfully", orders });
});


//question 2.
let users = [
    { id: 1, name: "Raman", email: "raman@gmail.com" },
    { id: 2, name: "Ajay", email: "ajay@gmail.com" }
];

server.delete("/users/:id", (request, response) => {
    const id = Number(request.params.id);
    const index = users.findIndex((user) => user.id === id);

    if (index === -1) {
        return response.status(404).json({ message: "User Not Found" });
    }

    users.splice(index, 1);
    response.json({ message: "User Deleted Successfully", users });
});


// question 3. 
let products = [
    { id: 11, name: "Mouse", price: 800 },
    { id: 12, name: "Keyboard", price: 1200 }
];

server.delete("/products/:id", (request, response) => {
    const id = Number(request.params.id);
    const index = products.findIndex((product) => product.id === id);

    if (index === -1) {
        return response.status(404).json({ message: "Product Not Found" });
    }

    products.splice(index, 1);
    response.json({ message: "Product Deleted Successfully", products });
});


// question 4.
let students = [
    { roll: 101, name: "Ajay", marks: 88 },
    { roll: 102, name: "Raman", marks: 76 }
];

server.delete("/students/:roll", (request, response) => {
    const roll = Number(request.params.roll);
    const index = students.findIndex((student) => student.roll === roll);

    if (index === -1) {
        return response.status(404).json({ message: "Student Not Found" });
    }

    students.splice(index, 1);
    response.json({ message: "Student Deleted Successfully", students });
});


// question 5. 
let employees = [
    { id: 1, name: "Raman", dept: "HR" },
    { id: 2, name: "Ajay", dept: "IT" }
];

server.delete("/employees/:id", (request, response) => {
    const id = Number(request.params.id);
    const index = employees.findIndex((employee) => employee.id === id);

    if (index === -1) {
        return response.status(404).json({ message: "Employee Not Found" });
    }

    employees.splice(index, 1);
    response.json({ message: "Employee Deleted Successfully", employees });
});


// question 6. 
let books = [
    { id: 201, title: "Swift Basics", author: "Apple" },
    { id: 202, title: "Node.js Mastery", author: "Ryan Dahl" }
];

server.delete("/books/:id", (request, response) => {
    const id = Number(request.params.id);
    const index = books.findIndex((book) => book.id === id);

    if (index === -1) {
        return response.status(404).json({ message: "Book Not Found" });
    }

    books.splice(index, 1);
    response.json({ message: "Book Deleted Successfully", books });
});


// question 7. 
let movies = [
    { id: 1, name: "Inception", rating: 9 },
    { id: 2, name: "Interstellar", rating: 8 }
];

server.delete("/movies/:id", (request, response) => {
    const id = Number(request.params.id);
    const index = movies.findIndex((movie) => movie.id === id);

    if (index === -1) {
        return response.status(404).json({ message: "Movie Not Found" });
    }

    movies.splice(index, 1);
    response.json({ message: "Movie Deleted Successfully", movies });
});


//question  8. 
let courses = [
    { id: 101, course: "Web Development", duration: "3 Months" },
    { id: 102, course: "App Development", duration: "4 Months" }
];

server.delete("/courses/:id", (request, response) => {
    const id = Number(request.params.id);
    const index = courses.findIndex((course) => course.id === id);

    if (index === -1) {
        return response.status(404).json({ message: "Course Not Found" });
    }

    courses.splice(index, 1);
    response.json({ message: "Course Deleted Successfully", courses });
});


//question  9. 
let cities = [
    { id: 1, name: "Delhi", population: "2 Cr" },
    { id: 2, name: "Mumbai", population: "1.8 Cr" }
];

server.delete("/cities/:id", (request, response) => {
    const id = Number(request.params.id);
    const index = cities.findIndex((city) => city.id === id);

    if (index === -1) {
        return response.status(404).json({ message: "City Not Found" });
    }

    cities.splice(index, 1);
    response.json({ message: "City Deleted Successfully", cities });
});


//question 10. 
let allOrders = [
    { id: 101, item: "Laptop", amount: 50000 },
    { id: 102, item: "Mobile", amount: 15000 },
    { id: 103, item: "Tablet", amount: 25000 }
];

server.delete("/all-orders/:id", (request, response) => {
    const id = Number(request.params.id);
    const index = allOrders.findIndex((order) => order.id === id);

    if (index === -1) {
        return response.status(404).json({ message: "Order Not Found" });
    }

    allOrders.splice(index, 1);
    response.json({ message: "Order Deleted Successfully", allOrders });
});


// question 11. 
let namedUsers = [
    { id: 1, name: "Raman", email: "raman@gmail.com" },
    { id: 2, name: "Ajay", email: "ajay@gmail.com" },
    { id: 3, name: "Ramanjay", email: "ramanjay@gmail.com" }
];

server.delete("/users-by-name/:name", (request, response) => {
    const name = request.params.name.toLowerCase();

    const index = namedUsers.findIndex(
        (user) => user.name.toLowerCase() === name
    );

    if (index === -1) {
        return response.status(404).json({ message: "User Not Found" });
    }

    namedUsers.splice(index, 1);
    response.json({ message: "User Deleted Successfully", namedUsers });
});


server.listen(6000, () => {
    console.log("Server is Running on 6000");
});