const C4 = new Audio("sounds/string1-part1.mp3");
const Db4 = new Audio("sounds/string1-part2.mp3");
const D4 = new Audio("sounds/string1-part3.mp3");
const Eb4 = new Audio("sounds/string1-part4.mp3");
const E4 = new Audio("sounds/string1-part5.mp3");
const F4 = new Audio("sounds/string2-part1.mp3");
const Gb4 = new Audio("sounds/string2-part2.mp3");
const G4 = new Audio("sounds/string2-part3.mp3");
const Ab4 = new Audio("sounds/string2-part4.mp3");
const A4 = new Audio("sounds/string2-part5.mp3");
const Bb4 = new Audio("sounds/string3-part1.mp3");
const B4 = new Audio("sounds/string3-part2.mp3");
const C5 = new Audio("sounds/string3-part3.mp3");
const Db5 = new Audio("sounds/string3-part4.mp3");
const D5 = new Audio("sounds/string3-part5.mp3");
const Eb5 = new Audio("sounds/string4-part1.mp3");
const E5 = new Audio("sounds/string4-part2.mp3");
const string43 = new Audio("sounds/string4-part3.mp3");
const string44 = new Audio("sounds/string4-part4.mp3");
const string45 = new Audio("sounds/string4-part5.mp3");
const string51 = new Audio("sounds/string5-part1.mp3");
const string52 = new Audio("sounds/string5-part2.mp3");
const string53 = new Audio("sounds/string5-part3.mp3");
const string54 = new Audio("sounds/string5-part4.mp3");
const string55 = new Audio("sounds/string5-part5.mp3");
const string61 = new Audio("sounds/string6-part1.mp3");
const string62 = new Audio("sounds/string6-part2.mp3");
const string63 = new Audio("sounds/string6-part3.mp3");
const string64 = new Audio("sounds/string6-part4.mp3");
const string65 = new Audio("sounds/string6-part5.mp3");



var icon = document.getElementById("icon");
var message = "";
icon.onclick = function()  {
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme"))  {
        icon.src="images/sun.png";
        message = "Night mode: ON";
    }
    else  {
        icon.src="images/moon.png";
        message = "Night mode: OFF";
    }
    document.getElementById("message").innerHTML = message;
};


//Menu
let toggle = document.querySelector('.toggle');
let menu = document.querySelector('.menu');
toggle.onclick = function() {
    menu.classList.toggle('active');
}

//Songs
function openNav() {
    document.getElementById("mySidenav").style.width = "330px";
    document.getElementById("mySidenav").style.zIndex = "10";;
    document.getElementById("top-left1").style.zIndex = "-1";
    document.getElementById("top-left2").style.zIndex = "-1";
    document.getElementById("middle-left").style.zIndex = "-1";
    document.getElementById("bottom-left").style.zIndex = "-1";
    document.getElementById("middle-top").style.zIndex = "-1";
    document.getElementById("middle-bottom").style.zIndex = "-1";
}
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("top-left1").style.zIndex = "999";
    document.getElementById("top-left2").style.zIndex = "999";
    document.getElementById("middle-left").style.zIndex = "999";
    document.getElementById("bottom-left").style.zIndex = "999";
    document.getElementById("middle-top").style.zIndex = "999";
    document.getElementById("middle-bottom").style.zIndex = "999";
}

var sheet = "";
function song1() {
    sheet = "123 123 123";
    document.getElementById("sheet").innerHTML = sheet;
}



const playSound = audio =>  {
    const clone = audio.cloneNode();
    clone.play();
    setTimeout(() => (clone.volume = 0.8), 400); 
    setTimeout(() => (clone.volume = 0.6), 800);
    setTimeout(() => (clone.volume = 0.4), 1200);
    setTimeout(() => (clone.volume = 0.2), 1600);
    setTimeout(() => (clone.volume = 0), 2000);
};


const C4Key = document.querySelector(".string1-part1");
const Db4Key = document.querySelector(".string1-part2");
const D4Key = document.querySelector(".string1-part3");
const Eb4Key = document.querySelector(".string1-part4");
const E4Key = document.querySelector(".string1-part5");


