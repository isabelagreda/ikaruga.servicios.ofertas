

// ================================================================
// CONFIGURACIÓN MAESTRA — IKARUGA AGOSTO 2026
// ================================================================

// 1. CERTIFICACIÓN por idioma
// 2. INMERSIÓN CULTURAL: solo asiáticos + alemán
// 3. PREPARACIÓN PARA EXAMEN: solo nivel 1 cuando aplica
// 4. FINANCIACIÓN: 4 cuotas para asiáticos/alemán · 3 cuotas para inglés e italiano
// ================================================================

const idiomaConfig = {
  japones:   {
    cert: "Doble Certificación (IKARUGA + UAI 🎓)",
    inmersion: true,
    preparacion: (n) => n === "Japonés 1",
    examStr: "Preparación para el JLPT (Examen Oficial de Japonés),"
  },
  coreano:   {
    cert: "Doble Certificación (IKARUGA + UAI 🎓)",
    inmersion: true,
    preparacion: (n) => n === "Coreano 1",
    examStr: "Preparación para el TOPIK (Examen Oficial de Coreano),"
  },
  chino:     {
    cert: "Doble Certificación (IKARUGA + UAI 🎓)",
    inmersion: true,
    preparacion: (n) => n === "Chino 1",
    examStr: "Preparación para el HSK (Examen Oficial de Chino Mandarín),"
  },
  tailandes: {
    cert: "Doble Certificación (IKARUGA + UAI 🎓)",
    inmersion: true,
    preparacion: () => false
  },
  aleman:    {
    cert: "Doble Certificación (IKARUGA + UAI 🎓)",
    inmersion: true,
    preparacion: () => false
  },
  ingles:    {
    cert: "Certificación Oficial de competencias IKARUGA",
    inmersion: false,
    preparacion: () => false
  },
  italiano:  {
    cert: "Doble Certificación (IKARUGA + UAI 🎓)",
    inmersion: false,
    preparacion: () => false
  }
};

// ---- Horarios base en hora Argentina ----
// Horarios confirmados desde Planificador de cursos IKARUGA — Julio/Agosto/Septiembre/Octubre 2026
const horariosARG = {
  japones: {
    "Japonés 1": [
      "Comisión R · Grupo 1 · Sábados de 16:00 a 19:00 hs. (Inicia 18/07 · Finaliza 10/10 · Julio 4 módulos)",
      "Comisión R · Grupo 2 · Sábados de 16:00 a 19:00 hs. (Inicia 18/07 · Finaliza 10/10 · Julio 4 módulos)",
      "Comisión T · Domingos de 14:00 a 17:00 hs. (Inicia 20/09 · Finaliza 13/12 · Septiembre 4 módulos)",
      "Comisión U · Lunes de 21:00 a 00:00 hs. (Inicia 21/09 · Finaliza 14/12 · Septiembre 4 módulos)",
      "Comisión V · Miércoles de 21:00 a 00:00 hs. (Inicia 21/10 · Finaliza 13/01 · Octubre 4 módulos)"
    ],
    "Japonés 2": [
      "Comisión D · Sábados de 16:00 a 19:00 hs. (Inicia 22/08 · Finaliza 12/12 · Agosto 5 módulos)",
      "Comisión E · Domingos de 14:00 a 17:00 hs. (Inicia 23/08 · Finaliza 13/12 · Agosto 5 módulos)",
      "Comisión F · Lunes de 21:00 a 00:00 hs. (Inicia 24/08 · Finaliza 14/12 · Agosto 5 módulos)",
      "Comisión G · Sábados de 14:00 a 17:00 hs. (Inicia 21/09 · Finaliza 14/12 · Septiembre 4 módulos)",
      "Comisión H · Jueves de 21:00 a 00:00 hs. (Inicia 17/09 · Finaliza 10/12 · Septiembre 4 módulos)"
    ],
    "Japonés 3": [
      "Comisión C · Sábados de 16:00 a 19:00 hs. (Inicia 22/08 · Finaliza 12/12 · Agosto 5 módulos)",
      "Comisión D · Lunes de 21:00 a 00:00 hs. (Inicia 24/08 · Finaliza 14/12 · Agosto 5 módulos)"
    ],
    "Japonés 4": [
      "Comisión A · Domingos de 14:00 a 17:00 hs. (Inicia 23/08 · Finaliza 13/12 · Agosto 5 módulos)"
    ]
  },
  coreano: {
    "Coreano 1": [
      "Comisión D · Grupo 1 · Sábados de 16:00 a 19:00 hs. (Inicia 22/08 · Finaliza 12/12 · Agosto 5 módulos)",
      "Comisión D · Grupo 2 · Sábados de 16:00 a 19:00 hs. (Inicia 22/08 · Finaliza 12/12 · Agosto 5 módulos)",
      "Comisión E · Lunes de 21:00 a 00:00 hs. (Inicia 24/08 · Finaliza 14/12 · Agosto 5 módulos)",
      "Comisión F · Domingos de 14:00 a 17:00 hs. (Inicia 18/10 · Finaliza 10/01 · Octubre 4 módulos)"
    ],
    "Coreano 2": ["Comisión D · Miércoles de 21:00 a 00:00 hs. (Inicia 19/08 · Finaliza 09/12 · Agosto 5 módulos)"]
  },
  chino: {
    "Chino 1": [
      "Comisión C · Grupo 1 · Miércoles de 21:00 a 00:00 hs. (Inicia 19/08 · Finaliza 09/12 · Agosto 5 módulos)",
      "Comisión C · Grupo 2 · Miércoles de 21:00 a 00:00 hs. (Inicia 19/08 · Finaliza 09/12 · Agosto 5 módulos)",
      "Comisión D · Sábados de 16:00 a 19:00 hs. (Inicia 24/10 · Finaliza 09/01 · Octubre 4 módulos)"
    ],
    "Chino 2": ["Comisión D · Lunes de 21:00 a 00:00 hs. (Inicia 24/08 · Finaliza 14/12 · Agosto 5 módulos)"]
  },
  tailandes: {
    "Tailandés 1": [
      "Comisión C · Sábados de 16:00 a 19:00 hs. (Inicia 18/07 · Finaliza 10/10 · Julio 4 módulos)",
      "Comisión D · Sábados de 16:00 a 19:00 hs. (Inicia 24/10 · Finaliza 09/01 · Octubre 4 módulos)"
    ],
    "Tailandés 2": ["Comisión B · Lunes de 21:00 a 00:00 hs. (Inicia 24/08 · Finaliza 14/12 · Agosto 5 módulos)"],
    "Tailandés 3": ["Comisión A · Domingos de 14:00 a 17:00 hs. (Inicia 23/08 · Finaliza 13/12 · Agosto 5 módulos)"]
  },
  ingles: {
    "Inglés A1": [
      "Comisión C · Grupo 1 · Jueves de 20:00 a 22:00 hs. (Inicia 20/08 · Finaliza 12/11 · Agosto 4 módulos)",
      "Comisión C · Grupo 2 · Jueves de 20:00 a 22:00 hs. (Inicia 20/08 · Finaliza 12/11 · Agosto 4 módulos)",
      "Comisión D · Sábados de 16:00 a 18:00 hs. (Inicia 19/09 · Finaliza 12/12 · Septiembre 4 módulos)",
      "Comisión E · Sábados de 17:00 a 19:00 hs. (Inicia 24/10 · Finaliza 09/01 · Octubre 4 módulos)"
    ],
    "Inglés A2": ["Comisión A · Miércoles de 20:00 a 22:00 hs. (Inicia 19/08 · Finaliza 11/11 · Agosto 4 módulos)"]
  },
  aleman: {
    "Alemán A1": ["Comisión B · Sábados de 16:00 a 19:00 hs. (Inicia 22/08 · Finaliza 12/12 · Agosto 5 módulos)"],
    "Alemán A2": ["Comisión B · Domingos de 14:00 a 17:00 hs. (Inicia 23/08 · Finaliza 13/12 · Agosto 5 módulos)"]
  },
  italiano: {
    "Italiano A1": ["Comisión B · Lunes de 20:00 a 22:00 hs. (Inicia 24/08 · Finaliza 16/11 · Agosto 4 módulos)"],
    "Italiano A2": ["Comisión A · Sábados de 17:00 a 19:00 hs. (Inicia 22/08 · Finaliza 14/11 · Agosto 4 módulos)"]
  }
};

// ---- Diferencias horarias vs Argentina ----
const tzDiff = {ARG:0, MEX:-3, BOL:-1, PRY:-1, CHL:-1, COL:-2, PER:-2, ECU:-2, PAN:-2, HND:-3, SLV:-3, CRI:-3};

function convertHorarios(nivHorarios, diff) {
  if (diff === 0) return nivHorarios;
  return nivHorarios.map(h => {
    return h.replace(/(\d{2}):(\d{2}) a (\d{2}):(\d{2})/g, (_, h1, m1, h2, m2) => {
      let nh1 = (parseInt(h1) + diff + 24) % 24;
      let nh2 = (parseInt(h2) + diff + 24) % 24;
      return `${String(nh1).padStart(2,'0')}:${m1} a ${String(nh2).padStart(2,'0')}:${m2}`;
    });
  });
}

// ---- PRECIOS por idioma y país ----
// Financiación: 4 cuotas para asiáticos+alemán · 3 cuotas para inglés e italiano
// ── TABLA COMPLETA DE DESCUENTOS POR IDIOMA Y PAÍS ──────────────────────────
// Fuentes: Cursos Agosto 2026_ (5m 3hs) · Curso Agosto 4 módulos 2026 (4m 3hs)
//          Cursos 2 hs Ing Marzo 2026_ (4m 2hs) · Cursos 2hs con certif UAI FR,I (4m 2hs)
const tablaDescuentos = {
  // ── Japonés / Coreano / Chino / Alemán — 5 módulos · 3hs
  // Fuente: "Cursos Agosto 2026_"  Reg: ARG $1.105.000 / USD 527 / MXN $10.340
  japones_coreano_chino_aleman: {
    meses: 5, hs: "3 hs",
    cuotas: 4,
    ARG: { reg:"1.105.000", d45:"628.000", d40:"681.000", d35:"734.000", d30:"787.000", d25:"840.000", d20:"893.000", d15:"946.000" },
    MEX: { reg:"10.340",    d45:"5.950",   d40:"6.440",   d35:"6.920",   d30:"7.410",   d25:"7.900",   d20:"8.390",   d15:"8.880"   },
    USD: { reg:"527",       d45:"305",     d40:"330",     d35:"355",     d30:"380",     d25:"405",     d20:"429",     d15:"454"     }
  },
  // ── Comisiones de julio — 4 módulos · 3hs
  tailandes1: {
    meses: 4, hs: "3 hs",
    cuotas: 3,
    ARG: { reg:"945.000", d45:"540.000", d40:"585.000", d35:"630.000", d30:"675.000", d25:"720.000", d20:"765.000", d15:"810.000" },
    MEX: { reg:"8.720",   d45:"5.060",   d40:"5.460",   d35:"5.870",   d30:"6.280",   d25:"6.690",   d20:"7.090",   d15:"7.500"   },
    USD: { reg:"445",     d45:"260",     d40:"281",     d35:"302",     d30:"322",     d25:"343",     d20:"364",     d15:"384"     }
  },
  // ── Tailandés 2 y 3 — 5 módulos · 3hs (Cursos Agosto 2026_)
  tailandes2: {
    meses: 5, hs: "3 hs",
    cuotas: 4,
    ARG: { reg:"1.105.000", d45:"628.000", d40:"681.000", d35:"734.000", d30:"787.000", d25:"840.000", d20:"893.000", d15:"946.000" },
    MEX: { reg:"10.340",    d45:"5.950",   d40:"6.440",   d35:"6.920",   d30:"7.410",   d25:"7.900",   d20:"8.390",   d15:"8.880"   },
    USD: { reg:"527",       d45:"305",     d40:"330",     d35:"355",     d30:"380",     d25:"405",     d20:"429",     d15:"454"     }
  },
  // ── Inglés A1/A2 — 4 módulos · 2hs · SIN cert UAI
  // Fuente: "Cursos 2 hs Ing Marzo 2026_"  Reg: ARG $396.000 / USD 185 / MXN $3.650
  ingles: {
    meses: 4, hs: "2 hs",
    cuotas: 3,
    ARG: { reg:"396.000", d30:"276.000", d25:"296.000", d20:"316.000", d15:"336.000" },
    MEX: { reg:"3.650",   d30:"2.540",   d25:"2.720",   d20:"2.900",   d15:"3.090"   },
    USD: { reg:"185",     d30:"129",     d25:"138",     d20:"147",     d15:"157"     }
  },
  // ── Italiano A1/A2 — 4 módulos · 2hs · CON cert UAI
  // Fuente: "Cursos 2hs con certif UAI FR, I"  Reg: ARG $442.000 / USD 217 / MXN $4.250
  italiano: {
    meses: 4, hs: "2 hs",
    cuotas: 3,
    ARG: { reg:"442.000", d30:"322.000", d25:"342.000", d20:"362.000", d15:"381.000" },
    MEX: { reg:"4.250",   d30:"3.140",   d25:"3.320",   d20:"3.500",   d15:"3.690"   },
    USD: { reg:"217",     d30:"162",     d25:"171",     d20:"180",     d15:"189"     }
  }
};

function getTablaKey(idioma, nivel) {
  if (["japones","coreano","chino","aleman"].includes(idioma)) return "japones_coreano_chino_aleman";
  if (idioma === "tailandes") return (nivel === "Tailandés 1") ? "tailandes1" : "tailandes2";
  return idioma;
}

function getPrecioJulio4Modulos(pais, descKey) {
  return getPrecio('tailandes', pais, descKey, 'Tailandés 1');
}

function parsePrecioNumero(valor) {
  return parseFloat((valor || '0').replace(/\./g,'').replace(',','.'));
}

function setCuotasMax(selectId, maxCuotas, fallback = maxCuotas) {
  const select = document.getElementById(selectId);
  if (!select) return fallback;
  Array.from(select.options).forEach(opt => {
    const val = parseInt(opt.value, 10);
    opt.disabled = val > maxCuotas;
  });
  let value = parseInt(select.value, 10) || fallback;
  if (value > maxCuotas) {
    value = maxCuotas;
    select.value = String(value);
  }
  return value;
}

function buildFinanciacionLine(p, cuotas, precioOverride = null, label = 'Financiación') {
  const precioHoy = precioOverride || p.precio_hoy;
  const precioNum = parsePrecioNumero(precioHoy);
  if (cuotas <= 1) {
    return `🛡️ *${label}:* pago total de *${p.simbolo}${precioHoy}* vía transferencia.`;
  }
  const cuotaCalc = precioNum > 0 ? Math.round(precioNum / cuotas).toLocaleString('es-AR') : '—';
  return `🛡️ *${label}:* ${cuotas} cuotas fijas de *${p.simbolo}${cuotaCalc}* vía transferencia.`;
}

function getPaisKey(pais) {
  if (pais === 'ARG') return 'ARG';
  if (pais === 'MEX') return 'MEX';
  return 'USD';
}

function getSimbolo(pais) {
  return (pais === 'ARG' || pais === 'MEX') ? "$" : "USD ";
}

function getDescuentosDisponibles(idioma, nivel) {
  const key = getTablaKey(idioma, nivel);
  const t = tablaDescuentos[key];
  const row = t.ARG;
  const all = [
    {pct:"45%", key:"d45"}, {pct:"40%", key:"d40"}, {pct:"35%", key:"d35"},
    {pct:"30%", key:"d30"}, {pct:"25%", key:"d25"}, {pct:"20%", key:"d20"},
    {pct:"15%", key:"d15"}
  ];
  return all.filter(o => row[o.key] != null);
}

