var button = $('.first-button');
var foodButton = $('.food-button');
var historicalButton = $('.his-button');
var nationalButton = $('.nat-button');
var musicButton = $('.music-button');
var actionButton = $('.act-button');
var amuseButton = $('.amuse-button')


var message = $('.message');
// var newMessage = $('h3');

button.on("click", doSomething);
foodButton.on("click", doSomething2);
historicalButton.on("click", doSomething3);
nationalButton.on("click", doSomething4);
musicButton.on("click", doSomething5);
actionButton.on("click", doSomething6);
amuseButton.on("click", doSomething7);



var museum = ["The Metropolitan Museum in NYC", "The Louvre Museum in Paris", "The National Gallery in London", "Vaticans Museum in Vatican City"];
var food = ["Seafood in China", "Pav Bhaji in India", "Mahshi in Egypt", "Baklava in Turkey"];
var historicalSites = ["Great Wall of China in Bejing", "Parthenon in Athens", "The Grand Canyon in the US", "The Palace Museum in China"];
var nationalParks = ["Yellow Stone National Park", "Yosemite National Park", "Zion National Park", "Grand Canyon National Park"];
var music = ["Coachella Valley Music Festival", "Lollapolooza in Chicago", "Governer's Ball", "Tomorrowland"];
var action = ["Parachuting in Dubai", "Climbing Mt. Everest", "Rafting in Mexico", "Extreme Sports"]
var amusementParks =["Walt Disney World Resort", "SeaWorld Orlando", "Hershey Park", "Silver Dollar City"];

function doSomething() {
  console.log("you clicked it!");
  var randomMuseum = Math.floor(Math.random() * (museum.length));
  var message1 = museum[randomMuseum];
  message.text(message1);
}

function doSomething2() {
  console.log("you clicked it!");
  var randomFood = Math.floor(Math.random() * (food.length));
  var newMessage = food[randomFood];
  message.text(newMessage);
}

function doSomething3() {
  console.log("you clicked it!");
  var randomHistoricalSites = Math.floor(Math.random() * (historicalSites.length));
  var messageHis = historicalSites[randomHistoricalSites];
  message.text(messageHis);
}

function doSomething4() {
  console.log("you clicked it!");
  var randomNationalParks = Math.floor(Math.random() * (nationalParks.length));
  var newMessage4 = nationalParks[randomNationalParks];
  message.text(newMessage4);
}

function doSomething5() {
  console.log("you clicked it!");
  var randomMusic = Math.floor(Math.random() * (music.length));
  var newMessage5 = music[randomMusic];
  message.text(newMessage5);
}

function doSomething6() {
  console.log("you clicked it!");
  var randomAction = Math.floor(Math.random() * (action.length));
  var newMessage6 = action[randomAction];
  message.text(newMessage6);
}

function doSomething7() {
  console.log("you clicked it!");
  var randomAmusementParks = Math.floor(Math.random() * (amusementParks.length));
  var newMessage7 = amusementParks[randomAmusementParks];
  message.text(newMessage7);
}
