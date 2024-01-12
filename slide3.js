var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "block";

}
function change_color(){
  document.getElementById('price').innerHTML='price:50999';
}
function not_display(){
  document.getElementById('price').innerHTML='';
}
function display_name(){
  document.getElementById('name').innerHTML='IPHONE 12';
}