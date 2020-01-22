function gestoreRotate(){
      nodoFotoCart1.style.transform = "rotate(270deg)";
      nodoFotoCart1.style.marginTop = "40%";
      nodoFotoCart1.style.height = "100%"
      return;
}



function gestoreClickRetro(){
  if(nodoFotoCart1.src=="file:///C:/Users/rizla/Desktop/Esame-Codifica-Dei-Testi/cartoline/7694-019F1.jpg"){
    nodoFotoCart1.setAttribute("src", img[1]);
    nodocartolina1InfoRetro.style.display='block';
    nodocartolina1InfoFronte.style.display='none';

    return;
    }
  if(nodoFotoCart1.src=="file:///C:/Users/rizla/Desktop/Esame-Codifica-Dei-Testi/cartoline/7694-019R1.jpg"){
    nodoFotoCart1.setAttribute("src", img[0]);
    nodocartolina1InfoRetro.style.display='none';
    nodocartolina1InfoFronte.style.display='block';
    return;
  }
}
function gestoreClickRetro2(){
  if(nodoFotoCart2.src=="file:///C:/Users/rizla/Desktop/Esame-Codifica-Dei-Testi/cartoline/7694-071F.jpg"){
    nodoFotoCart2.setAttribute("src", img2[1]);
    nodocartolina2InfoRetro.style.display='block';
    nodocartolina2InfoFronte.style.display='none';
    return;
    }
  if(nodoFotoCart2.src=="file:///C:/Users/rizla/Desktop/Esame-Codifica-Dei-Testi/cartoline/7694-071R.jpg"){
    nodoFotoCart2.setAttribute("src", img2[0]);
    nodocartolina2InfoRetro.style.display='none';
    nodocartolina2InfoFronte.style.display='block';
    return;
  }
}
function gestoreClickRetro3(){
  if(nodoFotoCart3.src=="file:///C:/Users/rizla/Desktop/Esame-Codifica-Dei-Testi/cartoline/7694-083F.jpg"){
    nodoFotoCart3.setAttribute("src", img3[1]);
    nodocartolina3InfoRetro.style.display='block';
    nodocartolina3InfoFronte.style.display='none';
    return;
    }
  if(nodoFotoCart3.src=="file:///C:/Users/rizla/Desktop/Esame-Codifica-Dei-Testi/cartoline/7694-083R.jpg"){
    nodoFotoCart3.setAttribute("src", img3[0]);
    nodocartolina3InfoRetro.style.display='none';
    nodocartolina3InfoFronte.style.display='block';
    return;
  }
}



var nodoretro;
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

var nodoRuota;


function gestoreLoad(){
    try {
        nodoretro = document.getElementById("retro");
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

        nodoRuota = document.getElementById("Ruota");

        nodoretro.onclick = gestoreClickRetro;
        nodoretro2.onclick = gestoreClickRetro2;
        nodoretro3.onclick = gestoreClickRetro3;

        nodoRuota.onclick = gestoreRotate;
    } catch (e) {
        alert("gestoreLoad "+ e)
    }
}

window.onload=gestoreLoad;
