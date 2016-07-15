var router = require('express').Router();

var badminton =[
{ Name: 'Phillip Chew', Origin: 'Orange, CA' },
{ Name: 'Eva Lee', Origin: 'Diamond Bar, CA' },
{ Name: 'Paula Lynn Obanana', Origin: 'West Covina, CA' },
{ Name: 'Sattawatt Pongnairat', Origin: 'Orange, CA' },
{ Name: 'Howard Shu', Origin: 'Anaheim, CA' },
{ Name: 'Jamie Subandhi', Origin: 'Westminster, CA' },
{ Name: 'Iris Wang', Origin: 'Arcadia, CA' }
];

var womensGymnastics = [
{ Name: 'Nicole Ahsinger', Origin: 'San Diego, CA' },
{ Name: 'Simone Biles', Origin: 'Spring, TX' },
{ Name: 'Gabby Douglas', Origin: 'Los Angeles, CA' },
{ Name: 'Kiana Eide', Origin: 'St. Francis, MN' },
{ Name: 'Laurie Hernandez', Origin: 'Old Bridge, NJ' },
{ Name: 'Alisa Kano', Origin: 'New York, NY' },
{ Name: 'Madison Kocian', Origin: 'Dallas, TX' },
{ Name: 'Natalie MicGiffert', Origin: 'Topanga, CA' },
{ Name: 'Aly Raisman', Origin: 'Needham, MA' },
{ Name: 'Monica Rokman', Origin: 'Northbrook, IL' },
{ Name: 'Kristen Shaldybin', Origin: 'Brooklyn, NY' },
{ Name: 'Laura Zeng', Origin: 'Libertyville, IL' }
];

var tableTennis = [
  { Name: 'Yijun Feng', Origin: 'Atlanta, GA' },
  { Name: 'Kanak Jha', Origin: 'Milpitas, CA' },
  { Name: 'Timothy Wang', Origin: 'Houston, TX' },
  { Name: 'Jennifer Wu', Origin: 'Fort Lee, NJ' },
  { Name: 'Lily Zhang', Origin: 'Palo Alto, CA' },
  { Name: 'Jiaqi Zheng', Origin: 'Fremont, CA' }
];

var taekwondo =[
  { Name: 'Jackie Galloway', Origin: 'Wylie, TX' },
  { Name: 'Stephen Lambdin', Origin: 'Rockwall, TX' },
  { Name: 'Steven Lopez', Origin: 'Sugar Land, TX' },
  { Name: 'Paige McPherson', Origin: 'Abilene, TX' }
];

var syncSwimming = [
  { Name: 'Anita Alvarez', Origin: 'Kenmore, NY' },
  { Name: 'Mariya Koroleva', Origin: 'Concord, CA' }
];

router.get('/badminton', function(request, response){
  var ranBad = Math.floor(Math.random() * badminton.length);
  response.send(badminton[ranBad]);
});

router.get('/womensgymnastics', function(request, response){
  var ranWomGym = Math.floor(Math.random() * womensGymnastics.length);
  response.send(womensGymnastics[ranWomGym]);
});

router.get('/tabletennis', function(request, response){
  var ranTabTen = Math.floor(Math.random() * tableTennis.length);
  response.send(tableTennis[ranTabTen]);
});

router.get('/taekwondo', function(request, response){
  var ranTKD = Math.floor(Math.random() * taekwondo.length);
  response.send(taekwondo[ranTKD]);
});

router.get('/syncswim', function(request, response){
  var ranSyncSwim = Math.floor(Math.random() * syncSwimming.length);
  response.send(syncSwimming[ranSyncSwim]);
});




module.exports = router;
