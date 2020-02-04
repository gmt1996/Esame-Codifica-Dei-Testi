
function gestoreClickcart19(){
  if(this.id=='cart19'){
    nodoprimaCartolina.style.display='block';
    nodosecondaCartolina.style.display='none';
    nodoterzaCartolina.style.display='none';
  }
  if(this.id=='cart071'){
    nodosecondaCartolina.style.display='block';
    nodoterzaCartolina.style.display='none';
    nodoprimaCartolina.style.display='none';
  }
  if(this.id=='cart083'){
    nodoterzaCartolina.style.display='block';
    nodoprimaCartolina.style.display='none';
    nodosecondaCartolina.style.display='none';
  }
}


function gestoreClickRetro(){
      nodoFronte1.style.display='none';
      nodoRetro1.style.display='block';
      nodocartolina1InfoFronte.style.display='none';
      nodocartolina1InfoRetro.style.display='block';
    }
function gestoreClickFronte(){
      nodoFronte1.style.display='block';
      nodoRetro1.style.display='none';
      nodocartolina1InfoFronte.style.display='block';
      nodocartolina1InfoRetro.style.display='none';
      }

function gestoreClickRetro2(){
      nodoFrontec2.style.display='none';
      nodoRetroc2.style.display='block';
      nodocartolina2InfoFronte.style.display='none';
      nodocartolina2InfoRetro.style.display='block';
    }
function gestoreClickFronte2(){
      nodoFrontec2.style.display='block';
      nodoRetroc2.style.display='none';
      nodocartolina2InfoFronte.style.display='block';
      nodocartolina2InfoRetro.style.display='none';
        }
function gestoreClickRetro3(){
      nodoFrontec3.style.display='none';
      nodoRetroc3.style.display='block';
      nodocartolina3InfoFronte.style.display='none';
      nodocartolina3InfoRetro.style.display='block';
}
function gestoreClickFronte3(){
      nodoFrontec3.style.display='block';
      nodoRetroc3.style.display='none';
      nodocartolina3InfoFronte.style.display='block';
      nodocartolina3InfoRetro.style.display='none';
        }

var nodocart19;
var nodocart071;
var nodocart083;
var nodofirstcontainer;
var nodoprimaCartolina;
var nodosecondaCartolina;
var nodoterzaCartolina;



var nodoFronte1;
var nodoRetro1;
var nodoFrontec2;
var nodoRetroc2;
var nodoFrontec3;
var nodoRetroc3;


var nodoretro;
var nodofronte;
var nodofronte2;
var nodofronte3;
var img = ["cartoline/7694-019F1.jpg","cartoline/7694-019R1.jpg"]
var nodoFotoCart1;
var nodoretro2;
var img2 = ["cartoline/7694-071F.jpg","cartoline/7694-071R.jpg"]
var nodoFotoCart2;
var nodoretro3;
var img3 = ["cartoline/7694-083F.jpg","cartoline/7694-083R.jpg"]
var nodoFotoCart3;



var nodocartolina1InfoRetro;
var nodocartolina1InfoFronte;
var nodocartolina2InfoRetro;
var nodocartolina2InfoFronte;
var nodocartolina3InfoRetro;
var nodocartolina3InfoFronte;




