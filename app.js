const wheelInput1 = document.querySelector('[name="wheel-input-1"]');
const wheelInput2 = document.querySelector('[name="wheel-input-2"]');
const wheelInput3 = document.querySelector('[name="wheel-input-3"]');
const wheelInput4 = document.querySelector('[name="wheel-input-4"]');
const wheelInput5 = document.querySelector('[name="wheel-input-5"]');
const wheelInput6 = document.querySelector('[name="wheel-input-6"]');

const tableInput1 = document.querySelector('[name="table-input-1"]');
const tableInput2 = document.querySelector('[name="table-input-2"]');
const tableInput3 = document.querySelector('[name="table-input-3"]');
const tableInput4 = document.querySelector('[name="table-input-4"]');
const tableInput5 = document.querySelector('[name="table-input-5"]');
const tableInput6 = document.querySelector('[name="table-input-6"]');
const tableInput7 = document.querySelector('[name="table-input-7"]');

const tracksInput1 = document.querySelector('[name="tracks-input-1"]');
const tracksInput2 = document.querySelector('[name="tracks-input-2"]');
const tracksInput3 = document.querySelector('[name="tracks-input-3"]');
const tracksInput4 = document.querySelector('[name="tracks-input-4"]');
const tracksInput5 = document.querySelector('[name="tracks-input-5"]');
const tracksInput6 = document.querySelector('[name="tracks-input-6"]');
const tracksInput7 = document.querySelector('[name="tracks-input-7"]');

const bearingsInput1 = document.querySelector('[name="bearings-input-1"]');
const bearingsInput2 = document.querySelector('[name="bearings-input-2"]');
const bearingsInput3 = document.querySelector('[name="bearings-input-3"]');
const bearingsInput4 = document.querySelector('[name="bearings-input-4"]');
const bearingsInput5 = document.querySelector('[name="bearings-input-5"]');
const bearingsInput6 = document.querySelector('[name="bearings-input-6"]');

const input = document.querySelectorAll('[type="button"]');
const carrito = document.querySelector('#carrito');
const productCard = document.querySelector('#desplegable');
const windows = document.querySelector(".windows");
const mas = document.querySelectorAll('[value="+"]');


let contadorWheels1 = 0;
let contadorWheels2 = 0;
let contadorWheels3 = 0;
let contadorWheels4 = 0;
let contadorWheels5 = 0;
let contadorWheels6 = 0;

let contadorTables1 = 0;
let contadorTables2 = 0;
let contadorTables3 = 0;
let contadorTables4 = 0;
let contadorTables5 = 0;
let contadorTables6 = 0;
let contadorTables7 = 0;

let contadorTracks1 = 0;
let contadorTracks2 = 0;
let contadorTracks3 = 0;
let contadorTracks4 = 0;
let contadorTracks5 = 0;
let contadorTracks6 = 0;
let contadorTracks7 = 0;

let contadorBearings1 = 0;
let contadorBearings2 = 0;
let contadorBearings3 = 0;
let contadorBearings4 = 0;
let contadorBearings5 = 0;
let contadorBearings6 = 0;


let cantidadProductos = 0;
let card = [];

