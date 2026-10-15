const estado = document.querySelector("#estado");
const error = document.querySelector("#error");
const resumen = document.querySelector("#resumen");
const resultados = document.querySelector("#resultados");

function limpiar() {
  estado.textContent = "";
  error.textContent = "";
  resumen.textContent = "";
  resultados.textContent = "";
}

export function mostrarCargando() {
  limpiar();
  estado.textContent = "Cargando series...";
}

export function mostrarError(mensaje) {
  limpiar();
  error.textContent = `No se pudieron cargar las series (${mensaje}). Inténtalo de nuevo.`;
}

export function mostrarVacio(texto) {
  limpiar();
  estado.textContent = `No se encontraron series para "${texto}".`;
}

export function mostrarSeries(series, generos) {
  limpiar();

  const textoGeneros = Object.keys(generos)
    .map((genero) => `${genero}: ${generos[genero]}`)
    .join(" · ");
  resumen.textContent = `${series.length} series encontradas. ${textoGeneros}`;

  series.forEach((serie) => {
    resultados.appendChild(crearTarjeta(serie));
  });
}

function crearTarjeta(serie) {
  const tarjeta = document.createElement("article");
  tarjeta.classList.add("tarjeta");

  if (serie.imagen) {
    const imagen = document.createElement("img");
    imagen.setAttribute("src", serie.imagen);
    imagen.setAttribute("alt", serie.nombre);
    tarjeta.appendChild(imagen);
  } else {
    const sinImagen = document.createElement("div");
    sinImagen.classList.add("sin-imagen");
    sinImagen.textContent = "Sin imagen";
    tarjeta.appendChild(sinImagen);
  }

  const titulo = document.createElement("h2");
  titulo.textContent = serie.nombre;
  tarjeta.appendChild(titulo);

  const detalles = document.createElement("p");
  detalles.textContent = `${serie.anio} · ${serie.nota ?? "Sin nota"}`;
  tarjeta.appendChild(detalles);

  const generos = document.createElement("p");
  generos.textContent = serie.generos.join(", ") || "Sin género";
  tarjeta.appendChild(generos);

  return tarjeta;
}
