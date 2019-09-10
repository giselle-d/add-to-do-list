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
    </li>`);
}
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

function agregarTarea() {
    var nombre = document.getElementById("item").value;
    if (nombre === '') {
        alert("Debes escribir algo");
      } else {
        pendientes[pendientes.length] = { descripcion: nombre, completado: false }; 
      }
    document.getElementById("item").value = "";
    imprimirTodosLosPendientes();
} 

imprimirTodosLosPendientes();