function sumados(item) {
  
    if (item === wheelInput1) {
      wheelInput1.addEventListener('click', () => {
        contadorWheels1++
        if(desplegable.classList.contains("windows")){
          a = `<div class="mini">
            <div>
              <img src="./Wheels/Ruedas-Caracol-Talavera-Negro1.jpg" alt="Ruedas-caracol-talavera-negro">
              <p>
                <strong>$20</strong> | cantidad :${contadorWheels1}
                <div class="input-flex">
                  <input type="button" class="inputWheels" value="+" name="wheel-input-1">
                  <input type="button" class="inputWheels" value="-" name="wheel-input-1-negative">
                </div>
              </p>
            </div> 
            <h3>Ruedas Caracol Talavera Negro</h3>
            </div>`
           
          productCard.innerHTML = a
        }
      });

    }

    if (item === wheelInput2) {
      wheelInput2.addEventListener('click', () => {
        contadorWheels2++
        if(desplegable.classList.contains("windows")){
          a = `<div class="mini">
            <div>
              <img src="./Wheels/Ruedas-Caracol-Talavera-Rojo.jpg" alt="Ruedas-caracol-talavera-negro">
              <p>
                <strong>$20</strong> | cantidad :${contadorWheels2}
                <div class="input-flex">
                  <input type="button" class="inputWheels" value="+" name="wheel-input-1">
                  <input type="button" class="inputWheels" value="-" name="wheel-input-1-negative">
                </div>
              </p>
            </div> 
            <h3>Ruedas Caracol Talavera Rojo</h3>
            </div>`

          productCard.innerHTML = a
        }
      });
    }

    if (item === wheelInput3) {
      wheelInput3.addEventListener('click', () => {
        contadorWheels3++
          if (desplegable.classList.contains("windows")){
            a = `<div class="mini">
                <div>
                  <img src="./Wheels/Ruedas-Copal-Verde1.jpg" alt="Ruedas-caracol-talavera-negro">
                  <p>
                    <strong>$30</strong> | cantidad :${contadorWheels3}
                    <div class="input-flex">
                      <input type="button" class="inputWheels" value="+" name="wheel-input-1">
                      <input type="button" class="inputWheels" value="-" name="wheel-input-1-negative">
                    </div>
                  </p>
                </div> 
                <h3>Ruedas Copal Verde</h3>
              </div>`
            productCard.innerHTML = a
          }
      });
    }

    if (item === wheelInput4) {
      wheelInput4.addEventListener('click', () => {
        contadorWheels4++
        if (desplegable.classList.contains("windows")){
          a = `<div class="mini">
              <div>
                <img src="./Wheels/Ruedas-Rata-Wheels-Yellow-Head1.jpg" alt="Ruedas-rata-wheels-yellow-head1">
                <p>
                  <strong>$30</strong> | cantidad :${contadorWheels4}
                  <div class="input-flex">
                    <input type="button" class="inputWheels" value="+" name="wheel-input-1">
                    <input type="button" class="inputWheels" value="-" name="wheel-input-1-negative">
                  </div>
                </p>
              </div> 
              <h3>Ruedas Rata Wheels Yellow Head</h3>
            </div>`
          productCard.innerHTML = a
        }
      });
    }

    if (item === wheelInput5) {
      wheelInput5.addEventListener('click', () => {
        contadorWheels5++
        a = `<div class="mini">
        <div>
          <img src="./Wheels/Ruedas-Spitfire-Formula-4-Classic-55mm-99A1.jpg" alt="Ruedas Spitfire Formula 4 Classic 55mm">
          <p>
            <strong>$30</strong> | cantidad :${contadorWheels5}
            <div class="input-flex">
              <input type="button" class="inputWheels" value="+" name="wheel-input-1">
              <input type="button" class="inputWheels" value="-" name="wheel-input-1-negative">
            </div>
          </p>
        </div> 
        <h3>Ruedas Spitfire Formula 4 Classic 55mm</h3>
      </div>`
      });
    }

    if (item === wheelInput6) {
      wheelInput6.addEventListener('click', () => {
        contadorWheels6++
          a = `<div class="mini">
          <div>
            <img src="./Wheels/Ruedas-Spitfire-Formula-4-Conical-56mm-99A1.jpg" alt="Ruedas Spitfire Formula 4 Conical 56mm">
            <p>
              <strong>$30</strong> | cantidad :${contadorWheels5}
              <div class="input-flex">
                <input type="button" class="inputWheels" value="+" name="wheel-input-1">
                <input type="button" class="inputWheels" value="-" name="wheel-input-1-negative">
              </div>
            </p>
          </div> 
          <h3>Ruedas Spitfire Formula 4 Conical 56mm</h3>
        </div>`
      });
    }

    

    if (item === tableInput1) {
      tableInput1.addEventListener('click', () => {
        contadorTables1++
      });
    }

    if (item === tableInput2) {
      tableInput2.addEventListener('click', () => {
        contadorTables2++
      });
    }

    if (item === tableInput3) {
      tableInput3.addEventListener('click', () => {
        contadorTables3++
      });
    }

    if (item === tableInput4) {
      tableInput4.addEventListener('click', () => {
        contadorTables4++
      });
    }

    if (item === tableInput5) {
      tableInput5.addEventListener('click', () => {
        contadorTables5++
      });
    }

    if (item === tableInput6) {
      tableInput6.addEventListener('click', () => {
        contadorTables6++
      });
    }

    if (item === tableInput7) {
      tableInput7.addEventListener('click', () => {
        contadorTables7++
      });
    }



    if (item === tracksInput1) {
      tracksInput1.addEventListener('click', () => {
        contadorTracks1++
      });
    }

    if (item === tracksInput2) {
      tracksInput2.addEventListener('click', () => {
        contadorTracks2++
      });
    }

    if (item === tracksInput3) {
      tracksInput3.addEventListener('click', () => {
        contadorTracks3++
      });
    }

    if (item === tracksInput4) {
      tracksInput4.addEventListener('click', () => {
        contadorTracks4++
      });
    }

    if (item === tracksInput5) {
      tracksInput5.addEventListener('click', () => {
        contadorTracks5++
      });
    }

    if (item === tracksInput6) {
      tracksInput6.addEventListener('click', () => {
        contadorTracks6++
      });
    }

    if (item === tracksInput7) {
      tracksInput7.addEventListener('click', () => {
        contadorTracks7++
      });
    }



    if (item === bearingsInput1) {
      bearingsInput1.addEventListener('click', () => {
        contadorBearings1++
      });
    }

    if (item === bearingsInput2) {
      bearingsInput2.addEventListener('click', () => {
        contadorBearings2++
      });
    }

    if (item === bearingsInput3) {
      bearingsInput3.addEventListener('click', () => {
        contadorBearings3++
      });
    }

    if (item === bearingsInput4) {
      bearingsInput4.addEventListener('click', () => {
        contadorBearings4++
      });
    }

    if (item === bearingsInput5) {
      bearingsInput5.addEventListener('click', () => {
        contadorBearings5++
      });
    }

    if (item === bearingsInput6) {
      bearingsInput6.addEventListener('click', () => {
        contadorBearings6++
      });
    }
}


