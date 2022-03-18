let waktu = new Date();
let jam = 11;
let jamTemp = 0;
let buttonType = "";

// kurang / d n
var kurangMakan = 0.4;
var kurangTidur = 0.2;
var kurangMain = 0.2;
var kurangBelajar = 0;
// tambah / d n
var tambahMakan = 0;
var tambahTidur = 0;
var tambahMain = 0;
var tambahBelajar = 0.4;
var round = Math.round;
// kumpulan variabel untuk digunakan pada function
let widthMakan = document.getElementById('bar-makan');
let valueMakan = round(document.getElementById('bar-makan').ariaValueNow,0);
let widthBelajar = document.getElementById('bar-belajar');
let valueBelajar = round(document.getElementById('bar-belajar').ariaValueNow,0);
let widthMain = document.getElementById('bar-main');
let valueMain = round(document.getElementById('bar-main').ariaValueNow,0);
let widthTidur = document.getElementById('bar-tidur');
let valueTidur = round(document.getElementById('bar-tidur').ariaValueNow,0);

var buttonmakan = document.querySelector("#button-makan");
var buttonbelajar = document.querySelector("#button-belajar");
var buttonmain = document.querySelector("#button-main");
var buttontidur = document.querySelector("#button-tidur");

var isClickedMakan = true
var isClickedTidur = true
var isClickedMain = true
var isClickedBelajar = true

buttonmakan.addEventListener("click", function() {
    isClickedTidur = true;
    isClickedMain = true;
    isClickedBelajar = true;
    if(isClickedMakan) {
        buttonmakan.style.backgroundColor = "#EE9F16";
        buttonbelajar.style.backgroundColor = "#FFFFFF";
        buttontidur.style.backgroundColor = "#FFFFFF";
        buttonmain.style.backgroundColor = "#FFFFFF";
        buttonType= "bar-makan";
    }else{
        buttonmakan.style.backgroundColor = "#FFFFFF";
        buttonType= "";
    }
    isClickedMakan = !isClickedMakan;
});

buttontidur.addEventListener("click", function() {
    isClickedMakan = true;
    isClickedMain = true;
    isClickedBelajar = true;
    if(isClickedTidur) {
        buttonmakan.style.backgroundColor = "#FFFFFF";
        buttonbelajar.style.backgroundColor = "#FFFFFF";
        buttontidur.style.backgroundColor = "#EE9F16";
        buttonmain.style.backgroundColor = "#FFFFFF";
        buttonType= "bar-tidur";
    }else{
        buttontidur.style.backgroundColor = "#FFFFFF";
        buttonType= "";
    }
    isClickedTidur = !isClickedTidur;
    });

buttonmain.addEventListener("click", function() {
        isClickedTidur = true;
        isClickedBelajar = true;
        isClickedMakan = true;
        if(isClickedMain) {
            buttonmakan.style.backgroundColor = "#FFFFFF";
            buttonbelajar.style.backgroundColor = "#FFFFFF";
            buttontidur.style.backgroundColor = "#FFFFFF";
            buttonmain.style.backgroundColor = "#EE9F16";
            buttonType= "bar-main";
        }else{
            buttonmain.style.backgroundColor = "#FFFFFF";
            buttonType= "";
        }
        isClickedMain = !isClickedMain;
    });
    
buttonbelajar.addEventListener("click", function() {
        isClickedTidur = true;
        isClickedMain = true;
        isClickedMakan = true;
        if(isClickedBelajar) {
            buttonmakan.style.backgroundColor = "#FFFFFF";
            buttonbelajar.style.backgroundColor = "#EE9F16";
            buttontidur.style.backgroundColor = "#FFFFFF";
            buttonmain.style.backgroundColor = "#FFFFFF";
            buttonType= "bar-belajar";
        }else{
            buttonbelajar.style.backgroundColor = "#FFFFFF";
            buttonType= "";
        }
        isClickedBelajar = !isClickedBelajar;
});

function nameValue() {
  var name=document.getElementById("nama").value;
  localStorage.setItem("textvalue",name);
  return false; 
}
  document.getElementById("result").innerHTML=localStorage.getItem("textvalue");

