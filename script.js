var pendientes = [
    { descripcion: "Tarea de Agenda JS", completado: false },
    { descripcion: "Comer", completado: false },
    { descripcion: "Dormir", completado: false },
    { descripcion: "Cortarse el pelo", completado: false }
];

function imprimirPendientes(pendientes, index) {
    var lista = document.getElementById("lista");
    lista.insertAdjacentHTML('beforeend',
        `<li ` + estaCompletado(pendientes.completado) + ` onClick="marcarCompletado(` + index + `)">
        <div class="checkbox">
            <i class="fa fa-check"></i>
        </div>
        <div class="descripcion">`+ pendientes.descripcion + `</div>
        <i class= "fa fa-times" onClick="eliminarPendiente(`+ index +`)"></i> 
    </li>`);
} //con index es para mandar a llamar todo el indice y ver cuantos tiene
function estaCompletado(completado) {
    if (completado) {
        return 'class="done pendientes"';
    } else {
        return 'class="pendientes"';
    }
}
function marcarCompletado(index) {
    pendientes[index].completado = !pendientes[index].completado;
    imprimirTodosLosPendientes();
}

function imprimirTodosLosPendientes() {
    document.getElementById("lista").innerHTML = "";
    pendientes.forEach(imprimirPendientes);
}


function agregarPendiente(){
    var pendiente = document.getElementById("item").value; //value es solo para mandar a llmar el valor que esta dento del espacio
    pendientes.push({descripcion: pendiente , completado: false }) //push solo toma un elemento
    //push es un arreglo de objetos 
    imprimirTodosLosPendientes();
}
imprimirTodosLosPendientes();