const playC4 = () => {
    playSound(C4);
    C4Key.classList.add("active");
    Db4Key.classList.add("active");
    D4Key.classList.add("active");
    Eb4Key.classList.add("active");
    E4Key.classList.add("active");
    setTimeout(() => C4Key.classList.remove("active"), 200);
    setTimeout(() => Db4Key.classList.remove("active"), 200);
    setTimeout(() => D4Key.classList.remove("active"), 200);
    setTimeout(() => Eb4Key.classList.remove("active"), 200);
    setTimeout(() => E4Key.classList.remove("active"), 200);


    document.getElementById('lefteye').id = 'lefteye-after';
    setTimeout(function(){document.getElementById('lefteye-after').id = 'lefteye'  }, 1000);
    document.getElementById('righteye').id = 'righteye-after';
    setTimeout(function(){document.getElementById('righteye-after').id = 'righteye'  }, 1000);
    document.getElementById('mouth').id = 'mouth-after';
    setTimeout(function(){document.getElementById('mouth-after').id = 'mouth'  }, 1000);

};
C4Key.addEventListener("click", playC4);
  
const playDb4 = () => {
    playSound(Db4);
    C4Key.classList.add("active");
    setTimeout(() => C4Key.classList.remove("active"), 200);


    document.getElementById('lefteye').id = 'lefteye-after';
    setTimeout(function(){document.getElementById('lefteye-after').id = 'lefteye'  }, 1000);
    document.getElementById('righteye').id = 'righteye-after';
    setTimeout(function(){document.getElementById('righteye-after').id = 'righteye'  }, 1000);
    document.getElementById('mouth').id = 'mouth-after';
    setTimeout(function(){document.getElementById('mouth-after').id = 'mouth'  }, 1000);
};
Db4Key.addEventListener("click", playDb4);
  

const playD4 = () => {
    playSound(D4);
    C4Key.classList.add("active");
    setTimeout(() => C4Key.classList.remove("active"), 200);
    Db4Key.classList.add("active");
    setTimeout(() => Db4Key.classList.remove("active"), 200);


    document.getElementById('lefteye').id = 'lefteye-after';
    setTimeout(function(){document.getElementById('lefteye-after').id = 'lefteye'  }, 1000);
    document.getElementById('righteye').id = 'righteye-after';
    setTimeout(function(){document.getElementById('righteye-after').id = 'righteye'  }, 1000);
    document.getElementById('mouth').id = 'mouth-after';
    setTimeout(function(){document.getElementById('mouth-after').id = 'mouth'  }, 1000);
};
D4Key.addEventListener("click", playD4);
  

const playEb4 = () => {
    playSound(Eb4);
    C4Key.classList.add("active");
    setTimeout(() => C4Key.classList.remove("active"), 200);
    Db4Key.classList.add("active");
    setTimeout(() => Db4Key.classList.remove("active"), 200);
    D4Key.classList.add("active");
    setTimeout(() => D4Key.classList.remove("active"), 200);


    document.getElementById('lefteye').id = 'lefteye-after';
    setTimeout(function(){document.getElementById('lefteye-after').id = 'lefteye'  }, 1000);
    document.getElementById('righteye').id = 'righteye-after';
    setTimeout(function(){document.getElementById('righteye-after').id = 'righteye'  }, 1000);
    document.getElementById('mouth').id = 'mouth-after';
    setTimeout(function(){document.getElementById('mouth-after').id = 'mouth'  }, 1000);
};
Eb4Key.addEventListener("click", playEb4);
  

const playE4 = () => {
    playSound(E4);
    C4Key.classList.add("active");
    setTimeout(() => C4Key.classList.remove("active"), 200);
    Db4Key.classList.add("active");
    setTimeout(() => Db4Key.classList.remove("active"), 200);
    D4Key.classList.add("active");
    setTimeout(() => D4Key.classList.remove("active"), 200);
    Eb4Key.classList.add("active");
    setTimeout(() => Eb4Key.classList.remove("active"), 200);


    document.getElementById('lefteye').id = 'lefteye-after';
    setTimeout(function(){document.getElementById('lefteye-after').id = 'lefteye'  }, 1000);
    document.getElementById('righteye').id = 'righteye-after';
    setTimeout(function(){document.getElementById('righteye-after').id = 'righteye'  }, 1000);
    document.getElementById('mouth').id = 'mouth-after';
    setTimeout(function(){document.getElementById('mouth-after').id = 'mouth'  }, 1000);
};
E4Key.addEventListener("click", playE4);



