const express = require('express')

const mockCars = [
    {
        make: "Toyota",
        model: "Camry",
        year: 2020,
        color: "Silver",
        price: 25000
    },
    {
        make: "Ford",
        model: "Mustang",
        year: 2021,
        color: "Red",
        price: 35000
    },
    {
        make: "Honda",
        model: "Civic",
        year: 2019,
        color: "Black",
        price: 20000
    },
    {
        make: "Chevrolet",
        model: "Impala",
        year: 2018,
        color: "White",
        price: 22000
    },
    {
        make: "Tesla",
        model: "Model 3",
        year: 2022,
        color: "Blue",
        price: 45000
    }
];

const app = express()

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', '*');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.get('/cars', (req, res) => {
    res.json(mockCars)
})

app.listen(7000, console.log(7000))