function getPrecio(idioma, pais, descKey, nivel) {
  const tKey = getTablaKey(idioma, nivel);
  const pKey = getPaisKey(pais);
  const t = tablaDescuentos[tKey];
  const row = t[pKey];
  const simbolo = getSimbolo(pais);
  const opts = getDescuentosDisponibles(idioma, nivel);
  const dk = descKey || (opts.find(o => o.key === 'd35') || opts[0])?.key || 'd35';
  const pct = opts.find(o => o.key === dk)?.pct || dk.replace('d','') + '%';
  const cuotaNum = t.cuotas;
  const precioHoy = row[dk] || row.d30;
  return { precio_reg: row.reg, descuento: pct, precio_hoy: precioHoy, cuotas: cuotaNum, simbolo, meses: t.meses, hs: t.hs };
}

function parseMoneyValue(value) {
  return parseFloat(String(value || '0').replace(/\./g,'').replace(',','.')) || 0;
}

function formatMoneyValue(num, pais) {
  if (pais === 'ARG') return Math.round(num / 1000) * 1000;
  if (pais === 'MEX') return Math.round(num / 10) * 10;
  return Math.round(num);
}

function formatMoneyText(num, pais) {
  return formatMoneyValue(num, pais).toLocaleString('es-AR');
}

function getPromoMundialPrecio(idioma, nivel, pais, descKey) {
  const tKey = getTablaKey(idioma, nivel);
  const pKey = getPaisKey(pais);
  const t = tablaDescuentos[tKey];
  const row = t[pKey];
  const simbolo = getSimbolo(pais);
  const pctNum = descKey === 'd35' ? 35 : 25;
  const precioRegNum = parseMoneyValue(row.reg);
  const precioHoy = row[descKey] || formatMoneyText(precioRegNum * (1 - pctNum / 100), pais);
  const precioNum = parseMoneyValue(precioHoy);
  const cuotaCalc = precioNum > 0 ? formatMoneyText(precioNum / t.cuotas, pais) : '—';

  return {
    precio_reg: row.reg,
    precio_hoy: precioHoy,
    descuento: `${pctNum}%`,
    cuotas: t.cuotas,
    simbolo,
    meses: t.meses,
    hs: t.hs,
    cuotaCalc
  };
}

function updatePromoMundialCotizacion() {
  const target = document.getElementById('msg-promo-mundial-cotizacion');
  if (!target) return;

  const pais = document.getElementById('promo-mundial-pais')?.value || 'ARG';
  const [idioma, nivel] = (document.getElementById('promo-mundial-curso')?.value || 'japones|Japonés 1').split('|');
  const descKey = document.getElementById('promo-mundial-descuento')?.value || 'd25';
  const p = getPromoMundialPrecio(idioma, nivel, pais, descKey);
  const paisLabel = paisNombres[pais] || 'Internacional';

  target.innerText = `Te comparto la cotización de la *Promo Mundial* para *${nivel}* en ${paisLabel}: ⚽

💳 *PROMO MUNDIAL ${p.descuento} OFF*
❌ Valor regular: ${p.simbolo}${p.precio_reg}
✅ *Inversión con promo: ${p.simbolo}${p.precio_hoy}* (curso completo)
🛡️ *Financiación:* ${p.cuotas} cuotas fijas de *${p.simbolo}${p.cuotaCalc}* vía transferencia.

La promo se aplica por tiempo limitado y queda sujeta a disponibilidad de cupo en la comisión elegida.`;
}

// ---- TEXTO DE INCLUSIONES según parámetros correctos ----
function buildIncluyeStr(idioma, nivel) {
  const cfg = idiomaConfig[idioma];
  if (cfg.preparacion(nivel)) {
    // Preparación para examen + inmersión + método
    return `${cfg.examStr} clases de Inmersión Cultural y el respaldo de nuestro método propio.`;
  } else if (cfg.inmersion) {
    // Solo inmersión + método (sin prep. examen)
    return "Clases de Inmersión Cultural y el respaldo de nuestro método propio.";
  } else {
    // Solo método (inglés e italiano: sin inmersión ni prep. examen)
    return "El respaldo de nuestro método propio.";
  }
}

// ---- CONSTRUCCIÓN DEL MENSAJE COMPLETO ----
function buildMsg(pais, idioma, nivel, horarios, cierre_tipo, descKey) {
  const cfg = idiomaConfig[idioma];
  const p = getPrecio(idioma, pais, descKey, nivel);
  const horStr = horarios.map(h => `• ${h}`).join('\n');
  const incluyeStr = buildIncluyeStr(idioma, nivel);
  const hs = ["japones","coreano","chino","aleman","tailandes"].includes(idioma) ? "3 hs semanales" : "2 hs semanales";
  const durStr = `${p.meses} módulos · ${hs} en vivo`;
  // Compute cuota from precio_hoy string
  const precioNum = parseFloat((p.precio_hoy || '0').replace(/\./g,'').replace(',','.'));
  const cuotaCalc = precioNum > 0 ? Math.round(precioNum / p.cuotas).toLocaleString('es-AR') : '—';
  const finStr = `${p.cuotas} cuotas fijas de *${p.simbolo}${cuotaCalc}* vía transferencia.`;
  const cierreTexto = cierre_tipo === 'cupos'
    ? 'Como los cupos de agosto ya se están reservando... ¿Te aseguro tu lugar para este nuevo ciclo o preferís que revisemos si queda alguna vacante para iniciar de inmediato? 👇'
    : (idioma === 'japones'
        ? 'Tengo solo un par de lugares con esta promo.\n\n👉 ¿Te reservo tu cupo o tenés alguna pregunta con respecto al curso? 👇'
        : 'Tengo solo un par de lugares con esta promo.\n\n👉 ¿Te reservo tu cupo o preferís ver el temario primero? 👇');

  const mesInicio = (idioma === 'tailandes' && nivel === 'Tailandés 1') ? 'JULIO' : 'AGOSTO';
  return `¡Hola! 👋 Soy ${nombreActual}, ${getTitulo(nombreActual)} de IKARUGA. ⛩️

Te contacto por tu interés en *${nivel}*. En ${mesInicio} abrimos nuevas comisiones con ${cfg.cert} y me encantaría que te sumes.

✨ *Incluye:* ${incluyeStr}

📅 *Horarios Disponibles (${paisNombres[pais]}):*
${horStr}

⏱️ *Duración:* ${durStr}
💳 *PREVENTA ${p.descuento} OFF* ⚡
❌ Valor Regular: ${p.simbolo}${p.precio_reg}
✅ *Inversión HOY: ${p.simbolo}${p.precio_hoy}* (Nivel completo).
🛡️ *Financiación:* ${finStr}

${cierreTexto}`;
}

// ---- NIVELES Y TIPO DE CIERRE ----
const nivelesPorIdioma = {
  japones:   [{nivel:"Japonés 1",cierre:"cupos"},{nivel:"Japonés 2",cierre:"cupos"},{nivel:"Japonés 3",cierre:"promo"},{nivel:"Japonés 4",cierre:"promo"}],
  coreano:   [{nivel:"Coreano 1",cierre:"cupos"},{nivel:"Coreano 2",cierre:"promo"}],
  chino:     [{nivel:"Chino 1",cierre:"cupos"},{nivel:"Chino 2",cierre:"promo"}],
  tailandes: [{nivel:"Tailandés 1",cierre:"promo"},{nivel:"Tailandés 2",cierre:"promo"},{nivel:"Tailandés 3",cierre:"promo"}],
  ingles:    [{nivel:"Inglés A1",cierre:"promo"},{nivel:"Inglés A2",cierre:"promo"}],
  aleman:    [{nivel:"Alemán A1",cierre:"promo"},{nivel:"Alemán A2",cierre:"promo"}],
  italiano:  [{nivel:"Italiano A1",cierre:"promo"},{nivel:"Italiano A2",cierre:"promo"}]
};

const paisNombres = {ARG:"Argentina",MEX:"México (CDMX)",BOL:"Bolivia",PRY:"Paraguay",CHL:"Chile continental",COL:"Colombia",PER:"Perú",ECU:"Ecuador",PAN:"Panamá",HND:"Honduras",SLV:"El Salvador",CRI:"Costa Rica"};
const idiomaNombres = {japones:"Japonés",coreano:"Coreano",chino:"Chino Mandarín",tailandes:"Tailandés",ingles:"Inglés",aleman:"Alemán",italiano:"Italiano"};

function getMesesDisponibles(idioma, nivel) {
  const horarios = (horariosARG[idioma]?.[nivel] || []).filter(horarioTieneCupo);
  const meses = [];
  if (horarios.some(h => /julio/i.test(h))) meses.push({ value: 'julio', label: 'Julio' });
  if (horarios.some(h => /agosto/i.test(h))) meses.push({ value: 'agosto', label: 'Agosto' });
  if (horarios.some(h => /septiembre/i.test(h))) meses.push({ value: 'septiembre', label: 'Septiembre' });
  if (horarios.some(h => /octubre/i.test(h))) meses.push({ value: 'octubre', label: 'Octubre' });
  return meses.length ? meses : [{ value: 'todos', label: 'Consultar mes' }];
}

function getCotizadorPrecio(idioma, nivel, pais, descKey, mes) {
  const esJpSeptiembre4 = idioma === 'japones' && ["Japonés 1", "Japonés 2"].includes(nivel) && mes === 'septiembre';
  const esJp1Julio4 = idioma === 'japones' && nivel === 'Japonés 1' && (mes === 'julio' || mes === 'todos');
  const esOctubre4 = mes === 'octubre' && (
    (idioma === 'japones' && nivel === 'Japonés 1') ||
    (idioma === 'coreano' && nivel === 'Coreano 1') ||
    (idioma === 'chino' && nivel === 'Chino 1') ||
    (idioma === 'tailandes' && nivel === 'Tailandés 1')
  );
  if (esJpSeptiembre4 || esJp1Julio4 || esOctubre4) {
    return getPrecioJulio4Modulos(pais, descKey);
  }
  return getPrecio(idioma, pais, descKey, nivel);
}

function getCotizadorMaxCuotas(idioma, nivel, mes) {
  if (mes === 'septiembre' || mes === 'octubre') return 4;
  const esJpSeptiembre4 = idioma === 'japones' && ["Japonés 1", "Japonés 2"].includes(nivel) && mes === 'septiembre';
  const esJp1Julio4 = idioma === 'japones' && nivel === 'Japonés 1' && (mes === 'julio' || mes === 'todos');
  const esOctubre4 = mes === 'octubre' && (
    (idioma === 'japones' && nivel === 'Japonés 1') ||
    (idioma === 'coreano' && nivel === 'Coreano 1') ||
    (idioma === 'chino' && nivel === 'Chino 1') ||
    (idioma === 'tailandes' && nivel === 'Tailandés 1')
  );
  if (esJpSeptiembre4 || esJp1Julio4 || esOctubre4 || (idioma === 'tailandes' && nivel === 'Tailandés 1')) return 3;
  const key = getTablaKey(idioma, nivel);
  return tablaDescuentos[key]?.cuotas || 4;
}

function updateCotizadorNiveles() {
  const idioma = document.getElementById('ca-idioma')?.value || 'japones';
  const nivelSel = document.getElementById('ca-nivel');
  if (!nivelSel) return;
  nivelSel.innerHTML = (nivelesPorIdioma[idioma] || []).map(n => `<option value="${n.nivel}">${n.nivel}</option>`).join('');
  updateCotizadorMeses();
}

function updateCotizadorMeses() {
  const idioma = document.getElementById('ca-idioma')?.value || 'japones';
  const nivel = document.getElementById('ca-nivel')?.value || '';
  const mesSel = document.getElementById('ca-mes');
  if (!mesSel) return;
  mesSel.innerHTML = getMesesDisponibles(idioma, nivel).map(m => `<option value="${m.value}">${m.label}</option>`).join('');
  updateCotizadorDescuentos();
}

function updateCotizadorDescuentos() {
  const idioma = document.getElementById('ca-idioma')?.value || 'japones';
  const nivel = document.getElementById('ca-nivel')?.value || '';
  const descSel = document.getElementById('ca-descuento');
  if (!descSel) return;
  const opts = getDescuentosDisponibles(idioma, nivel);
  descSel.innerHTML = opts.map(o => `<option value="${o.key}"${o.key === 'd35' ? ' selected' : ''}>${o.pct} OFF</option>`).join('');
  updateCotizadorAgil();
}

function updateCotizadorAgil() {
  const idioma = document.getElementById('ca-idioma')?.value || 'japones';
  const nivel = document.getElementById('ca-nivel')?.value || 'Japonés 1';
  const mes = document.getElementById('ca-mes')?.value || 'todos';
  const pais = document.getElementById('ca-pais')?.value || 'ARG';
  const descKey = document.getElementById('ca-descuento')?.value || 'd35';
  const target = document.getElementById('cotizador-agil-resultado');
  if (!target) return;

  const horariosBase = filtrarHorariosPorMes(horariosARG[idioma]?.[nivel] || [], mes);
  const horariosLocal = convertHorarios(horariosBase, tzDiff[pais] ?? 0);
  const p = getCotizadorPrecio(idioma, nivel, pais, descKey, mes);
  const maxCuotas = getCotizadorMaxCuotas(idioma, nivel, mes);
  const cuotas = setCuotasMax('ca-cuotas', maxCuotas, maxCuotas);
  const mesLabel = mes === 'todos' ? 'mes disponible' : mes.charAt(0).toUpperCase() + mes.slice(1);
  const lineasHorarios = horariosLocal.length ? horariosLocal.map(h => `• ${h}`).join('\n') : '• Consultar disponibilidad.';

  target.innerText = `Te comparto la cotización para *${nivel}* (${mesLabel}) en ${paisNombres[pais]}:

📅 *Horarios con cupo:*
${lineasHorarios}

💳 *PREVENTA ${p.descuento} OFF* ⚡
❌ Valor Regular: ${p.simbolo}${p.precio_reg}
✅ *Inversión HOY: ${p.simbolo}${p.precio_hoy}* (todo el curso completo).
${buildFinanciacionLine(p, cuotas)}

Si este horario te queda bien, puedo ayudarte a avanzar con la inscripción.`;
}

function updateDescuentoSelector() {
  const idioma = document.getElementById('pf-idioma').value;
  const wrap = document.getElementById('pf-descuento-wrap');
  const sel = document.getElementById('pf-descuento');
  if (!idioma) { wrap.style.display = 'none'; return; }
  const defaultNivel = nivelesPorIdioma[idioma]?.[0]?.nivel || '';
  const opts = getDescuentosDisponibles(idioma, defaultNivel);
  sel.innerHTML = opts.map((o, i) => {
    const label = i === 0 ? `${o.pct} 🔥 (máximo)` : o.pct;
    return `<option value="${o.key}">${label}</option>`;
  }).join('');
  // default to 35% if available, else first
  const def = opts.find(o => o.key === 'd35') || opts[0];
  sel.value = def.key;
  wrap.style.display = 'block';
}