function gestoreLoad(){
    try {
        nodoretro = document.getElementById("retro");
        nodofronte = document.getElementById("fronte");
        nodofronte2 = document.getElementById("fronte2");
        nodofronte3 = document.getElementById("fronte3");
        nodoFotoCart1 = document.getElementById("fotoCart1");
        nodoretro2 = document.getElementById("retro2");
        nodoFotoCart2 = document.getElementById("fotoCart2");
        nodoretro3 = document.getElementById("retro3");
        nodoFotoCart3 = document.getElementById("fotoCart3");
        nodocartolina1InfoRetro = document.getElementById("cartolina1InfoRetro");
        nodocartolina1InfoFronte = document.getElementById("cartolina1InfoFronte");
        nodocartolina2InfoRetro = document.getElementById("cartolina2InfoRetro");
        nodocartolina2InfoFronte = document.getElementById("cartolina2InfoFronte");
        nodocartolina3InfoRetro = document.getElementById("cartolina3InfoRetro");
        nodocartolina3InfoFronte = document.getElementById("cartolina3InfoFronte");


        nodoFronte1 = document.getElementById("fronte1");
        nodoRetro1 = document.getElementById("retro1");
        nodoRetroc2 = document.getElementById("retroc2");
        nodoFrontec2 = document.getElementById("frontec2");
        nodoFrontec3 = document.getElementById("frontec3");
        nodoRetroc3 = document.getElementById("retroc3");

        nodocart19 = document.getElementById("cart19");
        nodocart071 = document.getElementById("cart071");
        nodocart083 = document.getElementById("cart083");
        nodofirstcontainer = document.getElementById("firstcontainer");
        nodoprimaCartolina = document.getElementById("primaCartolina");
        nodosecondaCartolina = document.getElementById("secondaCartolina");
        nodoterzaCartolina = document.getElementById("terzaCartolina");


        nodoretro.onclick = gestoreClickRetro;
        nodofronte.onclick = gestoreClickFronte;
        nodoretro2.onclick = gestoreClickRetro2;
        nodofronte2.onclick = gestoreClickFronte2;
        nodoretro3.onclick = gestoreClickRetro3;
        nodofronte3.onclick = gestoreClickFronte3;

        nodocart19.onclick = gestoreClickcart19;
        nodocart071.onclick = gestoreClickcart19;
        nodocart083.onclick = gestoreClickcart19;




    } catch (e) {
        alert("gestoreLoad "+ e)
    }
}

window.onload=gestoreLoad;
var blueHighlight = 'background: #FF4136; color: #fff; fill: #0074D9; stroke: #0074D9;'

