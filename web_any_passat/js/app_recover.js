const productos = [
    { nombre: "Andreu", precio: 10 },
    { nombre: "Jaume", precio: 12 },
    { nombre: "prova3", precio: 12 },
];
let comprar = null;
let seleccion = null;

let carrito = []
if(comprar == "yes"){
    let seleccion = prompt("hola desea comprar algun producto si o no")
    while(seleccion != "si" && seleccion != "no"){
        alert("Porfavor ingresa si o no")
        seleccion = prompt("hola desea comprar algo si o no")
    }

}
console.log("Prova");
// Selecciona cada botón por su ID
const boton1 = document.getElementById("afegir-compra-item1");
const boton2 = document.getElementById("afegir-compra-item2");

// Agrega eventos click a cada botón
boton1.addEventListener("click", () => {
  agregarProductoAlCarrito("Andreu");
  let seleccion = "si";
  console.log("Andreu afegit a la cistella");
  const total = carrito.reduce((acc, el) => acc + el.precio * el.unidades, 0)
  console.log("el total a pagar por su compra es: " + total)
});
boton2.addEventListener("click", () => {
  agregarProductoAlCarrito("Jaume");
  let seleccion = "si";
  console.log("Jaume afegit a la cistella")
  const total = carrito.reduce((acc, el) => acc + el.precio * el.unidades, 0)
  console.log("el total a pagar por su compra es: " + total)
});
// Agrega eventos click a los botones restantes de manera similar


if(seleccion == "si"){
    alert("A continuacion nuestra lista de productos")
    let todoslosProductos = productos.map(
        (producto) => producto.nombre + " " + producto.precio + "€");
        alert(todoslosProductos.join(" - "))
} else if (seleccion == "no"){
    alert("Bueno grasias por venir hasta pronto shulo")
}

while(seleccion != "no"){
    let producto = "no"
let precio = 0

function agregarProductoAlCarrito(producto) {
  let precio = 0;
  // Encuentra el precio del producto correspondiente
  switch (producto) {
    case "Andreu":
      precio = 10;
      break;
    case "Jaume":
      precio = 12;
      break;
    case "prova3":
      precio = 12;
      break;
    default:
      break;
    
  }
  let unidades = 1;
  

  
  // Agrega el producto al carrito
  carrito.push({ nombre: producto, unidades, precio });
  console.log(carrito);
}


    if(producto == "Andreu" || producto == "Jaume" || producto == "prova3"){
        switch(producto) {
            case "Andreu":
                precio = 10;
                break;
            case "Jaume":
                precio = 12;
                break;
            case "prova3":
                precio = 12;
                break;
            default:
                break;   
        }
        let unidades = parseInt(prompt("cuantas unidades boludo?"))
        carrito.push({producto, unidades , precio})
        console.log(carrito)
    } else {
        
    }

    seleccion = "no"
    while(seleccion == "no"){
        carrito.forEach((carritoFinal) => {
            console.log("producto: " + carritoFinal.producto + " Unidades: " + carritoFinal.unidades + " Total a pagar: " + carritoFinal.unidades * carritoFinal.precio)
        })
        break;
    }
}

const total = carrito.reduce((acc, el) => acc + el.precio * el.unidades, 0)
console.log("el total a pagar por su compra es: " + total)



document.querySelectorAll('.product-item').forEach(item => {
    item.classList.remove('active');
});

// Seleccionar el elemento con la categoría correspondiente al botón que se ha hecho clic
const productItem = document.querySelector(`.product-item[category="${category}"]`);
// Agregar la clase "active" al elemento seleccionado
productItem.classList.add('active');