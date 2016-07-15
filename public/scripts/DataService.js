angular.module('olympicPicker').factory('DataService', function($http){

  var data = {};

  // generic failure response
  function handleFailure(response){
    console.log('Error!', response);
  }

  // Badminton success response and http request
  function handleSuccessBad(response){
    console.log(response);
    data.bad=response.data;
  }

  function callBad(){
    $http.get('/olympics/badminton').then(handleSuccessBad, handleFailure);
  }

  // Gymnastics success response and http request
  function handleSuccessGym(response){
    data.gym=response.data;
  }

  function callGym(response){
    $http.get('/olympics/womensgymnastics').then(handleSuccessGym, handleFailure);
  }

  // Table Tennis success response and http request
  function handleSuccessTabTen(response){
    data.TabTen=response.data;
  }

  function callTabTen(){
    $http.get('/olympics/tabletennis').then(handleSuccessTabTen, handleFailure);
  }

  // Taekwondo success response and http request
  function handleSuccessTaekwondo(response){
    console.log(response);
    data.taekwondo=response.data;
  }

  function callTae(){
    $http.get('/olympics/taekwondo').then(handleSuccessTaekwondo, handleFailure);
  }

  // Synchronized swimming success response and http request
  function handleSuccessSync(response){
    data.sync=response.data;
  }

  function callSync(){
    $http.get('/olympics/syncswim').then(handleSuccessSync, handleFailure);
  }

// calling all http request functions
callBad();
callGym();
callTae();
callSync();
callTabTen();

  // returns all data from http requests
  return {
    data : data,
    callBad : callBad,
    callGym : callGym,
    callTabTen : callTabTen,
    callTae : callTae,
    callSync : callSync
  };
});