input.forEach((element) => {
  element.addEventListener("click", () => {
    cantidadProductos++
  });
});


sumados(wheelInput1);
sumados(wheelInput2);
sumados(wheelInput3);
sumados(wheelInput4);
sumados(wheelInput5);
sumados(wheelInput6);

sumados(tableInput1);
sumados(tableInput2);
sumados(tableInput3);
sumados(tableInput4);
sumados(tableInput5);
sumados(tableInput6);
sumados(tableInput7);

sumados(tracksInput1);
sumados(tracksInput2);
sumados(tracksInput3);
sumados(tracksInput4);
sumados(tracksInput5);
sumados(tracksInput6);
sumados(tracksInput7);

sumados(bearingsInput1);
sumados(bearingsInput2);
sumados(bearingsInput3);
sumados(bearingsInput4);
sumados(bearingsInput5);
sumados(bearingsInput6);


carrito.addEventListener ("click", () => {

  if (!(productCard.classList.contains("windows"))) {
    productCard.classList.add("windows");
  }else {
    productCard.classList.remove("windows");
  }
});



// wheelInput1.addEventListener("click", (e)=>{

//   if(desplegable.classList.contains("windows")){
//     desplegable.innerHTML = `<div class="mini">
//       <div>
//         <img src="./Wheels/Ruedas-Caracol-Talavera-Negro1.jpg" alt="Ruedas-caracol-talavera-negro">
//         <p>
//           <strong>$20</strong> | cantidad :${contadorWheels1}
//           <div class="input-flex">
//             <input type="button" class="inputWheels" value="+" name="wheel-input-1">
//             <input type="button" class="inputWheels" value="-" name="wheel-input-1-negative">
//           </div>
//         </p>
//       </div> 
//       <h3>Ruedas Caracol Talavera Negro</h3>
//       </div>`
//   }
// })

