let nombre ;
let cuotaTres ;
let cuotaSeis ;
let cuotaDoce ;
let sueldo ;
let maxCredito ;
let credito ;
let montoCuotas ;
let cantCuotas ;
let arregloContenedor ;
let opcion ;
let terminar ;
let montoFiltrado ;
let filtrados ;
let busqueda ;
let result ;

// clases 

class Credito {
    constructor(nombre,sueldo,monto,cuotas,valorCuota){
        this.nombre=nombre;
        this.sueldo=sueldo;
        this.monto=monto;
        this.cuotas=cuotas;
        this.valorCuota=valorCuota;
    }
    verInfo(){
        console.log(`el nombre es : ${this.nombre} y el credito solicitado es : ${this.monto} en ${this.cuotas} cuotas de ${this.valorCuotas}`);

    }
}
function comprobarNombre(){
    let nombreAux = prompt(`escriba el nombre`);
    while (!isNaN(nombreAux)){
        alert(`esta escribiendo numeros escriba un nombre `)
        nombreAux =(prompt(`escriba el nombre`))
    }
    return nombreAux;
}

function comprobarNumero(texto){
    let numero = prompt(`escriba en numero : `+texto);
    while (isNaN(numero)){
        alert(`esta escribiendo un texto ,escriba un numero`);
        numero =(prompt(`escriba en numero : `+texto));
    }
    return numero
}

function comprobarCreditoMenoraMax (maxCredito){
    alert(`cual es el monto que desea sacar ?`);
    let creditoAux = comprobarNumero(`el monto a sacar`);
    creditoAux=parseInt(creditoAux);
    while (creditoAux > maxCredito){
        alert(`usted no puede sacar mas credito de lo permitido `);
        alert(`el credito maximo que usted puede sacar es de `+ maxCredito);
        creditoAux = comprobarNumero(`el monto a sacar`);
        creditoAux =parseInt(creditoAux);
    }
    return creditoAux;
}

function afectacionMensualPermitida(sueldo,credito){
    if ((sueld *0.2)>=(credito/3)){
        cuotaTres =true;
    }
    if ((sueld *0.2)>=(credito/6)){
        cuotaSeis =true;
    }
    if ((sueld *0.2)>=(credito/12)){
        cuotasDoce =true;
    }
}
function cantidadCuotasPermitida (cuotaTres,cuotaSeis,cuotaDoce,credito){
    let eleccion;
    let correcto;
    if((cuotaTres==true) && (cuotaSeis==true) && (cuotasDoce==true)) {
        correcto=true;
       while (correcto){
        alert(`usted lo puede realizar en 3 , 6 y 12 cuotas`);
        eleccion = comprobarNumero(`de cuotas`);
        eleccion = parseInt(eleccion);
        switch (eleccion){
            case 3:
            alert(`son 3 cuotas de `+(credito/3));
            correcto=false;
            break;
            case 6:
                alert(`son 6 cuotas de `+(credito/6));
                correcto=false;
                break;
                case 12:
                    alert(`son 12 cuotas de `+(credito/12));
                    correcto=false;
                    breack;
                    default:
                        alert(`no esta ingresando 3, 6 o 12`);
                        breack;
        }
       }
    }
    else if ((cuotaTres == false) && (cuotaSeis == true) && (cuotaDoce == true) ){
        correcto = true;
        while (correcto){
            alert(`usted lo puede realizar en 6 y 12 cuotas elija en cuantas cuotas lo quiere realizar`);
            eleccion = comprobarNumero(`de cuotas`);
            eleccion = parseInt(eleccion);
            switch (eleccion){
                case 6:
                    alert(`son 6 cuotas de `+(credito/6));
                    correcto=false;
                    break;
                    case 12:
                        alert(`son 12 cuotas de `+(credito/12));
                        correcto=false;
                        breack;
                        default:
                            alert(`no esta ingresando 6 , o 12`);
                            break;
            }
        }
    }
    else if ((cuotaTres == false) && (cuotaSeis == false) && (cuotaDoce == true)){
        eleccion=12;
        alert(`usted lo puede realizar en 12 cuotas`);
        alert( `son 12 cuotas de `+(credito/12));

    }
    return eleccion;
}
/*programa principal*/

terminar =true;
arregloContenedor=[];
while (terminar){
    alert(`elija una opcion : `);
    opcion = comprobarNumero("-1 cargar credito (hasta que el nombre sea Finalizar), -2 borrar creditos ,-3 buscar un credito ,-4 mostrar todos los creditos ,-5 filtrar creditos por monto sacado ,-6 terminar");
    switch (opcion){
        case "1":
            nombre =``;
            while (nombre !="finalizar") {
                alert( `nuevo credito`);
                nombre = comprobarNombre ();
                if (nombre !=`Finalizar`){
                    alert(`escriba el sueldo que gana mensualmente`);
                    sueldo = comprobarNumero(`el sueldo`);
                    sueldo = parseInt(sueldo);
                    maxCredito = sueldo * 2;
                    alert(`el credito maximo que usted puede solicitar es de `+ maxCredito);
                    cuotaTres = false;
                    cuotaSeis = false;
                    cuotaDoce = false;
                    credito= comprobarCreditoMenoraMax (maxCredito);
                    afectacionMensualPermitida(sueldo,credito);
                    cantCuotas = cantidadCuotasPermitida(cuotaTres,cuotaSeis,cuotaDoce,credito);
                    montoCuotas=credito/cantCuotas;
                    arregloContenedor.push(new Credito(nombre,sueldo,credito,cantCuotas,montoCuotas));

                }
            }
            break;
            case "2":
                alert("Escriba un nombre para borrar el credito");
                nombre =comprobarNombre();
                result = arregloContenedor.findIndex(item => item.nombre === nombre);
                if (result ===-1){
                    alert("no se encuentra el credito a Borrar ");

                }
                else{
                    arregloContenedor.splice(result,1);
                    alert("se borro correctamente");
                }
                break;
                case "3":
                    alert("escriba un nombre para buscar el credito");
                    nombre = comprobarNombre();
                    console.log("======mostrar credito buscado =====")
                    busqueda = arregloContenedor.find(item => item.nombre === nombre);
                    if(busqueda===undefinded){
                        alert("no se encuentra el credito a buscar");

                    }
                else{
                    busqueda.verInfo();
                };
                break;
                case "4":
                    console.log("=====================mostrar contenido arreglo=================");
                    arregloContenedor.forEach((Element)=>{
                        Element.verInfo();
                    });
                    break;
                    case "5":
                        alert("escriba un monto para filtrar en la busqueda");
                        montoFiltrado = comprobarNumero("monto a filtrar");
                        console.log("==========================mostrar contenido arreglo filtrado======================");
                        filtrados = arregloContenedor.filter(item => item.monto > montoFiltrado);
                        filtrados.forEach((Element)=>{
                            Element.verInfo();

                        })

       break;
       case "6":
       terminar=false;
         break;
}

}