const F4Key = document.querySelector(".string2-part1");
const Gb4Key = document.querySelector(".string2-part2");
const G4Key = document.querySelector(".string2-part3");
const Ab4Key = document.querySelector(".string2-part4");
const A4Key = document.querySelector(".string2-part5");


const playF4 = () => {
    playSound(F4);
    F4Key.classList.add("active");
    setTimeout(() => F4Key.classList.remove("active"), 200);
    Gb4Key.classList.add("active");
    setTimeout(() => Gb4Key.classList.remove("active"), 200);
    G4Key.classList.add("active");
    setTimeout(() => G4Key.classList.remove("active"), 200);
    Ab4Key.classList.add("active");
    setTimeout(() => Ab4Key.classList.remove("active"), 200);
    A4Key.classList.add("active");
    setTimeout(() => A4Key.classList.remove("active"), 200);


    document.getElementById('lefteye').id = 'lefteye-after';
    setTimeout(function(){document.getElementById('lefteye-after').id = 'lefteye'  }, 1000);
    document.getElementById('righteye').id = 'righteye-after';
    setTimeout(function(){document.getElementById('righteye-after').id = 'righteye'  }, 1000);
    document.getElementById('mouth').id = 'mouth-after';
    setTimeout(function(){document.getElementById('mouth-after').id = 'mouth'  }, 1000);
};
F4Key.addEventListener("click", playF4);
  

const playGb4 = () => {
    playSound(Gb4);
    F4Key.classList.add("active");
    setTimeout(() => F4Key.classList.remove("active"), 200);


    document.getElementById('lefteye').id = 'lefteye-after';
    setTimeout(function(){document.getElementById('lefteye-after').id = 'lefteye'  }, 1000);
    document.getElementById('righteye').id = 'righteye-after';
    setTimeout(function(){document.getElementById('righteye-after').id = 'righteye'  }, 1000);
    document.getElementById('mouth').id = 'mouth-after';
    setTimeout(function(){document.getElementById('mouth-after').id = 'mouth'  }, 1000);
};
Gb4Key.addEventListener("click", playGb4);
  

const playG4 = () => {
    playSound(G4);
    F4Key.classList.add("active");
    setTimeout(() => F4Key.classList.remove("active"), 200);
    Gb4Key.classList.add("active");
    setTimeout(() => Gb4Key.classList.remove("active"), 200);

    document.getElementById('lefteye').id = 'lefteye-after';
    setTimeout(function(){document.getElementById('lefteye-after').id = 'lefteye'  }, 1000);
    document.getElementById('righteye').id = 'righteye-after';
    setTimeout(function(){document.getElementById('righteye-after').id = 'righteye'  }, 1000);
    document.getElementById('mouth').id = 'mouth-after';
    setTimeout(function(){document.getElementById('mouth-after').id = 'mouth'  }, 1000);
};
G4Key.addEventListener("click", playG4);
  

const playAb4 = () => {
    playSound(Ab4);
    F4Key.classList.add("active");
    setTimeout(() => F4Key.classList.remove("active"), 200);
    Gb4Key.classList.add("active");
    setTimeout(() => Gb4Key.classList.remove("active"), 200);
    G4Key.classList.add("active");
    setTimeout(() => G4Key.classList.remove("active"), 200);
    

    document.getElementById('lefteye').id = 'lefteye-after';
    setTimeout(function(){document.getElementById('lefteye-after').id = 'lefteye'  }, 1000);
    document.getElementById('righteye').id = 'righteye-after';
    setTimeout(function(){document.getElementById('righteye-after').id = 'righteye'  }, 1000);
    document.getElementById('mouth').id = 'mouth-after';
    setTimeout(function(){document.getElementById('mouth-after').id = 'mouth'  }, 1000);
};
Ab4Key.addEventListener("click", playAb4);
  

