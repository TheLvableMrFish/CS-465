// Get meals Page
var fs = require('fs')

var mealDesc = JSON.parse(fs.readFileSync('./data/meals.json', 'utf8'));

const meals = (req,res) =>{
    res.render('meals', {title: 'Travlr Getaways - Meals', mealDesc});
};

module.exports = {
    meals
};