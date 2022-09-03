var myAcc =  document.getElementsByClassName("accordian"); // 아코디언 요소를 변수에 담기.
var i;

for(i =0; i< myAcc.length; i++)
{
    myAcc[i].addEventListener("click",function() {
    
    var pannel = this.nextElementSibling; // 해당 요소의 바로 다음 요소를 가져온다.
    this.classList.toggle("active"); // toggle로 active 활성화 
    
    if(pannel.style.maxHeight){ // pannel이 열렸다면
        pannel.style.maxHeight = null;
    }
    else{ // pannel이 열리지 않았다면
        pannel.style.maxHeight = pannel.scrollHeight + "px";
    }
    });
}