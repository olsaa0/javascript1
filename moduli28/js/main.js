var button1=document.getElementById("btn1");
var button2=document.getElementById("btn2");
var button3=document.getElementById("btn3");
var button4=document.getElementById("btn3");
var ds_text=document.getElementById('txt1');
var js_text=document.getElementById('txt2');

button1.onclick=function(){
    ds_text.style.color='red';
    ds_text.style.textAlign='center';
    ds_text.style.backgroundColor='black';
    js_text.setAttribute('class','text');
}
button2.onmouseover=function(){
    alert("overed");
}
button3.onmouseleave=function(){
    alert("left");
}
button4.onwheel=function(){
    alert("wheeled");
}

button2.onmouseover=function(){
    ds_text.style.cssText='color:red;text-align:right; font-size:200px;'
}