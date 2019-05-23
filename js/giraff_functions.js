var overlay = document.getElementById('overlay');
var sloaga = document.getElementById('slogan');
var closeMenu = document.getElementById('close-menu');
var works = document.getElementById('work_page');
var enableTitleSlide = document.getElementById('hover_slide');


document.getElementById("open-menu").addEventListener("click", showMenu);
document.getElementById("open-menu").addEventListener("click", enable_menuSlidea);
document.getElementById("close-menu").addEventListener("click", closeMenua);
document.getElementById("hej").addEventListener("click", enable_TitleSlide);

document.getElementById("testa").addEventListener("click", function(){
  activeMENU.classList.add('enable_menua');
  videoBG.classList.add('disableVideoBG');
  bodyID.classList.add('enableBG');
  works.classList.remove('disablePage');
  works.classList.add('EnablePage');

});



function enable_TitleSlide() {
enableTitleSlide.classList.add('work_verticalTitlea');


}


function showMenu() {
document.getElementsByClassName('menu-btn')[0].style.visibility = 'hidden';

overlay.classList.add('show-menu');


}


function enable_menuSlidea() {


sloaga.classList.add('enable_menuSlide');



}


function closeMenua() {
  document.getElementsByClassName('menu-btn')[0].style.visibility = 'visible';
  videoBG.classList.remove('disableVideoBG');
  bodyID.classList.remove('enableBG');

sloaga.classList.remove('enable_menuSlide');
overlay.classList.remove('show-menu');
  works.classList.remove('EnablePage');
    works.classList.add('disablePage');

}
