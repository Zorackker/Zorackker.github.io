let myImage = document.querySelector("img");

myImage.addEventListener("click", function () {
  let mySrc = myImage.getAttribute("src");
  if (mySrc === "images/image-citrouille.jpg") {
    myImage.setAttribute("src", "images/plein-citrouilles.jpg");
  } else {
    myImage.setAttribute("src", "images/image-citrouille.jpg");
  }
});
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");
function setUserName() {
    let myName = prompt("Veuillez saisir votre nom.");
    localStorage.setItem("nom", myName);
    myHeading.textContent = "L'accueil de " + myName;
  }
  if (!localStorage.getItem("nom")) {
    setUserName();
  } else {
    let storedName = localStorage.getItem("nom");
    myHeading.textContent = "L'accueil de " + storedName;
  }
  myButton.addEventListener("click", function () {
    setUserName();
  });
  
  
  