const playA4 = () => {
    playSound(A4);
    F4Key.classList.add("active");
    setTimeout(() => F4Key.classList.remove("active"), 200);
    Gb4Key.classList.add("active");
    setTimeout(() => Gb4Key.classList.remove("active"), 200);
    G4Key.classList.add("active");
    setTimeout(() => G4Key.classList.remove("active"), 200);
    Ab4Key.classList.add("active");
    setTimeout(() => Ab4Key.classList.remove("active"), 200);


    document.getElementById('lefteye').id = 'lefteye-after';
    setTimeout(function(){document.getElementById('lefteye-after').id = 'lefteye'  }, 1000);
    document.getElementById('righteye').id = 'righteye-after';
    setTimeout(function(){document.getElementById('righteye-after').id = 'righteye'  }, 1000);
    document.getElementById('mouth').id = 'mouth-after';
    setTimeout(function(){document.getElementById('mouth-after').id = 'mouth'  }, 1000);
};
A4Key.addEventListener("click", playA4);
  

const Bb4Key = document.querySelector(".string3-part1");
const B4Key = document.querySelector(".string3-part2");
const C5Key = document.querySelector(".string3-part3");
const Db5Key = document.querySelector(".string3-part4");
const D5Key = document.querySelector(".string3-part5");

const playBb4 = () => {
    playSound(Bb4);
    Bb4Key.classList.add("active");
    setTimeout(() => Bb4Key.classList.remove("active"), 200);
    B4Key.classList.add("active");
    setTimeout(() => B4Key.classList.remove("active"), 200);
    C5Key.classList.add("active");
    setTimeout(() => C5Key.classList.remove("active"), 200);
    Db5Key.classList.add("active");
    setTimeout(() => Db5Key.classList.remove("active"), 200);
    D5Key.classList.add("active");
    setTimeout(() => D5Key.classList.remove("active"), 200);



    document.getElementById('lefteye').id = 'lefteye-after';
    setTimeout(function(){document.getElementById('lefteye-after').id = 'lefteye'  }, 1000);
    document.getElementById('righteye').id = 'righteye-after';
    setTimeout(function(){document.getElementById('righteye-after').id = 'righteye'  }, 1000);
    document.getElementById('mouth').id = 'mouth-after';
    setTimeout(function(){document.getElementById('mouth-after').id = 'mouth'  }, 1000);
};
Bb4Key.addEventListener("click", playBb4);
  


const playB4 = () => {
    playSound(B4);
    Bb4Key.classList.add("active");
    setTimeout(() => Bb4Key.classList.remove("active"), 200);


    document.getElementById('lefteye').id = 'lefteye-after';
    setTimeout(function(){document.getElementById('lefteye-after').id = 'lefteye'  }, 1000);
    document.getElementById('righteye').id = 'righteye-after';
    setTimeout(function(){document.getElementById('righteye-after').id = 'righteye'  }, 1000);
    document.getElementById('mouth').id = 'mouth-after';
    setTimeout(function(){document.getElementById('mouth-after').id = 'mouth'  }, 1000);
};
B4Key.addEventListener("click", playB4);
  



const playDb5 = () => {
    playSound(Db5);
    Bb4Key.classList.add("active");
    setTimeout(() => Bb4Key.classList.remove("active"), 200);
    B4Key.classList.add("active");
    setTimeout(() => B4Key.classList.remove("active"), 200);

    document.getElementById('lefteye').id = 'lefteye-after';
    setTimeout(function(){document.getElementById('lefteye-after').id = 'lefteye'  }, 1000);
    document.getElementById('righteye').id = 'righteye-after';
    setTimeout(function(){document.getElementById('righteye-after').id = 'righteye'  }, 1000);
    document.getElementById('mouth').id = 'mouth-after';
    setTimeout(function(){document.getElementById('mouth-after').id = 'mouth'  }, 1000);
};
Db5Key.addEventListener("click", playDb5);
  


  
const playC5 = () => {
    playSound(C5);
    Bb4Key.classList.add("active");
    setTimeout(() => Bb4Key.classList.remove("active"), 200);
    B4Key.classList.add("active");
    setTimeout(() => B4Key.classList.remove("active"), 200);
    Db5Key.classList.add("active");
    setTimeout(() => Db5Key.classList.remove("active"), 200);

 
    document.getElementById('lefteye').id = 'lefteye-after';
    setTimeout(function(){document.getElementById('lefteye-after').id = 'lefteye'  }, 1000);
    document.getElementById('righteye').id = 'righteye-after';
    setTimeout(function(){document.getElementById('righteye-after').id = 'righteye'  }, 1000);
    document.getElementById('mouth').id = 'mouth-after';
    setTimeout(function(){document.getElementById('mouth-after').id = 'mouth'  }, 1000);
};
C5Key.addEventListener("click", playC5);

