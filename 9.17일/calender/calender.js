// calender 함수

function calender(new_year, new_month){

var d = new Date(new_year,new_month-1,1),
    d_length = 32 - new Date(new_year, new_month-1,32).getDate(),
    year = d.getFullYear(),
    month = d.getMonth(),
    date = d.getDate(),
    day = d.getDay();



var caption_year = document.querySelector('.year'),
    caption_month = document.querySelector('.month');

var start_day = document.querySelectorAll('tr td');

for(var i =0;i<start_day.length; i++){
    start_day[i].innerHTML = '&nbsp;';
}

for(var i = day;i< day + d_length; i++){
    start_day[i].innerHTML = date;
    date++;
}

caption_year.innerHTML = year;
caption_month.innerHTML = month + 1;


}


(function(){
    var prev = document.getElementById('prev'),
    next = document.getElementById('next'),
    year = new Date().getFullYear(),
    month = new Date().getMonth() +1;

    calender(year,month);
    prev.onclick = function(){
        calender(year, --month);
        console.log(month);
    };

    next.onclick = function(){
        calender(year, ++month);
        console.log(month);
    };
    

})();