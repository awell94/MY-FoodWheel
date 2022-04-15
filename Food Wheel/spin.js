let container = document.querySelector('.container');
let btn = document.getElementById("spin");
let number =Math.ceil(Math.random()*1000);

btn.onclick = function(){
  container.style.transform ="rotate("+ number +"deg )";
  number += Math.ceil(Math.random()*1000)
}
//Make hyperlink to different places(work, friends)
//go to page to page.
//count how much times it lands on something/save it.
//When selection pop up add hyper link to ttake it to the food site
//use icons-YES
