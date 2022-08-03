

document.querySelector('.btn-1').addEventListener("click", function () {


    $('.hands').toggle('show');
    $('.btn-2').toggle('show');
    $('.btn-3').toggle('show');
})

document.querySelector('.btn-2').addEventListener("click", function () {
    var elementTop = $(".hands").css("top");//135px
    var result = elementTop.replace(/[^0-9]/g, "");//135
    result = parseInt(result) - 34;//131
    document.querySelector('.hands').style.top = `${result}px`;//131px



})
document.querySelector('.btn-3').addEventListener("click", function () {
    var elementTop = $(".hands").css("top");
    var result = elementTop.replace(/[^0-9]/g, "");
    result = parseInt(result) + 34;

    document.querySelector('.hands').style.top = `${result}px`;



})
var qdiv = document.createElement("div");
var qp = document.createElement("p");
var qsec = document.querySelector('.quiz_box');
var num = 0;
function randomNum(min, max) {
    var randNum = Math.floor(Math.random() * (max - min + 1)) + min;
    return randNum;
}
//Math.random();0~1사이의 숫자 0.023 0.4567
//Math.floor(8) 같거나 작은 정수 8
//randomNum(1,10)--> 0~0.999*(10-1+1)
//                   Math.floor(0~0.999*(10-1+1)) -->0~9

document.querySelector('.rarr').addEventListener("click", function () {
    // if (num !== 12) num = num + 1;
    gonext();


})
document.querySelector('.larr').addEventListener("click", function () {

    // if (num !== 0) num = num - 1;
    gonext();

})
function gonext() {
    num = randomNum(0, 11);
    var words = document.querySelectorAll('.q');
    var result = words[num].innerHTML;//1.liberty
    qp.innerHTML = result.replace(/[0-9.]/g, "");


    qdiv.appendChild(qp);
    qsec.appendChild(qdiv);
}

document.querySelector('.quiz').addEventListener('click', function () {


    $('.quiz_box').toggle('show');
    $('.section1').toggle('hide');
    $('.section2').toggle('hide');
    gonext();
    // document.querySelector('.quiz_box').classList.toggle('show');
    // document.querySelector('.section1').classList.toggle('hide');
    // document.querySelector('.section2').classList.toggle('hide');

})

