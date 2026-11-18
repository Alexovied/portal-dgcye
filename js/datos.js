// =============================================
// BASE DE DATOS LOCAL DE NORMATIVAS (DGCyE - GBA)
// =============================================
// Datos SIMULADOS para pruebas iniciales (no son normativas oficiales).
// Cada objeto es una norma; "anexos" alimenta el visor de anexos (RF3).

const normativasDGCyE = [
  { id: 1, nro: "651/26", tipo: "Resolución", anio: 2026, mes: "Octubre", distrito: "Provincial",
    desc: "Aprueba pliegos y autoriza llamada a Licitación Pública para talleres de EEST.",
    anexos: [{ nombre: "Pliego de bases y condiciones", formato: "PDF", url: "anexos/651-26-pliego.pdf" }] },
  { id: 2, nro: "420/25", tipo: "Disposición", anio: 2025, mes: "Marzo", distrito: "Provincial",
    desc: "Actualización de planes de estudio ciclo superior 7mo año Técnico en Programación.",
    anexos: [{ nombre: "Grilla del plan de estudios 7° año", formato: "XLSX", url: "anexos/420-25-plan.xlsx" }] },
  { id: 3, nro: "128/26", tipo: "Circular", anio: 2026, mes: "Mayo", distrito: "Provincial",
    desc: "Pautas organizativas para ferias de ciencia distritales y regionales ACTE GBA.",
    anexos: [{ nombre: "Cronograma de etapas de la feria", formato: "PDF", url: "anexos/128-26-feria.pdf" }] },
  { id: 4, nro: "77/26", tipo: "Circular", anio: 2026, mes: "Marzo", distrito: "Vicente López",
    desc: "Calendario de mesas de examen de marzo para escuelas secundarias técnicas.",
    anexos: [] },
  { id: 5, nro: "302/25", tipo: "Resolución", anio: 2025, mes: "Agosto", distrito: "Provincial",
    desc: "Régimen de Prácticas Profesionalizantes para 7° año de la Educación Técnico Profesional.",
    anexos: [{ nombre: "Modelo de convenio con empresas", formato: "PDF", url: "anexos/302-25-convenio.pdf" }] },
  { id: 6, nro: "15/26", tipo: "Disposición", anio: 2026, mes: "Febrero", distrito: "La Matanza",
    desc: "Designación de inspectores de enseñanza técnica para la región educativa.",
    anexos: [] },
  { id: 7, nro: "540/24", tipo: "Resolución", anio: 2024, mes: "Noviembre", distrito: "Provincial",
    desc: "Acuerdos Institucionales de Convivencia: lineamientos para su revisión bianual.",
    anexos: [{ nombre: "Guía para la elaboración de AIC", formato: "PDF", url: "anexos/540-24-aic.pdf" }] },
  { id: 8, nro: "210/26", tipo: "Circular", anio: 2026, mes: "Julio", distrito: "Provincial",
    desc: "Receso invernal y jornadas institucionales del segundo cuatrimestre.",
    anexos: [{ nombre: "Calendario escolar 2026", formato: "XLSX", url: "anexos/210-26-calendario.xlsx" }] },
];

// ==========================================
// EJEMPLO DE USO RÁPIDO PARA EL FRONTEND
// ==========================================
console.log("Listado total de normativas cargadas:", normativasDGCyE.length);

// Filtrado por año (útil para el buscador del sitio web)
const normativas2026 = normativasDGCyE.filter(n => n.anio === 2026);
console.log("Normativas del año 2026:", normativas2026);

// Filtrado combinado: texto libre + tipo + año (lo que usará el buscador en tiempo real, RF1 y RF2)
const sinTildes = s => s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");
function filtrar({ texto = "", tipo = "", anio = "" } = {}) {
  const t = sinTildes(texto);
  return normativasDGCyE.filter(n =>
    (!t || sinTildes(`${n.nro} ${n.tipo} ${n.desc}`).includes(t)) &&
    (!tipo || n.tipo === tipo) &&
    (!anio || n.anio === Number(anio)));
}
console.log("Circulares 2026 sobre 'feria':", filtrar({ texto: "feria", tipo: "Circular", anio: 2026 }));

if (typeof module !== "undefined") module.exports = { normativasDGCyE, filtrar };
