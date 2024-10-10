function showMessage(){
    alert("this message is inside the function");
}
showMessage();
function sum(number1, number2){
    return number1+number2;
}
console.log(sum(25, 5));

function toCelcius(f){
    return(5/9) * (f-32);
}

console.log("54 farenheit is equal to "+toCelcius(54)+" celcius");

var result=toCelcius(54);
console.log("54 farenheit is equal to "+result+" celcius");

var arrowFunction=()=> alert ("hello world");
arrowFunction();

var arrowFunction=name =>alert("hello world $(name)");
arrowFunction("john doe");

function dsFunction(){
    var localVar="digital school";
    alert(localVar);
}

//alert(localVar)
function toSecond(mintues){
    return minutes*60;
}
console.log(toSeconds(60));

function triangleArea(baselengh, height){
    return 0.5*baselengh*height
}
console.log(triangleArea(5, 7));

//objext
var car={
    name:"mercedes",
    color:"red",
    year: 2020,
    kilometres:0,
    startEngine:function(){
        alert("vroooooom!!!");
    },
    get getKilometres(){
        return this.kilometres;
    },
    set setKilometres(km){
        this.kilometres=km;
    }
};
console.log(car.getKilometres);
car.setKilometres=100;
console.log(car.getKilometres);

var school={
    name:"digital school",
    subject:"programming",
    students:1500,
    year:2024,
};
alert(car.name);
alert(car['color']);
car.startEngine();

var computer=new Object();
computer.name="lenoco";
computer.CPU="intel core I7";
computer.RAM="16gb";
computer.GPU="geforce gt730 2gb dual dp hp";

computer.type=function(){
    return this.name +" , " + this.CPU + ", " + this.RAM + ", " + this.GPU;
};

alert(computer.GPU);
alert(computer.type());
delete computer.GPU;
alert(computer.GPU);

function Computer(name, CPU, RAM, GPU){
    this.name=name;
    this.CPU=CPU;
    this.RAM=RAM;
    this.GPU=GPU;

}
var computer1=new Copmuter("macbook pro", "M1 8-core", "8gb", "560m gpu");
var computer2=new Computer("acer", "intel core i3", "4gb", "intergrated");