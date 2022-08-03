window.addEventListener('scroll', function () {
    let value = window.scrollY;
    if (value > 100) {
        document.querySelector('.title').style.animation = "back 2s"

    }
    else {
        document.querySelector('.title').style.animation = "yoon 2s ease-in"
    }

})

window.addEventListener('scroll', function () {

    let value = window.scrollY;
    if (value > 800) {
        document.querySelector('.building').style.animation = "up 2s forwards";




    }
    else {
        document.querySelector('.building').style.animation = "down 2s ease-in"
    }



})