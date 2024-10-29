var wakeuptime;
var dstime;
var sleeptime;
var noon =12;


function showCurrentTime(){
    var clock=document.getElementById('clock');
    var currentTime=new Date();

    var hours=currentTime.getHours();
    var minutes=currentTime.getMinutes();
    var seconds=currentTime.getSeconds();

    var meridian='AM';

    if(hours>=noon){
        meridian="PM";
    }

    var clockTime=hours + ':' + minutes + ':' + seconds + '' + meridian;
    clock.innerText=clockTime;

    changeImage();
}

setInterval(showCurrentTime, 1000);


function changeImage(){
    var time=new Date().getHours();

    var image='ds_clock.png';
    var imageHTML=document.getElementById('timeImage');
    if(time==wakeuptime){
        image='morning.gif';
    }
    else if(time==dstime){
        image='class.gif'
    }
    else if(time==sleeptime){
        image='night.gif'
    }

    imageHTML.src=image;
}

function updateClock(){
    var wakeuptime=document.getElementById('wakeUpTimeSelector');

    wakeuptime=wakeUpTimeSelector.value;

    var dstimeSelector=document.getElementById('classTimeSelector');

    dstimeSelector=dsTimeSelector.value;

    var sleepTimeSelector=document.getElementById('sleepTimeSelector');

    sleepTimeSelector=sleepTimeSelector.value;
}
var savebtn=document.getElementById('savebtn');

savebtn.addEventListener('click', updateClock);