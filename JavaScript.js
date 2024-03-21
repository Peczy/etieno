window.alert("Hello World");
document.write("Hello Pecz");
<!--This is a comment-->
function sayHi(){
    alert("Hello Pecz!");
}
function greet(){
    document.write("Good evening Pecz");
}

let z=5;
z=10;
console.log(z)

var a = "Etieno";
var b = "Aniekan";
var c = a + " " + b;

window.alert("The data type of var a is " + typeof(a))
window.alert("Testing the line break/new line function. \nThis part should be on a new line")
alert(c)


function greet_me(){
    alert("Hello " + a + " " + b )
}

function confirmer(){
    var v = confirm("Are you sure you want to delete?")
    if(v==true){
        alert("Record deleted")
    }
    else{
        alert("Operation cancelled")
    }
}


function classwork(){
    var new_a = confirm("Are you sure you want to remove this from the cart?")
    if(new_a==true){
        alert("Item is removed")
    }
    else{
        document.write("Item is still here")
    }
}

function prompter(){
    var new_b = prompt("Input your age")
    if(new_b<18){
        alert("You are underage")
    }
    else{
        alert("You are qualified to drink beer")
    }
}
function get_element(){
    document.getElementById("Tadd").innerHTML = 44 + 56;
}