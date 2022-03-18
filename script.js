let waktu = new Date();
let jam = 10;
let jamTemp = 0;
let buttonType = "";
var round = Math.round;

let semester = 1;
document.getElementById("semestersekarang").innerHTML= semester;

var increaseMakan = 0;
var decreaseMakan = 0.6;
let widthMakan = document.getElementById('bar-makan');
let valueMakan = round(document.getElementById('bar-makan').ariaValueNow,0);
var buttonmakan = document.querySelector("#button-makan");
var klikMakan = true

var increaseBelajar = 2;
var decreaseBelajar = 0;
let valueBelajar = round(document.getElementById('bar-belajar').ariaValueNow,0);
let widthBelajar = document.getElementById('bar-belajar');
var buttonbelajar = document.querySelector("#button-belajar");
var klikBelajar = true

var increaseMain = 0;
var decreaseMain = 0.4;
let widthMain = document.getElementById('bar-main');
let valueMain = round(document.getElementById('bar-main').ariaValueNow,0);
var buttonmain = document.querySelector("#button-main");
var klikMain = true

var increaseTidur = 0;
var decreaseTidur = 0.5;
let widthTidur = document.getElementById('bar-tidur');
let valueTidur = round(document.getElementById('bar-tidur').ariaValueNow,0);
var buttontidur = document.querySelector("#button-tidur");
var klikTidur = true


var avatar = localStorage.getItem("avatar");
var avatarTemp = avatar;
var avatarPlace = document.getElementById("avatar");
var avatarMakan = avatarTemp+"-Makan" + ".png"; 
var avatarMain = avatarTemp+"-Game" + ".png";
var avatarTidur = avatarTemp+"-Tidur" + ".png";
var avatarBelajar = avatarTemp+"-Belajar" + ".png";
var body = document.querySelector("body");

function ambilNama(){
    localStorage.setItem("avatar", document.querySelector(".carousel-item.active").querySelector("img").getAttribute("src"));
    localStorage.setItem("nama", document.getElementById("nama").value);
}

buttonmakan.addEventListener("click", function() {
    klikTidur = true;
    klikMain = true;
    klikBelajar = true;
    if(klikMakan) {
        avatarTemp = avatarMakan;
        buttonmakan.style.backgroundColor = "#EE9F16";
        buttonbelajar.style.backgroundColor = "#E9D8A6";
        buttontidur.style.backgroundColor = "#E9D8A6";
        buttonmain.style.backgroundColor = "#E9D8A6";
        buttonType= "bar-makan";
    }else{
        avatarTemp = avatar;
        buttonmakan.style.backgroundColor = "#E9D8A6";
        buttonType= "";
    }
    klikMakan = !klikMakan;
  });
  
buttonbelajar.addEventListener("click", function() {
    klikTidur = true;
    klikMain = true;
    klikMakan = true;
    if(klikBelajar) {
        avatarTemp = avatarBelajar;
        buttonmakan.style.backgroundColor = "#E9D8A6";
        buttonbelajar.style.backgroundColor = "#EE9F16";
        buttontidur.style.backgroundColor = "#E9D8A6";
        buttonmain.style.backgroundColor = "#E9D8A6";
        buttonType= "bar-belajar";
    }else{
        avatarTemp = avatar;
        buttonbelajar.style.backgroundColor = "#E9D8A6";
        buttonType= "";
    }
    klikBelajar = !klikBelajar;
  });
  
buttonmain.addEventListener("click", function() {
    klikTidur = true;
    klikBelajar = true;
    klikMakan = true;
    if(klikMain) {
        avatarTemp = avatarMain;
        buttonmakan.style.backgroundColor = "#E9D8A6";
        buttonbelajar.style.backgroundColor = "#E9D8A6";
        buttontidur.style.backgroundColor = "#E9D8A6";
        buttonmain.style.backgroundColor = "#EE9F16";
        buttonType= "bar-main";
    }else{
        avatarTemp = avatar;
        buttonmain.style.backgroundColor = "#E9D8A6";
        buttonType= "";
    }
    klikMain = !klikMain;
    });