const playD5 = () => {
    playSound(D5);
    Bb4Key.classList.add("active");
    setTimeout(() => Bb4Key.classList.remove("active"), 200);
    B4Key.classList.add("active");
    setTimeout(() => B4Key.classList.remove("active"), 200);
    C5Key.classList.add("active");
    setTimeout(() => C5Key.classList.remove("active"), 200);
    Db5Key.classList.add("active");
    setTimeout(() => Db5Key.classList.remove("active"), 200);


    document.getElementById('lefteye').id = 'lefteye-after';
    setTimeout(function(){document.getElementById('lefteye-after').id = 'lefteye'  }, 1000);
    document.getElementById('righteye').id = 'righteye-after';
    setTimeout(function(){document.getElementById('righteye-after').id = 'righteye'  }, 1000);
    document.getElementById('mouth').id = 'mouth-after';
    setTimeout(function(){document.getElementById('mouth-after').id = 'mouth'  }, 1000);
};
D5Key.addEventListener("click", playD5);
  

const Eb5Key = document.querySelector(".string4-part1");
const E5Key = document.querySelector(".string4-part2");
const string43Key = document.querySelector(".string4-part3");
const string44Key = document.querySelector(".string4-part4");
const string45Key = document.querySelector(".string4-part5");

const playEb5 = () => {
    playSound(Eb5);
    Eb5Key.classList.add("active");
    setTimeout(() => Eb5Key.classList.remove("active"), 200);
    E5Key.classList.add("active");
    setTimeout(() => E5Key.classList.remove("active"), 200);
    string43Key.classList.add("active");
    setTimeout(() => string43Key.classList.remove("active"), 200);
    string44Key.classList.add("active");
    setTimeout(() => string44Key.classList.remove("active"), 200);
    string45Key.classList.add("active");
    setTimeout(() => string45Key.classList.remove("active"), 200);


    document.getElementById('lefteye').id = 'lefteye-after';
    setTimeout(function(){document.getElementById('lefteye-after').id = 'lefteye'  }, 1000);
    document.getElementById('righteye').id = 'righteye-after';
    setTimeout(function(){document.getElementById('righteye-after').id = 'righteye'  }, 1000);
    document.getElementById('mouth').id = 'mouth-after';
    setTimeout(function(){document.getElementById('mouth-after').id = 'mouth'  }, 1000);
};
Eb5Key.addEventListener("click", playEb5);
  


const playE5 = () => {
    playSound(E5);
    Eb5Key.classList.add("active");
    setTimeout(() => Eb5Key.classList.remove("active"), 200);


    document.getElementById('lefteye').id = 'lefteye-after';
    setTimeout(function(){document.getElementById('lefteye-after').id = 'lefteye'  }, 1000);
    document.getElementById('righteye').id = 'righteye-after';
    setTimeout(function(){document.getElementById('righteye-after').id = 'righteye'  }, 1000);
    document.getElementById('mouth').id = 'mouth-after';
    setTimeout(function(){document.getElementById('mouth-after').id = 'mouth'  }, 1000);
};
E5Key.addEventListener("click", playE5);


const play43 = () => {
    playSound(string43);
    Eb5Key.classList.add("active");
    setTimeout(() => Eb5Key.classList.remove("active"), 200);
    E5Key.classList.add("active");
    setTimeout(() => E5Key.classList.remove("active"), 200);
    string44Key.classList.add("active");
    setTimeout(() => string44Key.classList.remove("active"), 200);


    document.getElementById('lefteye').id = 'lefteye-after';
    setTimeout(function(){document.getElementById('lefteye-after').id = 'lefteye'  }, 1000);
    document.getElementById('righteye').id = 'righteye-after';
    setTimeout(function(){document.getElementById('righteye-after').id = 'righteye'  }, 1000);
    document.getElementById('mouth').id = 'mouth-after';
    setTimeout(function(){document.getElementById('mouth-after').id = 'mouth'  }, 1000);
};
string43Key.addEventListener("click", play43);


