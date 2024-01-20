let numeroSecreto = 0;
let intentos = 0;
let listasNumerosSorteados = [];
let numeroMaximo = 10;
console.log(numeroSecreto);

function asignarTextoElemeto(elemento, texto){
  let elementoHtml = document.querySelector(elemento);
  elementoHtml.innerHTML = texto;
  return;
}

function verificarIntento(){
  let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);


  if(numeroDeUsuario === numeroSecreto){
    asignarTextoElemeto('p', `Acertaste el número en ${intentos} ${(intentos ===1) ? 'vez':'veces'}`)
    document.getElementById('reiniciar').removeAttribute('disabled');
  }else{
    // El usuario no acerto
    if (numeroDeUsuario > numeroSecreto){
      asignarTextoElemeto('p','El número secreto es menor')
    } else{
      
      asignarTextoElemeto('p','El número secreto es mayor')
    }
    intentos ++;
    limpiarCaja()
  }
  return;
}

function limpiarCaja() {
  document.getElementById("valorUsuario").value="";
}

function generarNumeroSecreto(){

  let numeroGenerado = Math.floor(Math.random() * numeroMaximo)+1;
    console.log(numeroGenerado);
    console.log(listasNumerosSorteados);

    if(listasNumerosSorteados.length == numeroMaximo){
      asignarTextoElemeto('p','Ya se sortearon todos los números posibles')
    } else {
      if (listasNumerosSorteados.includes(numeroGenerado)){
        return generarNumeroSecreto();
      }else{
        listasNumerosSorteados.push(numeroGenerado); 
        return numeroGenerado
      }
    }
  }
  


function condicionesIniciales (){
  asignarTextoElemeto('h1', 'Juego del número secreto!');
  asignarTextoElemeto('p', `Indica un número del 1 al ${numeroMaximo}`);
  numeroSecreto = generarNumeroSecreto();
  intentos = 1;
}

function reiniciarJuego (){
  // Limpiera la caja
    limpiarCaja();
  // Indicar mensaje de numeros
  // generar el numero aleatorio
  // Inicializar el numero de intentos
    condicionesIniciales()
  // desahabilitar el boton de nuevo juego
    document.getElementById('reiniciar').setAttribute('disabled','true');
}


condicionesIniciales();
