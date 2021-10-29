//const chooseLoad = document.querySelector('#menu-load');
// const chooseSetup = document.querySelector('#menu-setup').addEventListener('click', displaySetup);
// const chooseStart = document.querySelector('#menu-start').addEventListener('click', displayStart);
// const chooseStats = document.querySelector('#menu-stats').addEventListener('click', displayStats);
// const cardLoad = document.querySelector('#card-load');
// const cardSetup = document.querySelector('#card-setup');
// const cardStart = document.querySelector('#card-start');
// const cardStats = document.querySelector('#card-stats');

//document.querySelector('#menu_load').addEventListener("click", function(){ alert("Hello World!"); }, false);

document.querySelector('#menu_load').addEventListener("click", displayLoad);
document.querySelector('#menu-setup').addEventListener("click", displaySetup);
document.querySelector('#menu-start').addEventListener("click", displayStart);
document.querySelector('#menu-stats').addEventListener("click", displayStats);

function displayLoad() {
  document.querySelector('#card-load').style.zIndex = '100';
  document.querySelector('#card-setup').style.zIndex = '1';
  document.querySelector('#card-start').style.zIndex = '1';
  document.querySelector('#card-stats').style.zIndex = '1';
  
}

function displaySetup() {
  document.querySelector('#card-load').style.zIndex = '1';
  document.querySelector('#card-setup').style.zIndex = '100';
  document.querySelector('#card-start').style.zIndex = '1';
  document.querySelector('#card-stats').style.zIndex = '1';
  
}

function displayStart() {
  document.querySelector('#card-load').style.zIndex = '1';
  document.querySelector('#card-setup').style.zIndex = '1';
  document.querySelector('#card-start').style.zIndex = '100';
  document.querySelector('#card-stats').style.zIndex = '1';
  
}

function displayStats() {
  document.querySelector('#card-load').style.zIndex = '1';
  document.querySelector('#card-setup').style.zIndex = '1';
  document.querySelector('#card-start').style.zIndex = '1';
  document.querySelector('#card-stats').style.zIndex = '100';
  
}

document.getElementById("btn").addEventListener("click", function(){ alert("clicked");});