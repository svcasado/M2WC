import "./style.css";
import { buscarSeries } from "./api.js";
import { prepararSeries, ordenarPorNota, contarGeneros } from "./datos.js";

async function probar() {
  try {
    const resultados = await buscarSeries("office");
    const series = ordenarPorNota(prepararSeries(resultados));
    console.log(series);
    console.log(contarGeneros(series));
  } catch (error) {
    console.error("Error:", error.message);
  }
}