const play44 = () => {
    playSound(string44);
    Eb5Key.classList.add("active");
    setTimeout(() => Eb5Key.classList.remove("active"), 200);
    E5Key.classList.add("active");
    setTimeout(() => E5Key.classList.remove("active"), 200);


    document.getElementById('lefteye').id = 'lefteye-after';
    setTimeout(function(){document.getElementById('lefteye-after').id = 'lefteye'  }, 1000);
    document.getElementById('righteye').id = 'righteye-after';
    setTimeout(function(){document.getElementById('righteye-after').id = 'righteye'  }, 1000);
    document.getElementById('mouth').id = 'mouth-after';
    setTimeout(function(){document.getElementById('mouth-after').id = 'mouth'  }, 1000);
};
string44Key.addEventListener("click", play44);


const play45 = () => {
    playSound(string45);
    Eb5Key.classList.add("active");
    setTimeout(() => Eb5Key.classList.remove("active"), 200);
    E5Key.classList.add("active");
    setTimeout(() => E5Key.classList.remove("active"), 200);
    string43Key.classList.add("active");
    setTimeout(() => string43Key.classList.remove("active"), 200);
    string44Key.classList.add("active");
    setTimeout(() => string44Key.classList.remove("active"), 200);


    document.getElementById('lefteye').id = 'lefteye-after';
    setTimeout(function(){document.getElementById('lefteye-after').id = 'lefteye'  }, 1000);
    document.getElementById('righteye').id = 'righteye-after';
    setTimeout(function(){document.getElementById('righteye-after').id = 'righteye'  }, 1000);
    document.getElementById('mouth').id = 'mouth-after';
    setTimeout(function(){document.getElementById('mouth-after').id = 'mouth'  }, 1000);
};
string45Key.addEventListener("click", play45);

const string51Key = document.querySelector(".string5-part1");
const string52Key = document.querySelector(".string5-part2");
const string53Key = document.querySelector(".string5-part3");
const string54Key = document.querySelector(".string5-part4");
const string55Key = document.querySelector(".string5-part5");


const play51 = () => {
    playSound(string51);
    string51Key.classList.add("active");
    setTimeout(() => string51Key.classList.remove("active"), 200);
    string52Key.classList.add("active");
    setTimeout(() => string52Key.classList.remove("active"), 200);
    string53Key.classList.add("active");
    setTimeout(() => string53Key.classList.remove("active"), 200);
    string54Key.classList.add("active");
    setTimeout(() => string54Key.classList.remove("active"), 200);
    string55Key.classList.add("active");
    setTimeout(() => string55Key.classList.remove("active"), 200);

    document.getElementById('lefteye').id = 'lefteye-after';
    setTimeout(function(){document.getElementById('lefteye-after').id = 'lefteye'  }, 1000);
    document.getElementById('righteye').id = 'righteye-after';
    setTimeout(function(){document.getElementById('righteye-after').id = 'righteye'  }, 1000);
    document.getElementById('mouth').id = 'mouth-after';
    setTimeout(function(){document.getElementById('mouth-after').id = 'mouth'  }, 1000);
};
string51Key.addEventListener("click", play51);


const play52 = () => {
    playSound(string52);
    string51Key.classList.add("active");
    setTimeout(() => string51Key.classList.remove("active"), 200);


    document.getElementById('lefteye').id = 'lefteye-after';
    setTimeout(function(){document.getElementById('lefteye-after').id = 'lefteye'  }, 1000);
    document.getElementById('righteye').id = 'righteye-after';
    setTimeout(function(){document.getElementById('righteye-after').id = 'righteye'  }, 1000);
    document.getElementById('mouth').id = 'mouth-after';
    setTimeout(function(){document.getElementById('mouth-after').id = 'mouth'  }, 1000);
};
string52Key.addEventListener("click", play52);


