// ============================================
// BASE DE DATOS DE LIBROS (DOMINIO PÚBLICO)
// ============================================
const libros = [
    {
        id: 1,
        titulo: "Don Quijote de la Mancha",
        autor: "Miguel de Cervantes",
        imagen: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=200&h=250&fit=crop",
        paginas: 15,
        contenido: [
            "Página 1: En un lugar de la Mancha, de cuyo nombre no quiero acordarme, no ha mucho tiempo que vivía un hidalgo de los de lanza en astillero, adarga antigua, rocín flaco y galgo corredor.",
            "Página 2: Una olla de algo más vaca que carnero, salpicón las más noches, duelos y quebrantos los sábados, lentejas los viernes, algún palomino de añadidura los domingos, consumían las tres partes de su hacienda.",
            "Página 3: El resto della concluían sayo de velarte, calzas de velludo para las fiestas con sus pantuflos de lo mesmo, y los días de entresemana se honraba con su vellorí de lo más fino.",
            "Página 4: Tenía en su casa una ama que pasaba de los cuarenta, y una sobrina que no llegaba a los veinte, y un mozo de campo y plaza, que así ensillaba el rocín como tomaba la podadera.",
            "Página 5: Frisaba la edad de nuestro hidalgo con los cincuenta años; era de complexión recia, seco de carnes, enjuto de rostro, gran madrugador y amigo de la caza.",
            "Página 6: Quieren decir que tenía el sobrenombre de Quijada o Quesada, que en esto hay alguna diferencia en los autores que deste caso escriben.",
            "Página 7: Es, pues, de saber que este sobredicho hidalgo, los ratos que estaba ocioso (que eran los más del año), se daba a leer libros de caballerías con tanta afición y gusto, que olvidó casi de todo punto el ejercicio de la caza.",
            "Página 8: Llenósele la fantasía de todo aquello que leía en los libros, así de encantamentos como de pendencias, batallas, desafíos, heridas, requiebros, amores, tormentas y disparates imposibles.",
            "Página 9: Y asentósele de tal modo en la imaginación que era verdad toda aquella máquina de aquellas soñadas invenciones que leía, que para él no había otra historia más cierta en el mundo.",
            "Página 10: En efecto, rematado ya su juicio, vino a dar en el más extraño pensamiento que jamás dio loco en el mundo, y fue que le pareció convenible y necesario, así para el aumento de su honra como para el servicio de su república, hacerse caballero andante.",
            "Página 11: Limpió unas armas que habían sido de sus bisabuelos, que tomadas de orín y llenas de moho, luengos siglos había que estaban puestas y olvidadas en un rincón.",
            "Página 12: Pensó en darle un nombre a su rocín, y después de cuatro días, vino a llamarle Rocinante, nombre, a su parecer, alto, sonoro y significativo de lo que había sido cuando fue rocín, antes de lo que ahora era.",
            "Página 13: Puesto nombre a su caballo, quiso ponérsele a sí mismo, y en este pensamiento duró otros ocho días, y al fin se vino a llamar Don Quijote de la Mancha.",
            "Página 14: Buscó una dama de quien enamorarse, porque el caballero andante sin amores era árbol sin hojas y sin fruto, y dijo: Si yo, por malos de mis pecados, me encuentro con algún gigante, podré enviarle a mi señora para que se presente ante ella.",
            "Página 15: Y fue que, según se cree, en un lugar cerca del suyo había una moza labradora de muy buen parecer, de quien él un tiempo anduvo enamorado, y ella se llamaba Aldonza Lorenzo, y a ésta le pareció ser bien darle título de señora de sus pensamientos."
        ]
    },
    {
        id: 2,
        titulo: "Romeo y Julieta",
        autor: "William Shakespeare",
        imagen: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=200&h=250&fit=crop",
        paginas: 12,
        contenido: [
            "Página 1: ACTO PRIMERO. Escena I. Verona. Una plaza pública. Entran SAMSON y GREGORY, de la casa de los Capuleto, con espadas y broqueles.",
            "Página 2: SAMSON: Gregorio, te juro que no nos dejarán con la burla. GREGORY: No, que entonces seríamos unos salados.",
            "Página 3: SAMSON: Quiero decir que si nos enojamos, desenvainaremos pronto. GREGORY: Sí, pero procura no enojarte hasta que te veas precisado a sacar el cuello de la horca.",
            "Página 4: SAMSON: Yo soy pronto a usar la espada cuando me mueven. GREGORY: Pero tú no te mueves fácilmente a usar la espada.",
            "Página 5: SAMSON: Un perro de la casa de los Montescos me mueve a mí. GREGORY: Moverse es huir, y ser valiente es estarse quieto. Por tanto, si te mueves, huirás.",
            "Página 6: SAMSON: Algún perro de esa casa me hará estarme quieto. Me pondré contra la pared con cualquier mozo o doncella de los Montescos.",
            "Página 7: GREGORY: La guerra entre nuestros amos nos hace siervos. SAMSON: No importa, yo seré tirano. Después de pelear seré cruel.",
            "Página 8: GREGORY: ¿Y cómo serás cruel? SAMSON: Pues ya lo sabes, con las doncellas. Les quitaré su virginidad.",
            "Página 9: GREGORY: ¿Y cómo la harás? SAMSON: Pues yo creo que ellos me la harán a mí, porque soy de la carne. Y cuando haya vencido a los hombres, seré cruel con las muchachas: les cortaré la cabeza.",
            "Página 10: GREGORY: ¿La cabeza de las doncellas? SAMSON: Sí, la cabeza de las doncellas, o su doncellez, tómalo como quieras.",
            "Página 11: GREGORY: Los que lo tomen como quieran, lo sentirán. SAMSON: Me sentirán cuando me pongan firme, y soy un buen trozo de carne.",
            "Página 12: GREGORY: Es bueno que no seas pez, porque si fueras pescado, serías un pobre salmón. Saca tu herramienta, que vienen dos de la casa de los Montescos."
        ]
    },
    {
        id: 3,
        titulo: "Orgullo y Prejuicio",
        autor: "Jane Austen",
        imagen: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=200&h=250&fit=crop",
        paginas: 10,
        contenido: [
            "Página 1: Es una verdad mundialmente reconocida que un hombre soltero, poseedor de una gran fortuna, necesita una esposa.",
            "Página 2: Por más que sean tan poco conocidos los sentimientos o las ideas de ese hombre al llegar por primera vez a un vecindario, esta verdad está tan fijada en la mente de las familias que lo rodean, que le consideran de su propiedad legítima.",
            "Página 3: Querido señor Bennet —dijo un día su señora—, ¿sabes que por fin se ha alquilado Netherfield Park? El señor Bennet respondió que no.",
            "Página 4: Pues así es —repitió ella—; la señora Long acaba de estar aquí y me lo ha contado todo. El señor Bennet no respondió.",
            "Página 5: ¿No deseas saber quién lo ha alquilado? —preguntó su mujer impaciente. Tú quieres decírmelo y no tengo inconveniente en oírlo. Tal fue la respuesta del señor Bennet.",
            "Página 6: Pues, querido, debes saber que la señora Long dice que Netherfield ha sido alquilado por un joven de gran fortuna del norte de Inglaterra.",
            "Página 7: ¿Y cómo se llama? — preguntó el señor Bennet. Bingley. ¿Está casado o soltero? ¡Oh, soltero, querido, soltero! ¡Un hombre soltero de gran fortuna! ¡Qué magnífico!",
            "Página 8: ¿Y qué nos importa a nosotras? —dijo el señor Bennet—. ¿Piensas casar a alguna de nuestras hijas con él?",
            "Página 9: ¿Casarme! No es eso lo que pretendo. ¿No sabes que deseo casar a alguna de ellas?",
            "Página 10: Ese es precisamente el propósito de su venida —contestó el señor Bennet—. Y puede que sea muy conveniente para las muchachas; pero tú podrías presentártela, puesto que la señora Long ya te ha presentado a él."
        ]
    },
    {
        id: 4,
        titulo: "Oliver Twist",
        autor: "Charles Dickens",
        imagen: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=200&h=250&fit=crop",
        paginas: 10,
        contenido: [
            "Página 1: Entre los varios edificios públicos de un lugar que, por muchas razones, no mencionaré, y al que no daré nombre alguno, existe uno común en casi todas las poblaciones, ya sean grandes o pequeñas: la casa de caridad.",
            "Página 2: En aquella casa de caridad nació un mortal, en fecha y hora que sería tedioso mencionar, puesto que no tienen importancia, pues el niño no pidió ser inscrito en los registros parroquiales.",
            "Página 3: Después de haber respirado unas cuantas veces, respiró también su primer vagido tan sonoro como el de cualquier otro niño. Comenzaba así a anunciar a la parroquia que había echado sobre sus espaldas una nueva carga.",
            "Página 4: La comadrona anunció a la pobre madre que el niño era fuerte y robusto. La madre fijó sus pálidos ojos en su hijo, le temblaron los labios y un sudor frío cubrió su rostro.",
            "Página 5: Dios misericordioso —murmuró débilmente—, protégeme. ¡Qué frío hace! ¡Qué horrible dolor! ¡Que me tomen la mano y me sostengan!",
            "Página 6: Y la pobre mujer se reclinó sobre la almohada y expiró. Besaron sus labios fríos, secos, y la enterraron en el cementerio de la parroquia.",
            "Página 7: El niño quedó envuelto en pobres pañales y pasó a ser huérfano bajo la tutela de la parroquia. Oliver Twist lloraba lastimeramente. Si pudiera saber que era huérfano y estaba bajo la tutela de la parroquia, quizá habría llorado más fuerte.",
            "Página 8: Oliver dio sus primeros pasos bajo el cuidado de una mujer vieja que recibía del gobierno algunas monedas para criar huérfanos. La mujer era muy experimentada en criar niños y sabía lo que más les convenía.",
            "Página 9: Pero quizá la señora Mann no acertaba a comprender las necesidades de los niños, y a veces se olvidaba de que necesitaban alimentarse. Lo cierto es que Oliver Twist, a los nueve años, era un niño pálido, enclenque, pequeño para su edad.",
            "Página 10: Pero la naturaleza o la herencia habían infundido en su pecho un espíritu fuerte y decidido. Poseía una cantidad de aquella esencia que le ayudaría a abrirse camino en el mundo y a sobrevivir."
        ]
    }
];

