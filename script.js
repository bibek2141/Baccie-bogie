//Function expression to select elements

/*Navbar*/
const selectElement = (s) => document.querySelector(s);

//open the menu when clicked
selectElement(".open").addEventListener("click", () => {
  selectElement(".nav-list").classList.add("active");
});

//close the menu when clicked
selectElement(".close").addEventListener("click", () => {
  selectElement(".nav-list").classList.remove("active");
});

var audio = $("#player")[0];
$("#section1").mouseenter(function () {
  audio.play();
});