const play53 = () => {
    playSound(string53);
    string51Key.classList.add("active");
    setTimeout(() => string51Key.classList.remove("active"), 200);
    string52Key.classList.add("active");
    setTimeout(() => string52Key.classList.remove("active"), 200);


    document.getElementById('lefteye').id = 'lefteye-after';
    setTimeout(function(){document.getElementById('lefteye-after').id = 'lefteye'  }, 1000);
    document.getElementById('righteye').id = 'righteye-after';
    setTimeout(function(){document.getElementById('righteye-after').id = 'righteye'  }, 1000);
    document.getElementById('mouth').id = 'mouth-after';
    setTimeout(function(){document.getElementById('mouth-after').id = 'mouth'  }, 1000);
};
string53Key.addEventListener("click", play53);


const play54 = () => {
    playSound(string54);
    string51Key.classList.add("active");
    setTimeout(() => string51Key.classList.remove("active"), 200);
    string52Key.classList.add("active");
    setTimeout(() => string52Key.classList.remove("active"), 200);
    string53Key.classList.add("active");
    setTimeout(() => string53Key.classList.remove("active"), 200);
    

    document.getElementById('lefteye').id = 'lefteye-after';
    setTimeout(function(){document.getElementById('lefteye-after').id = 'lefteye'  }, 1000);
    document.getElementById('righteye').id = 'righteye-after';
    setTimeout(function(){document.getElementById('righteye-after').id = 'righteye'  }, 1000);
    document.getElementById('mouth').id = 'mouth-after';
    setTimeout(function(){document.getElementById('mouth-after').id = 'mouth'  }, 1000);
};
string54Key.addEventListener("click", play54);

const play55 = () => {
    playSound(string55);
    string51Key.classList.add("active");
    setTimeout(() => string51Key.classList.remove("active"), 200);
    string52Key.classList.add("active");
    setTimeout(() => string52Key.classList.remove("active"), 200);
    string53Key.classList.add("active");
    setTimeout(() => string53Key.classList.remove("active"), 200);
    string54Key.classList.add("active");
    setTimeout(() => string54Key.classList.remove("active"), 200);
    

    document.getElementById('lefteye').id = 'lefteye-after';
    setTimeout(function(){document.getElementById('lefteye-after').id = 'lefteye'  }, 1000);
    document.getElementById('righteye').id = 'righteye-after';
    setTimeout(function(){document.getElementById('righteye-after').id = 'righteye'  }, 1000);
    document.getElementById('mouth').id = 'mouth-after';
    setTimeout(function(){document.getElementById('mouth-after').id = 'mouth'  }, 1000);
};
string55Key.addEventListener("click", play55);

const string61Key = document.querySelector(".string6-part1");
const string62Key = document.querySelector(".string6-part2");
const string63Key = document.querySelector(".string6-part3");
const string64Key = document.querySelector(".string6-part4");
const string65Key = document.querySelector(".string6-part5");

const play61 = () => {
    playSound(string61);
    string61Key.classList.add("active");
    setTimeout(() => string61Key.classList.remove("active"), 200);
    string62Key.classList.add("active");
    setTimeout(() => string62Key.classList.remove("active"), 200);
    string63Key.classList.add("active");
    setTimeout(() => string63Key.classList.remove("active"), 200);
    string64Key.classList.add("active");
    setTimeout(() => string64Key.classList.remove("active"), 200);
    string65Key.classList.add("active");
    setTimeout(() => string65Key.classList.remove("active"), 200);



    document.getElementById('lefteye').id = 'lefteye-after';
    setTimeout(function(){document.getElementById('lefteye-after').id = 'lefteye'  }, 1000);
    document.getElementById('righteye').id = 'righteye-after';
    setTimeout(function(){document.getElementById('righteye-after').id = 'righteye'  }, 1000);
    document.getElementById('mouth').id = 'mouth-after';
    setTimeout(function(){document.getElementById('mouth-after').id = 'mouth'  }, 1000);
};
string61Key.addEventListener("click", play61);


const play62 = () => {
    playSound(string62);
    string61Key.classList.add("active");
    setTimeout(() => string61Key.classList.remove("active"), 200);


    document.getElementById('lefteye').id = 'lefteye-after';
    setTimeout(function(){document.getElementById('lefteye-after').id = 'lefteye'  }, 1000);
    document.getElementById('righteye').id = 'righteye-after';
    setTimeout(function(){document.getElementById('righteye-after').id = 'righteye'  }, 1000);
    document.getElementById('mouth').id = 'mouth-after';
    setTimeout(function(){document.getElementById('mouth-after').id = 'mouth'  }, 1000);
};
string62Key.addEventListener("click", play62);