buttontidur.addEventListener("click", function() {
    klikMakan = true;
    klikMain = true;
    klikBelajar = true;
    if(klikTidur) {
        avatarTemp = avatarTidur;
        buttonmakan.style.backgroundColor = "#E9D8A6";
        buttonbelajar.style.backgroundColor = "#E9D8A6";
        buttontidur.style.backgroundColor = "#EE9F16";
        buttonmain.style.backgroundColor = "#E9D8A6";
        buttonType= "bar-tidur";
    }else{
        buttontidur.style.backgroundColor = "#E9D8A6";
        avatarTemp = avatar;
        buttonType= "";
    }
    klikTidur = !klikTidur;
    });
      
    function nameValue() {
        localStorage.setItem("avatar", document.querySelector(".carousel-item.active").querySelector("img").getAttribute("src"));
        var name=document.getElementById("nama").value;
        localStorage.setItem("textvalue",name);
        return false; 
    }
    document.getElementById("result").innerHTML=localStorage.getItem("textvalue");


const Time = setInterval(gameTime,1000);
function gameTime() {
    let salam = "";
    let waktu = new Date();
    let detik = waktu.getSeconds();
  
    if (detik < 10) {
        detik = "0" + detik;
    }
    if (detik == 59) {
        jam ++;
        jamTemp++;
    }
    if (jam > 23) {
        jam = 0;
    }
    document.getElementById("waktu").innerHTML = jam + ":" + detik;
  
    if (jam >= 6 && jam <= 11) {
        salam = "Good Morning";
              body.style.backgroundImage = "url('./foto/bgpagi.png')";
    }else if (jam >= 12 && jam <= 15) {
        salam = "Good Afternoon"; 
              body.style.backgroundImage = "url('./foto/bgsiang.png')";
    }else if (jam >= 16 && jam <= 18) {
        salam = "Good Evening";
              body.style.backgroundImage = "url('./foto/bgmalam.png')";
    }else if (jam >= 19 && jam <= 24) {
        salam = "Good Night";
              body.style.backgroundImage = "url('./foto/bggelap.png')";
    }else if (jam >= 1 && jam <= 5) {
        salam = "Good Night";
              body.style.backgroundImage = "url('./foto/bggelap.png')";
    }
    document.getElementById("mengucapSalam").innerHTML = salam;
   
    avatarPlace.src = avatarTemp;
    
    if(valueBelajar >= 100){
        semester = semester + 1;
        document.getElementById("semestersekarang").innerHTML = semester;
        valueBelajar = 0;
        widthBelajar.style.width=valueBelajar;
    }
    if(semester == 8){
        alert("SELAMAT ANDA LULUS!");
        window.location.href='avatar.html';
    }

    if (buttonType == "") {
      decreaseMakan = 1.5;
      decreaseTidur = 0.2;
      decreaseMain = 0.4;

      if (valueMakan >= 20 ) {
          decreaseMain = 0.2;
      }
      else if (valueMakan < 20) {
          decreaseMain = 0.6;
      }
      if (valueMakan <= 0) {
          valueMakan = 0;
          widthMakan.style.width = valueMakan+"%"; 
      }else{
          valueMakan = valueMakan - decreaseMakan;
          widthMakan.style.width = valueMakan+"%";    
      }
      if (valueTidur <= 0) {
          valueTidur = 0;
          widthTidur.style.width = valueTidur+"%";
      }else{
          valueTidur = valueTidur - decreaseTidur;
          widthTidur.style.width = valueTidur+"%";
      }
      if (valueMain <= 0) {
          valueMain = 0;
          widthMain.style.width = valueMain+"%";
      }else{
          valueMain = valueMain - decreaseMain;
          widthMain.style.width = valueMain+"%";
      }


    }else if (buttonType == "bar-makan") {
      decreaseMakan = 0.6;
      decreaseTidur = 0.1;
      decreaseMain = 0.4;
      increaseMakan = 9;
      
      valueMakan = valueMakan + increaseMakan;
      widthMakan.style.width = valueMakan+"%";

      valueTidur = valueTidur - decreaseTidur;
      widthTidur.style.width = valueTidur+"%";

      if (valueMakan > 99) {
          valueMain = valueMain + 2;
          widthMain.style.width = valueMain + "%";

          valueTidur = valueTidur - 2;
          widthTidur.style.width = valueTidur + "%";
          avatarTemp = avatar;
          buttonType = "";
      }
    }else if (buttonType == "bar-belajar") {
        decreaseMakan = 0.6;
        decreaseTidur = 0.2;
        decreaseMain = 0.3;

        if (valueMain > 90) {
            increaseBelajar = 2;
        }
        else if(valueMain < 20){
            increaseBelajar = 0.2;
        }
        else if (valueMain < 10) {
            increaseBelajar = 0.1;
        }
        else if (valueMakan < 20) {
            increaseBelajar = 0.1;
        }
        else if (valueTidur < 20) {
            increaseBelajar = 0.1;
        }
        else{
            increaseBelajar = 1.5
        }
        
        if (valueMakan <= 0) {
            valueMakan = 0;
            widthMakan.style.width = valueMakan+"%"; 
        }else{
            valueMakan = valueMakan - decreaseMakan;
            widthMakan.style.width = valueMakan+"%";    
        }
        if (valueTidur <= 0) {
            valueTidur = 0;
            widthTidur.style.width = valueTidur+"%";
        }else{
            valueTidur = valueTidur - decreaseTidur;
            widthTidur.style.width = valueTidur+"%";
        }
        if (valueMain <= 0) {
            valueMain = 0;
            widthMain.style.width = valueMain+"%";
        }else{
            valueMain = valueMain - decreaseMain;
            widthMain.style.width = valueMain+"%";
        }
        
        hoursTemp = 0;
        valueBelajar = valueBelajar + increaseBelajar;
        widthBelajar.style.width = valueBelajar+"%";

    }else if (buttonType == "bar-main") {
      decreaseMakan = 0.6;
      decreaseTidur = 0.2;
      decreaseMain = 0.4;
      increaseMain = 2;

      if (valueMakan <= 0) {
          valueMakan = 0;
          widthMakan.style.width = valueMakan+"%"; 
      }else{
          valueMakan = valueMakan - decreaseMakan;
          widthMakan.style.width = valueMakan+"%";    
      }
      if (valueTidur <= 0) {
          valueTidur = 0;
          widthTidur.style.width = valueTidur+"%";
      }else{
          valueTidur = valueTidur - decreaseTidur;
          widthTidur.style.width = valueTidur+"%";
      }
      
      valueMain = valueMain + increaseMain;
      widthMain.style.width = valueMain+"%"; 

      if (valueMain > 99) {
          avatarTemp = avatar;
          buttonType = "";
      }
    }else if (buttonType == "bar-tidur") {
      decreaseMakan = 0.6;
      decreaseTidur = 0.2;
      decreaseMain = 0.4;
      increaseTidur = 2;

      if (valueMakan <= 0) {
          valueMakan = 0;
          widthMakan.style.width = valueMakan+"%"; 
      }else{
          valueMakan = valueMakan - decreaseMakan;
          widthMakan.style.width = valueMakan+"%";    
      }
      if (valueMain <= 0) {
          valueMain = 0;
          widthMain.style.width = valueMain+"%";
      }else{
          valueMain = valueMain - decreaseMain;
          widthMain.style.width = valueMain+"%";
      }

      valueTidur = valueTidur + increaseTidur;
      widthTidur.style.width = valueTidur+"%";

      if (valueTidur > 99) {
          avatarTemp = avatar;
          buttonType = "";
      }
    }

    if(valueMakan < 4){
        alert("ANDA MATI KELAPARAN!");
        window.location.href='avatar.html';
    }else if(valueTidur < 4){
        alert("ANDA MATI KELELAHAN!");
        window.location.href='avatar.html';
    }else if(valueMain < 4){
        alert("ANDA MATI KARENA DEPRESI!");
        window.location.href='avatar.html';
    }
    
    if(jam == 18 && valueBelajar == 30){
        alert("KAMU KENA DO!");
        window.location.href='avatar.html';
    }
}

console.log(avatar);