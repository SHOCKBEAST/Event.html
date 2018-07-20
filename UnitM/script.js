/* 
   Revisions Bookstore and Cafe 
   Filename: script.js

   Author:   Edwin Low En Lin
   Date:     16/7/18
   HTML5 and CSS3 Illustrated Unit M, Visual Workshop
 */
var smallersize= document.querySelector(".smaller-size");
var select = document.querySelector(".selected-button");
var biggersize= document.querySelector(".larger-size");
var mediumsize= document.querySelector(".medium-size");
var body= document.querySelector("body");

smallersize.addEventListener("click",small);
mediumsize.addEventListener("click",medium);

biggersize.addEventListener("click",big);
selectsize.addEventListener("click",select);

function small(){
  smallersize.className= "smaller-size ";
 body.className ="smaller-size";
 smallersize.className="selected-button";
mediumsize.className="medium-size";
biggersize.className="larger-size";
}
function medium(){
  mediumsize.className="medium-size";
  body.className="medium-size";
  mediumsize.className="selected-button";
  smallersize.className="smaller-size";
  biggersize.className="larger-size";
}

function big(){
  biggersize.className="larger-size";
  body.className="larger-size";
  biggersize.className="selected-button";
  smallersize.className="smaller-size";
  mediumsize.className="medium-size";

}
function select(){
  select.className="selected-button";
  body.className="selected-button";
}