let waktu = new Date();
let jam = 6;
let jamTemp = 0;

var i = 0;
function makan() {
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("bar-makan");
    var width = 50;
    var id = setInterval(frame, 1000);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
      }
    }
  }
}
function belajar() {
    if (i == 0) {
      i = 1;
      var elem = document.getElementById("bar-belajar");
      var width = 10;
      var id = setInterval(frame, 1000);
      function frame() {
        if (width >= 100) {
          clearInterval(id);
          i = 0;
        } else {
          width++;
          elem.style.width = width + "%";
        }
      }
    }
}
function main() {
    if (i == 0) {
      i = 1;
      var elem = document.getElementById("bar-main");
      var width = 10;
      var id = setInterval(frame, 10);
      function frame() {
        if (width >= 100) {
          clearInterval(id);
          i = 0;
        } else {
          width++;
          elem.style.width = width + "%";
        }
      }
    }
}
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
        salam = "Selamat Pagi";            
    }else if (jam >= 12 && jam <= 15){
        salam = "Selamat Siang"; 
    }else if (jam >= 16 && jam <= 18){
        salam = "Selamat Sore";
    }else if (jam >= 19 && jam <= 24){
        salam = "Selamat Malam";
    }else if (jam >= 1 && jam <= 5){
        salam = "Selamat Malam";
    }
    document.getElementById("mengucapSalam").innerHTML = salam;
   

}
