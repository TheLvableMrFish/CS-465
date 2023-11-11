// Get rooms Page
var fs = require('fs');

var roomChoices = JSON.parse(fs.readFileSync('./data/rooms.json', 'utf8'));
const rooms = (req,res) =>{
    res.render('rooms', {title: 'Travlr Getaways - Rooms', roomChoices});
};

module.exports = {
    rooms
};