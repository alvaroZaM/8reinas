contador = 0;
function cellCick(celda){

      if (window.getComputedStyle(celda).backgroundImage=="none") {

          if (contador < 8) {

              celda.style =`background-image:url(./img/queen.png);
                              background-size:50px; 
                              background-repeat:no-repeat;
                              background-position:center;
                           `;
              
              document.getElementById("contador").innerHTML=`Contador: ${++contador}`;
              
          }
            

      } else {
          celda.style ="background-image:none";
          document.getElementById("contador").innerHTML=`Contador: ${--contador}`;
      }
  }

  //r = renglon  c= columna
 function cambiar(r,c){
     var celda = document.getElementById("tablero");  
     var r1 = r, c1 = c, r2 = r, c2 = c;
     var r3 = r, c3 = c, r4 = r, c4 = c;

     for (let i = 0; i < 8; i++) {
        celda.rows[r].cells[i].style.backgroundColor = "#ff0000";
        celda.rows[i].cells[c].style.backgroundColor = "#ff0000";

        if (r1 < 8  && c1 < 8) {
            celda.rows[r1++].cells[c1++].style.backgroundColor = "#ff0000";
        }

        if (r3> -1  && c3 < 8) {
            celda.rows[r3--].cells[c3++].style.backgroundColor = "#ff0000";
        }

        if (r2 >= 0  && c2 > -1) {    // Diagonal izquierda arriba
            celda.rows[r2--].cells[c2--].style.backgroundColor = "#ff0000";
        }

        if (r4 < 8 && c4 >-1  ) {
            celda.rows[r4++].cells[c4--].style.backgroundColor = "#ff0000";
        }

     }
  }

function limpiar() {
    var celdas = document.getElementsByTagName("td");

    for (let i = 0; i < celdas.length; i++) {
       
        celdas[i].style.backgroundColor = "";
        
        
    }
}
//contain no repeat center

var estilo = `background-image:url(./img/queen.png);
                              background-size:50px; 
                              background-repeat:no-repeat;
                              background-position:center;
                           `;


function limpiarTablero() {
    var celda = document.getElementById("tablero").getElementsByTagName("td");

    for (let i = 0; i < celda.length; i++) {
        celda[i].style ="background-image:none;"
        
    }
}


function solucionUno() {

    limpiarTablero();
    var celda  = document.getElementById("tablero");

    

    // celda.rows[0].cells[0].style=`background-image:url(./img/queen.png);
    //                           background-size:50px; 
    //                           background-repeat:no-repeat;
    //                           background-position:center;
    //                        `; //"background-image:url(./img/queen.png);background-size:50px;background-repeat:no-repeat;background-position:center;";
    
    celda.rows[0].cells[3].style= estilo;
    celda.rows[1].cells[5].style= estilo;
    celda.rows[2].cells[7].style= estilo;
    celda.rows[3].cells[2].style= estilo;
    celda.rows[4].cells[0].style= estilo;
    celda.rows[5].cells[6].style= estilo;
    celda.rows[6].cells[4].style= estilo;
    celda.rows[7].cells[1].style= estilo;

}


function solucionDos() {
    var celda  = document.getElementById("tablero");
    limpiarTablero();


    celda.rows[0].cells[3].style= estilo;
    celda.rows[1].cells[0].style= estilo;
    celda.rows[2].cells[4].style= estilo;
    celda.rows[3].cells[7].style= estilo;
    celda.rows[4].cells[5].style= estilo;
    celda.rows[5].cells[2].style= estilo;
    celda.rows[6].cells[6].style= estilo;
    celda.rows[7].cells[1].style= estilo;

}

function solucionTres() {
    var celda  = document.getElementById("tablero");
    limpiarTablero();


    celda.rows[0].cells[5].style= estilo;
    celda.rows[1].cells[1].style= estilo;
    celda.rows[2].cells[6].style= estilo;
    celda.rows[3].cells[0].style= estilo;
    celda.rows[4].cells[3].style= estilo;
    celda.rows[5].cells[7].style= estilo;
    celda.rows[6].cells[4].style= estilo;
    celda.rows[7].cells[2].style= estilo;

}


function cargarSoluciones() {
    var solucion = document.getElementById("soluciones").value;
    switch (solucion) {
        case "1":
            solucionUno();
            break;
        case "2":
            solucionDos();
            break;
        case "3":
            solucionTres();
            break;
        default:
            limpiarTablero();
            break;
    }
}