const play63 = () => {
    playSound(string63);
    string61Key.classList.add("active");
    setTimeout(() => string61Key.classList.remove("active"), 200);
    string62Key.classList.add("active");
    setTimeout(() => string62Key.classList.remove("active"), 200);

 
    document.getElementById('lefteye').id = 'lefteye-after';
    setTimeout(function(){document.getElementById('lefteye-after').id = 'lefteye'  }, 1000);
    document.getElementById('righteye').id = 'righteye-after';
    setTimeout(function(){document.getElementById('righteye-after').id = 'righteye'  }, 1000);
    document.getElementById('mouth').id = 'mouth-after';
    setTimeout(function(){document.getElementById('mouth-after').id = 'mouth'  }, 1000);
};
string63Key.addEventListener("click", play63);


const play64 = () => {
    playSound(string64);
    string61Key.classList.add("active");
    setTimeout(() => string61Key.classList.remove("active"), 200);
    string62Key.classList.add("active");
    setTimeout(() => string62Key.classList.remove("active"), 200);
    string63Key.classList.add("active");
    setTimeout(() => string63Key.classList.remove("active"), 200);
    

    document.getElementById('lefteye').id = 'lefteye-after';
    setTimeout(function(){document.getElementById('lefteye-after').id = 'lefteye'  }, 1000);
    document.getElementById('righteye').id = 'righteye-after';
    setTimeout(function(){document.getElementById('righteye-after').id = 'righteye'  }, 1000);
    document.getElementById('mouth').id = 'mouth-after';
    setTimeout(function(){document.getElementById('mouth-after').id = 'mouth'  }, 1000);
};
string64Key.addEventListener("click", play64);


const play65 = () => {
    playSound(string65);
    string61Key.classList.add("active");
    setTimeout(() => string61Key.classList.remove("active"), 200);
    string62Key.classList.add("active");
    setTimeout(() => string62Key.classList.remove("active"), 200);
    string63Key.classList.add("active");
    setTimeout(() => string63Key.classList.remove("active"), 200);
    string64Key.classList.add("active");
    setTimeout(() => string64Key.classList.remove("active"), 200);


    document.getElementById('lefteye').id = 'lefteye-after';
    setTimeout(function(){document.getElementById('lefteye-after').id = 'lefteye'  }, 1000);
    document.getElementById('righteye').id = 'righteye-after';
    setTimeout(function(){document.getElementById('righteye-after').id = 'righteye'  }, 1000);
    document.getElementById('mouth').id = 'mouth-after';
    setTimeout(function(){document.getElementById('mouth-after').id = 'mouth'  }, 1000);
};
string65Key.addEventListener("click", play65);






window.addEventListener("keydown", ({  keyCode }) => {
 
    if (keyCode === 49) return playC4();
    if (keyCode === 50) return playDb4();
    if (keyCode === 51) return playD4();
    if (keyCode === 52) return playEb4();
    if (keyCode === 53) return playE4();

    if (keyCode === 81) return playF4();
    if (keyCode === 87) return playGb4();
    if (keyCode === 69) return playG4();
    if (keyCode === 82) return playAb4();
    if (keyCode === 84) return playA4();

    if (keyCode === 65) return playBb4();
    if (keyCode === 83) return playB4();
    if (keyCode === 70) return playC5();
    if (keyCode === 68) return playDb5();
    if (keyCode === 71) return playD5();

    if (keyCode === 54) return playEb5();
    if (keyCode === 55) return playE5();
    if (keyCode === 57) return play43();
    if (keyCode === 56) return play44();
    if (keyCode === 48) return play45();

    if (keyCode === 89) return play51();
    if (keyCode === 85) return play52();
    if (keyCode === 73) return play53();
    if (keyCode === 79) return play54();
    if (keyCode === 80) return play55();

    
    if (keyCode === 72) return play61();
    if (keyCode === 74) return play62();
    if (keyCode === 75) return play63();
    if (keyCode === 76) return play64();
    if (keyCode === 186) return play65();


}); 

