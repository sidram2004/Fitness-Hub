
function home(){
    document.getElementById("homes").style.color="rgb(71, 226, 105)"
    document.getElementById("plans").style.color="white"
    document.getElementById("contacts").style.color="white"
    document.getElementById("blogs").style.color="white"
    document.getElementById("progrms").style.color="white"
}
function program(){
    document.getElementById("homes").style.color="white"
    document.getElementById("plans").style.color="white"
    document.getElementById("contacts").style.color="white"
    document.getElementById("blogs").style.color="white"
    document.getElementById("programs").style.color="rgb(71, 226, 105)"
}
function blog(){
    document.getElementById("homes").style.color="white"
    document.getElementById("plans").style.color="white"
    document.getElementById("contacts").style.color="white"
    document.getElementById("blogs").style.color="rgb(71, 226, 105)"
    document.getElementById("progrms").style.color="white"
}
function plan(){
    document.getElementById("homes").style.color="white"
    document.getElementById("plans").style.color="rgb(71, 226, 105)"
    document.getElementById("contacts").style.color="white"
    document.getElementById("blogs").style.color="white"
    document.getElementById("progrms").style.color="white"
}
function contact(){
    document.getElementById("homes").style.color="white"
    document.getElementById("plans").style.color="white"
    document.getElementById("contacts").style.color="rgb(71, 226, 105)"
    document.getElementById("blogs").style.color="white"
    document.getElementById("progrms").style.color="white"
}
//submit

function submit(){
    
    let name = document.getElementById("name");
    let number = document.getElementById("number");

    if(name.value == ""){
        alert("Please Enter Name")
    }else if(number.value ==""){
        alert("Please Enter Number") 
    }else{
        alert("Thanks For Join : " + name.value)
    }

}