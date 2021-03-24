


$("button").on("click", function() {
  $("#map").toggle();
})
// const but = document.querySelector(".contact .button");
// but.addEventListener('click', function() {
//   const but = document.querySelector(".contact .button").style.color ="red";
// }
// AOS PLUGIN
AOS.init({
    duration:1000,
    delay:400
});


// GOOGLE MAP
function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 51.090944, lng: 71.418306 },
    zoom: 13,}
  );
  new google.maps.Marker({
  position: { lat: 51.090944, lng: 71.418306 },
  map,
  title: "Location 1!",
});
new google.maps.Marker({
position: { lat: 51.08434479220073, lng: 71.4092111845279 },
map,
title: "Location 2!",
});
new google.maps.Marker({
position: { lat: 51.12231483717628, lng: 71.40855815366723 },
map,
title: "Location 3!",
});
}

// SIMPLE JS
document.querySelector(".review .heading").style.color = "white";
document.getElementById("contact").style.backgroundColor = "lightblue";
document.querySelector(".contact .heading").style.color ="white";
document.querySelectorAll(".counter .box-container .box h3").style.color = "grey";
document.querySelector(".counter .box-container .box h3").style.color = "grey";





// addEventListener("click", event(){
//console.log(event);
//})


// addEventListener("keypress", function(){
//   alert("key was pressed");
// });



// function add(num1, num2) {
//   return num1+num2;
// }
//
// function multiply(num1, num2) {
//   return num1*num2;
// }
//
// function calculate(num1, num2, operator) {
//   return operator(num1,num2);
// }
