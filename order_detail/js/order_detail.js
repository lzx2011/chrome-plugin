function $(id) {
  return document.getElementById(id);
}

function my_clock(el){
    var today=new Date();
    var h=today.getHours();
    var m=today.getMinutes();
    var s=today.getSeconds();
    m=m>=10?m:('0'+m);
    s=s>=10?s:('0'+s);
    el.innerHTML = h+":"+m+":"+s;
    setTimeout(function(){my_clock(el)}, 1000);
}

function init(){
  my_clock($('clock_div'));
  var dailyUrl = "https://www.baidu.com/s?wd=";
  var onlineUrl = "https://www.google.com.hk/search?q=";

  $('daily_button').addEventListener('click', function () {
    window.open(dailyUrl + $('tid').value);
    // $('clock_div').innerHTML = dailyUrl + $('tid').value;
  });

  $('online_button').addEventListener('click', function () {
    var tid = document.getElementById('tid').innerHTML;
    window.open(onlineUrl + $('tid').value);
    // $('clock_div').innerHTML = onlineUrl + $('tid').value;
  });
}

init();
// document.addEventListener('DOMContentLoaded', init);
