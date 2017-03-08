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
sistemaSolar.push(new Planeta("Jupiter", 11.7));

var pesoUsuario,
    pesoFinal;
var gTierra = 9.8;
var estado = 0;

function pesaje(){
  var inputUsuario = document.getElementById("js-usuario");
  pesoUsuario = parseInt(inputUsuario.value);

  if(estado > 0){
      limpia();
  }

  for(var w of sistemaSolar){
    if(pesoUsuario > 0){
      pesoFinal = pesoUsuario * w.gravedad / gTierra;
      console.log(pesoFinal + "kg en " + w.nombre);
      resultado.innerHTML += "<p>" + pesoFinal + "kg en " + w.nombre + "</p>";
    }
  }

  estado = 1;
}

function limpia(){
  while(resultado.firstChild){
    resultado.removeChild(resultado.firstChild);
  }
}