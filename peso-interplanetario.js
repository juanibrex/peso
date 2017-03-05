class Planeta{
  constructor(n, g){
    this.nombre = n;
    this.gravedad = g;
  }
}

var resultado = document.getElementById("js-resultado");
var boton = document.getElementById("js-boton");
boton.addEventListener("click", pesaje);

var sistemaSolar = [];
sistemaSolar.push(new Planeta("Tierra", 9.8));
sistemaSolar.push(new Planeta("Marte", 3.7));

var pesoUsuario = 80;
var gTierra = 9.8;
var peso;

function pesaje(){
  for(var w of sistemaSolar){
    if(pesoUsuario > 0){
      peso = pesoUsuario * w.gravedad / gTierra;
      console.log(peso + "kg en " + w.nombre);
      resultado.innerHTML += peso + "kg en " + w.nombre + "<br />";
    }
  }
}