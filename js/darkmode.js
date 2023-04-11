document.addEventListener("DOMContentLoaded", function () {
    toggleDarkLight()
    });
    
    function toggleDarkLight() {
    var body = document.getElementById("body");
    var currentClass = body.className;
    if(currentClass === "dark-mode"){
    body.classList.remove("dark-mode");
    body.classList.add("light-mode");
    document.getElementById("toggle").innerHTML = "Passer en mode nuit";
    }else if(currentClass === "light-mode"){
    body.classList.remove("light-mode");
    body.classList.add("dark-mode");
    document.getElementById("toggle").innerHTML = "Passer en mode clair";
    }
    }
    
    //document.addEventListener("DOMContentLoaded", function () {
    //    toggleDarkLight()
    //});
    //
    //function toggleDarkLight() {
    //  var body = document.getElementById("body");
    //  var currentClass = body.className;
    //  body.className = currentClass === "dark-mode" ? "light-mode" : "dark-mode";
    //  var currentText = document.getElementById("toggle").innerHTML;
    //  document.getElementById("toggle").innerHTML = currentText === "Passer en mode nuit" ? "Passer en mode clair" : "Passer en mode nuit";
    //}
    
    //function myFunction() {
    //  var x = document.getElementById("myDIV"), document.getElementsByClassName("dark-mode");;
    //  if (x.style.display === "none") {
    //    x.style.display = "block";
    //  } else {
    //    x.style.display = "none";
    //  }
    //}