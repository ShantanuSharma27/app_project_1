
// Function to play the clicking sound
function playClickSound() {
  var audio = new Audio("clicking.wav");
  audio.currentTime = 0; // Reset the audio to the beginning
  audio.play();
}

// Attach the click event listener to all the links
var links = document.getElementsByTagName("a");
for (var i = 0; i < links.length; i++) {
  links[i].addEventListener("click", function(event) {
    event.preventDefault(); // Prevent the default link navigation
    var overlay = document.createElement("div");
    overlay.style.position = "fixed";
    overlay.style.top = "0";
    overlay.style.left = "0";
    overlay.style.width = "100%";
    overlay.style.height = "100%";
    overlay.style.zIndex = "9999";
    overlay.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
    overlay.addEventListener("click", function() {
      playClickSound();
      setTimeout(function() {
        window.location.href = href; // Navigate after the sound finishes playing
      }, audio.duration * 1000);
    });
    document.body.appendChild(overlay);
    var href = this.getAttribute("href");
  });
}

// Attach the click event listener to the login button
var loginButton = document.getElementById("loginButton");
loginButton.addEventListener("click", playClickSound);

// Attach the click event listener to the signup button
var signupButton = document.getElementById("signupButton");
signupButton.addEventListener("click", playClickSound);