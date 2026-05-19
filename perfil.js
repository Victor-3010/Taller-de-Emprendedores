// ============================================
// PERFIL DE USUARIO - TECBOOK
// ============================================

// Cargar datos del perfil
function cargarPerfil() {
    const perfil = obtenerPerfil();

    // Nombre
    document.getElementById('nombreTexto').textContent = perfil.nombre || 'Lector anónimo';

    // Bio
    const bioInput = document.getElementById('inputBio');
    if (bioInput) {
        bioInput.value = perfil.bio || '';
        actualizarContadorBio();
    }

    document.getElementById('bioTexto').textContent = perfil.bio || 'Amante de los libros 📖';

    // Avatar letra
    const letra = (perfil.nombre || 'L').charAt(0).toUpperCase();
    document.getElementById('avatarLetra').textContent = letra;

    // Avatar foto
    if (perfil.foto) {
        mostrarFotoAvatar(perfil.foto);
    }

    // Avatar mini en navbar
    actualizarAvatarNavbar();

    // Géneros activos
    if (perfil.generos && perfil.generos.length > 0) {
        document.querySelectorAll('.genero-tag').forEach(btn => {
            if (perfil.generos.includes(btn.textContent.trim())) {
                btn.classList.add('activo');
            }
        });
    }

    // Estadísticas
    cargarEstadisticasPerfil();

    // Actividad reciente
    cargarActividadReciente();
}

function obtenerPerfil() {
    return JSON.parse(localStorage.getItem('perfilTecbook') || '{}');
}

function guardarPerfil(datos) {
    const actual = obtenerPerfil();
    localStorage.setItem('perfilTecbook', JSON.stringify({ ...actual, ...datos }));
}

// ── Nombre ──────────────────────────────────
function editarNombre() {
    const perfil = obtenerPerfil();
    document.getElementById('nombreDisplay').style.display = 'none';
    document.getElementById('nombreEdit').style.display = 'flex';
    const input = document.getElementById('inputNombre');
    input.value = perfil.nombre || '';
    input.focus();
    input.select();
}

function guardarNombre() {
    const valor = document.getElementById('inputNombre').value.trim();
    if (!valor) return;
    guardarPerfil({ nombre: valor });
    document.getElementById('nombreTexto').textContent = valor;
    document.getElementById('avatarLetra').textContent = valor.charAt(0).toUpperCase();
    actualizarAvatarNavbar();
    cancelarNombre();
    mostrarToast('✅ Nombre guardado');
}

function cancelarNombre() {
    document.getElementById('nombreDisplay').style.display = 'inline-flex';
    document.getElementById('nombreEdit').style.display = 'none';
}

// Enter para guardar nombre
document.addEventListener('DOMContentLoaded', () => {
    const inputNombre = document.getElementById('inputNombre');
    if (inputNombre) {
        inputNombre.addEventListener('keydown', e => {
            if (e.key === 'Enter') guardarNombre();
            if (e.key === 'Escape') cancelarNombre();
        });
    }
});

// ── Bio ──────────────────────────────────────
function actualizarContadorBio() {
    const bio = document.getElementById('inputBio').value;
    document.getElementById('bioCount').textContent = `${bio.length}/120`;
}

function guardarBio() {
    const bio = document.getElementById('inputBio').value.trim();
    guardarPerfil({ bio });
    document.getElementById('bioTexto').textContent = bio || 'Amante de los libros 📖';
    mostrarToast('✅ Bio guardada');
}

// ── Foto ─────────────────────────────────────
function cambiarFoto(event) {
    const archivo = event.target.files[0];
    if (!archivo) return;

    const reader = new FileReader();
    reader.onload = (e) => {
        const base64 = e.target.result;
        guardarPerfil({ foto: base64 });
        mostrarFotoAvatar(base64);
        actualizarAvatarNavbar();
        mostrarToast('✅ Foto actualizada');
    };
    reader.readAsDataURL(archivo);
}

function mostrarFotoAvatar(src) {
    const letra = document.getElementById('avatarLetra');
    const img = document.getElementById('avatarImg');
    if (letra) letra.style.display = 'none';
    if (img) {
        img.src = src;
        img.style.display = 'block';
    }
}

