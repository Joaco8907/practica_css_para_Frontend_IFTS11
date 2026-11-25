const div = document.getElementById("contenedor")
const boton = document.getElementById("crear")

boton.addEventListener("click", () => {
    if(div.children.length === 0){
        div.innerHTML = "<h2>Mouse</h2>" + "<p>Precio: $500</p>"
    }  
})


// const div = document.getElementById("contenedor");
// const boton = document.getElementById("crear");

// boton.addEventListener("click", () => {
    
//     if(div.children.length === 0){
//         let h2 = document.createElement("h2");
//         h2.textContent = "Mouse";
//         div.appendChild(h2);
        
//         let p = document.createElement("p");
//         p.textContent = "Precio: $500";
//         div.appendChild(p);
//     }
        
// });