// ============================================
// ESTADO DE LECTURA
// ============================================
let progresoLectura = JSON.parse(localStorage.getItem('progresoLectura')) || {
    "1": {
        pagina: 1,
        totalPaginas: 15,
        completado: false,
        ultimaLectura: new Date().toISOString()
    },
    "2": {
        pagina: 1,
        totalPaginas: 12,
        completado: false,
        ultimaLectura: new Date().toISOString()
    }
};

// ============================================
// VARIABLES GLOBALES
// ============================================
let libroActual = null;
let paginaActual = 1;
let filtroActual = 'todos';
let ordenActual = 'reciente';
let tamanioLetra = 1.2;

// ============================================
// FUNCIÓN: guardarProgreso
// ============================================
function guardarProgreso(libroId, pagina) {
    const libro = libros.find(l => l.id === libroId);
    progresoLectura[libroId] = {
        pagina: pagina,
        totalPaginas: libro.paginas,
        completado: pagina === libro.paginas,
        ultimaLectura: new Date().toISOString()
    };
    localStorage.setItem('progresoLectura', JSON.stringify(progresoLectura));
    actualizarTodasLasVistas();
}

// ============================================
// FUNCIÓN: mostrarVista
// ============================================
function mostrarVista(vista) {
    document.querySelectorAll('.vista').forEach(v => v.classList.remove('active'));
    document.querySelectorAll('.nav-menu a').forEach(a => a.classList.remove('active'));
    
    document.getElementById(`vista${vista.charAt(0).toUpperCase() + vista.slice(1)}`).classList.add('active');
    event.target.classList.add('active');
    
    if (vista === 'biblioteca') {
        cargarBiblioteca();
    } else if (vista === 'continuar') {
        cargarContinuarLeyendo();
    } else {
        cargarLibrosInicio();
    }
}