function actualizarAvatarNavbar() {
    const perfil = obtenerPerfil();
    const miniEl = document.getElementById('avatarMini');
    if (!miniEl) return;

    if (perfil.foto) {
        miniEl.innerHTML = `<img src="${perfil.foto}" alt="avatar" style="width:100%;height:100%;object-fit:cover;border-radius:50%;">`;
    } else {
        const letra = (perfil.nombre || 'L').charAt(0).toUpperCase();
        miniEl.textContent = letra;
    }
}

// ── Géneros ──────────────────────────────────
function toggleGenero(btn) {
    btn.classList.toggle('activo');
    const activos = Array.from(document.querySelectorAll('.genero-tag.activo'))
        .map(b => b.textContent.trim());
    guardarPerfil({ generos: activos });
}

// ── Estadísticas ─────────────────────────────
function cargarEstadisticasPerfil() {
    const progreso = JSON.parse(localStorage.getItem('progresoLectura') || '{}');
    const total = Object.keys(progreso).length;
    const completados = Object.values(progreso).filter(p => p.completado).length;
    const enProgreso = total - completados;

    let progresoTotal = 0;
    Object.values(progreso).forEach(p => {
        progresoTotal += (p.pagina / p.totalPaginas) * 100;
    });
    const promedio = total > 0 ? Math.round(progresoTotal / total) : 0;

    document.getElementById('pTotalLibros').textContent = total;
    document.getElementById('pEnProgreso').textContent = enProgreso;
    document.getElementById('pCompletados').textContent = completados;
    document.getElementById('pPromedio').textContent = promedio + '%';
}

// ── Actividad reciente ────────────────────────
function cargarActividadReciente() {
    const progreso = JSON.parse(localStorage.getItem('progresoLectura') || '{}');
    const libros = JSON.parse(localStorage.getItem('catalogoTecbook') || '[]');
    const contenedor = document.getElementById('actividadReciente');
    if (!contenedor) return;

    // Ordenar por última lectura
    const entradas = Object.entries(progreso)
        .sort((a, b) => new Date(b[1].ultimaLectura) - new Date(a[1].ultimaLectura))
        .slice(0, 5);

    if (entradas.length === 0) {
        contenedor.innerHTML = '<p style="color:var(--gris); font-size:0.85rem;">Aún no has leído ningún libro.</p>';
        return;
    }

    // Buscar datos de libros en librosLocales (del script.js)
    const todosLosLibros = typeof librosLocales !== 'undefined' ? librosLocales : [];

    contenedor.innerHTML = entradas.map(([id, datos]) => {
        const libro = todosLosLibros.find(l => String(l.id) === String(id));
        if (!libro) return '';
        const pct = Math.round((datos.pagina / datos.totalPaginas) * 100);
        const fecha = new Date(datos.ultimaLectura).toLocaleDateString('es-MX', {
            day: '2-digit', month: 'short'
        });
        return `
            <div class="actividad-item">
                <img src="${libro.imagen}" alt="${libro.titulo}" class="actividad-img"
                     onerror="this.src='https://via.placeholder.com/36x50/1a1a24/666?text=📖'">
                <div class="actividad-info">
                    <div class="actividad-titulo">${libro.titulo}</div>
                    <div class="actividad-meta">${libro.autor} · ${fecha}</div>
                </div>
                <div class="actividad-progreso">${pct}%</div>
            </div>
        `;
    }).join('');
}

// ── Reset ─────────────────────────────────────
function confirmarReset() {
    if (confirm('¿Seguro que quieres borrar todo tu progreso de lectura? Esta acción no se puede deshacer.')) {
        localStorage.removeItem('progresoLectura');
        cargarEstadisticasPerfil();
        cargarActividadReciente();
        mostrarToast('🗑 Progreso restablecido');
    }
}

// ── Toast ─────────────────────────────────────
function mostrarToast(msg) {
    const t = document.createElement('div');
    t.className = 'toast';
    t.textContent = msg;
    document.body.appendChild(t);
    setTimeout(() => t.remove(), 2800);
}

// ── Init ──────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
    cargarPerfil();

    const bioInput = document.getElementById('inputBio');
    if (bioInput) {
        bioInput.addEventListener('input', actualizarContadorBio);
    }
});