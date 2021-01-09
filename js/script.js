
/* preloader*/
window.addEventListener('load', function(event){
    document.querySelector('.preloader').classList.add('remove');

});
/*navigation bar*/
window.addEventListener('scroll', function(event) {
    document.querySelector('.head').classList.toggle('sticky', window.scrollY > 0);
});
/*navigation_hamburger*/
document.querySelector('.hamburger').addEventListener('click', function(event) {
    document.querySelector('.links').classList.toggle('open');
});