// ============================================
// FUNCIÓN: cargarLibrosInicio
// ============================================
function cargarLibrosInicio() {
    const continuarLeyendo = document.getElementById('continuarLeyendo');
    const librosPopulares = document.getElementById('librosPopulares');
    const librosRecomendados = document.getElementById('librosRecomendados');
    
    continuarLeyendo.innerHTML = '';
    librosPopulares.innerHTML = '';
    librosRecomendados.innerHTML = '';
    
    const librosConProgreso = libros.filter(libro => progresoLectura[libro.id] && !progresoLectura[libro.id].completado);
    
    if (librosConProgreso.length > 0) {
        librosConProgreso.slice(0, 4).forEach(libro => {
            const progreso = progresoLectura[libro.id];
            const porcentaje = (progreso.pagina / libro.paginas) * 100;
            continuarLeyendo.innerHTML += crearTarjetaLibro(libro, porcentaje);
        });
    } else {
        continuarLeyendo.innerHTML = '<p class="mensaje-vacio">No tienes libros en progreso</p>';
    }
    
    libros.slice(0, 4).forEach(libro => {
        librosPopulares.innerHTML += crearTarjetaLibro(libro, 0);
    });
    
    libros.slice(1, 5).forEach(libro => {
        librosRecomendados.innerHTML += crearTarjetaLibro(libro, 0);
    });
}