function filterPromoFull() {
  const pais = document.getElementById('pf-pais').value;
  const idioma = document.getElementById('pf-idioma').value;
  const descKey = document.getElementById('pf-descuento')?.value || null;
  const placeholder = document.getElementById('pf-placeholder');
  const results = document.getElementById('pf-results');

  if (!pais || !idioma) {
    placeholder.style.display = 'block';
    results.style.display = 'none';
    return;
  }

  const niveles = nivelesPorIdioma[idioma];
  const diff = tzDiff[pais];

  // Get price using first nivel to determine cuotas/label for header
  const pHeader = getPrecio(idioma, pais, descKey, niveles[0].nivel);

  placeholder.style.display = 'none';
  results.style.display = 'block';

  let html = `<div style="margin-bottom:16px;padding:12px 16px;background:var(--teal-light);border-radius:10px;font-size:13px;color:var(--teal);">
    <strong>${paisNombres[pais]} · ${idiomaNombres[idioma]}</strong> — ${niveles.length} nivel(es) disponibles · <strong>${pHeader.descuento} OFF</strong> · ${pHeader.cuotas} cuotas
  </div>`;

  niveles.forEach((n, i) => {
    const horariosBase = horariosARG[idioma][n.nivel] || [];
    const horariosLocal = convertHorarios(horariosBase, diff);
    const msg = buildMsg(pais, idioma, n.nivel, horariosLocal, n.cierre, descKey);
    const msgId = `pf-msg-${pais}-${idioma}-${i}`;
    html += `<div class="msg-card">
      <div class="msg-card-header">
        <div class="msg-card-title"><span class="level-pill">${n.nivel}</span></div>
        <button class="copy-btn" onclick="copyMsgText('${msgId}',this)">Copiar</button>
      </div>
      <div class="msg-body" id="${msgId}">${msg}</div>
    </div>`;
  });

  results.innerHTML = html;
}

function copyMsgText(id, btn) {
  const el = document.getElementById(id);
  if (!el) return;
  navigator.clipboard.writeText(el.innerText).then(() => {
    btn.textContent = '✓ Copiado';
    btn.classList.add('copied');
    setTimeout(() => { btn.textContent = 'Copiar'; btn.classList.remove('copied'); }, 2000);
  });
}



// ---- NOMBRE DEL CLOSER ----
let nombreActual = 'Isabel';

function updateNombre(nombre) {
  nombreActual = nombre;
  // Update all static message bodies
  document.querySelectorAll('.msg-body').forEach(el => {
    el.textContent = el.textContent; // trigger re-render via dataset
  });
  // Re-render static messages from source
  renderStaticMessages(nombre);
  if (typeof initializePostCallDefaults === 'function') initializePostCallDefaults();
  if (typeof updateExoMessage === 'function') updateExoMessage();
}

const mensajesOriginales = {};

function initMessages() {
  document.querySelectorAll('.msg-body[id]').forEach(el => {
    mensajesOriginales[el.id] = el.innerText;
  });
}

const nombresFemeninos = ['Isabel', 'Laura', 'Natalia'];

function getTitulo(nombre) {
  return nombresFemeninos.includes(nombre)
    ? 'tu asesora académica'
    : 'tu asesor académico';
}

