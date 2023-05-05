$(function () {
    //*jquery code
    let searchIcon = $(`.searchIcon`)
    let searchBar = $(`.search`)
    searchIcon.click(function () {
        searchBar.toggleClass(`show`)
        if (searchBar.hasClass(`show`) == true) {
            searchIcon.html(`<i class="fa-regular fa-circle-xmark"></i>`)
        } else {
            searchIcon.html(`<i class="fa-solid fa-magnifying-glass"></i>`)
        }
    })
})
// *menu fixed
let navbar = $(`.navbar`)
let backToTop = $(`.backToTop`)
$(window).scroll(function () {
    let scrollTopValue = $(window).scrollTop()
    if (scrollTopValue>750) {
        navbar.addClass(`menuFixed`)
        backToTop.addClass(`showBtn`)
    } else {
       navbar.removeClass(`menuFixed`) 
       backToTop.removeClass(`showBtn`)
    }
})
// *back to top button
let button = $(`.backToTop button`)
button.click(function () {
    $('body,html').animate({scrollTop:0}, 250)
})
$(window).on(`load`, function () {
    $(`.preloader`).fadeOut()
})