function test(item){
    if(item.id=='retro13'){
      $(p1c1).css("color", "red");
    }
    if(item.id=='retro14'){
      $(p2c1).css("color", "red");
    }
    if(item.id=='retro15'){
      $(p3c1).css("color", "red");
    }
    if(item.id=='retro12'){
      $(p4c1).css("color", "red");
    }
    if(item.id=='retro16'){
      $(p5c1).css("color", "red");
    }
    if(item.id=='retro17'){
      $(p6c1).css("color", "red");
    }
    if(item.id=='retro18'){
      $(p7c1).css("color", "red");
    }
    if(item.id=='retro19'){
      $(p8c1).css("color", "red");
    }
    if(item.id=='retro11'){
      $(catc1).css("color", "red");
    }
    if(item.id=='retro110'){
      $(stamp1c1).css("color", "red");
    }
    if(item.id=='retro111'){
      $(stamp2c1).css("color", "red");
    }
    if(item.id=='retro112'){
      $(stamp3c1).css("color", "red");
    }
    if(item.id=='retro22'){
      $(op1c2).css("color", "red");
    }
    if(item.id=='retro23'){
      $(p1c2).css("color", "red");
    }
    if(item.id=='retro24'){
      $(p2c2).css("color", "red");
    }
    if(item.id=='retro25'){
      $(p3c2).css("color", "red");
    }
    if(item.id=='retro21'){
      $(catc2).css("color", "red");
    }
    if(item.id=='retro26'){
      $(stamp1c2).css("color", "red");
    }
    if(item.id=='retro27'){
      $(stamp2c2).css("color", "red");
    }
    if(item.id=='retro32'){
      $(op1c3).css("color", "red");
    }
    if(item.id=='retro33'){
      $(p1c3).css("color", "red");
    }
    if(item.id=='retro34'){
      $(p2c3).css("color", "red");
    }
    if(item.id=='retro35'){
      $(p3c3).css("color", "red");
    }
    if(item.id=='retro36'){
      $(p4c3).css("color", "red");
    }
    if(item.id=='retro37'){
      $(p5c3).css("color", "red");
    }
    if(item.id=='retro38'){
      $(p6c3).css("color", "red");
    }
    if(item.id=='retro39'){
      $(p7c3).css("color", "red");
    }
    if(item.id=='retro310'){
      $(p8c3).css("color", "red");
    }
    if(item.id=='retro311'){
      $(stamp1c3).css("color", "red");
    }
    if(item.id=='retro312'){
      $(stamp3c3).css("color", "red");
    }
    if(item.id=='retro313'){
      $(stamp2c3).css("color", "red");
    }
    if(item.id=='retro314'){
      $(stamp4c3).css("color", "red");
    }
    if(item.id=='retro315'){
      $(stamp5c3).css("color", "red");
    }
    if(item.id=='retro31'){
      $(catc3).css("color", "red");
    }
    $(item).css("fill", "rgb(255,65,54)");
    $(item).css("background", "red");
    $(item).css("stroke", "red");
    $(item).css("color", "red");
    $(item).css("opacity", "0.5");

}
function testout(item){
    if(item.id=='retro13'){
      $(p1c1).css("color", "black");
    }
    if(item.id=='retro14'){
      $(p2c1).css("color", "black");
    }
    if(item.id=='retro15'){
      $(p3c1).css("color", "black");
    }
    if(item.id=='retro12'){
      $(p4c1).css("color", "black");
    }
    if(item.id=='retro16'){
      $(p5c1).css("color", "black");
    }
    if(item.id=='retro17'){
      $(p6c1).css("color", "black");
    }
    if(item.id=='retro18'){
      $(p7c1).css("color", "black");
    }
    if(item.id=='retro19'){
      $(p8c1).css("color", "black");
    }
    if(item.id=='retro11'){
      $(catc1).css("color", "black");
    }
    if(item.id=='retro110'){
      $(stamp1c1).css("color", "black");
    }
    if(item.id=='retro111'){
      $(stamp2c1).css("color", "black");
    }
    if(item.id=='retro112'){
      $(stamp3c1).css("color", "black");
    }
    if(item.id=='retro22'){
      $(op1c2).css("color", "black");
    }
    if(item.id=='retro23'){
      $(p1c2).css("color", "black");
    }
    if(item.id=='retro24'){
      $(p2c2).css("color", "black");
    }
    if(item.id=='retro25'){
      $(p3c2).css("color", "black");
    }
    if(item.id=='retro21'){
      $(catc2).css("color", "black");
    }
    if(item.id=='retro26'){
      $(stamp1c2).css("color", "black");
    }
    if(item.id=='retro27'){
      $(stamp2c2).css("color", "black");
    }
    if(item.id=='retro32'){
      $(op1c3).css("color", "black");
    }
    if(item.id=='retro33'){
      $(p1c3).css("color", "black");
    }
    if(item.id=='retro34'){
      $(p2c3).css("color", "black");
    }
    if(item.id=='retro35'){
      $(p3c3).css("color", "black");
    }
    if(item.id=='retro36'){
      $(p4c3).css("color", "black");
    }
    if(item.id=='retro37'){
      $(p5c3).css("color", "black");
    }
    if(item.id=='retro38'){
      $(p6c3).css("color", "black");
    }
    if(item.id=='retro39'){
      $(p7c3).css("color", "black");
    }
    if(item.id=='retro310'){
      $(p8c3).css("color", "black");
    }
    if(item.id=='retro311'){
      $(stamp1c3).css("color", "black");
    }
    if(item.id=='retro312'){
      $(stamp3c3).css("color", "black");
    }
    if(item.id=='retro313'){
      $(stamp2c3).css("color", "black");
    }
    if(item.id=='retro314'){
      $(stamp4c3).css("color", "black");
    }
    if(item.id=='retro315'){
      $(stamp5c3).css("color", "black");
    }
    if(item.id=='retro31'){
      $(catc3).css("color", "black");
    }
    $(item).css("fill", "transparent");
    $(item).css("background", "inherit");
    $(item).css("stroke", "transparent");
    $(item).css("color", "inherit");
    $(item).css("opacity", "1");

}