function renderStaticMessages(nombre) {
  const titulo = getTitulo(nombre);
  document.querySelectorAll('.msg-body[id]').forEach(el => {
    if (mensajesOriginales[el.id]) {
      el.innerText = mensajesOriginales[el.id]
        .replace(/\{NOMBRE\}/g, nombre)
        .replace(/\{TITULO\}/g, titulo);
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initMessages();
  renderStaticMessages(nombreActual);
  initTestimonials();
  updateCotizadorNiveles();
  hideCursosCompletos();
  normalizePostCallCardTitles();
  updatePromoMundialCotizacion();
  initializePostCallDefaults();
  updateJp1HorarioPais();
  updateJp1Precio();
  updateJp1Pago();
  updateKr1HorarioPais();
  updateKr1Precio();
  updateKr1Pago();
  updateZh1HorarioPais();
  updateZh1Precio();
  updateZh1Pago();
  updateTh1HorarioPais();
  updateTh1Precio();
  updateTh1Pago();
  updateEnA1HorarioPais();
  updateEnA1Precio();
  updateEnA1Pago();
  updateDeA1HorarioPais();
  updateDeA1Precio();
  updateDeA1Pago();
  updateItA1HorarioPais();
  updateItA1Precio();
  updateItA1Pago();
  updateExoLevels();
  updateExoMessage();
});


let testimonialActiveFilter = 'todos';

const testimonialProfiles = [
  {
    match: 'Juan José Montana Obando',
    idioma: 'japones',
    tags: ['japones', 'certificacion', 'viaje', 'continuidad', 'cultura'],
    badges: ['Japonés', 'Certificación', 'Viaje a Japón'],
    use: 'Ideal para leads que sueñan con viajar a Japón, quieren un objetivo cultural concreto o valoran la certificación.',
    intro: 'Te comparto el caso de un alumno que empezó con una motivación muy parecida: acercarse más a Japón y avanzar paso a paso con el idioma.',
    linkedin: 'https://www.linkedin.com/posts/jmontanao_jhhjnwngw-languagelearning-ouhjalefa-share-7460140572909977600-vmdB/?utm_source=share&utm_medium=member_desktop&rcm=ACoAACUzJKMBJVT-uKZ0dGpXh7_LfSlagb7K4ps'
  },
  {
    match: 'Agustín Dinapoli',
    idioma: 'aleman',
    tags: ['aleman', 'certificacion', 'profesional', 'trabajo'],
    badges: ['Alemán', 'Perfil profesional', 'Certificación'],
    use: 'Ideal para leads que buscan abrir puertas laborales, sumar un idioma a su perfil profesional o estudiar con una meta clara.',
    intro: 'Te comparto un caso de un alumno que usó el idioma como una herramienta para crecer profesional y personalmente.',
    linkedin: 'https://www.linkedin.com/posts/agustin-dinapoli-7b4520265_hoy-finalic%C3%A9-el-curso-de-alem%C3%A1n-a2-en-ikaruga-share-7363898919136673796-Zb8A/?utm_source=share&utm_medium=member_desktop&rcm=ACoAACUzJKMBJVT-uKZ0dGpXh7_LfSlagb7K4ps'
  },
  {
    match: 'Nicole Perrone',
    idioma: 'japones',
    tags: ['japones', 'primer-paso', 'motivacion', 'continuidad'],
    badges: ['Japonés', 'Primer paso', 'Motivación'],
    use: 'Ideal para leads que sienten que el japonés es una meta pendiente y necesitan imaginar el primer paso como algo posible.',
    intro: 'Te comparto una experiencia de una alumna que también tenía el japonés como una meta pendiente y se animó a empezar.',
    linkedin: 'https://www.linkedin.com/posts/perronenicole_siempre-me-gust%C3%B3-aprender-cosas-nuevas-y-share-7383632436045459456-mKyy/?utm_source=share&utm_medium=member_desktop&rcm=ACoAACUzJKMBJVT-uKZ0dGpXh7_LfSlagb7K4ps'
  },
  {
    match: 'Darian Viridiana López Ibarra',
    idioma: 'tailandes',
    tags: ['tailandes', 'viaje', 'cultura', 'primer-paso'],
    badges: ['Tailandés', 'Viaje', 'Cultura'],
    use: 'Ideal para leads interesados en viajar, cultura asiática o aprender lo básico para desenvolverse con más seguridad.',
    intro: 'Te comparto una experiencia muy linda de una alumna que empezó tailandés pensando en viajar y conectar mejor con la cultura.',
    linkedin: 'https://www.linkedin.com/posts/darian-viridiana-l%C3%B3pez-ibarra-213669299_aprendertailandaezs-idiomas-aprendizajecontinuo-share-7414852200751030272-H3X4/?utm_source=share&utm_medium=member_desktop&rcm=ACoAACUzJKMBJVT-uKZ0dGpXh7_LfSlagb7K4ps'
  },
  {
    match: 'Micaela Casella',
    idioma: 'chino',
    tags: ['chino', 'certificacion', 'primer-paso', 'motivacion'],
    badges: ['Chino Mandarín', 'Certificación', 'Primer paso'],
    use: 'Ideal para leads que ven el chino como un desafío grande y necesitan ver que se puede empezar desde nivel inicial.',
    intro: 'Te comparto el caso de una alumna que empezó Chino Mandarín desde nivel inicial y terminó celebrando su certificación.',
    linkedin: 'https://www.linkedin.com/posts/micaela-casella-soc_chino-mandarin-casella-micaela-ugcPost-7407823775443959808-pfqm/?utm_source=share&utm_medium=member_desktop&rcm=ACoAACUzJKMBJVT-uKZ0dGpXh7_LfSlagb7K4ps'
  }
];

function initTestimonials() {
  const grid = document.getElementById('testimonios-grid');
  if (!grid) return;
  Array.from(grid.children).forEach(card => {
    const profile = testimonialProfiles.find(p => card.textContent.includes(p.match));
    if (!profile || card.dataset.ready === '1') return;
    const quote = card.querySelector('p')?.textContent.trim() || '';
    const attribution = `— ${profile.match} · ${profile.badges[0]} · IKARUGA Servicios`;
    const fullCopy = `${profile.intro}\n\n${quote}\n${attribution}\n\nLinkedIn: ${profile.linkedin}`;
    card.dataset.ready = '1';
    card.dataset.idioma = profile.idioma;
    card.dataset.tags = profile.tags.join(' ');
    card.dataset.search = `${card.textContent} ${profile.badges.join(' ')} ${profile.use}`.toLowerCase();

    const content = card.querySelector('div[style*="padding:16px"]');
    if (!content) return;

    const meta = document.createElement('div');
    meta.className = 'testimonial-meta';
    meta.innerHTML = profile.badges.map((badge, i) => {
      const cls = i === 0 ? 'badge-teal' : (badge === 'Certificación' ? 'badge-gold' : 'badge-accent');
      return `<span class="badge ${cls}">${badge}</span>`;
    }).join('');
    content.insertBefore(meta, content.children[1] || null);

    const use = document.createElement('div');
    use.className = 'testimonial-use';
    use.innerHTML = `<strong>Cuándo usarlo:</strong> ${profile.use}`;
    const textBlock = content.querySelector('p');
    content.insertBefore(use, textBlock);

    const actions = content.querySelector('div[style*="display:flex"][style*="gap:8px"]');
    if (actions) {
      actions.innerHTML = '';
      actions.style.display = 'block';
      const box = document.createElement('div');
      box.className = 'testimonial-copy-box';

      const label = document.createElement('div');
      label.className = 'testimonial-copy-label';
      label.textContent = 'Texto para copiar y pegar';

      const area = document.createElement('textarea');
      area.className = 'testimonial-copy-text';
      area.readOnly = true;
      area.value = fullCopy;
      area.onclick = () => area.select();

      const linkedin = document.createElement('div');
      linkedin.className = 'testimonial-linkedin-line';
      linkedin.innerHTML = `<strong>LinkedIn:</strong> ${profile.linkedin}`;

      box.appendChild(label);
      box.appendChild(area);
      box.appendChild(linkedin);
      actions.appendChild(box);
    }
  });
  filterTestimonials();
}

function setTestimonialFilter(filter, btn) {
  testimonialActiveFilter = filter;
  document.querySelectorAll('.testimonial-filter').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  filterTestimonials();
}

function filterTestimonials() {
  const grid = document.getElementById('testimonios-grid');
  if (!grid) return;
  const term = (document.getElementById('testimonial-search')?.value || '').trim().toLowerCase();
  let visible = 0;
  Array.from(grid.children).forEach(card => {
    const matchesFilter = testimonialActiveFilter === 'todos' || (card.dataset.tags || '').includes(testimonialActiveFilter);
    const matchesSearch = !term || (card.dataset.search || card.textContent.toLowerCase()).includes(term);
    const show = matchesFilter && matchesSearch;
    card.classList.toggle('testimonial-hidden', !show);
    if (show) visible++;
  });
  const count = document.getElementById('testimonial-count');
  if (count) count.textContent = `${visible} de ${grid.children.length} testimonios`;
}

function copyTestimonio(texto, btn) {
  navigator.clipboard.writeText(texto).then(() => {
    const orig = btn.innerHTML;
    btn.innerHTML = '✓ ¡Copiado!';
    btn.style.background = 'var(--green)';
    setTimeout(() => { btn.innerHTML = orig; btn.style.background = 'var(--ink)'; }, 2000);
  });
}

function downloadTestimonio(dataUrl, filename, btn) {
  const a = document.createElement('a');
  a.href = dataUrl;
  a.download = filename;
  a.click();
  const orig = btn.innerHTML;
  btn.innerHTML = '✓ Descargando...';
  btn.style.background = 'var(--green)';
  setTimeout(() => { btn.innerHTML = orig; btn.style.background = 'var(--teal)'; }, 2000);
}

function showSection(id) {
  document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  event.currentTarget.classList.add('active');
  window.scrollTo(0,0);
}

function hideCursosCompletos() {
  document.querySelectorAll('table tbody tr').forEach(el => {
    const txt = el.innerText || '';
    if (/(cupos?\s+completos?|completo|curso\s+cerrado|cerrado)/i.test(txt)) {
      el.style.display = 'none';
    }
  });
}

function normalizePostCallCardTitles() {
  document.querySelectorAll('.msg-card-title').forEach(el => {
    el.textContent = el.textContent.replace(/ · (Coreano 1|Chino 1|Tailandés 1|Inglés A1|Alemán A1|Italiano A1)$/u, '');
  });
}

function showTab(groupId, tabId, btn) {
  const group = document.getElementById(groupId);
  const container = btn.closest('.section') || document.body;
  container.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  container.querySelectorAll('.tab-content').forEach(t => t.classList.remove('active'));
  btn.classList.add('active');
  document.getElementById(tabId).classList.add('active');
}

function copyMsg(id, btn) {
  const text = document.getElementById(id).innerText;
  navigator.clipboard.writeText(text).then(() => {
    btn.textContent = '✓ Copiado';
    btn.classList.add('copied');
    setTimeout(() => { btn.textContent = 'Copiar'; btn.classList.remove('copied'); }, 2000);
  });
}

const exoLevels = {
  "Japonés": ["Japonés 1", "Japonés 2", "Japonés 3", "Japonés 4"],
  "Coreano": ["Coreano 1", "Coreano 2"],
  "Chino Mandarín": ["Chino 1", "Chino 2"],
  "Tailandés": ["Tailandés 1", "Tailandés 2", "Tailandés 3"],
  "Alemán": ["Alemán A1", "Alemán A2"],
  "Inglés": ["Inglés A1", "Inglés A2"],
  "Italiano": ["Italiano A1", "Italiano A2"]
};

const exoIdiomaMap = {
  "Japonés": "japones",
  "Coreano": "coreano",
  "Chino Mandarín": "chino",
  "Tailandés": "tailandes",
  "Alemán": "aleman",
  "Inglés": "ingles",
  "Italiano": "italiano"
};

function updateExoLevels() {
  const idioma = document.getElementById('exo-idioma')?.value || 'Japonés';
  const actual = document.getElementById('exo-nivel-actual');
  const siguiente = document.getElementById('exo-nivel-siguiente');
  if (!actual || !siguiente) return;
  const niveles = exoLevels[idioma] || exoLevels["Japonés"];
  actual.innerHTML = niveles.map(n => `<option value="${n}">${n}</option>`).join('');
  siguiente.innerHTML = niveles.map(n => `<option value="${n}">${n}</option>`).join('');
  updateExoSuggestedNext();
  updateExoDiscounts();
  updateExoHorarios();
}

function updateExoSuggestedNext() {
  const idioma = document.getElementById('exo-idioma')?.value || 'Japonés';
  const actual = document.getElementById('exo-nivel-actual');
  const siguiente = document.getElementById('exo-nivel-siguiente');
  const niveles = exoLevels[idioma] || exoLevels["Japonés"];
  if (!actual || !siguiente || !niveles.length) return;
  const idx = niveles.indexOf(actual.value);
  const nextIndex = idx >= 0 && idx < niveles.length - 1 ? idx + 1 : idx;
  if (niveles[nextIndex]) siguiente.value = niveles[nextIndex];
}

function getExoIdiomaId() {
  const idioma = document.getElementById('exo-idioma')?.value || 'Japonés';
  return exoIdiomaMap[idioma] || 'japones';
}

function getExoPrecioMes(idiomaId, nivel) {
  const horarios = horariosARG[idiomaId]?.[nivel] || [];
  if (horarios.some(h => /septiembre/i.test(h))) return 'septiembre';
  if (horarios.some(h => /octubre/i.test(h))) return 'octubre';
  if (horarios.some(h => /julio/i.test(h))) return 'julio';
  if (horarios.some(h => /agosto/i.test(h))) return 'agosto';
  return 'todos';
}

function updateExoDiscounts() {
  const idiomaId = getExoIdiomaId();
  const nivel = document.getElementById('exo-nivel-siguiente')?.value || 'Japonés 2';
  const desc = document.getElementById('exo-descuento');
  if (!desc) return;
  const opts = getDescuentosDisponibles(idiomaId, nivel);
  const defaultKey = opts.some(o => o.key === 'd35') ? 'd35' : (opts.some(o => o.key === 'd30') ? 'd30' : opts[0]?.key);
  desc.innerHTML = opts.map(o => `<option value="${o.key}" ${o.key === defaultKey ? 'selected' : ''}>${o.pct} OFF</option>`).join('');
}

function getExoHorariosBase() {
  const idiomaId = getExoIdiomaId();
  const nivel = document.getElementById('exo-nivel-siguiente')?.value || 'Japonés 2';
  return (horariosARG[idiomaId]?.[nivel] || []).filter(horarioTieneCupo);
}

function updateExoHorarios() {
  const select = document.getElementById('exo-horario');
  if (!select) return;
  const pais = document.getElementById('exo-pais')?.value || 'ARG';
  const horariosLocal = convertHorarios(getExoHorariosBase(), tzDiff[pais] ?? 0);
  if (!horariosLocal.length) {
    select.innerHTML = '<option value="todos">Consultar próxima comisión disponible</option>';
    return;
  }
  const opciones = horariosLocal.map((h, i) => `<option value="${i}">${h.replace(/"/g, '&quot;')}</option>`).join('');
  select.innerHTML = `<option value="todos">Todos los horarios con cupo</option>${opciones}`;
}

function buildExoHorarioTexto(idiomaId, nivel, pais) {
  const horariosBase = (horariosARG[idiomaId]?.[nivel] || []).filter(horarioTieneCupo);
  if (!horariosBase.length) return '• Consultar próxima comisión disponible.';
  const horariosLocal = convertHorarios(horariosBase, tzDiff[pais] ?? 0);
  const horarioElegido = document.getElementById('exo-horario')?.value || 'todos';
  if (horarioElegido !== 'todos' && horariosLocal[Number(horarioElegido)]) {
    return `• ${horariosLocal[Number(horarioElegido)]}`;
  }
  return horariosLocal.map(h => `• ${h}`).join('\n');
}

function updateExoMessage() {
  const target = document.getElementById('msg-exo-generado');
  if (!target) return;
  const alumno = document.getElementById('exo-alumno')?.value || '[Nombre]';
  const idioma = document.getElementById('exo-idioma')?.value || 'Japonés';
  const idiomaId = getExoIdiomaId();
  const nivelActual = document.getElementById('exo-nivel-actual')?.value || `${idioma} 1`;
  const nivelSiguiente = document.getElementById('exo-nivel-siguiente')?.value || `${idioma} 2`;
  const pais = document.getElementById('exo-pais')?.value || 'ARG';
  const descKey = document.getElementById('exo-descuento')?.value || 'd35';
  const tono = document.getElementById('exo-tono')?.value || 'continuidad';
  const mesPrecio = getExoPrecioMes(idiomaId, nivelSiguiente);
  const precio = getCotizadorPrecio(idiomaId, nivelSiguiente, pais, descKey, mesPrecio);
  const maxCuotas = getCotizadorMaxCuotas(idiomaId, nivelSiguiente, mesPrecio);
  const cuotas = setCuotasMax('exo-cuotas', maxCuotas, maxCuotas);
  const horariosTexto = buildExoHorarioTexto(idiomaId, nivelSiguiente, pais);
  const paisLabel = paisNombres[pais] || 'tu país';
  const duracion = `${precio.meses} módulos · ${precio.hs} semanales en vivo`;
  const precioBloque = `📅 *Horarios disponibles (${paisLabel}):*
${horariosTexto}

⏱️ *Duración:* ${duracion}
💳 *Propuesta EXO ${precio.descuento} OFF*
❌ Valor regular: ${precio.simbolo}${precio.precio_reg}
✅ *Inversión para continuar: ${precio.simbolo}${precio.precio_hoy}* (nivel completo).
${buildFinanciacionLine(precio, cuotas)}`;

  const intro = `¡Hola ${alumno}! 👋 Soy ${nombreActual}, ${getTitulo(nombreActual)} de IKARUGA. ⛩️`;
  const cierre = `Si querés continuar, puedo ayudarte a reservar tu lugar en la comisión que mejor te quede.`;

  const mensajes = {
    continuidad: `${intro}

Te escribo porque ya venís haciendo tu recorrido con nosotros en *${nivelActual}* y quería invitarte a continuar con el siguiente paso: *${nivelSiguiente}*.

La idea es que no pierdas continuidad, sigas avanzando con una base ordenada y aproveches todo lo que ya construiste en ${idioma}.

${precioBloque}

${cierre}`,
    cupos: `${intro}

Te escribo porque estamos organizando los próximos grupos de *${nivelSiguiente}* y queríamos avisarte primero por ser parte de la comunidad IKARUGA.

Este es un buen momento para reservar tu continuidad antes de que se completen los cupos disponibles.

${precioBloque}

${cierre}`,
    calido: `${intro}

Espero que estés muy bien 😊

Quería escribirte personalmente para invitarte a seguir tu camino en ${idioma} con *${nivelSiguiente}*.

Ya diste un paso importante con *${nivelActual}*, y continuar ahora te ayuda a sostener ritmo, práctica y confianza con el idioma.

${precioBloque}

${cierre}`
  };

  target.innerText = mensajes[tono] || mensajes.continuidad;
}

const postCallLevelDetails = {
  'pc-jp': {
    benefitId: 'pc-jp-beneficios',
    pdfId: 'pc-jp-pdf',
    defaultPdfIntro: 'Te comparto también el PDF del programa para que puedas revisar con calma los contenidos, la modalidad y el recorrido del curso. 🇯🇵',
    levels: {
      'Japonés 1': {
        pdf: 'japones-i-programa-liviano.pdf',
        desc: `🇯🇵 *CURSO DE JAPONÉS I: NIVEL INICIAL*
Programa de formación integral con aval universitario

En IKARUGA combinamos la excelencia académica con una metodología diseñada para que realmente te comuniques.

Este nivel está pensado para que empieces desde cero con una base sólida y sientas que el japonés deja de ser algo lejano para convertirse en algo que podés leer, entender y empezar a usar.

📅 *MODALIDAD Y DURACIÓN*
• Duración: 5 módulos.
• Clases: 3 horas semanales en vivo (Zoom privado).
• Flexibilidad: Acceso 24/7 a nuestro Campus Virtual con lecciones, materiales y grabaciones de todas las clases.

📚 *¿QUÉ VAS A LOGRAR?*
• Leer y escribir tus primeros textos en Hiragana, Katakana y kanji iniciales.
• Formar frases simples con partículas, verbos de existencia y adjetivos básicos.
• Presentarte, saludar y desenvolverte en situaciones cotidianas con más seguridad.
• Entender el idioma desde su cultura: historia, costumbres, manga, anime y tradiciones.`,
        benefits: `✨ *BENEFICIOS EXCLUSIVOS IKARUGA*
⛩️ Ruta JLPT: 5 clases adicionales enfocadas para tu examen oficial N5.
🎎 Inmersión Total: 3 clases culturales.

🏆 *CERTIFICACIÓN Y RESPALDO*
• Doble Aval: Certificado institucional IKARUGA + respaldo oficial de la Universidad Abierta Interamericana (UAI).
• Trayectoria: Programa diseñado por el Mag. Jorge Frías, traductor de japonés con más de 10 años de experiencia.
• Calidad: Nuestro método trasciende el libro tradicional.`
      },
      'Japonés 2': {
        pdf: 'japones-ii-programa-liviano.pdf',
        desc: `🇯🇵 *CURSO DE JAPONÉS II*
Programa de continuidad con aval universitario

En este nivel consolidamos la base inicial y avanzamos hacia una comunicación más natural, con más recursos gramaticales, lectura y práctica oral.

📅 *MODALIDAD Y DURACIÓN*
• Duración: 5 módulos.
• Clases: 3 horas semanales en vivo.
• Flexibilidad: Acceso 24/7 al Campus Virtual con lecciones, materiales y grabaciones de las clases.

📚 *¿QUÉ VAS A LOGRAR?*
• Pasar del japonés inicial a un uso más natural e informal del idioma.
• Trabajar estructuras como naru, soto/uchi y los verbos ageru, kureru y morau.
• Construir oraciones subordinadas y textos simples para gustos, pasatiempos, turismo y trabajo.
• Leer y traducir ejemplos de manga, videojuegos y textos breves con mayor autonomía.
• Ampliar lectura, escritura y comprensión auditiva, incorporando más kanji y cultura japonesa.`,
        benefits: `✨ *BENEFICIOS EXCLUSIVOS IKARUGA*
🎎 Inmersión Total: 3 clases culturales.

🏆 *CERTIFICACIÓN Y RESPALDO*
• Doble Aval: Certificado institucional IKARUGA + respaldo oficial de la Universidad Abierta Interamericana (UAI).
• Continuidad: Ideal para quienes ya completaron Japonés I o cuentan con una base inicial del idioma.
• Calidad: Acompañamiento académico con enfoque comunicativo, gramatical y cultural.`
      },
      'Japonés 3': {
        pdf: 'japones-iii-programa-liviano.pdf',
        desc: `🇯🇵 *CURSO DE JAPONÉS III*
Programa de profundización con aval universitario

Este nivel te ayuda a pasar de frases aisladas a conversaciones más completas, con más recursos para explicar, comparar, contar experiencias y sostener intercambios reales.

📅 *MODALIDAD Y DURACIÓN*
• Duración: 5 módulos.
• Clases: 3 horas semanales en vivo.
• Campus Virtual: Materiales, grabaciones y recursos de práctica.

📚 *¿QUÉ VAS A LOGRAR?*
• Usar la forma TE para invitaciones y nuevas funciones comunicativas.
• Diferenciar verbos transitivos e intransitivos y aplicar comparativos y superlativos.
• Expresar suposiciones, conjeturas, condicionales y construcciones con koto y mono.
• Leer y producir textos informativos breves, incorporando más kanji y vocabulario contextual.
• Comprender diálogos y explicaciones con mayor presencia del japonés en clase.`,
        benefits: `✨ *BENEFICIOS EXCLUSIVOS IKARUGA*
🎎 Inmersión Total: 3 clases culturales.

🏆 *CERTIFICACIÓN Y RESPALDO*
• Doble Aval: Certificado institucional IKARUGA + respaldo oficial de la Universidad Abierta Interamericana (UAI).
• Continuidad: Pensado para avanzar con bases sólidas después de los niveles iniciales.
• Calidad: Formación progresiva con enfoque académico, comunicativo, lectura y comprensión auditiva.`
      },
      'Japonés 4': {
        pdf: 'japones-iv-programa.pdf',
        desc: `🇯🇵 *CURSO DE JAPONÉS IV*
Programa de consolidación con aval universitario

Este nivel está pensado para que ganes fluidez y puedas conectar ideas con más naturalidad, acercándote a un uso más autónomo del japonés.

📅 *MODALIDAD Y DURACIÓN*
• Duración: 5 módulos.
• Clases: 3 horas semanales en vivo.
• Campus Virtual: Recursos, materiales y grabaciones disponibles 24/7.

📚 *¿QUÉ VAS A LOGRAR?*
• Trabajar contenidos orientados al nivel intermedio cotidiano del JLPT N3.
• Incorporar estructuras gramaticales más avanzadas a partir de mini textos y kaiwa.
• Entrenar dokkai con lecturas cortas, medianas y largas, noticias y textos de actualidad.
• Mejorar comprensión auditiva y lectura con materiales variados y preguntas de análisis.
• Consolidar herramientas para desenvolverte, estudiar o proyectar trabajo vinculado a Japón.`,
        benefits: `✨ *BENEFICIOS EXCLUSIVOS IKARUGA*
🎎 Inmersión Total: 3 clases culturales.

🏆 *CERTIFICACIÓN Y RESPALDO*
• Doble Aval: Certificado institucional IKARUGA + respaldo oficial de la Universidad Abierta Interamericana (UAI).
• Continuidad: Nivel orientado a consolidar el recorrido previo.
• Calidad: Método progresivo con práctica comunicativa, lectura, escritura y respaldo académico.`
      }
    }
  },
  'pc-kr': {
    benefitId: 'pc-kr-beneficios',
    pdfId: 'pc-kr-pdf',
    defaultPdfIntro: 'Te comparto también el PDF del programa para que puedas revisar con calma los contenidos, la modalidad y el recorrido del curso. 🇰🇷',
    levels: {
      'Coreano 1': {
        pdf: 'coreano-i-programa.pdf',
        desc: `🇰🇷 *CURSO DE COREANO I: NIVEL INICIAL*
Programa de formación integral con aval universitario

En IKARUGA combinamos la excelencia académica con una metodología diseñada para que realmente te comuniques.

📅 *MODALIDAD Y DURACIÓN*
• Duración: 5 módulos.
• Clases: 3 horas semanales en vivo (Zoom privado).
• Flexibilidad: Acceso 24/7 a nuestro Campus Virtual con lecciones, materiales y grabaciones de todas las clases.

📚 *¿QUÉ VAS A LOGRAR?*
• Leer y escribir en Hangul, entendiendo vocales, consonantes y reglas fonéticas.
• Formar frases iniciales con partículas, negación y verbos de existencia.
• Presentarte, hablar de nacionalidad, profesión, edad y saludos cotidianos.
• Usar vocabulario real para compras, gastronomía y expresiones de todos los días.
• Ubicar lugares y manejar el sistema de numeración coreano en contextos simples.`,
        benefits: `✨ *BENEFICIOS EXCLUSIVOS IKARUGA*
✍️ Preparación TOPIK: 5 clases adicionales enfocadas 100% en el examen oficial TOPIK I (parte 1).
🏯 Inmersión Total: 3 clases culturales extra.

🏆 *CERTIFICACIÓN Y RESPALDO*
• Doble Aval: Recibe tu certificado institucional IKARUGA con el respaldo oficial de la Universidad Abierta Interamericana (UAI).
• Trayectoria: Programa supervisado por el Mag. Jorge Frías, con enfoque en rigor académico.
• Calidad: Nuestro método trasciende el libro tradicional, integrando historia, política y práctica conversacional real.`
      },
      'Coreano 2': {
        pdf: 'coreano-ii-programa.pdf',
        desc: `🇰🇷 *CURSO DE COREANO II*
Programa de continuidad con aval universitario

Este nivel te permite dejar de depender de frases sueltas y empezar a construir conversaciones más útiles para la vida diaria, viajes, gustos y rutinas.

📅 *MODALIDAD Y DURACIÓN*
• Duración: 5 módulos.
• Clases: 3 horas semanales en vivo.
• Campus Virtual: Acceso a materiales, lecciones y grabaciones.

📚 *¿QUÉ VAS A LOGRAR?*
• Indicar ubicaciones y direcciones con vocabulario como arriba, debajo, delante, detrás, dentro y fuera.
• Expresar intención o propósito con estructuras como “ir/venir para hacer algo”.
• Usar cortesía, prohibición, presente/pasado continuo y capacidad o imposibilidad de realizar acciones.
• Leer y escribir Hangul con más fluidez, aplicándolo a oraciones y situaciones reales.
• Comprender mejor costumbres, historia y diferencias culturales de la península coreana.`,
        benefits: `✨ *BENEFICIOS EXCLUSIVOS IKARUGA*
🏯 Inmersión Total: 3 clases culturales.

🏆 *CERTIFICACIÓN Y RESPALDO*
• Doble Aval: Certificado institucional IKARUGA + respaldo oficial de la Universidad Abierta Interamericana (UAI).
• Continuidad: Ideal para quienes ya completaron Coreano I o tienen base inicial.
• Calidad: Formación progresiva con enfoque práctico, fonético, gramatical y cultural.`
      }
    }
  },
  'pc-zh': {
    benefitId: 'pc-zh-beneficios',
    pdfId: 'pc-zh-pdf',
    defaultPdfIntro: 'Te comparto también el PDF del programa para que puedas revisar con calma los contenidos, la modalidad y el recorrido del curso. 🇨🇳',
    levels: {
      'Chino 1': {
        pdf: 'chino-i-programa.pdf',
        desc: `🇨🇳 *CURSO DE CHINO MANDARÍN I: NIVEL INICIAL*
Programa de formación integral con aval universitario

En IKARUGA combinamos la excelencia académica con una metodología diseñada para que realmente te comuniques.

Este nivel está diseñado para que empieces a entender cómo funciona el mandarín desde su sonido, sus tonos y sus caracteres, sin quedarte solo en memorizar palabras.

📅 *MODALIDAD Y DURACIÓN*
• Duración: 5 módulos.
• Clases: 3 horas semanales en vivo (Zoom privado).
• Flexibilidad: Acceso 24/7 a nuestro Campus Virtual con lecciones, materiales exclusivos y grabaciones de todas las clases.

📚 *¿QUÉ VAS A LOGRAR?*
• Pronunciar con más seguridad usando Pinyin, tonos y estructura de caracteres básicos.
• Presentarte, saludar, decir tu nacionalidad y participar en diálogos iniciales.
• Manejar números, fechas, días de la semana y rutinas simples.
• Usar vocabulario de familia, clasificadores, compras, precios y situaciones comerciales básicas.
• Comprender el idioma desde su cultura: horóscopo chino, moneda y costumbres ancestrales.`,
        benefits: `✨ *BENEFICIOS EXCLUSIVOS IKARUGA*
🐉 Preparación HSK: 5 clases adicionales enfocadas en el examen de proficiencia.
🏮 Inmersión Total: 3 clases de inmersión cultural.

🏆 *CERTIFICACIÓN Y RESPALDO*
• Doble Aval: Recibe tu certificado institucional IKARUGA con el respaldo oficial de la Universidad Abierta Interamericana (UAI).
• Trayectoria: Programa diseñado y supervisado por el Mag. Jorge Frías, con enfoque en rigor académico.
• Calidad: Nuestro método trasciende el libro tradicional, integrando historia, cultura y práctica conversacional real.`
      },
      'Chino 2': {
        pdf: 'chino-ii-programa.pdf',
        desc: `🇨🇳 *CURSO DE CHINO MANDARÍN II*
Programa de continuidad con aval universitario

Este nivel te ayuda a avanzar del mandarín inicial hacia conversaciones más completas, reforzando tonos, caracteres y situaciones reales.

📅 *MODALIDAD Y DURACIÓN*
• Duración: 5 módulos.
• Clases: 3 horas semanales en vivo.
• Campus Virtual: Lecciones, materiales y grabaciones disponibles.

📚 *¿QUÉ VAS A LOGRAR?*
• Incorporar alrededor de 300 palabras nuevas y caracteres correspondientes al nivel 2.
• Profundizar estructuras HSK2: verbos auxiliares, adverbios de grado, aproximación y modalidad.
• Formular preguntas más variadas con estructuras como 是不是, 多 y pronombres interrogativos.
• Usar partículas y estructuras como 的, 的时候, 因为…所以, complementos de resultado e imperativos.
• Conversar con más improvisación sobre situaciones diarias, cultura y pensamiento chino.`,
        benefits: `✨ *BENEFICIOS EXCLUSIVOS IKARUGA*
🏮 Inmersión Total: 3 clases de inmersión cultural.

🏆 *CERTIFICACIÓN Y RESPALDO*
• Doble Aval: Certificado institucional IKARUGA + respaldo oficial de la Universidad Abierta Interamericana (UAI).
• Continuidad: Diseñado para avanzar después de Chino I o una base equivalente.
• Calidad: Método progresivo que integra tonos, caracteres, cultura y práctica comunicativa.`
      }
    }
  },
  'pc-th': {
    benefitId: 'pc-th-beneficios',
    pdfId: 'pc-th-pdf',
    defaultPdfIntro: 'Te comparto también el PDF del programa para que puedas revisar con calma los contenidos, la modalidad y el recorrido del curso. 🇹🇭',
    levels: {
      'Tailandés 1': {
        pdf: 'tailandes-i-programa.pdf',
        desc: `🇹🇭 *CURSO DE TAILANDÉS I: NIVEL INICIAL*
Programa de formación integral con aval universitario

En IKARUGA combinamos la excelencia académica con una metodología diseñada para que realmente te comuniques.

📅 *MODALIDAD Y DURACIÓN*
• Duración: 4 módulos.
• Clases: 3 horas semanales en vivo (Zoom privado).
• Flexibilidad: Acceso 24/7 a nuestro Campus Virtual con lecciones, videos, materiales exclusivos y grabaciones de todas las clases.

📚 *¿QUÉ VAS A LOGRAR?*
• Dar tus primeros pasos en el alfabeto tailandés, caligrafía y sistema tonal.
• Saludar, presentarte, agradecer y usar frases de cortesía como Krap/Kaa.
• Resolver situaciones de supervivencia en compras, aeropuertos, restaurantes y viajes.
• Construir oraciones básicas con partículas esenciales del idioma.
• Entender el idioma desde su cultura: reinos Sukhothai y Ayutthaya, Ramakien y tradiciones tailandesas.`,
        benefits: `✨ *BENEFICIOS EXCLUSIVOS IKARUGA*
🏯 Inmersión Total: 3 clases culturales extra para comprender el idioma desde su contexto real.
🗣️ Conversación Guiada: 5 clases de conversación para practicar saludos, frases cotidianas y situaciones reales.

🏆 *CERTIFICACIÓN Y RESPALDO*
• Doble Aval: Certificado Institucional de IKARUGA + Certificado Oficial con validez universitaria de la UAI (Universidad Abierta Interamericana).
• Evaluación: Examen final.
• Exclusividad: Programa único diseñado para hispanohablantes bajo la supervisión del Mag. Jorge Frías.`
      },
      'Tailandés 2': {
        pdf: 'tailandes-ii-programa.pdf',
        desc: `🇹🇭 *CURSO DE TAILANDÉS II*
Programa de continuidad con aval universitario

Este nivel te ayuda a pasar de frases básicas a un uso más práctico del tailandés para viajes, interacción cotidiana y comprensión cultural.

📅 *MODALIDAD Y DURACIÓN*
• Duración: 5 módulos.
• Clases: 3 horas semanales en vivo.
• Campus Virtual: Lecciones, videos, materiales y grabaciones.

📚 *¿QUÉ VAS A LOGRAR?*
• Profundizar clases de consonantes, marcas de tono, abreviaturas y pronunciación tonal.
• Manejar números grandes, preguntas y vocabulario cotidiano para desenvolverte con más precisión.
• Usar signos de puntuación, comparativos y prefijos gramaticales en oraciones simples.
• Practicar comprensión escrita, auditiva y oral con roles sintácticos aplicados.
• Conocer regiones, lugares famosos, festividades, música, gastronomía e historia tailandesa.`,
        benefits: `✨ *BENEFICIOS EXCLUSIVOS IKARUGA*
🏯 Inmersión Total: 3 clases culturales.
🗣️ Conversación Guiada: 5 clases de conversación.

🏆 *CERTIFICACIÓN Y RESPALDO*
• Doble Aval: Certificado institucional IKARUGA + respaldo oficial de la Universidad Abierta Interamericana (UAI).
• Continuidad: Pensado para quienes ya completaron Tailandés I o tienen base inicial.
• Calidad: Programa único diseñado para hispanohablantes, con foco en tonos, lectura y comunicación real.`
      },
      'Tailandés 3': {
        pdf: 'tailandes-iii-programa.pdf',
        desc: `🇹🇭 *CURSO DE TAILANDÉS III*
Programa de profundización con aval universitario

Este nivel está pensado para que ganes más confianza oral y puedas conectar ideas en conversaciones más extensas y naturales.

📅 *MODALIDAD Y DURACIÓN*
• Duración: 5 módulos.
• Clases: 3 horas semanales en vivo.
• Campus Virtual: Materiales, videos y grabaciones disponibles.

📚 *¿QUÉ VAS A LOGRAR?*
• Consolidar gramática de nivel 3 con familia, días de la semana, meses y partículas clave.
• Usar demostrativos y adverbios como “esto/eso/aquello” en conversación.
• Expresar aficiones, apodos, superlativos y matices con partículas como มา, อยู่ y ได้.
• Sostener conversaciones más detalladas con mejor lectura, escucha y respuesta oral.
• Profundizar en festividades, música, historia y costumbres de Tailandia.`,
        benefits: `✨ *BENEFICIOS EXCLUSIVOS IKARUGA*
🏯 Inmersión Total: 3 clases culturales.
🗣️ Conversación Guiada: 5 clases de conversación.

🏆 *CERTIFICACIÓN Y RESPALDO*
• Doble Aval: Certificado institucional IKARUGA + respaldo oficial de la Universidad Abierta Interamericana (UAI).
• Continuidad: Ideal para seguir consolidando el recorrido en tailandés.
• Calidad: Enfoque cultural, conversacional, fonético y progresivo.`
      }
    }
  },
  'pc-en': {
    benefitId: 'pc-en-respaldo',
    pdfId: 'pc-en-pdf',
    defaultPdfIntro: 'Te comparto también el PDF del programa para que puedas revisar con calma los contenidos, la modalidad y el recorrido del curso. 🇬🇧',
    levels: {
      'Inglés A1': {
        pdf: 'ingles-a1-programa.pdf',
        desc: `🇬🇧 *CURSO DE INGLÉS A1*
Programa de formación inicial con certificación institucional IKARUGA

Este nivel está pensado para que empieces a usar el inglés en situaciones simples y reales, con una base clara para hablar, comprender y avanzar sin frustrarte.

📅 *MODALIDAD Y DURACIÓN*
• Duración: 4 meses.
• Clases: 2 horas semanales en vivo.
• Plataforma: Acceso 24/7 a Campus Virtual con lecciones y videos.

📚 *¿QUÉ VAS A LOGRAR?*
• Saludar, despedirte y presentarte de forma clara.
• Compartir información personal como dirección, teléfono y correo.
• Hablar de tu rutina, actividades diarias y horarios.
• Describir familia, ropa, colores y espacios de la casa.
• Usar vocabulario básico de meses, estaciones y clima en conversaciones simples.`,
        benefits: `🏆 *CERTIFICACIÓN Y RESPALDO*
• Certificación: Certificado Institucional IKARUGA.
• Calidad: Programa supervisado por el Mag. Jorge Frías.
• Evaluación: Incluye examen final.
• Enfoque: Programa práctico, comunicativo y progresivo desde nivel inicial.`
      },
      'Inglés A2': {
        pdf: 'ingles-a2-programa.pdf',
        desc: `🇬🇧 *CURSO DE INGLÉS A2*
Programa de continuidad con certificación institucional IKARUGA

Este nivel te ayuda a pasar del inglés básico a una comunicación más completa, con más seguridad para hablar de tu vida diaria, planes y experiencias.

📅 *MODALIDAD Y DURACIÓN*
• Duración: 4 meses.
• Clases: 2 horas semanales en vivo.
• Campus Virtual: Acceso a lecciones, videos y materiales.

📚 *¿QUÉ VAS A LOGRAR?*
• Afianzar el nivel básico y avanzar hacia una comunicación con más autonomía.
• Comprender conversaciones, instrucciones y textos claros sobre temas personales o de interés general.
• Participar en conversaciones con más coherencia, usando estrategias como reformular o parafrasear.
• Escribir notas, cartas, e-mails y mensajes simples con mejor organización y cohesión.
• Trabajar comprensión de audios, textos, series o lecturas breves para dar feedback en inglés.`,
        benefits: `🏆 *CERTIFICACIÓN Y RESPALDO*
• Certificación: Certificado Institucional IKARUGA.
• Calidad: Programa supervisado por el Mag. Jorge Frías.
• Evaluación: Incluye examen final.
• Enfoque: Programa práctico, comunicativo y progresivo para afianzar el nivel A2.`
      }
    }
  },
  'pc-de': {
    benefitId: 'pc-de-respaldo',
    pdfId: 'pc-de-pdf',
    defaultPdfIntro: 'Te comparto también el PDF del programa para que puedas revisar con calma los contenidos, la modalidad y el recorrido del curso. 🇩🇪',
    levels: {
      'Alemán A1': {
        pdf: 'aleman-a1-programa-liviano.pdf',
        desc: `🇩🇪 *CURSO DE ALEMÁN A1: NIVEL INICIAL*
Programa de formación integral con aval universitario

Este nivel está pensado para que el alemán deje de sentirse rígido o intimidante y empieces a entender su lógica desde la pronunciación, la gramática y la comunicación real.

📅 *MODALIDAD Y DURACIÓN*
• Duración: 5 meses.
• Clases: 3 horas semanales en vivo.
• Plataforma: Acceso 24/7 a Campus Virtual con lecciones, videos y materiales complementarios.

📚 *¿QUÉ VAS A LOGRAR?*
• Pronunciar con más seguridad sonidos propios del alemán, incluyendo Umlaut (ä, ö, ü).
• Construir oraciones simples con verbos en presente, artículos y estructuras base.
• Presentarte, saludar, hablar de nacionalidad, profesión y datos de contacto.
• Manejar números, hora, días, meses y vocabulario de situaciones cotidianas.
• Hablar de familia, hobbies, gustos y pedir información en lugares públicos.`,
        benefits: `✨ *BENEFICIOS EXCLUSIVOS IKARUGA*
🏛️ Inmersión Total: 3 clases culturales.
📘 Preparación de proficiencia: 5 clases enfocadas en el examen de proficiencia.

🏆 *CERTIFICACIÓN Y RESPALDO*
• Doble Aval: Certificado Institucional IKARUGA + Certificado Oficial con validez universitaria (UAI).
• Calidad: Programa supervisado por la Dirección Académica con enfoque en comunicación efectiva y rigor gramatical.
• Evaluación: Incluye examen final para acreditar el nivel.`
      },
      'Alemán A2': {
        pdf: 'aleman-a2-programa.pdf',
        desc: `🇩🇪 *CURSO DE ALEMÁN A2*
Programa de continuidad con aval universitario

Este nivel te permite ordenar mejor tus ideas en alemán y ganar recursos para hablar de experiencias, viajes, trabajo y situaciones cotidianas.

📅 *MODALIDAD Y DURACIÓN*
• Duración: 5 módulos.
• Clases: 3 horas semanales en vivo.
• Campus Virtual: Lecciones, videos y materiales complementarios.

📚 *¿QUÉ VAS A LOGRAR?*
• Hablar sobre comida, cocina, preferencias y situaciones en restaurantes o con amigos.
• Contar experiencias escolares y comprender diferencias del sistema educativo alemán.
• Expresar ventajas, desventajas y opiniones sobre temas digitales, películas o libros.
• Usar verbos modales en pasado, dativo/acusativo, comparativos, superlativos y oraciones con dass/wenn.
• Escribir textos breves sobre recetas, experiencias, deseos, objetivos y temas cotidianos.`,
        benefits: `✨ *BENEFICIOS EXCLUSIVOS IKARUGA*
🏛️ Inmersión Total: 3 clases culturales.

🏆 *CERTIFICACIÓN Y RESPALDO*
• Doble Aval: Certificado institucional IKARUGA + respaldo oficial de la Universidad Abierta Interamericana (UAI).
• Continuidad: Ideal para avanzar después de Alemán A1 o una base equivalente.
• Calidad: Formación progresiva con rigor gramatical, comprensión y enfoque comunicativo.`
      }
    }
  },
  'pc-it': {
    benefitId: 'pc-it-respaldo',
    pdfId: 'pc-it-pdf',
    defaultPdfIntro: 'Te comparto también el PDF del programa para que puedas revisar con calma los contenidos, la modalidad y el recorrido del curso. 🇮🇹',
    levels: {
      'Italiano A1': {
        pdf: 'italiano-a1-programa.pdf',
        desc: `🇮🇹 *CURSO DE ITALIANO A1*
Programa de formación integral con aval universitario

Este nivel está pensado para que empieces a comunicarte en italiano desde lo cotidiano, entendiendo su sonido, su estructura y su ritmo natural.

📅 *MODALIDAD Y DURACIÓN*
• Duración: 4 meses.
• Clases: 2 horas semanales en vivo.
• Plataforma: Acceso 24/7 a Campus Virtual con teoría explicada en lecciones, fotos y videos.

📚 *¿QUÉ VAS A LOGRAR?*
• Saludar, presentarte y pronunciar con una base clara de fonética italiana.
• Formar frases simples con pronombres, artículos y verbos esenciales como Essere y Avere.
• Usar vocabulario de familia, colores, vestimenta, comidas y bebidas.
• Describir personas y ambientes de la casa con recursos simples.
• Manejar números, meses del año y días de la semana en contextos cotidianos.`,
        benefits: `🏆 *CERTIFICACIÓN Y RESPALDO*
• Doble Aval: Certificado Institucional IKARUGA + Certificado Oficial con validez universitaria (UAI).
• Calidad: Programa diseñado y supervisado por el Mag. Jorge Frías.
• Evaluación: Incluye examen final.`
      },
      'Italiano A2': {
        pdf: 'italiano-a2-programa.pdf',
        desc: `🇮🇹 *CURSO DE ITALIANO A2*
Programa de continuidad con aval universitario

Este nivel te ayuda a pasar de lo básico a una comunicación más natural, con más herramientas para contar experiencias, describir y desenvolverte en contextos cotidianos.

📅 *MODALIDAD Y DURACIÓN*
• Duración: 4 meses.
• Clases: 2 horas semanales en vivo.
• Campus Virtual: Teoría explicada en lecciones, fotos, videos y materiales.

📚 *¿QUÉ VAS A LOGRAR?*
• Comunicarte con más seguridad en situaciones cotidianas y expresar opiniones simples.
• Reforzar sustantivos, género, número, artículos definidos e indefinidos.
• Usar plural de sustantivos, adjetivos, pronombres posesivos y concordancia.
• Conjugar verbos regulares e irregulares frecuentes en presente en frases afirmativas, negativas e interrogativas.
• Ampliar vocabulario de saludos, familia, comida, bebida, tiempo libre, ciudad y actividades.`,
        benefits: `🏆 *CERTIFICACIÓN Y RESPALDO*
• Doble Aval: Certificado Institucional IKARUGA + Certificado Oficial con validez universitaria (UAI).
• Calidad: Programa diseñado y supervisado por el Mag. Jorge Frías.
• Evaluación: Incluye examen final.
• Enfoque: Continuidad práctica y comunicativa para afianzar el nivel A2.`
      }
    }
  }
};

const selectedPostCallLevels = {
  'pc-jp': 'Japonés 1',
  'pc-kr': 'Coreano 1',
  'pc-zh': 'Chino 1',
  'pc-th': 'Tailandés 1',
  'pc-en': 'Inglés A1',
  'pc-de': 'Alemán A1',
  'pc-it': 'Italiano A1'
};

const postCallScheduleConfig = {
  'pc-jp': { idioma: 'japones', paisId: 'pc-jp-pais', mesId: 'pc-jp-mes', horarioId: 'pc-jp-horario', emoji: '🇯🇵' },
  'pc-kr': { idioma: 'coreano', paisId: 'pc-kr-pais', mesId: 'pc-kr-mes', horarioId: 'pc-kr-horario', emoji: '🇰🇷' },
  'pc-zh': { idioma: 'chino', paisId: 'pc-zh-pais', mesId: 'pc-zh-mes', horarioId: 'pc-zh-horario', emoji: '🇨🇳' },
  'pc-th': { idioma: 'tailandes', paisId: 'pc-th-pais', mesId: 'pc-th-mes', horarioId: 'pc-th-horario', emoji: '🇹🇭' },
  'pc-en': { idioma: 'ingles', paisId: 'pc-en-pais', mesId: 'pc-en-mes', horarioId: 'pc-en-horario', emoji: '🇬🇧' },
  'pc-de': { idioma: 'aleman', paisId: 'pc-de-pais', horarioId: 'pc-de-horario', emoji: '🇩🇪' },
  'pc-it': { idioma: 'italiano', paisId: 'pc-it-pais', horarioId: 'pc-it-horario', emoji: '🇮🇹' }
};

function horarioTieneCupo(horario) {
  return !/(cupos?\s+completos?|completo|curso\s+cerrado|cerrado)/i.test(horario);
}

function filtrarHorariosPorMes(horarios, mes) {
  const conCupo = horarios.filter(horarioTieneCupo);
  if (!mes || mes === 'todos') return conCupo;
  return conCupo.filter(h => h.toLowerCase().includes(mes.toLowerCase()));
}

function updatePostCallMesOptions(msgId, nivel) {
  const cfg = postCallScheduleConfig[msgId];
  if (!cfg?.mesId) return;
  const select = document.getElementById(cfg.mesId);
  if (!select) return;
  const meses = getMesesDisponibles(cfg.idioma, nivel);
  const opciones = meses.length > 1
    ? [{ value: 'todos', label: 'Todos los meses con cupo' }, ...meses]
    : meses;
  const current = select.value;
  select.innerHTML = opciones.map(m => `<option value="${m.value}">${m.label}</option>`).join('');
  select.value = opciones.some(m => m.value === current) ? current : (opciones[0]?.value || 'todos');
}

function getPostCallMes(msgId) {
  const cfg = postCallScheduleConfig[msgId];
  return cfg?.mesId ? (document.getElementById(cfg.mesId)?.value || 'todos') : 'todos';
}

function getPostCallDuracionLabel(msgId, nivel) {
  const cfg = postCallScheduleConfig[msgId];
  const mes = getPostCallMes(msgId);
  const horarios = filtrarHorariosPorMes(horariosARG[cfg?.idioma]?.[nivel] || [], mes);
  const has4 = horarios.some(h => /4\s*módulos/i.test(h));
  const has5 = horarios.some(h => /5\s*módulos/i.test(h));

  if (has4 && has5) return 'según la comisión seleccionada (4 o 5 módulos)';
  if (has4) return '4 módulos';
  if (has5) return '5 módulos';
  return null;
}

function applyPostCallParams(text, msgId, nivel) {
  const duracion = getPostCallDuracionLabel(msgId, nivel);
  if (!duracion) return text;

  return text
    .replace(/• Duración:\s*[^.\n]+[.]/u, `• Duración: ${duracion}.`)
    .replace(/—\s*(?:4–5|4|5)\s*módulos/u, `— ${duracion}`);
}

function refreshPostCallDescription(msgId) {
  const el = document.getElementById(msgId);
  const nivel = selectedPostCallLevels[msgId];
  const desc = getPostCallDescription(msgId, nivel);
  if (!el || !desc) return;
  const start = el.innerText.search(/(?:📘 \*Descripción del curso:\*|(?:🇯🇵|🇰🇷|🇨🇳|🇹🇭|🇬🇧|🇩🇪|🇮🇹)\s+\*CURSO DE )/u);
  el.innerText = start >= 0 ? el.innerText.slice(0, start) + desc : desc;
}

function updatePostCallLevelDetails(msgId, nivel) {
  const group = postCallLevelDetails[msgId];
  const data = group?.levels?.[nivel];
  if (!group || !data) return;

  const benefitEl = document.getElementById(group.benefitId);
  if (benefitEl && data.benefits) {
    benefitEl.innerText = data.benefits;
    const title = benefitEl.closest('.msg-card')?.querySelector('.msg-card-title');
    if (title) title.childNodes[0].nodeValue = `Mensaje 2 · Beneficios y respaldo · ${nivel}`;
  }

  const pdfEl = document.getElementById(group.pdfId);
  if (pdfEl && data.pdf) {
    const intro = group.defaultPdfIntro || 'Te comparto también el PDF del programa para que puedas revisar con calma los contenidos, la modalidad y el recorrido del curso.';
    pdfEl.innerText = `${intro}\n\n📄 Programa ${nivel}: ${data.pdf}`;
    const title = pdfEl.closest('.msg-card')?.querySelector('.msg-card-title');
    if (title) title.childNodes[0].nodeValue = `Mensaje 3 · PDF del programa · ${nivel}`;
    const note = pdfEl.nextElementSibling;
    if (note?.classList?.contains('msg-note')) {
      note.innerHTML = `✅ Adjuntá el PDF al enviar este mensaje. También podés abrirlo desde aquí: <a href="${data.pdf}" target="_blank" rel="noopener">${data.pdf}</a>`;
    }
  }
}

function initializePostCallDefaults() {
  Object.entries(selectedPostCallLevels).forEach(([msgId, nivel]) => {
    updatePostCallLevelDetails(msgId, nivel);
    updatePostCallMesOptions(msgId, nivel);
    refreshPostCallDescription(msgId);
  });
}

function updatePostCallSchedule(msgId) {
  const cfg = postCallScheduleConfig[msgId];
  if (!cfg) return;

  const nivel = selectedPostCallLevels[msgId] || Object.keys(horariosARG[cfg.idioma] || {})[0];
  const pais = document.getElementById(cfg.paisId)?.value || 'ARG';
  const target = document.getElementById(cfg.horarioId);
  if (!target) return;

  const mes = cfg.mesId ? (document.getElementById(cfg.mesId)?.value || 'todos') : 'todos';
  const horariosBase = filtrarHorariosPorMes(horariosARG[cfg.idioma]?.[nivel] || [], mes);
  const diff = tzDiff[pais] ?? 0;
  const horariosLocal = convertHorarios(horariosBase, diff);
  const paisLabel = paisNombres[pais] || 'Argentina';
  const horaRef = pais === 'ARG' ? 'hora Argentina' : `hora de ${paisLabel}`;
  const plural = horariosLocal.length !== 1;
  const mesTexto = mes && mes !== 'todos' ? ` · ${mes.charAt(0).toUpperCase()}${mes.slice(1)}` : '';
  const lineas = horariosLocal.length ? horariosLocal.map(h => `• ${h}`).join('\n') : `• No hay horarios con cupo para *${nivel}*${mesTexto}. Consultar otra comisión o mes disponible.`;

  const title = target.closest('.msg-card')?.querySelector('.msg-card-title');
  if (title) title.childNodes[0].nodeValue = `Mensaje 5 · Horarios por país · ${nivel}`;

  target.innerText = `Perfecto, te comparto ${plural ? 'los horarios disponibles' : 'el horario disponible'} para *${nivel}*${mesTexto} en ${paisLabel}. ${cfg.emoji}

📅 *${plural ? 'Horarios disponibles' : 'Horario disponible'} (${horaRef}):*
${lineas}

${plural ? 'Decime cuál de estas opciones te queda mejor' : 'Decime si este horario te queda bien'} y revisamos la disponibilidad de cupo.`;
}

function setNivel(msgId, nivel, btn) {
  const el = document.getElementById(msgId);
  if (!el) return;
  selectedPostCallLevels[msgId] = nivel;
  updatePostCallLevelDetails(msgId, nivel);
  updatePostCallMesOptions(msgId, nivel);
  refreshPostCallDescription(msgId);
  updatePostCallSchedule(msgId);
  if (msgId === 'pc-jp') updateJp1Precio();
  if (msgId === 'pc-kr') updateKr1Precio();
  if (msgId === 'pc-zh') updateZh1Precio();
  if (msgId === 'pc-th') updateTh1Precio();
  if (msgId === 'pc-en') updateEnA1Precio();
  if (msgId === 'pc-de') updateDeA1Precio();
  if (msgId === 'pc-it') updateItA1Precio();
  // Replace any existing nivel already set, or the placeholder
  el.innerText = el.innerText.replace(/\[NIVEL\]|Japonés \d|Coreano \d|Chino \d|Tailandés \d|Alemán A\d|Inglés A\d|Italiano A\d/g, nivel);
  // Mark button as selected
  const group = btn.parentElement;
  group.querySelectorAll('.level-sel-btn').forEach(b => b.classList.remove('selected'));
  btn.classList.add('selected');
}

function getPostCallDescription(msgId, nivel) {
  const data = postCallLevelDetails[msgId]?.levels?.[nivel];
  if (data?.desc) return applyPostCallParams(data.desc, msgId, nivel);

  if (msgId === 'pc-jp' && nivel === 'Japonés 1') {
    return applyPostCallParams(`🇯🇵 *CURSO DE JAPONÉS I: NIVEL INICIAL*
Programa de formación integral con aval universitario

En IKARUGA combinamos la excelencia académica con una metodología diseñada para que realmente te comuniques.

📅 *MODALIDAD Y DURACIÓN*
• Duración: 5 módulos.
• Comisiones de julio: modalidad de 4 módulos.
• Clases: 3 horas semanales en vivo (Zoom privado).
• Flexibilidad: Acceso 24/7 a nuestro Campus Virtual con lecciones, materiales y grabaciones de todas las clases.

📚 *¿QUÉ APRENDERÁS?*
• Escritura: Dominio total de Hiragana, Katakana y primeros Kanji.
• Gramática: Uso de partículas esenciales (Wa, No, Mo, O), estructuras de verbos de existencia (aru/iru) y manejo de adjetivos (tipo I y tipo Na).
• Comunicación: Capacidad para realizar presentaciones personales, saludos y manejo de la vida cotidiana.
• Inmersión Cultural: Historia (Shogunato, Meiji), costumbres, manga, anime y tradiciones.`, msgId, nivel);
  }

  if (msgId === 'pc-jp') {
    return applyPostCallParams('📘 *Descripción del curso:* Japonés [NIVEL] — 5 módulos · 3 hs semanales en vivo · Doble: IKARUGA + UAI 🎓 · Inmersión cultural real. Kana, kanji, conversación y cultura japonesa desde el inicio.', msgId, nivel);
  }

  if (msgId === 'pc-kr' && nivel === 'Coreano 1') {
    return applyPostCallParams(`🇰🇷 *CURSO DE COREANO I: NIVEL INICIAL*
Programa de formación integral con aval universitario

En IKARUGA combinamos la excelencia académica con una metodología diseñada para que realmente te comuniques.

📅 *MODALIDAD Y DURACIÓN*
• Duración: 5 módulos.
• Clases: 3 horas semanales en vivo (Zoom privado).
• Flexibilidad: Acceso 24/7 a nuestro Campus Virtual con lecciones, materiales y grabaciones de todas las clases.

📚 *¿QUÉ APRENDERÁS?*
• Alfabeto: Dominio preciso del sistema de escritura Hangul (vocales, consonantes y reglas fonéticas).
• Gramática: Uso de partículas esenciales, estructuras de negación y verbos de existencia (이다/있다).
• Comunicación: Presentaciones, nacionalidades, profesiones, manejo de la edad y saludos.
• Vida Diaria: Vocabulario para compras, gastronomía y expresiones cotidianas.
• Entorno: Ubicación de lugares y dominio del sistema de numeración coreano.`, msgId, nivel);
  }

  if (msgId === 'pc-kr') {
    return applyPostCallParams('📘 *Descripción del curso:* Coreano [NIVEL] — 5 módulos · 3 hs semanales en vivo · Doble: IKARUGA + UAI 🎓 · Inmersión cultural. Hangul, fonética, vocabulario y cultura coreana desde el primer día.', msgId, nivel);
  }

  if (msgId === 'pc-zh' && nivel === 'Chino 1') {
    return applyPostCallParams(`🇨🇳 *CURSO DE CHINO MANDARÍN I: NIVEL INICIAL*
Programa de formación integral con aval universitario

En IKARUGA combinamos la excelencia académica con una metodología diseñada para que realmente te comuniques.

📅 *MODALIDAD Y DURACIÓN*
• Duración: 5 módulos.
• Clases: 3 horas semanales en vivo (Zoom privado).
• Flexibilidad: Acceso 24/7 a nuestro Campus Virtual con lecciones, materiales exclusivos y grabaciones de todas las clases.

📚 *¿QUÉ APRENDERÁS?*
• Escritura y Fonética: Dominio del sistema Pinyin (pronunciación y los 4 tonos) y estructura de caracteres básicos.
• Comunicación: Saludos, presentaciones personales, nacionalidades y diálogos de supervivencia.
• Números y Tiempo: Contar del 1 al 100, fechas, días de la semana y descripción de rutinas.
• Vida Cotidiana: Vocabulario de familia, uso correcto de clasificadores y transacciones comerciales (precios y regateo).
• Inmersión Cultural: Historia del Horóscopo Chino, evolución de la moneda nacional y costumbres ancestrales.`, msgId, nivel);
  }

  if (msgId === 'pc-zh') {
    return applyPostCallParams('📘 *Descripción del curso:* Chino Mandarín [NIVEL] — 5 módulos · 3 hs semanales en vivo · Doble: IKARUGA + UAI 🎓 · Mandarín estándar. Pinyin, caracteres básicos, tono y contexto cultural desde el inicio.', msgId, nivel);
  }

  if (msgId === 'pc-th' && nivel === 'Tailandés 1') {
    return `🇹🇭 *CURSO DE TAILANDÉS I: NIVEL INICIAL*
Programa de formación integral con aval universitario

En IKARUGA combinamos la excelencia académica con una metodología diseñada para que realmente te comuniques.

📅 *MODALIDAD Y DURACIÓN*
• Duración: 4 módulos.
• Clases: 3 horas semanales en vivo (Zoom privado).
• Flexibilidad: Acceso 24/7 a nuestro Campus Virtual con lecciones, videos, materiales exclusivos y grabaciones de todas las clases.

📚 *¿QUÉ APRENDERÁS?*
• Escritura y Fonética: Introducción al alfabeto tailandés, caligrafía y dominio del sistema de tonos.
• Comunicación: Saludos, presentaciones, agradecimientos y frases de cortesía (Krap/Kaa).
• Vocabulario Real: Números, colores, días de la semana y vocabulario de supervivencia para compras, aeropuertos y restaurantes.
• Gramática: Estructura de oraciones básicas y partículas esenciales del idioma.
• Cultura: Historia de los reinos Sukhothai y Ayutthaya, el cuento de Ramakien y tradiciones de Tailandia.`;
  }

  if (msgId === 'pc-th') {
    return applyPostCallParams('📘 *Descripción del curso:* Tailandés [NIVEL] — 4–5 módulos · 3 hs semanales en vivo · Doble: IKARUGA + UAI 🎓 · Script tailandés, fonética tonal, vocabulario esencial y cultura de Tailandia.', msgId, nivel);
  }

  if (msgId === 'pc-en' && nivel === 'Inglés A1') {
    return `🇬🇧 *CURSO DE INGLÉS A1*
Programa de formación inicial con certificación institucional IKARUGA

📅 *MODALIDAD Y DURACIÓN*
• Duración: 4 meses.
• Clases: 2 horas semanales en vivo.
• Plataforma: Acceso 24/7 a Campus Virtual con lecciones y videos.

📚 *¿QUÉ APRENDERÁS?*
• Comunicación: Saludos, despedidas y presentaciones.
• Información Personal: Intercambio de datos como dirección, teléfono y correo.
• Rutina: Descripción de actividades diarias y manejo de la hora.
• Descripciones: Vocabulario de familia, ropa, colores y partes de la casa.
• Entorno: Meses del año, estaciones y estados del clima.`;
  }

  if (msgId === 'pc-en') {
    return applyPostCallParams('📘 *Descripción del curso:* Inglés [NIVEL] — 4 módulos · 2 hs semanales en vivo · Certificación oficial IKARUGA 🎓 · Enfoque comunicativo con método propio IKARUGA. Gramática, conversación y comprensión.', msgId, nivel);
  }

  if (msgId === 'pc-de' && nivel === 'Alemán A1') {
    return `🇩🇪 *CURSO DE ALEMÁN A1: NIVEL INICIAL*
Programa de formación integral con aval universitario

📅 *MODALIDAD Y DURACIÓN*
• Duración: 5 meses.
• Clases: 3 horas semanales en vivo.
• Plataforma: Acceso 24/7 a Campus Virtual con lecciones, videos y materiales complementarios.

📚 *¿QUÉ APRENDERÁS?*
• Fonética y Alfabeto: Dominio de la pronunciación alemana, incluyendo las vocales con Umlaut (ä, ö, ü) y combinaciones de consonantes.
• Gramática Base: Conjugación de verbos en presente, regulares e irregulares como sein y haben, artículos (der, die, das) y construcción de oraciones simples.
• Comunicación: Saludos formales e informales, presentaciones personales, nacionalidad, profesión y datos de contacto.
• Vida Diaria: Números, hora, días de la semana, meses y vocabulario para desenvolverse en situaciones cotidianas.
• Entorno: Vocabulario sobre familia, hobbies, gustos básicos y cómo pedir información en lugares públicos.`;
  }

  if (msgId === 'pc-de') {
    return applyPostCallParams('📘 *Descripción del curso:* Alemán [NIVEL] — 5 módulos · 3 hs semanales en vivo · Doble: IKARUGA + UAI 🎓 · Gramática estructurada, fonética alemana y contexto cultural europeo desde el inicio.', msgId, nivel);
  }

  if (msgId === 'pc-it' && nivel === 'Italiano A1') {
    return `🇮🇹 *CURSO DE ITALIANO A1*
Programa de formación integral con aval universitario

📅 *MODALIDAD Y DURACIÓN*
• Duración: 4 meses.
• Clases: 2 horas semanales en vivo.
• Plataforma: Acceso 24/7 a Campus Virtual con teoría explicada en lecciones, fotos y videos.

📚 *¿QUÉ APRENDERÁS?*
• Comunicación: Saludos, presentaciones y dominio de la fonética y el alfabeto italiano.
• Gramática: Pronombres personales, artículos determinativos e indeterminativos, y verbos esenciales (Essere y Avere).
• Vida Cotidiana: Vocabulario sobre la familia, colores, vestimenta, comidas y bebidas.
• Descripción: Habilidad para describir físicamente a personas y ambientes de la casa.
• Tiempo y Entorno: Manejo de números, meses del año y días de la semana.`;
  }

  if (msgId === 'pc-it') {
    return applyPostCallParams('📘 *Descripción del curso:* Italiano [NIVEL] — 4 módulos · 2 hs semanales en vivo · Doble: IKARUGA + UAI 🎓 · Método propio IKARUGA. Conversación, gramática y cultura italiana.', msgId, nivel);
  }

  return null;
}

function updateJp1HorarioPais() {
  updatePostCallSchedule('pc-jp');
}

function syncJp1Pais(pais) {
  const horarioPais = document.getElementById('pc-jp-pais');
  const precioPais = document.getElementById('pc-jp-precio-pais');
  if (horarioPais && horarioPais.value !== pais) horarioPais.value = pais;
  if (precioPais && precioPais.value !== pais) precioPais.value = pais;
  updateJp1HorarioPais();
  updateJp1Precio();
}

function updateJp1Precio() {
  const pais = document.getElementById('pc-jp-precio-pais')?.value || document.getElementById('pc-jp-pais')?.value || 'ARG';
  const descKey = document.getElementById('pc-jp-descuento')?.value || 'd35';
  const target = document.getElementById('pc-jp-precio');
  if (!target) return;

  const nivel = selectedPostCallLevels['pc-jp'] || 'Japonés 1';
  const p = getPrecio('japones', pais, descKey, nivel);
  const pJulio = getPrecioJulio4Modulos(pais, descKey);
  const mes = document.getElementById('pc-jp-mes')?.value || 'todos';
  const esJp1 = nivel === 'Japonés 1';
  const tieneSeptiembre4 = ["Japonés 1", "Japonés 2"].includes(nivel);
  const tieneOctubre4 = nivel === 'Japonés 1';
  const mostrarJulio = esJp1 && (mes === 'todos' || mes === 'julio');
  const mostrarSeptiembre = tieneSeptiembre4 && (mes === 'todos' || mes === 'septiembre');
  const mostrarOctubre = tieneOctubre4 && (mes === 'todos' || mes === 'octubre');
  const mostrarAgosto = (!esJp1) && (mes === 'todos' || mes === 'agosto');
  const maxCuotas = (mes === 'julio' && esJp1) ? 3 : 4;
  const cuotasSeleccionadas = setCuotasMax('pc-jp-cuotas', maxCuotas, maxCuotas);
  const cuotasAgosto = Math.min(cuotasSeleccionadas, 4);
  const cuotasJulio = Math.min(cuotasSeleccionadas, 3);
  const cuotasSeptiembre = Math.min(cuotasSeleccionadas, 4);
  const cuotasOctubre = Math.min(cuotasSeleccionadas, 4);
  const agostoTexto = mostrarAgosto ? `*${nivel} · agosto · 5 módulos*
❌ Valor Regular: ${p.simbolo}${p.precio_reg}
✅ *Inversión HOY: ${p.simbolo}${p.precio_hoy}* (todo el curso completo).
${buildFinanciacionLine(p, cuotasAgosto)}` : '';
  const julioTexto = mostrarJulio ? `${mostrarAgosto ? '\n\n' : ''}*Comisiones de julio · 4 módulos*
❌ Valor Regular: ${pJulio.simbolo}${pJulio.precio_reg}
✅ *Inversión HOY: ${pJulio.simbolo}${pJulio.precio_hoy}* (todo el curso completo).
${buildFinanciacionLine(pJulio, cuotasJulio)}` : '';
  const septiembreTexto = mostrarSeptiembre ? `${(mostrarAgosto || mostrarJulio) ? '\n\n' : ''}*${nivel} · septiembre · 4 módulos*
❌ Valor Regular: ${pJulio.simbolo}${pJulio.precio_reg}
✅ *Inversión HOY: ${pJulio.simbolo}${pJulio.precio_hoy}* (todo el curso completo).
${buildFinanciacionLine(pJulio, cuotasSeptiembre)}` : '';
  const octubreTexto = mostrarOctubre ? `${(mostrarAgosto || mostrarJulio || mostrarSeptiembre) ? '\n\n' : ''}*${nivel} · octubre · 4 módulos*
❌ Valor Regular: ${pJulio.simbolo}${pJulio.precio_reg}
✅ *Inversión HOY: ${pJulio.simbolo}${pJulio.precio_hoy}* (todo el curso completo).
${buildFinanciacionLine(pJulio, cuotasOctubre)}` : '';

  target.innerText = `💳 *PREVENTA ${p.descuento} OFF* ⚡

${agostoTexto}${julioTexto}${septiembreTexto}${octubreTexto || ((mostrarAgosto || mostrarJulio || mostrarSeptiembre) ? '' : 'Consultar cotización disponible para el mes seleccionado.')}`;
}

const pagosPorPais = {
  ARG: `Argentina · Transferencia

Jorge Frias
Solo si es necesario y para ventas hasta el 30%. Caso contrario usar cuenta propia.

Banco Santander Rio
N° de cuenta: 362377263/4
CBU: 0720362488000037726340
Alias: PLATO.FLECHA.PIPA

También puede ser en 3 cuotas sin interés si se realiza hasta 25% de descuento. Cada closer genera su link o lo puede solicitar en chat principal.`,

  MEX: `🇲🇽 México

Opción 1: Transferencia
Datos de Pago México Ikaruga

Cuenta en pesos México

Nombre: Alexis García Orozco
Banco: BBVA
CURP: GAOA950925HBCRRL07
CLABE: 012 020 01565216596 1

Opción 2: 3 cuotas sin interés con tarjeta de crédito - Valentina Rammi
https://link.mercadopago.com.mx/institutoikaruga

No olvides abonar dentro del límite de oferta para no sufrir actualizaciones en el pago acordado, así como enviar el comprobante.`,

  ECU: `Ecuador

La nueva cuenta habilitada para recibir pagos es la siguiente:

Banco Pichincha
Cuenta de ahorro transaccional

Titular: Brithany Domenica Mendoza Jiménez

Número de cuenta: 2208428092

Número de cédula: 0944063221

Tarjeta de crédito: genera un link con Takenos solo VISA y Mastercard.

PayPal: https://www.paypal.com/paypalme/ikarugaservicios`,

  COL: `Colombia

Transferencia
Cuenta de ahorros Nu
Titular: Angélica Lucia Pabon Castro
Número: 96685123
Cédula: 1143874204
Llave Nu: 1143874204

Tarjeta de crédito: genera un link con Takenos solo VISA y Mastercard.

PayPal: https://www.paypal.com/paypalme/ikarugaservicios`,

  PER: `Perú

Transferencia: Yape

Richard Eloy Cobiam Ramirez
Tel: +51 955 510 603
DNI: 71620015

Tarjeta de crédito: genera un link con Takenos solo VISA y Mastercard.

PayPal: https://www.paypal.com/paypalme/ikarugaservicios`,

  HND: `Honduras

Transferencia
Datos para pagar en lempiras

Opción 1: Banco de Occidente
Rosa María Lanza Motiño
214021227457

Opción 2: BAC Credomatic
Cliente: ROSA MARIA LANZA MOTIÑO
Número de cuenta BAC: 722989491

Tarjeta de crédito: genera un link con Takenos solo VISA y Mastercard.

PayPal: https://www.paypal.com/paypalme/ikarugaservicios`,

  PAN: `Panamá

Tarjeta de crédito: genera un link con Takenos solo VISA y Mastercard.

PayPal: https://www.paypal.com/paypalme/ikarugaservicios`,

  SLV: `🇸🇻 El Salvador
Confirmar con vicedirector antes de usar.

Banco Agrícola
Juan Molina
Cuenta ahorro: 3115852152

No olvides abonar dentro del límite de oferta para no sufrir actualizaciones en el pago acordado, así como enviar el comprobante.`,

  PRY: `Paraguay
Confirmar por el grupo antes de usar.

Transferencia
Banco Itau Paraguay
Juan Ramirez
N° de cuenta: 25347134
C.I.: 3230004
Alias RUC: 3230004-2

PayPal: https://www.paypal.com/paypalme/ikarugaservicios

Ofrecer PayPal primero. Western Union solo pago total.

No olvides abonar dentro del límite de oferta para no sufrir actualizaciones en el pago acordado, así como enviar el comprobante.`,

  BOL: `🇧🇴 Bolivia

PayPal: https://www.paypal.com/paypalme/ikarugaservicios`,

  CHL: `Chile

Titular: Francesca Alejandra Arancibia Arocha
RUT: 19.782.500-6
Tipo de cuenta: Cuenta Vista
N.º de cuenta: 0 070 11 51553 8
Banco: Banco Santander
Correo: francheflor@hotmail.com`,

  PAYPAL: `🌎 Internacional

PayPal: https://www.paypal.com/paypalme/ikarugaservicios

Ofrecer PayPal primero. Western Union solo pago total.

No olvides abonar dentro del límite de oferta para no sufrir actualizaciones en el pago acordado.`
};

function updateJp1Pago() {
  const pais = document.getElementById('pc-jp-pago-pais')?.value || 'ARG';
  const target = document.getElementById('pc-jp-pago');
  if (!target) return;
  const label = document.getElementById('pc-jp-pago-pais')?.selectedOptions?.[0]?.textContent || 'medio de pago';
  const datos = pagosPorPais[pais] || pagosPorPais.PAYPAL;

  target.innerText = `Te comparto los datos para que realices el pago de tu primera cuota:

${datos}

Cuando lo realices, envíame el comprobante para avanzar con el alta de tu inscripción.`;
}

function updateKr1HorarioPais() {
  updatePostCallSchedule('pc-kr');
}

function syncKr1Pais(pais) {
  const horarioPais = document.getElementById('pc-kr-pais');
  const precioPais = document.getElementById('pc-kr-precio-pais');
  if (horarioPais && horarioPais.value !== pais) horarioPais.value = pais;
  if (precioPais && precioPais.value !== pais) precioPais.value = pais;
  updateKr1HorarioPais();
  updateKr1Precio();
}

function updateKr1Precio() {
  const pais = document.getElementById('pc-kr-precio-pais')?.value || document.getElementById('pc-kr-pais')?.value || 'ARG';
  const descKey = document.getElementById('pc-kr-descuento')?.value || 'd35';
  const target = document.getElementById('pc-kr-precio');
  if (!target) return;

  const nivel = selectedPostCallLevels['pc-kr'] || 'Coreano 1';
  const mes = document.getElementById('pc-kr-mes')?.value || 'todos';
  const p = getCotizadorPrecio('coreano', nivel, pais, descKey, mes);
  const cuotas = (mes === 'septiembre' || mes === 'octubre') ? 4 : p.cuotas;
  const precioNum = parseFloat((p.precio_hoy || '0').replace(/\./g,'').replace(',','.'));
  const cuotaCalc = precioNum > 0 ? Math.round(precioNum / cuotas).toLocaleString('es-AR') : '—';
  const mesLabel = mes === 'todos' ? 'mes disponible' : mes.charAt(0).toUpperCase() + mes.slice(1);

  target.innerText = `💳 *PREVENTA ${p.descuento} OFF* ⚡
*${nivel} · ${mesLabel} · ${p.meses} módulos*
❌ Valor Regular: ${p.simbolo}${p.precio_reg}
✅ *Inversión HOY: ${p.simbolo}${p.precio_hoy}* (todo el curso completo).
🛡️ *Financiación:* ${cuotas} cuotas fijas de *${p.simbolo}${cuotaCalc}* vía transferencia.`;
}

function updateKr1Pago() {
  const pais = document.getElementById('pc-kr-pago-pais')?.value || 'ARG';
  const target = document.getElementById('pc-kr-pago');
  if (!target) return;
  const datos = pagosPorPais[pais] || pagosPorPais.PAYPAL;

  target.innerText = `Te comparto los datos para que realices el pago de tu primera cuota:

${datos}

Cuando lo realices, envíame el comprobante para avanzar con el alta de tu inscripción.`;
}

function updateZh1HorarioPais() {
  updatePostCallSchedule('pc-zh');
}

function syncZh1Pais(pais) {
  const horarioPais = document.getElementById('pc-zh-pais');
  const precioPais = document.getElementById('pc-zh-precio-pais');
  if (horarioPais && horarioPais.value !== pais) horarioPais.value = pais;
  if (precioPais && precioPais.value !== pais) precioPais.value = pais;
  updateZh1HorarioPais();
  updateZh1Precio();
}

function updateZh1Precio() {
  const pais = document.getElementById('pc-zh-precio-pais')?.value || document.getElementById('pc-zh-pais')?.value || 'ARG';
  const descKey = document.getElementById('pc-zh-descuento')?.value || 'd35';
  const target = document.getElementById('pc-zh-precio');
  if (!target) return;

  const nivel = selectedPostCallLevels['pc-zh'] || 'Chino 1';
  const mes = document.getElementById('pc-zh-mes')?.value || 'todos';
  const p = getCotizadorPrecio('chino', nivel, pais, descKey, mes);
  const cuotas = (mes === 'septiembre' || mes === 'octubre') ? 4 : p.cuotas;
  const precioNum = parseFloat((p.precio_hoy || '0').replace(/\./g,'').replace(',','.'));
  const cuotaCalc = precioNum > 0 ? Math.round(precioNum / cuotas).toLocaleString('es-AR') : '—';
  const mesLabel = mes === 'todos' ? 'mes disponible' : mes.charAt(0).toUpperCase() + mes.slice(1);

  target.innerText = `💳 *PREVENTA ${p.descuento} OFF* ⚡
*${nivel} · ${mesLabel} · ${p.meses} módulos*
❌ Valor Regular: ${p.simbolo}${p.precio_reg}
✅ *Inversión HOY: ${p.simbolo}${p.precio_hoy}* (todo el curso completo).
🛡️ *Financiación:* ${cuotas} cuotas fijas de *${p.simbolo}${cuotaCalc}* vía transferencia.`;
}

function updateZh1Pago() {
  const pais = document.getElementById('pc-zh-pago-pais')?.value || 'ARG';
  const target = document.getElementById('pc-zh-pago');
  if (!target) return;
  const datos = pagosPorPais[pais] || pagosPorPais.PAYPAL;

  target.innerText = `Te comparto los datos para que realices el pago de tu primera cuota:

${datos}

Cuando lo realices, envíame el comprobante para avanzar con el alta de tu inscripción.`;
}

function updateTh1HorarioPais() {
  updatePostCallSchedule('pc-th');
}

function syncTh1Pais(pais) {
  const horarioPais = document.getElementById('pc-th-pais');
  const precioPais = document.getElementById('pc-th-precio-pais');
  if (horarioPais && horarioPais.value !== pais) horarioPais.value = pais;
  if (precioPais && precioPais.value !== pais) precioPais.value = pais;
  updateTh1HorarioPais();
  updateTh1Precio();
}

function updateTh1Precio() {
  const pais = document.getElementById('pc-th-precio-pais')?.value || document.getElementById('pc-th-pais')?.value || 'ARG';
  const descKey = document.getElementById('pc-th-descuento')?.value || 'd35';
  const target = document.getElementById('pc-th-precio');
  if (!target) return;

  const nivel = selectedPostCallLevels['pc-th'] || 'Tailandés 1';
  const mes = document.getElementById('pc-th-mes')?.value || 'todos';
  const esTail1 = nivel === 'Tailandés 1';
  const p = getPrecio('tailandes', pais, descKey, nivel);
  const maxCuotas = esTail1 && mes === 'julio' ? 3 : 4;
  const cuotas = setCuotasMax('pc-th-cuotas', maxCuotas, maxCuotas);
  const moduloLabel = esTail1 ? '4 módulos' : '5 módulos';

  target.innerText = `💳 *PREVENTA ${p.descuento} OFF* ⚡
*${nivel} · ${moduloLabel}*
❌ Valor Regular: ${p.simbolo}${p.precio_reg}
✅ *Inversión HOY: ${p.simbolo}${p.precio_hoy}* (todo el curso completo).
${buildFinanciacionLine(p, cuotas)}`;
}

function updateTh1Pago() {
  const pais = document.getElementById('pc-th-pago-pais')?.value || 'ARG';
  const target = document.getElementById('pc-th-pago');
  if (!target) return;
  const datos = pagosPorPais[pais] || pagosPorPais.PAYPAL;

  target.innerText = `Te comparto los datos para que realices el pago de tu primera cuota:

${datos}

Cuando lo realices, envíame el comprobante para avanzar con el alta de tu inscripción.`;
}

function updateEnA1HorarioPais() {
  updatePostCallSchedule('pc-en');
}

function syncEnA1Pais(pais) {
  const horarioPais = document.getElementById('pc-en-pais');
  const precioPais = document.getElementById('pc-en-precio-pais');
  if (horarioPais && horarioPais.value !== pais) horarioPais.value = pais;
  if (precioPais && precioPais.value !== pais) precioPais.value = pais;
  updateEnA1HorarioPais();
  updateEnA1Precio();
}

function updateEnA1Precio() {
  const pais = document.getElementById('pc-en-precio-pais')?.value || document.getElementById('pc-en-pais')?.value || 'ARG';
  const descKey = document.getElementById('pc-en-descuento')?.value || 'd30';
  const target = document.getElementById('pc-en-precio');
  if (!target) return;

  const nivel = selectedPostCallLevels['pc-en'] || 'Inglés A1';
  const p = getPrecio('ingles', pais, descKey, nivel);
  const mes = document.getElementById('pc-en-mes')?.value || 'todos';
  const cuotas = (mes === 'septiembre' || mes === 'octubre') ? 4 : p.cuotas;
  const precioNum = parseFloat((p.precio_hoy || '0').replace(/\./g,'').replace(',','.'));
  const cuotaCalc = precioNum > 0 ? Math.round(precioNum / cuotas).toLocaleString('es-AR') : '—';

  target.innerText = `💳 *PREVENTA ${p.descuento} OFF* ⚡
*${nivel} · ${p.meses} módulos*
❌ Valor Regular: ${p.simbolo}${p.precio_reg}
✅ *Inversión HOY: ${p.simbolo}${p.precio_hoy}* (todo el curso completo).
🛡️ *Financiación:* ${cuotas} cuotas fijas de *${p.simbolo}${cuotaCalc}* vía transferencia.`;
}

function updateEnA1Pago() {
  const pais = document.getElementById('pc-en-pago-pais')?.value || 'ARG';
  const target = document.getElementById('pc-en-pago');
  if (!target) return;
  const datos = pagosPorPais[pais] || pagosPorPais.PAYPAL;

  target.innerText = `Te comparto los datos para que realices el pago de tu primera cuota:

${datos}

Cuando lo realices, envíame el comprobante para avanzar con el alta de tu inscripción.`;
}

function updateDeA1HorarioPais() {
  updatePostCallSchedule('pc-de');
}

function syncDeA1Pais(pais) {
  const horarioPais = document.getElementById('pc-de-pais');
  const precioPais = document.getElementById('pc-de-precio-pais');
  if (horarioPais && horarioPais.value !== pais) horarioPais.value = pais;
  if (precioPais && precioPais.value !== pais) precioPais.value = pais;
  updateDeA1HorarioPais();
  updateDeA1Precio();
}

function updateDeA1Precio() {
  const pais = document.getElementById('pc-de-precio-pais')?.value || document.getElementById('pc-de-pais')?.value || 'ARG';
  const descKey = document.getElementById('pc-de-descuento')?.value || 'd35';
  const target = document.getElementById('pc-de-precio');
  if (!target) return;

  const nivel = selectedPostCallLevels['pc-de'] || 'Alemán A1';
  const p = getPrecio('aleman', pais, descKey, nivel);
  const precioNum = parseFloat((p.precio_hoy || '0').replace(/\./g,'').replace(',','.'));
  const cuotaCalc = precioNum > 0 ? Math.round(precioNum / p.cuotas).toLocaleString('es-AR') : '—';

  target.innerText = `💳 *PREVENTA ${p.descuento} OFF* ⚡
*${nivel} · ${p.meses} módulos*
❌ Valor Regular: ${p.simbolo}${p.precio_reg}
✅ *Inversión HOY: ${p.simbolo}${p.precio_hoy}* (todo el curso completo).
🛡️ *Financiación:* ${p.cuotas} cuotas fijas de *${p.simbolo}${cuotaCalc}* vía transferencia.`;
}

function updateDeA1Pago() {
  const pais = document.getElementById('pc-de-pago-pais')?.value || 'ARG';
  const target = document.getElementById('pc-de-pago');
  if (!target) return;
  const datos = pagosPorPais[pais] || pagosPorPais.PAYPAL;

  target.innerText = `Te comparto los datos para que realices el pago de tu primera cuota:

${datos}

Cuando lo realices, envíame el comprobante para avanzar con el alta de tu inscripción.`;
}

function updateItA1HorarioPais() {
  updatePostCallSchedule('pc-it');
}

function syncItA1Pais(pais) {
  const horarioPais = document.getElementById('pc-it-pais');
  const precioPais = document.getElementById('pc-it-precio-pais');
  if (horarioPais && horarioPais.value !== pais) horarioPais.value = pais;
  if (precioPais && precioPais.value !== pais) precioPais.value = pais;
  updateItA1HorarioPais();
  updateItA1Precio();
}

function updateItA1Precio() {
  const pais = document.getElementById('pc-it-precio-pais')?.value || document.getElementById('pc-it-pais')?.value || 'ARG';
  const descKey = document.getElementById('pc-it-descuento')?.value || 'd30';
  const target = document.getElementById('pc-it-precio');
  if (!target) return;

  const nivel = selectedPostCallLevels['pc-it'] || 'Italiano A1';
  const p = getPrecio('italiano', pais, descKey, nivel);
  const precioNum = parseFloat((p.precio_hoy || '0').replace(/\./g,'').replace(',','.'));
  const cuotaCalc = precioNum > 0 ? Math.round(precioNum / p.cuotas).toLocaleString('es-AR') : '—';

  target.innerText = `💳 *PREVENTA ${p.descuento} OFF* ⚡
*${nivel} · ${p.meses} módulos*
❌ Valor Regular: ${p.simbolo}${p.precio_reg}
✅ *Inversión HOY: ${p.simbolo}${p.precio_hoy}* (todo el curso completo).
🛡️ *Financiación:* ${p.cuotas} cuotas fijas de *${p.simbolo}${cuotaCalc}* vía transferencia.`;
}

function updateItA1Pago() {
  const pais = document.getElementById('pc-it-pago-pais')?.value || 'ARG';
  const target = document.getElementById('pc-it-pago');
  if (!target) return;
  const datos = pagosPorPais[pais] || pagosPorPais.PAYPAL;

  target.innerText = `Te comparto los datos para que realices el pago de tu primera cuota:

${datos}

Cuando lo realices, envíame el comprobante para avanzar con el alta de tu inscripción.`;
}
