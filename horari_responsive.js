const dias = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes'];

const asignaturasPorDia = {
    'Lunes': [
        { nombre: 'Asignatura 1', hora: '9:00 AM' },
        { nombre: 'Asignatura 2', hora: '11:00 AM' }
    ],
    'Martes': [
        { nombre: 'Asignatura A', hora: '10:00 AM' },
        { nombre: 'Asignatura B', hora: '1:00 PM' }
    ],
    'Miércoles': [
        { nombre: 'Asignatura X', hora: '9:30 AM' },
        { nombre: 'Asignatura Y', hora: '12:30 PM' }
    ],
    // Agrega más asignaturas para otros días aquí
};

let diaActual = 0;
const diaTitulo = document.getElementById('dia-titulo');
const asignaturasLista = document.getElementById('asignaturas');
const anterior = document.getElementById('anterior');
const siguiente = document.getElementById('siguiente');

function actualizarHorario() {
    const dia = dias[diaActual];
    diaTitulo.textContent = dia;

    asignaturasLista.innerHTML = '';
    const asignaturasDelDia = asignaturasPorDia[dia];

    if (asignaturasDelDia) {
        asignaturasDelDia.forEach(asignatura => {
            const li = document.createElement('li');
            li.classList.add('asignatura');

            const nombreDiv = document.createElement('div');
            nombreDiv.classList.add('nombre');
            nombreDiv.textContent = asignatura.nombre;

            const horaDiv = document.createElement('div');
            horaDiv.classList.add('hora');
            horaDiv.textContent = asignatura.hora;

            li.appendChild(nombreDiv);
            li.appendChild(horaDiv);

            asignaturasLista.appendChild(li);
        });
    }
}

anterior.addEventListener('click', () => {
    diaActual = (diaActual - 1 + dias.length) % dias.length;
    actualizarHorario();
});

siguiente.addEventListener('click', () => {
    diaActual = (diaActual + 1) % dias.length;
    actualizarHorario();
});

actualizarHorario();
