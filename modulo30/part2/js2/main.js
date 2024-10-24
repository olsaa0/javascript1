var input=document.getElementById('input');
var button=document.getElementById('btn');
var text=document.getElementById('text');
var button1=document.getElementById('plus');
var input1=document.getElementById('n1');
var input2=document.getElementById('n2');
var h2=document.getElementById('h2');
var age_text=document.getElementById('age_text');
var city_text=document.getElementById('city_text');
var age_input=document.getElementById('age_input');
var text_input=document.getElementById('text_input');
var btn=document.getElementById('submit');


button.onclick=function(){
    text.innerHTML=input.value;
}

button1.onclick=function(){
    h2.innerHTML=parseInt(input1.value)+ parseInt(input2.value);
}

submit.onclick=function(){
    if(parseInt(age_input.value)>=18){
        text_input.innerHTML='you cant vote';
    }
    else{
        text_input.innerHTML='you can vote';
    }
};