// wheelInput2.addEventListener("click", (e)=>{

//   if(desplegable.classList.contains("windows")){
//     desplegable.innerHTML = `<div class="mini">
//       <div>
//         <img src="./Wheels/Ruedas-Caracol-Talavera-Rojo.jpg" alt="Ruedas-caracol-talavera-negro">
//         <p>
//           <strong>$20</strong> | cantidad :${contadorWheels2}
//           <div class="input-flex">
//             <input type="button" class="inputWheels" value="+" name="wheel-input-1">
//             <input type="button" class="inputWheels" value="-" name="wheel-input-1-negative">
//           </div>
//         </p>
//       </div> 
//       <h3>Ruedas Caracol Talavera Negro</h3>
//       </div>`
//   }
// })

wheelInput3.addEventListener("click", (e)=>{

  if(desplegable.classList.contains("windows")){
    desplegable.innerHTML = `<div class="mini">
      <div>
        <img src="./Wheels/Ruedas-Copal-Verde1.jpg" alt="Ruedas-caracol-talavera-negro">
        <p>
          <strong>$30</strong> | cantidad :${contadorWheels3}
          <div class="input-flex">
            <input type="button" class="inputWheels" value="+" name="wheel-input-1">
            <input type="button" class="inputWheels" value="-" name="wheel-input-1-negative">
          </div>
        </p>
      </div> 
      <h3>Ruedas Caracol Talavera Negro</h3>
      </div>`
  }
})