// ============================================
// FUNCIÓN: cargarBiblioteca
// ============================================
function cargarBiblioteca() {
    const bibliotecaDiv = document.getElementById('bibliotecaLibros');
    bibliotecaDiv.innerHTML = '';
    
    let librosAMostrar = [];
    
    if (filtroActual === 'todos') {
        librosAMostrar = libros.filter(libro => progresoLectura[libro.id]);
    } else if (filtroActual === 'leyendo') {
        librosAMostrar = libros.filter(libro => 
            progresoLectura[libro.id] && !progresoLectura[libro.id].completado
        );
    } else if (filtroActual === 'completados') {
        librosAMostrar = libros.filter(libro => 
            progresoLectura[libro.id] && progresoLectura[libro.id].completado
        );
    }
    
    if (librosAMostrar.length > 0) {
        librosAMostrar.forEach(libro => {
            const progreso = progresoLectura[libro.id];
            const porcentaje = (progreso.pagina / libro.paginas) * 100;
            bibliotecaDiv.innerHTML += crearTarjetaLibro(libro, porcentaje);
        });
    } else {
        bibliotecaDiv.innerHTML = `
            <div class="mensaje-vacio">
                <p>No tienes libros en esta categoría</p>
                <button class="btn-control" onclick="mostrarVista('inicio')">Explorar libros</button>
            </div>
        `;
    }
    
    actualizarEstadisticas();
}

// ============================================
// FUNCIÓN: actualizarEstadisticas
// ============================================
function actualizarEstadisticas() {
    const librosEnBiblioteca = Object.keys(progresoLectura).length;
    const librosLeyendo = Object.values(progresoLectura).filter(p => !p.completado).length;
    const librosCompletados = Object.values(progresoLectura).filter(p => p.completado).length;
    
    let progresoTotal = 0;
    Object.values(progresoLectura).forEach(p => {
        progresoTotal += (p.pagina / p.totalPaginas) * 100;
    });
    const promedio = librosEnBiblioteca > 0 ? Math.round(progresoTotal / librosEnBiblioteca) : 0;
    
    document.getElementById('totalLibros').textContent = librosEnBiblioteca;
    document.getElementById('librosLeyendo').textContent = librosLeyendo;
    document.getElementById('librosCompletados').textContent = librosCompletados;
    document.getElementById('promedioProgreso').textContent = promedio + '%';
}

// ============================================
// FUNCIÓN: filtrarBiblioteca
// ============================================
function filtrarBiblioteca(filtro) {
    filtroActual = filtro;
    
    document.querySelectorAll('.filtro-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.textContent.toLowerCase().includes(filtro === 'todos' ? 'todos' : 
            filtro === 'leyendo' ? 'leyendo' : 'completados')) {
            btn.classList.add('active');
        }
    });
    
    cargarBiblioteca();
}

