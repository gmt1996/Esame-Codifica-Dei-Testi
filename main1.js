

function gestoreClickRetro(){
  if(nodoFotoCart1.src=="file:///C:/Users/rizla/Desktop/Esame-Codifica-Dei-Testi/cartoline/7694-019F1.jpg"){
    nodoFotoCart1.setAttribute("src", img[1]);
    return;
    }
  if(nodoFotoCart1.src=="file:///C:/Users/rizla/Desktop/Esame-Codifica-Dei-Testi/cartoline/7694-019R1.jpg"){
    nodoFotoCart1.setAttribute("src", img[0]);
    return;
  }
}
function gestoreClickRetro2(){
  if(nodoFotoCart2.src=="file:///C:/Users/rizla/Desktop/Esame-Codifica-Dei-Testi/cartoline/7694-071F.jpg"){
    nodoFotoCart2.setAttribute("src", img2[1]);
    return;
    }
  if(nodoFotoCart2.src=="file:///C:/Users/rizla/Desktop/Esame-Codifica-Dei-Testi/cartoline/7694-071R.jpg"){
    nodoFotoCart2.setAttribute("src", img2[0]);
    return;
  }
}
function gestoreClickRetro3(){
  if(nodoFotoCart3.src=="file:///C:/Users/rizla/Desktop/Esame-Codifica-Dei-Testi/cartoline/7694-083F.jpg"){
    nodoFotoCart3.setAttribute("src", img3[1]);
    return;
    }
  if(nodoFotoCart3.src=="file:///C:/Users/rizla/Desktop/Esame-Codifica-Dei-Testi/cartoline/7694-083R.jpg"){
    nodoFotoCart3.setAttribute("src", img3[0]);
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
function gestoreLoad(){
    try {
        nodoretro = document.getElementById("retro");
        nodoFotoCart1 = document.getElementById("fotoCart1");
        nodoretro2 = document.getElementById("retro2");
        nodoFotoCart2 = document.getElementById("fotoCart2");
        nodoretro3 = document.getElementById("retro3");
        nodoFotoCart3 = document.getElementById("fotoCart3");

        nodoretro.onclick = gestoreClickRetro;
        nodoretro2.onclick = gestoreClickRetro2;
        nodoretro3.onclick = gestoreClickRetro3;
    } catch (e) {
        alert("gestoreLoad "+ e)
    }
}

window.onload=gestoreLoad;