// const AllItems = [
//   {
//     price: "US$ 20",
//     id: 0,
//     name: "wheel",
//     stock: 10,
//     description: "Negro",
//     img: "../C:/Users/ASUS/Desktop/newProyect/Wheels/Ruedas-Caracol-Talavera-Negro1",
//   },
//   {
//     price: "US$ 20",
//     id: 1,
//     name: "wheel",
//     stock: 10,
//     description: "Rojo",
//     img: "../C:/Users/ASUS/Desktop/newProyect/Wheels/Ruedas-Caracol-Talavera-Rojo",
//   },
//   {
//     price: "US$ 25",
//     id: 2,
//     name: "wheel",
//     stock: 10,
//     description: "Verde",
//     img: "../C:/Users/ASUS/Desktop/newProyect/Wheels/Ruedas-Copal-Verde1",
//   },
//   {
//     price: "US$ 30",
//     id: 3,
//     name: "wheel",
//     stock: 10,
//     description: "Amarillo",
//     img: "../C:/Users/ASUS/Desktop/newProyect/Wheels/Ruedas-Rata-Wheels-Yellow-Head1",
//   },
//   {
//     price: "US$ 35",
//     id: 4,
//     name: "wheel",
//     stock: 10,
//     description: "Amarrillo-diseño",
//     img: "../C:/Users/ASUS/Desktop/newProyect/Wheels/Ruedas Spitfire Formula 4 Classic 55mm",
//   },
//   {
//     price: "US$ 35",
//     id: 5,
//     name: "wheel",
//     stock: 10,
//     description: "Amarrillo-negro",
//     img: "../C:/Users/ASUS/Desktop/newProyect/Wheels/Ruedas Spitfire Formula 4 Conical 56mm",
//   },
//   {
//     price: "US$ 75",
//     id: 6,
//     name: "Table",
//     stock: 10,
//     description: "Negro-rosado",
//     img: "../newProyect/tables/Tabla-Chula-Santa-Pereza1",
//   },
//   {
//     price: "US$ 65",
//     id: 7,
//     name: "Table",
//     stock: 10,
//     description: "Negro-purpura",
//     img: "../newProyect/tables/Tabla-Exodia-Morada1",
//   },
//   {
//     price: "US$ 60",
//     id: 8,
//     name: "Table",
//     stock: 10,
//     description: "Negro-rojo",
//     img: "../newProyect/tables/Tabla-Five-Aguila1",
//   },
//   {
//     price: "US$ 65",
//     id: 9,
//     name: "Table",
//     stock: 10,
//     description: "Negro-verde",
//     img: "../newProyect/tables/Tabla-Five-Modelo-Calaca1",
//   },
//   {
//     price: "US$ 75",
//     id: 10,
//     name: "Table",
//     stock: 10,
//     description: "Negro-blanco",
//     img: "../newProyect/tables/Tabla-Gambol-Skateboards-City1",
//   },
//   {
//     price: "US$ 75",
//     id: 11,
//     name: "Table",
//     stock: 10,
//     description: "Negro-pink2",
//     img: "../newProyect/tables/Tabla-Raw-Modelo-War1",
//   },
//   {
//     price: "US$ 70",
//     id: 12,
//     name: "Table",
//     stock: 10,
//     description: "tricolor",
//     img: "../newProyect/tables/Tabla-Tricolor-Modelo-Rata1",
//   },
//   {
//     price: "US$ 75",
//     id: 13,
//     name: "Tracks",
//     stock: 10,
//     description: "tricolor2",
//     img: "../newProyect/tracks/Trucks-Catrina-Azteca-Negro-Oro-149",
//   },  
//   {
//     price: "US$ 65",
//     id: 14,
//     name: "Tracks",
//     stock: 10,
//     description: "negro-azul",
//     img: "../newProyect/tracks/Trucks-Catrina-Azul-Blanco-149.jpg",
//   },
//   {
//     price: "US$ 60",
//     id: 15,
//     name: "Tracks",
//     stock: 10,
//     description: "negro-blanco2",
//     img: "../newProyect/tracks/Trucks-Catrina-Doble-Calavera",
//   },
//   {
//     price: "US$ 65",
//     id: 16,
//     name: "Tracks",
//     stock: 10,
//     description: "negro-rojo",
//     img: "../newProyect/tracks/Trucks-Catrina-Escarabajo1",
//   },
//   {
//     price: "US$ 75",
//     id: 17,
//     name: "Tracks",
//     stock: 10,
//     description: "plomo-rojo",
//     img: "../newProyect/tracks/Trucks-Catrina-Pajaros",
//   },
//   {
//     price: "US$ 75",
//     id: 18,
//     name: "Tracks",
//     stock: 10,
//     description: "verde-oscuro",
//     img: "../newProyect/tracks/Trucks-Catrina-Rey-Cannabis1",
//   },
//   {
//     price: "US$ 70",
//     id: 19,
//     name: "Tracks",
//     stock: 10,
//     description: "blanco",
//     img: "../newProyect/tracks/Trucks-Vulkan-Skull-Silver",
//   },
//   {
//     price: "US$ 75",
//     id: 20,
//     name: "Bearings",
//     stock: 10,
//     description: "plomo-verde",
//     img: "../newProyect/bearings/Baleros-Abec-9-ARRE!-Verdes",
//   },
//   {
//     price: "US$ 65",
//     id: 21,
//     name: "Bearings",
//     stock: 10,
//     description: "plomo",
//     img: "../newProyect/bearings/Baleros-Pig-Choice-blancos",
//   },
//   {
//     price: "US$ 60",
//     id: 22,
//     name: "Bearings",
//     stock: 10,
//     description: "verde-azul",
//     img: "../newProyect/bearings/Baleros-Pig-Modelo-Prime",
//   },
//   {
//     price: "US$ 65",
//     id: 23,
//     name: "Bearings",
//     stock: 10,
//     description: "rojo-claro",
//     img: "../newProyect/bearings/Baleros-Pig-Select-Rojo",
//   },
//   {
//     price: "US$ 75",
//     id: 24,
//     name: "Bearings",
//     stock: 10,
//     description: "rojo1",
//     img: "../newProyect/bearings/Baleros-Spitfire-Burners-Red1",
//   },
//   {
//     price: "US$ 75",
//     id: 25,
//     name: "Bearings",
//     stock: 10,
//     description: "rojo2",
//     img: "../newProyect/bearings/Baleros-Spitfire-Classic-Blue",
//   },
// ];