// ============================================
// FUNCIÓN: cargarContinuarLeyendo
// ============================================
function cargarContinuarLeyendo() {
    const listaContinuar = document.getElementById('listaContinuar');
    const sugerenciasDiv = document.getElementById('sugerenciasContinuar');
    
    let librosEnProgreso = libros.filter(libro => 
        progresoLectura[libro.id] && !progresoLectura[libro.id].completado
    ).map(libro => ({
        ...libro,
        progreso: progresoLectura[libro.id]
    }));
    
    if (ordenActual === 'reciente') {
        librosEnProgreso.sort((a, b) => 
            new Date(b.progreso.ultimaLectura) - new Date(a.progreso.ultimaLectura)
        );
    } else if (ordenActual === 'progreso') {
        librosEnProgreso.sort((a, b) => {
            const progA = (a.progreso.pagina / a.paginas) * 100;
            const progB = (b.progreso.pagina / b.paginas) * 100;
            return progB - progA;
        });
    } else if (ordenActual === 'alfabetico') {
        librosEnProgreso.sort((a, b) => a.titulo.localeCompare(b.titulo));
    }
    
    if (librosEnProgreso.length > 0) {
        listaContinuar.innerHTML = librosEnProgreso.map(libro => crearItemContinuar(libro)).join('');
    } else {
        listaContinuar.innerHTML = `
            <div class="mensaje-vacio">
                <p>No tienes libros en progreso</p>
                <button class="btn-control" onclick="mostrarVista('inicio')">Comenzar a leer</button>
            </div>
        `;
    }
    
    const librosSugeridos = libros.filter(libro => !progresoLectura[libro.id]).slice(0, 4);
    sugerenciasDiv.innerHTML = librosSugeridos.map(libro => crearTarjetaLibro(libro, 0)).join('');
}

// ============================================
// FUNCIÓN: crearItemContinuar
// ============================================
function crearItemContinuar(libro) {
    const progreso = libro.progreso;
    const porcentaje = (progreso.pagina / libro.paginas) * 100;
    const fecha = new Date(progreso.ultimaLectura);
    const fechaFormateada = fecha.toLocaleDateString('es-ES', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });
    
    return `
        <div class="continuar-item">
            <img src="${libro.imagen}" alt="${libro.titulo}" class="continuar-imagen">
            <div class="continuar-info">
                <h3>${libro.titulo}</h3>
                <p class="autor">${libro.autor}</p>
                <div class="continuar-progreso">
                    <div class="progreso-texto">
                        <span>Página ${progreso.pagina} de ${libro.paginas}</span>
                        <span>${Math.round(porcentaje)}%</span>
                    </div>
                    <div class="progreso-detalle">
                        <div class="barra" style="width: ${porcentaje}%"></div>
                    </div>
                </div>
                <div class="continuar-footer">
                    <span class="ultima-lectura">Última lectura: ${fechaFormateada}</span>
                    <button class="btn-continuar" onclick="abrirLector(${libro.id})">Continuar</button>
                </div>
            </div>
        </div>
    `;
}

// ============================================
// FUNCIÓN: ordenarContinuarLeyendo
// ============================================
function ordenarContinuarLeyendo(orden) {
    ordenActual = orden;
    cargarContinuarLeyendo();
}

// ============================================
// FUNCIÓN: crearTarjetaLibro
// ============================================
function crearTarjetaLibro(libro, progreso) {
    return `
        <div class="libro-card" onclick="abrirLector(${libro.id})">
            <img src="${libro.imagen}" alt="${libro.titulo}">
            <div class="libro-info">
                <h3>${libro.titulo}</h3>
                <p>${libro.autor}</p>
                <div class="progreso-indicador">
                    <div class="barra" style="width: ${progreso}%"></div>
                </div>
            </div>
        </div>
    `;
}

// ============================================
// FUNCIÓN: abrirLector
// ============================================
function abrirLector(libroId) {
    libroActual = libros.find(l => l.id === libroId);
    
    if (libroActual) {
        if (progresoLectura[libroId]) {
            paginaActual = progresoLectura[libroId].pagina;
        } else {
            paginaActual = 1;
        }
        
        document.getElementById('libroTitulo').textContent = libroActual.titulo;
        document.getElementById('libroAutor').textContent = libroActual.autor;
        
        actualizarLector();
        document.getElementById('lectorModal').style.display = 'block';
        
        const temaGuardado = localStorage.getItem('temaLectura') || 'claro';
        cambiarTema(temaGuardado);
        
        const tamanioGuardado = localStorage.getItem('tamanioLetra');
        if (tamanioGuardado) {
            tamanioLetra = parseFloat(tamanioGuardado);
            document.getElementById('paginaContenido').style.fontSize = `${tamanioLetra}rem`;
            document.getElementById('tamanioIndicador').textContent = 'A';
        }
    }
}

// ============================================
// FUNCIÓN: cerrarLector
// ============================================
function cerrarLector() {
    document.getElementById('lectorModal').style.display = 'none';
}

