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
sistemaSolar.push(new Planeta("Mercurio", 2.8));
sistemaSolar.push(new Planeta("Venus", 8.9));
sistemaSolar.push(new Planeta("Tierra", 9.81));
sistemaSolar.push(new Planeta("Marte", 3.71));
sistemaSolar.push(new Planeta("Jupiter", 22.9));
sistemaSolar.push(new Planeta("Saturno", 9.1));
sistemaSolar.push(new Planeta("Urano", 7.8));
sistemaSolar.push(new Planeta("Neptuno", 11.0));

var pesoUsuario,
    pesoFinal;
var gTierra = 9.81;
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
      pesoFinal = Math.round(pesoFinal);
      console.log(pesoFinal + "kg en " + w.nombre);
      resultado.innerHTML += '<div class="planetario__item"><span class="planetario__item--nombre">' + w.nombre + '</span><span class="planetario__item--peso">' + pesoFinal + ' Kg</span></div>';
    }
  }

  estado = 1;
}

function limpia(){
  while(resultado.firstChild){
    resultado.removeChild(resultado.firstChild);
  }
}