// let cart = [];

// document.addEventListener("click", (e) => {
//   mas.forEach((element) => {
//     if (e.target.name === element.name) {

//       let html = "";
//       let i; 
//       element.id = i;
//             html = `<div class="mini">
//                       <div>
//                         <img src=" ${AllItems[i].img}" alt="${AllItems[i].name}">
//                       </div>
//                       <div class="mini-brother">                
//                         <div>
//                             <p> ${AllItems[i].price}</p>                    
//                         </div> 
//                         <div>
//                             <p> <small>stock:  ${AllItems[i].stock}</small> </p>
//                         </div> 
//                         <div> 
//                           <p class="name"> ${AllItems[i].name}</p>
//                           <p> <small>Descripcion: ${AllItems[i].description}</small></p>        
//                         </div>
//                         <div  id='${AllItems[i].id}'>
//                           <button class="btn"> + </button>
//                         <div>
//                       </div>
//                     </div>`
//     }       
//       productCard.innerHTML = html
//   })
  
// })




// wheelInput1.addEventListener("click", (e)=>{

//     if(desplegable.classList.contains("windows")){
//       let agregado = desplegable.innerHTML = `<div class="mini">
//         <div>
//           <img src="./Wheels/Ruedas-Caracol-Talavera-Negro1.jpg" alt="Ruedas-caracol-talavera-negro">
//           <p>
//             <strong>$20</strong> | cantidad :${contadorWheels1}
//             <div class="input-flex">
//               <input type="button" class="inputWheels" value="+" name="wheel-input-1">
//               <input type="button" class="inputWheels" value="-" name="wheel-input-1-negative">
//             </div>
//           </p>
//         </div> 
//         <h3>Ruedas Caracol Talavera Negro</h3>
//         </div>`

//       desplegable.appendChild(agregado);
//     }
    
//     if (!(desplegable.classList.contains("windows"))){
//       desplegable.innerHTML = "";
//     }

// })

// wheelInput6.addEventListener("click", (e)=>{

//   let html = "";
//   for (let i = 0; i < 200; i++) {
//     html += `<div class="products">
//             <div class="product_img">
//                 <img src=" ${arrayProducts[i].img}" alt="${arrayProducts[i].name}">
//             </div>
//             <div class="product_info">                
//                 <div class="container-price">
//                     <p> ${arrayProducts[i].price}</p>                    
//                 </div> 
//                 <div class="container-stock">
//                     <p> <small>stock:  ${arrayProducts[i].stock}</small> </p>
//                 </div>  
//                 <p class="name"> ${arrayProducts[i].name}</p>
//                 <p> <small>Descripcion: ${arrayProducts[i].description}</small></p>        
//                 </div>
//                 <div class="product_action" id='${arrayProducts[i].id}'>
//                    <button class="btn"> + </button>
//                 </div>
//            </div>`;
//   } 
//     productCard.innerHTML = html;
// };
  
//   if (!(desplegable.classList.contains("windows"))){
//     desplegable.innerHTML = "";
//   }

// })












































































// function sumados(item) {
//   item.forEach((element) => {
//     if (item === wheelInput1) {
//       element.addEventListener('click', () => {
//         contadorWheels1++
//       });
//     }

//     if (item === wheelInput2) {
//       element.addEventListener('click', () => {
//         contadorWheels2++
//       });
//     }

//     if (item === wheelInput3) {
//       element.addEventListener('click', () => {
//         contadorWheels3++
//       });
//     }

//     if (item === wheelInput4) {
//       element.addEventListener('click', () => {
//         contadorWheels4++
//       });
//     }

//     if (item === wheelInput5) {
//       element.addEventListener('click', () => {
//         contadorWheels5++
//       });
//     }

//     if (item === wheelInput6) {
//       element.addEventListener('click', () => {
//         contadorWheels6++
//       });
//     }







