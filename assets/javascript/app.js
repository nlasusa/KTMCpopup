function displayAd(){
  document.getElementById("special-offer").style.display = "block";
}
window.addEventListener('load', displayAd, false);


/*--- THIS FUNCTION WILL CLEAR THE POP-UP WHEN THE CLOSE BUTTON IS CLICKED ---*/
document.getElementsByClassName("close-button")[0].onclick = function() {
  document.getElementById("special-offer").style.display = "none";
}

/*--- THIS FUNCTION WILL CLEAR THE POP-UP FORM WHEN THE CLOSE BUTTON IS CLICKED ---*/
document.getElementsByClassName("close-button")[1].onclick = function() {
  document.getElementById("form-container").style.display = "none";
}


/*--- THIS FUNCTION WILL OPEN THE REGISTRATION FORM AND CLOSE THE POPUP ---*/
document.getElementById("signup-btn").addEventListener('click', function(){
  document.getElementById("special-offer").style.display = "none";
  document.getElementById("form-container").style.display = "flex";
}, false)

// ON CLICK EVENTS 
$("#back").on('click', function(){
  window.location = "https://nlasusa.github.io/KTMCpopup/";    
});