// ============================================
// FUNCIÓN: actualizarLector
// ============================================
function actualizarLector() {
    if (libroActual) {
        const paginaContenido = document.getElementById('paginaContenido');
        const infoPagina = document.getElementById('infoPagina');
        const infoPaginaSimple = document.getElementById('infoPaginaSimple');
        const progresoTexto = document.getElementById('progresoTexto');
        const progreso = document.getElementById('progresoLectura');
        const btnAnterior = document.getElementById('btnAnterior');
        const btnSiguiente = document.getElementById('btnSiguiente');
        
        paginaContenido.innerHTML = `<p>${libroActual.contenido[paginaActual - 1]}</p>`;
        
        const textoPagina = `Página ${paginaActual} de ${libroActual.paginas}`;
        if (infoPagina) infoPagina.textContent = textoPagina;
        if (infoPaginaSimple) infoPaginaSimple.textContent = textoPagina;
        
        const porcentaje = (paginaActual / libroActual.paginas) * 100;
        progreso.style.width = `${porcentaje}%`;
        if (progresoTexto) progresoTexto.textContent = `${Math.round(porcentaje)}% completado`;
        
        btnAnterior.disabled = paginaActual === 1;
        btnSiguiente.disabled = paginaActual === libroActual.paginas;
        
        guardarProgreso(libroActual.id, paginaActual);
    }
}

// ============================================
// FUNCIÓN: cambiarPagina
// ============================================
function cambiarPagina(direccion) {
    if (libroActual) {
        const nuevaPagina = paginaActual + direccion;
        if (nuevaPagina >= 1 && nuevaPagina <= libroActual.paginas) {
            paginaActual = nuevaPagina;
            actualizarLector();
        }
    }
}

// ============================================
// FUNCIÓN: cambiarTema
// ============================================
function cambiarTema(tema) {
    const modal = document.getElementById('lectorModal');
    modal.classList.remove('tema-claro', 'tema-oscuro', 'tema-sepia');
    
    if (tema === 'oscuro') {
        modal.classList.add('tema-oscuro');
    } else if (tema === 'sepia') {
        modal.classList.add('tema-sepia');
    }
    
    localStorage.setItem('temaLectura', tema);
}

// ============================================
// FUNCIÓN: ajustarLetra
// ============================================
function ajustarLetra(accion) {
    const paginaContenido = document.getElementById('paginaContenido');
    
    if (accion === 'mas') {
        tamanioLetra = Math.min(tamanioLetra + 0.1, 2.0);
    } else {
        tamanioLetra = Math.max(tamanioLetra - 0.1, 0.8);
    }
    
    paginaContenido.style.fontSize = `${tamanioLetra}rem`;
    localStorage.setItem('tamanioLetra', tamanioLetra);
}

// ============================================
// FUNCIÓN: actualizarTodasLasVistas
// ============================================
function actualizarTodasLasVistas() {
    cargarLibrosInicio();
    cargarBiblioteca();
    cargarContinuarLeyendo();
}

// ============================================
// FUNCIÓN: buscarLibros
// ============================================
function buscarLibros() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    console.log('Buscando:', searchTerm);
}

// ============================================
// EVENT LISTENERS
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    actualizarTodasLasVistas();
    
    document.getElementById('searchInput').addEventListener('input', buscarLibros);
    
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && document.getElementById('lectorModal').style.display === 'block') {
            cerrarLector();
        }
    });
    
    document.addEventListener('keydown', (e) => {
        if (document.getElementById('lectorModal').style.display === 'block') {
            if (e.key === 'ArrowLeft') {
                cambiarPagina(-1);
            } else if (e.key === 'ArrowRight') {
                cambiarPagina(1);
            }
        }
    });
    
    const temaGuardado = localStorage.getItem('temaLectura') || 'claro';
    const selectorTema = document.querySelector('.tema-selector');
    if (selectorTema) {
        const botones = selectorTema.querySelectorAll('.tema-btn');
        botones.forEach(btn => {
            if (btn.getAttribute('onclick').includes(temaGuardado)) {
                btn.style.background = 'rgba(255,255,255,0.3)';
            }
        });
    }
    
    const tamanioGuardado = localStorage.getItem('tamanioLetra');
    if (tamanioGuardado) {
        tamanioLetra = parseFloat(tamanioGuardado);
    }
});