//     if (item === tableInput1) {
//       element.addEventListener('click', () => {
//         contadorTables1++
//       });
//     }

//     if (item === tableInput2) {
//       element.addEventListener('click', () => {
//         contadorTables2++
//       });
//     }

//     if (item === tableInput3) {
//       element.addEventListener('click', () => {
//         contadorTables3++
//       });
//     }

//     if (item === tableInput4) {
//       element.addEventListener('click', () => {
//         contadorTables4++
//       });
//     }

//     if (item === tableInput5) {
//       element.addEventListener('click', () => {
//         contadorTables5++
//       });
//     }

//     if (item === tableInput6) {
//       element.addEventListener('click', () => {
//         contadorTables6++
//       });
//     }

//     if (item === tableInput7) {
//       element.addEventListener('click', () => {
//         contadorTables7++
//       });
//     }







//     if (item === tracksInput1) {
//       element.addEventListener('click', () => {
//         contadorTracks1++
//       });
//     }

//     if (item === tracksInput2) {
//       element.addEventListener('click', () => {
//         contadorTracks2++
//       });
//     }

//     if (item === tracksInput3) {
//       element.addEventListener('click', () => {
//         contadorTracks3++
//       });
//     }

//     if (item === tracksInput4) {
//       element.addEventListener('click', () => {
//         contadorTracks4++
//       });
//     }

//     if (item === tracksInput5) {
//       element.addEventListener('click', () => {
//         contadorTracks5++
//       });
//     }

//     if (item === tracksInput6) {
//       element.addEventListener('click', () => {
//         contadorTracks6++
//       });
//     }

//     if (item === tracksInput7) {
//       element.addEventListener('click', () => {
//         contadorTracks7++
//       });
//     }






//     if (item === bearingsInput1) {
//       element.addEventListener('click', () => {
//         contadorBearings1++
//       });
//     }

//     if (item === bearingsInput2) {
//       element.addEventListener('click', () => {
//         contadorBearings2++
//       });
//     }

//     if (item === bearingsInput3) {
//       element.addEventListener('click', () => {
//         contadorBearings3++
//       });
//     }

//     if (item === bearingsInput4) {
//       element.addEventListener('click', () => {
//         contadorBearings4++
//       });
//     }

//     if (item === bearingsInput5) {
//       element.addEventListener('click', () => {
//         contadorBearings5++
//       });
//     }

//     if (item === bearingsInput6) {
//       element.addEventListener('click', () => {
//         contadorBearings6++
//       });
//     }
//   });
// }









// const inputWheels = document.querySelectorAll('.inputWheels');
// const inputTables = document.querySelectorAll('.inputTables');
// const inputTracks = document.querySelectorAll('.inputTracks');
// const inputBearings = document.querySelectorAll('.inputBearings');
// const agregado = document.querySelectorAll('[value="+"]');
// const agregado1 = document.querySelectorAll('.mas');


// // let contadorWheels = 0;
// // let contadorTables = 0;
// // let contadorTracks = 0;
// // let contadorBearings = 0;


// function sumados(item) {
//   item.forEach((element) => {
//     if (item === inputWheels) {
//       element.addEventListener('click', () => {
//         contadorWheels++
//         console.log(contadorWheels);
//       });
//     }

//     if (item === inputTables) {
//       element.addEventListener('click', () => {
//         contadorTables++
//         console.log(contadorTables);
//       });
//     }

//     if (item === inputTracks) {
//       element.addEventListener('click', () => {
//         contadorTracks++
//         console.log(contadorTracks);
//       });
//     }

//     if (item === inputBearings) {
//       element.addEventListener('click', () => {
//         contadorBearings++
//         console.log(contadorBearings);
//       });
//     }
//   });
// }

// sumados(inputWheels);
// sumados(inputTables);
// sumados(inputTracks);
// sumados(inputBearings);


// input.forEach((element) => {
//   element.addEventListener('click', e => {
//     // if (e.target.value) 
//   });
// })

// ("click", (e)=>{
//   console.log(conectado);
// })