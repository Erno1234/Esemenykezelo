window.addEventListener("load", init);
function init() {
  const articleElem = document.querySelectorAll("#gomb");
  articleElem[0].innerHTML = "<button>Katt ide!</button>";
  const button = document.querySelector("#gomb button");
  button.addEventListener("click", function () {
    alert("Hello World!");
  });
  articleElem[0].innerHTML += "<div><img src='kep.jpg' alt='kep'></img></div>";
  const div = document.querySelectorAll("#gomb div");

  div.addEventListener("mouseover",function(){
    console.log("Kép");
    div.style.border = "2px solid red";
  });
  

}
