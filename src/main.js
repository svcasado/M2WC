import { buscarSeries } from "./api.js";
import { prepararSeries, ordenarPorNota, contarGeneros } from "./datos.js";
import { mostrarCargando, mostrarError, mostrarVacio, mostrarSeries } from "./ui.js";

const campoBusqueda = document.querySelector("#busqueda");
const botonBuscar = document.querySelector("#boton-buscar");

async function buscar() {
  const texto = campoBusqueda.value.trim();

  if (texto === "") {
    return;
  }

  mostrarCargando();

  try {
    const resultados = await buscarSeries(texto);
    const series = ordenarPorNota(prepararSeries(resultados));

    if (series.length === 0) {
      mostrarVacio(texto);
      return;
    }

    mostrarSeries(series, contarGeneros(series));
  } catch (error) {
    mostrarError(error.message);
  }
}

botonBuscar.addEventListener("click", buscar);