const Time = setInterval(gameTime,1000);
function gameTime(){
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

    if (jam >= 6 && jam <= 11){
        salam = "Good Morning";            
    }else if (jam >= 12 && jam <= 15){
        salam = "Good Afternoon"; 
    }else if (jam >= 16 && jam <= 18){
        salam = "Good Evening";
    }else if (jam >= 19 && jam <= 24){
        salam = "Good Night";
    }else if (jam >= 1 && jam <= 5){
        salam = "Good Night";
    }
    document.getElementById("mengucapSalam").innerHTML = salam;
   
    if (buttonType == "") {
      // redeclare variable
      kurangMakan = 0.4;
      kurangTidur = 0.2;
      kurangMain = 0.2;

      if (valueMakan >= 20 ) {
          kurangMain = 0.2;
      }
      else if (valueMakan < 20) {
          kurangMain = 0.4;
      }
      if (valueMakan <= 0) {
          valueMakan = 0;
          widthMakan.style.width = valueMakan+"%"; 
      }else{
          valueMakan = valueMakan - kurangMakan;
          widthMakan.style.width = valueMakan+"%";    
      }
      if (valueTidur <= 0) {
          valueTidur = 0;
          widthTidur.style.width = valueTidur+"%";
      }else{
          valueTidur = valueTidur - kurangTidur;
          widthTidur.style.width = valueTidur+"%";
      }
      if (valueMain <= 0) {
          valueMain = 0;
          widthMain.style.width = valueMain+"%";
      }else{
          valueMain = valueMain - kurangMain;
          widthMain.style.width = valueMain+"%";
      }

  }else if (buttonType == "bar-makan") {
      // finish
      kurangMakan = 0.4;
      kurangTidur = 0.2;
      kurangMain = 0.2;

      tambahMain = 3;
      tambahMakan = 10;
      valueMakan = valueMakan + tambahMakan;
      widthMakan.style.width = valueMakan+"%";

      valueMain = valueMain + tambahMain;
      widthMain.style.width = valueMain+"%";

      valueTidur = valueTidur - kurangTidur;
      widthTidur.style.width = valueTidur+"%";
      console.log(valueMakan);
      if (valueMakan > 99) {
          valueMain = valueMain + 2;
          widthMain.style.width = valueMain + "%";

          valueTidur = valueTidur - 2;
          widthTidur.style.width = valueTidur + "%";
          buttonType = "";
      }
  }else if (buttonType == "bar-tidur") {
      kurangMakan = 0.4;
      kurangTidur = 0.1;
      kurangMain = 0.2;
      tambahTidur = 1;

      if (valueMakan <= 0) {
          valueMakan = 0;
          widthMakan.style.width = valueMakan+"%"; 
      }else{
          valueMakan = valueMakan - kurangMakan;
          widthMakan.style.width = valueMakan+"%";    
      }
      if (valueMain <= 0) {
          valueMain = 0;
          widthMain.style.width = valueMain+"%";
      }else{
          valueMain = valueMain - kurangMain;
          widthMain.style.width = valueMain+"%";
      }

      valueTidur = valueTidur + tambahTidur;
      widthTidur.style.width = valueTidur+"%";

      if (valueTidur > 99) {
          buttonType = "";
      }

  }else if (buttonType == "bar-main") {
      kurangMakan = 0.4;
      kurangTidur = 0.2;
      kurangMain = 0.2;
      tambahMain = 0.8;

      if (valueMakan <= 0) {
          valueMakan = 0;
          widthMakan.style.width = valueMakan+"%"; 
      }else{
          valueMakan = valueMakan - kurangMakan;
          widthMakan.style.width = valueMakan+"%";    
      }
      if (valueTidur <= 0) {
          valueTidur = 0;
          widthTidur.style.width = valueTidur+"%";
      }else{
          valueTidur = valueTidur - kurangTidur;
          widthTidur.style.width = valueTidur+"%";
      }
      
      valueMain = valueMain + tambahMain;
      widthMain.style.width = valueMain+"%"; 

      if (valueMain > 99) {
          buttonType = "";
      }
  }else if (buttonType == "bar-belajar") {
      // finish
      kurangMakan = 0.6;
      kurangTidur = 0.2;
      kurangMain = 0.3;

      if (valueMain > 90) {
          tambahBelajar = 0.5;
      }
      else if(valueMain < 20){
          tambahBelajar = 0.2;
      }
      else if (valueMain < 10) {
          tambahBelajar = 0.1;
      }
      else if (valueMakan < 20) {
          tambahBelajar = 0.1;
      }
      else if (valueTidur < 20) {
          tambahBelajar = 0.1;
      }
      else{
          tambahBelajar = 0.4;
      }
      // klau sudah 0 akan stop
      if (valueMakan <= 0) {
          valueMakan = 0;
          widthMakan.style.width = valueMakan+"%"; 
      }else{
          valueMakan = valueMakan - kurangMakan;
          widthMakan.style.width = valueMakan+"%";    
      }
      if (valueTidur <= 0) {
          valueTidur = 0;
          widthTidur.style.width = valueTidur+"%";
      }else{
          valueTidur = valueTidur - kurangTidur;
          widthTidur.style.width = valueTidur+"%";
      }
      if (valueMain <= 0) {
          valueMain = 0;
          widthMain.style.width = valueMain+"%";
      }else{
          valueMain = valueMain - kurangMain;
          widthMain.style.width = valueMain+"%";
      }
      
      hoursTemp = 0;
      valueBelajar = valueBelajar + tambahBelajar;
      widthBelajar.style.width = valueBelajar+"%";
  }
}

