// alert("This is a practice website made with javascript , HTML and CSS")
var men_btn = document.getElementById('men-toggle')
var men = document.getElementById('men')

men_btn.addEventListener("click", () => {
    men.style.marginTop = '0px'
    women.style.marginTop = '-320px'
})
var women_btn = document.getElementById('women-toggle')
var women = document.getElementById('women')
women_btn.addEventListener("click", () => {
    women.style.marginTop = '0px'
    men.style.marginTop = '-320px'
})

var community_btn = document.getElementById('community-btn');
var community = document.getElementById('community');

function scrollwin() {
    window.scrollBy(0, 2000)
}
community_btn.addEventListener("click", scrollwin)


var log = document.getElementById('login')
var close_model = document.getElementById('close')
var modal = document.getElementById('model-form')
log.addEventListener("click", () => {
    modal.style.opacity = '1';
    modal.style.pointerEvents = 'all'
})
close_model.addEventListener("click", () => {
    modal.style.opacity = '0'
    modal.style.pointerEvents = 'none'

})
let slide = 0
function controller(x) {
    slide = slide + x
    slideshow(slide)

}
slideshow(slide);

function slideshow(num) {
    var items = document.getElementsByClassName('crousel-item')
    console.log(items)
    if (num > items.length - 1) {
        slide = 0
        num = 0
    }
    if (num < 0) {
        slide = items.length - 1
        num = items.length - 1
    }
    for (let y of items) {
        y.style.display = 'none'
    }
    items[num].style.display = "block"
}