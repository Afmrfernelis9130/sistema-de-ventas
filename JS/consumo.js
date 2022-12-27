let contenido = document.getElementById("contenido")
let bebidas = document.getElementById("bebidas")
let cantidad = document.getElementById("cantidad")
let agregar = document.getElementById("agregar")
let ol = document.createElement("ol");
let arElement = [];
let p={};

// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Object/assign

console.log()

agregar.addEventListener("click", (e) => {
    e.preventDefault()
    agredarArry();

// lista()

})

function agredarArry() {

    let valor1 = bebidas.value
    let valor2 = cantidad.value
    arElement.push({bebida:valor1, cantidad:valor2});


    // console.log(arElement)

    arElement.forEach((e) => {

        let contenido1 = document.createElement("li");
        let textContenido1 = document.createTextNode(e.bebida);
        contenido1.appendChild(textContenido1);

        let contenido2 = document.createElement("li");
        let textContenido2 = document.createTextNode(e.cantidad);
        contenido2.appendChild(textContenido2);

        ol.appendChild(contenido1);
        ol.appendChild(contenido2);

        contenido.append(ol);


    })


}


function lista() {
    //  let contenido1 = document.createElement("li");
    //  let textContenido1 =document.createTextNode(bebidas.value);
    //  contenido1.appendChild(textContenido1);
    //
    //  let contenido2 = document.createElement("li");
    //  let textContenido2 = document.createTextNode(cantidad.value);
    //  contenido2.appendChild(textContenido2);
    //
    //  ol.appendChild(contenido1);
    //  ol.appendChild(contenido2);
    //
    // contenido.append(ol);
}