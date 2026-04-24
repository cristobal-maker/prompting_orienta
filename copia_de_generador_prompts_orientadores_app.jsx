// Iconos SVG locales embebidos para evitar dependencias remotas de lucide-react.
import React, { useEffect, useMemo, useState } from "react";

function IconBase({ children, size = 18, className = "" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

function LayoutDashboardIcon(props) {
  return (
    <IconBase {...props}>
      <rect x="3" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="3" width="7" height="4" rx="1" />
      <rect x="14" y="10" width="7" height="11" rx="1" />
      <rect x="3" y="13" width="7" height="8" rx="1" />
    </IconBase>
  );
}

function FileTextIcon(props) {
  return (
    <IconBase {...props}>
      <path d="M14 2H8a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V8z" />
      <path d="M14 2v6h6" />
      <path d="M10 13h4" />
      <path d="M10 17h4" />
      <path d="M10 9h1" />
    </IconBase>
  );
}

function BookTemplateIcon(props) {
  return (
    <IconBase {...props}>
      <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v17H6.5A2.5 2.5 0 0 0 4 22z" />
      <path d="M4 5.5V19" />
      <path d="M8 7h8" />
      <path d="M8 11h8" />
      <path d="M8 15h5" />
    </IconBase>
  );
}

function HistoryIcon(props) {
  return (
    <IconBase {...props}>
      <path d="M3 12a9 9 0 1 0 3-6.7" />
      <path d="M3 3v6h6" />
      <path d="M12 7v5l3 2" />
    </IconBase>
  );
}

function HelpCircleIcon(props) {
  return (
    <IconBase {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M9.1 9a3 3 0 1 1 5.8 1c0 2-3 2-3 4" />
      <path d="M12 17h.01" />
    </IconBase>
  );
}

function ChevronLeftIcon(props) {
  return (
    <IconBase {...props}>
      <path d="m15 18-6-6 6-6" />
    </IconBase>
  );
}

function ChevronRightIcon(props) {
  return (
    <IconBase {...props}>
      <path d="m9 18 6-6-6-6" />
    </IconBase>
  );
}

const MARCOS_NORMATIVOS = {
  "Comunidad de Madrid": [
    "Normativa estatal vigente y, si procede, normativa de la Comunidad de Madrid.",
    "LOMLOE y normativa de desarrollo vigente en la Comunidad de Madrid.",
    "Normativa de atención a la diversidad de la Comunidad de Madrid.",
    "Normativa de evaluación, promoción y titulación vigente en la Comunidad de Madrid.",
    "Normativa de convivencia y acción tutorial aplicable en la Comunidad de Madrid.",
    "Normativa de orientación educativa y profesional vigente en la Comunidad de Madrid.",
    "Documentos institucionales del centro y normativa autonómica de la Comunidad de Madrid."
  ],
  Andalucía: [
    "Normativa estatal vigente y, si procede, normativa de Andalucía.",
    "LOMLOE y normativa de desarrollo vigente en Andalucía.",
    "Normativa de atención a la diversidad de Andalucía.",
    "Normativa de evaluación, promoción y titulación vigente en Andalucía.",
    "Normativa de convivencia y acción tutorial aplicable en Andalucía.",
    "Normativa de orientación educativa y profesional vigente en Andalucía.",
    "Documentos institucionales del centro y normativa autonómica de Andalucía."
  ],
  Aragón: [
    "Normativa estatal vigente y, si procede, normativa de Aragón.",
    "LOMLOE y normativa de desarrollo vigente en Aragón.",
    "Normativa de atención a la diversidad de Aragón.",
    "Normativa de evaluación, promoción y titulación vigente en Aragón.",
    "Normativa de convivencia y acción tutorial aplicable en Aragón.",
    "Normativa de orientación educativa y profesional vigente en Aragón.",
    "Documentos institucionales del centro y normativa autonómica de Aragón."
  ],
  Asturias: [
    "Normativa estatal vigente y, si procede, normativa del Principado de Asturias.",
    "LOMLOE y normativa de desarrollo vigente en el Principado de Asturias.",
    "Normativa de atención a la diversidad del Principado de Asturias.",
    "Normativa de evaluación, promoción y titulación vigente en el Principado de Asturias.",
    "Normativa de convivencia y acción tutorial aplicable en el Principado de Asturias.",
    "Normativa de orientación educativa y profesional vigente en el Principado de Asturias.",
    "Documentos institucionales del centro y normativa autonómica del Principado de Asturias."
  ],
  "Illes Balears": [
    "Normativa estatal vigente y, si procede, normativa de Illes Balears.",
    "LOMLOE y normativa de desarrollo vigente en Illes Balears.",
    "Normativa de atención a la diversidad de Illes Balears.",
    "Normativa de evaluación, promoción y titulación vigente en Illes Balears.",
    "Normativa de convivencia y acción tutorial aplicable en Illes Balears.",
    "Normativa de orientación educativa y profesional vigente en Illes Balears.",
    "Documentos institucionales del centro y normativa autonómica de Illes Balears."
  ],
  Canarias: [
    "Normativa estatal vigente y, si procede, normativa de Canarias.",
    "LOMLOE y normativa de desarrollo vigente en Canarias.",
    "Normativa de atención a la diversidad de Canarias.",
    "Normativa de evaluación, promoción y titulación vigente en Canarias.",
    "Normativa de convivencia y acción tutorial aplicable en Canarias.",
    "Normativa de orientación educativa y profesional vigente en Canarias.",
    "Documentos institucionales del centro y normativa autonómica de Canarias."
  ],
  Cantabria: [
    "Normativa estatal vigente y, si procede, normativa de Cantabria.",
    "LOMLOE y normativa de desarrollo vigente en Cantabria.",
    "Normativa de atención a la diversidad de Cantabria.",
    "Normativa de evaluación, promoción y titulación vigente en Cantabria.",
    "Normativa de convivencia y acción tutorial aplicable en Cantabria.",
    "Normativa de orientación educativa y profesional vigente en Cantabria.",
    "Documentos institucionales del centro y normativa autonómica de Cantabria."
  ],
  "Castilla-La Mancha": [
    "Normativa estatal vigente y, si procede, normativa de Castilla-La Mancha.",
    "LOMLOE y normativa de desarrollo vigente en Castilla-La Mancha.",
    "Normativa de atención a la diversidad de Castilla-La Mancha.",
    "Normativa de evaluación, promoción y titulación vigente en Castilla-La Mancha.",
    "Normativa de convivencia y acción tutorial aplicable en Castilla-La Mancha.",
    "Normativa de orientación educativa y profesional vigente en Castilla-La Mancha.",
    "Documentos institucionales del centro y normativa autonómica de Castilla-La Mancha."
  ],
  "Castilla y León": [
    "Normativa estatal vigente y, si procede, normativa de Castilla y León.",
    "LOMLOE y normativa de desarrollo vigente en Castilla y León.",
    "Normativa de atención a la diversidad de Castilla y León.",
    "Normativa de evaluación, promoción y titulación vigente en Castilla y León.",
    "Normativa de convivencia y acción tutorial aplicable en Castilla y León.",
    "Normativa de orientación educativa y profesional vigente en Castilla y León.",
    "Documentos institucionales del centro y normativa autonómica de Castilla y León."
  ],
  Cataluña: [
    "Normativa estatal vigente y, si procede, normativa de Cataluña.",
    "LOMLOE y normativa de desarrollo vigente en Cataluña.",
    "Normativa de atención a la diversidad de Cataluña.",
    "Normativa de evaluación, promoción y titulación vigente en Cataluña.",
    "Normativa de convivencia y acción tutorial aplicable en Cataluña.",
    "Normativa de orientación educativa y profesional vigente en Cataluña.",
    "Documentos institucionales del centro y normativa autonómica de Cataluña."
  ],
  "Comunitat Valenciana": [
    "Normativa estatal vigente y, si procede, normativa de la Comunitat Valenciana.",
    "LOMLOE y normativa de desarrollo vigente en la Comunitat Valenciana.",
    "Normativa de atención a la diversidad de la Comunitat Valenciana.",
    "Normativa de evaluación, promoción y titulación vigente en la Comunitat Valenciana.",
    "Normativa de convivencia y acción tutorial aplicable en la Comunitat Valenciana.",
    "Normativa de orientación educativa y profesional vigente en la Comunitat Valenciana.",
    "Documentos institucionales del centro y normativa autonómica de la Comunitat Valenciana."
  ],
  Extremadura: [
    "Normativa estatal vigente y, si procede, normativa de Extremadura.",
    "LOMLOE y normativa de desarrollo vigente en Extremadura.",
    "Normativa de atención a la diversidad de Extremadura.",
    "Normativa de evaluación, promoción y titulación vigente en Extremadura.",
    "Normativa de convivencia y acción tutorial aplicable en Extremadura.",
    "Normativa de orientación educativa y profesional vigente en Extremadura.",
    "Documentos institucionales del centro y normativa autonómica de Extremadura."
  ],
  Galicia: [
    "Normativa estatal vigente y, si procede, normativa de Galicia.",
    "LOMLOE y normativa de desarrollo vigente en Galicia.",
    "Normativa de atención a la diversidad de Galicia.",
    "Normativa de evaluación, promoción y titulación vigente en Galicia.",
    "Normativa de convivencia y acción tutorial aplicable en Galicia.",
    "Normativa de orientación educativa y profesional vigente en Galicia.",
    "Documentos institucionales del centro y normativa autonómica de Galicia."
  ],
  "La Rioja": [
    "Normativa estatal vigente y, si procede, normativa de La Rioja.",
    "LOMLOE y normativa de desarrollo vigente en La Rioja.",
    "Normativa de atención a la diversidad de La Rioja.",
    "Normativa de evaluación, promoción y titulación vigente en La Rioja.",
    "Normativa de convivencia y acción tutorial aplicable en La Rioja.",
    "Normativa de orientación educativa y profesional vigente en La Rioja.",
    "Documentos institucionales del centro y normativa autonómica de La Rioja."
  ],
  Murcia: [
    "Normativa estatal vigente y, si procede, normativa de la Región de Murcia.",
    "LOMLOE y normativa de desarrollo vigente en la Región de Murcia.",
    "Normativa de atención a la diversidad de la Región de Murcia.",
    "Normativa de evaluación, promoción y titulación vigente en la Región de Murcia.",
    "Normativa de convivencia y acción tutorial aplicable en la Región de Murcia.",
    "Normativa de orientación educativa y profesional vigente en la Región de Murcia.",
    "Documentos institucionales del centro y normativa autonómica de la Región de Murcia."
  ],
  Navarra: [
    "Normativa estatal vigente y, si procede, normativa de Navarra.",
    "LOMLOE y normativa de desarrollo vigente en Navarra.",
    "Normativa de atención a la diversidad de Navarra.",
    "Normativa de evaluación, promoción y titulación vigente en Navarra.",
    "Normativa de convivencia y acción tutorial aplicable en Navarra.",
    "Normativa de orientación educativa y profesional vigente en Navarra.",
    "Documentos institucionales del centro y normativa autonómica de Navarra."
  ],
  "País Vasco": [
    "Normativa estatal vigente y, si procede, normativa del País Vasco.",
    "LOMLOE y normativa de desarrollo vigente en el País Vasco.",
    "Normativa de atención a la diversidad del País Vasco.",
    "Normativa de evaluación, promoción y titulación vigente en el País Vasco.",
    "Normativa de convivencia y acción tutorial aplicable en el País Vasco.",
    "Normativa de orientación educativa y profesional vigente en el País Vasco.",
    "Documentos institucionales del centro y normativa autonómica del País Vasco."
  ],
  Ceuta: [
    "Normativa estatal vigente y normativa aplicable en Ceuta.",
    "LOMLOE y normativa de desarrollo aplicable en Ceuta.",
    "Normativa de atención a la diversidad aplicable en Ceuta.",
    "Normativa de evaluación, promoción y titulación aplicable en Ceuta.",
    "Normativa de convivencia y acción tutorial aplicable en Ceuta.",
    "Normativa de orientación educativa y profesional aplicable en Ceuta.",
    "Documentos institucionales del centro y normativa educativa aplicable en Ceuta."
  ],
  Melilla: [
    "Normativa estatal vigente y normativa aplicable en Melilla.",
    "LOMLOE y normativa de desarrollo aplicable en Melilla.",
    "Normativa de atención a la diversidad aplicable en Melilla.",
    "Normativa de evaluación, promoción y titulación aplicable en Melilla.",
    "Normativa de convivencia y acción tutorial aplicable en Melilla.",
    "Normativa de orientación educativa y profesional aplicable en Melilla.",
    "Documentos institucionales del centro y normativa educativa aplicable en Melilla."
  ]
};

const OPCIONES = {
  finalidad: [
    "Informe psicopedagógico",
    "Orientación académica y profesional",
    "Plan de acción tutorial",
    "Intervención con familias",
    "Asesoramiento al profesorado",
    "Adaptaciones y apoyos",
    "Evaluación inicial",
    "Seguimiento de caso",
    "Diseño de actividad",
    "Redacción de circular o comunicado",
    "Propuesta de medidas de atención a la diversidad",
    "Preparación de oposición o supuesto práctico",
    "Tarea administrativa"
  ],
  etapa: ["Infantil", "Primaria", "ESO", "Bachillerato", "FP", "Adultos", "General / varias etapas"],
  destinatario: [
    "Orientador/a",
    "Tutor/a",
    "Profesorado",
    "Equipo directivo",
    "Familia",
    "Alumno/a",
    "Inspección",
    "Comisión de coordinación pedagógica",
    "Claustro"
  ],
  tono: ["Formal técnico", "Claro y pedagógico", "Cercano y empático", "Institucional", "Práctico y operativo"],
  formato: [
    "Informe estructurado",
    "Tabla",
    "Checklist",
    "Guion paso a paso",
    "Esquema por apartados",
    "Rúbrica",
    "Plan de actuación",
    "Carta o correo",
    "Presentación breve",
    "Supuesto práctico desarrollado"
  ]
};

const PLANTILLAS = {
  "Informe psicopedagógico": "Necesito redactar un informe psicopedagógico completo y bien estructurado.",
  "Orientación académica y profesional": "Necesito elaborar una propuesta de orientación académica y profesional ajustada al perfil del alumno o grupo.",
  "Plan de acción tutorial": "Necesito diseñar una actuación del plan de acción tutorial aplicable al centro y al grupo destinatario.",
  "Intervención con familias": "Necesito preparar orientaciones claras y útiles para una entrevista o devolución a familias.",
  "Asesoramiento al profesorado": "Necesito formular recomendaciones prácticas para el profesorado sobre respuesta educativa y seguimiento.",
  "Adaptaciones y apoyos": "Necesito proponer medidas, apoyos y adaptaciones ajustadas a las necesidades detectadas.",
  "Evaluación inicial": "Necesito diseñar una evaluación inicial con criterios, instrumentos e interpretación educativa.",
  "Seguimiento de caso": "Necesito organizar un plan de seguimiento de caso con indicadores, responsables y temporalización.",
  "Diseño de actividad": "Necesito crear una actividad aplicable a la orientación educativa y profesional.",
  "Redacción de circular o comunicado": "Necesito redactar una comunicación clara, formal y adecuada al contexto educativo.",
  "Propuesta de medidas de atención a la diversidad": "Necesito elaborar una propuesta de medidas de atención a la diversidad contextualizada y viable.",
  "Preparación de oposición o supuesto práctico": "Necesito desarrollar una respuesta técnica y fundamentada para un supuesto práctico de orientación educativa.",
  "Tarea administrativa": "Necesito resolver una tarea administrativa propia de la orientación educativa con claridad, orden y utilidad práctica."
};

const MODOS_PROMPT = ["Prompt estándar", "System prompt"];
const SUBTIPOS_ADMINISTRATIVOS = [
  "General",
  "Acta",
  "Comunicación interna",
  "Comunicación a familias",
  "Informe de seguimiento",
  "Convocatoria",
  "Registro de actuaciones",
  "Memoria"
];

const PRESETS_ADMINISTRATIVOS = {
  General: {
    destinatario: "Equipo directivo",
    formato: "Esquema por apartados",
    contexto: "Necesidad de organizar y redactar documentación administrativa del departamento de orientación para su uso interno en el centro educativo.",
    tarea: "Elaborar un borrador claro y operativo de documento administrativo, incluyendo apartados, responsables, plazos y seguimiento.",
    especificaciones: "Incluye encabezado, finalidad, desarrollo, responsables, temporalización, registro de actuaciones y recomendaciones de archivo o seguimiento.",
    criterios: "Claridad, orden, tono institucional, utilidad práctica y coherencia documental.",
    respuesta: "Presenta la respuesta con estructura formal, lenguaje preciso y formato listo para adaptar en el centro.",
    verificacion: "Comprueba que el documento sea claro, completo, útil y fácil de reutilizar administrativamente."
  },
  Acta: {
    destinatario: "Claustro",
    formato: "Esquema por apartados",
    contexto: "Necesidad de redactar el acta de una reunión del departamento de orientación o de coordinación con tutores y profesorado.",
    tarea: "Redactar un modelo de acta clara y formal con asistentes, asuntos tratados, acuerdos, responsables y fecha de seguimiento.",
    especificaciones: "Incluye encabezado, asistentes, orden del día, desarrollo breve, acuerdos adoptados, responsables, plazos y firma o validación.",
    criterios: "Claridad, precisión, orden cronológico, tono institucional y trazabilidad de acuerdos.",
    respuesta: "Presenta el acta en formato listo para completar y archivar en el centro.",
    verificacion: "Comprueba que recoge acuerdos, responsables y próximos pasos de forma inequívoca."
  },
  "Comunicación interna": {
    destinatario: "Profesorado",
    formato: "Carta o correo",
    contexto: "Necesidad de comunicar información organizativa o pedagógica del departamento de orientación al profesorado o al equipo directivo.",
    tarea: "Redactar una comunicación interna breve, clara y formal con asunto, mensaje principal, acciones requeridas y plazos.",
    especificaciones: "Incluye asunto, destinatarios, motivo, indicaciones concretas, fecha límite y cierre profesional.",
    criterios: "Brevedad, claridad, tono institucional y facilidad de ejecución.",
    respuesta: "Escribe en formato de correo o circular interna lista para enviar o adaptar.",
    verificacion: "Comprueba que el mensaje sea comprensible, accionable y sin ambigüedades."
  },
  "Comunicación a familias": {
    destinatario: "Familia",
    formato: "Carta o correo",
    contexto: "Necesidad de trasladar a las familias una información relevante desde el departamento de orientación de forma clara y respetuosa.",
    tarea: "Redactar una comunicación formal a familias con lenguaje accesible, objetivo del mensaje, orientaciones básicas y vías de contacto.",
    especificaciones: "Incluye saludo, motivo, información esencial, indicaciones prácticas, tono respetuoso y despedida institucional.",
    criterios: "Claridad, cercanía profesional, respeto y utilidad.",
    respuesta: "Presenta el texto listo para adaptar con datos concretos del centro o del caso.",
    verificacion: "Comprueba que el contenido sea comprensible para las familias y mantenga tono profesional."
  },
  "Informe de seguimiento": {
    destinatario: "Orientador/a",
    formato: "Informe estructurado",
    contexto: "Necesidad de documentar el seguimiento de un caso, una medida de apoyo o una intervención coordinada en el centro.",
    tarea: "Elaborar un modelo de informe de seguimiento con situación inicial, actuaciones, evolución, valoración y próximos pasos.",
    especificaciones: "Incluye fechas, agentes implicados, medidas aplicadas, resultados observados, dificultades y propuestas de continuidad.",
    criterios: "Rigor, síntesis, trazabilidad y utilidad para la toma de decisiones.",
    respuesta: "Organiza el informe con apartados claros y redacción técnica.",
    verificacion: "Comprueba la coherencia entre actuaciones realizadas, evidencias y propuestas futuras."
  },
  Convocatoria: {
    destinatario: "Profesorado",
    formato: "Carta o correo",
    contexto: "Necesidad de convocar una reunión del departamento, de coordinación tutorial o de seguimiento de casos.",
    tarea: "Redactar una convocatoria formal indicando objeto, destinatarios, fecha, hora, lugar y orden del día.",
    especificaciones: "Incluye encabezado, motivo de la convocatoria, fecha, hora, duración estimada, lugar o enlace y orden del día.",
    criterios: "Claridad, concreción, tono institucional y organización.",
    respuesta: "Presenta la convocatoria en formato breve y listo para enviar.",
    verificacion: "Comprueba que consten todos los datos logísticos y el propósito de la reunión."
  },
  "Registro de actuaciones": {
    destinatario: "Orientador/a",
    formato: "Tabla",
    contexto: "Necesidad de sistematizar y registrar actuaciones del departamento de orientación para control interno, seguimiento o memoria final.",
    tarea: "Diseñar un registro de actuaciones con columnas claras para fecha, actuación, destinatarios, responsables, observaciones y seguimiento.",
    especificaciones: "Incluye propuesta de tabla, criterios de uso, ejemplos de cumplimentación y recomendaciones para archivo.",
    criterios: "Orden, trazabilidad, facilidad de uso y utilidad documental.",
    respuesta: "Presenta una tabla funcional y una breve guía de cumplimentación.",
    verificacion: "Comprueba que el registro permita localizar actuaciones y revisar su estado."
  },
  Memoria: {
    destinatario: "Equipo directivo",
    formato: "Informe estructurado",
    contexto: "Necesidad de elaborar una memoria del departamento de orientación con balance de actuaciones, valoración y propuestas de mejora.",
    tarea: "Redactar una estructura de memoria anual o trimestral con apartados, síntesis de actuaciones, logros, dificultades y propuestas.",
    especificaciones: "Incluye introducción, objetivos, actuaciones realizadas, datos relevantes, valoración, dificultades, conclusiones y propuestas de mejora.",
    criterios: "Orden, síntesis, utilidad institucional y visión de mejora.",
    respuesta: "Presenta la memoria en apartados claros, con estilo formal y orientación práctica.",
    verificacion: "Comprueba que la memoria refleje balance, evidencias y propuestas realistas para el siguiente periodo."
  }
};

const COMUNIDADES = Object.keys(MARCOS_NORMATIVOS);
const LOGO_SRC = "/mnt/data/SHYNERGIUM_LOGO.jpg";
const STORAGE_HISTORY_KEY = "orientador_prompt_history_v1";
const STORAGE_LIBRARY_KEY = "orientador_prompt_library_v1";
const PANEL_MOBILE_TABS = ["Prompt", "Biblioteca", "Histórico", "Ayuda"];
const SIDEBAR_ITEMS = [
  { key: "generador", label: "Generador", icon: LayoutDashboardIcon },
  { key: "prompt", label: "Prompt", icon: FileTextIcon },
  { key: "biblioteca", label: "Biblioteca", icon: BookTemplateIcon },
  { key: "historico", label: "Histórico", icon: HistoryIcon },
  { key: "ayuda", label: "Ayuda", icon: HelpCircleIcon }
];

function CampoTexto({ label, value, onChange, placeholder, rows = 3 }) {
  return (
    <div className="space-y-2">
      <label className="text-sm font-medium text-slate-700">{label}</label>
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        rows={rows}
        placeholder={placeholder}
        className="w-full rounded-2xl border border-slate-200 bg-white p-3 text-sm text-slate-800 shadow-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
      />
    </div>
  );
}

function SelectCampo({ label, value, onChange, options }) {
  return (
    <div className="space-y-2">
      <label className="text-sm font-medium text-slate-700">{label}</label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-2xl border border-slate-200 bg-white p-3 text-sm text-slate-800 shadow-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
      >
        {options.map((op) => (
          <option key={op} value={op}>
            {op}
          </option>
        ))}
      </select>
    </div>
  );
}

function LogoShynergium() {
  const [logoError, setLogoError] = useState(false);

  if (logoError) {
    return (
      <div className="flex h-12 min-w-12 items-center justify-center rounded-2xl bg-slate-900 px-3 text-xs font-semibold tracking-[0.2em] text-white">
        SHY
      </div>
    );
  }

  return (
    <img
      src={LOGO_SRC}
      alt="Shynergium logo"
      className="h-10 w-auto object-contain sm:h-12"
      onError={() => setLogoError(true)}
    />
  );
}

function ChipCalidad({ label, value, variant }) {
  const styles = {
    green: "bg-emerald-500/15 text-emerald-200 ring-emerald-400/30",
    yellow: "bg-amber-500/15 text-amber-200 ring-amber-400/30",
    red: "bg-rose-500/15 text-rose-200 ring-rose-400/30"
  };

  return (
    <div className={`rounded-2xl px-3 py-2 text-xs ring-1 ${styles[variant] || styles.red}`}>
      <div className="font-medium">{label}</div>
      <div className="mt-1 opacity-90">{value}</div>
    </div>
  );
}

function construirSnapshot({ form, comunidad, modoPrompt, subtipoAdministrativo }) {
  return {
    form: { ...form },
    comunidad,
    modoPrompt,
    subtipoAdministrativo,
    createdAt: new Date().toISOString()
  };
}

function tituloAutomatico(form, comunidad) {
  return `${form.finalidad} · ${comunidad}`;
}

function clsx(...classes) {
  return classes.filter(Boolean).join(" ");
}

function sanitizeArray(value) {
  return Array.isArray(value) ? value : [];
}

function createId() {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
}

function normalizarForm(form) {
  return {
    finalidad: typeof form?.finalidad === "string" ? form.finalidad : "Informe psicopedagógico",
    etapa: typeof form?.etapa === "string" ? form.etapa : "ESO",
    destinatario: typeof form?.destinatario === "string" ? form.destinatario : "Orientador/a",
    tono: typeof form?.tono === "string" ? form.tono : "Formal técnico",
    formato: typeof form?.formato === "string" ? form.formato : "Informe estructurado",
    contexto: typeof form?.contexto === "string" ? form.contexto : "",
    tarea: typeof form?.tarea === "string" ? form.tarea : "",
    normativa: typeof form?.normativa === "string" ? form.normativa : MARCOS_NORMATIVOS["Comunidad de Madrid"][0],
    especificaciones: typeof form?.especificaciones === "string" ? form.especificaciones : "",
    criterios: typeof form?.criterios === "string" ? form.criterios : "Claridad, rigor técnico, viabilidad, enfoque inclusivo.",
    respuesta: typeof form?.respuesta === "string" ? form.respuesta : "",
    verificacion: typeof form?.verificacion === "string" ? form.verificacion : "Comprueba coherencia interna, ajuste normativo y utilidad práctica.",
    normativaExtra: typeof form?.normativaExtra === "string" ? form.normativaExtra : ""
  };
}

function normalizarSnapshot(snapshot) {
  if (!snapshot || typeof snapshot !== "object" || !snapshot.form || typeof snapshot.form !== "object") {
    return null;
  }

  return {
    form: normalizarForm(snapshot.form),
    comunidad: typeof snapshot.comunidad === "string" ? snapshot.comunidad : "Comunidad de Madrid",
    modoPrompt: typeof snapshot.modoPrompt === "string" ? snapshot.modoPrompt : "Prompt estándar",
    subtipoAdministrativo: typeof snapshot.subtipoAdministrativo === "string" ? snapshot.subtipoAdministrativo : "General",
    createdAt: snapshot.createdAt || new Date().toISOString()
  };
}

function normalizarColeccion(items, tipo = "historico") {
  return sanitizeArray(items)
    .map((item) => {
      if (!item || typeof item !== "object") return null;
      const snapshot = normalizarSnapshot(item.snapshot);
      if (!snapshot) return null;

      if (tipo === "biblioteca") {
        return {
          id: typeof item.id === "string" ? item.id : createId(),
          name: typeof item.name === "string" && item.name.trim() ? item.name : "Plantilla sin nombre",
          snapshot
        };
      }

      return {
        id: typeof item.id === "string" ? item.id : createId(),
        title: typeof item.title === "string" && item.title.trim() ? item.title : tituloAutomatico(snapshot.form, snapshot.comunidad),
        preview: typeof item.preview === "string" ? item.preview : "",
        snapshot
      };
    })
    .filter(Boolean);
}

function buildNormativeReference(normativa, normativaExtra) {
  if (!normativaExtra || !normativaExtra.trim()) {
    return normativa;
  }

  return `${normativa}\n- Observaciones normativas adicionales: ${normativaExtra.trim()}`;
}

function getInitialForm() {
  return {
    finalidad: "Informe psicopedagógico",
    etapa: "ESO",
    destinatario: "Orientador/a",
    tono: "Formal técnico",
    formato: "Informe estructurado",
    contexto: "Alumno de 2º de ESO con dificultades de aprendizaje y necesidad de coordinación con familia y profesorado.",
    tarea: "Analizar la situación y redactar una propuesta de intervención y seguimiento.",
    normativa: MARCOS_NORMATIVOS["Comunidad de Madrid"][0],
    especificaciones: "Incluye diagnóstico educativo, propuestas operativas, medidas de apoyo, coordinación y seguimiento.",
    criterios: "Claridad, rigor técnico, viabilidad, enfoque inclusivo, lenguaje profesional.",
    respuesta: "Redacta con apartados claros, lenguaje formal y propuestas aplicables al centro.",
    verificacion: "Comprueba coherencia interna, ajuste normativo, utilidad práctica y ausencia de contradicciones.",
    normativaExtra: ""
  };
}

export default function GeneradorPromptsOrientadores() {
  const [modoPrompt, setModoPrompt] = useState("Prompt estándar");
  const [comunidad, setComunidad] = useState("Comunidad de Madrid");
  const [copiado, setCopiado] = useState(false);
  const [subtipoAdministrativo, setSubtipoAdministrativo] = useState("General");
  const [nombrePlantilla, setNombrePlantilla] = useState("");
  const [historico, setHistorico] = useState([]);
  const [biblioteca, setBiblioteca] = useState([]);
  const [mensajeGuardado, setMensajeGuardado] = useState("");
  const [mensajeAccion, setMensajeAccion] = useState("");
  const [busquedaHistorico, setBusquedaHistorico] = useState("");
  const [busquedaBiblioteca, setBusquedaBiblioteca] = useState("");
  const [filtroComunidadHistorico, setFiltroComunidadHistorico] = useState("Todas");
  const [filtroComunidadBiblioteca, setFiltroComunidadBiblioteca] = useState("Todas");
  const [panelMovilActivo, setPanelMovilActivo] = useState("Prompt");
  const [sidebarPlegado, setSidebarPlegado] = useState(false);
  const [panelDesktopActivo, setPanelDesktopActivo] = useState("generador");
  const [mostrarGuia, setMostrarGuia] = useState(false);
  const [mostrarConfirmacionLimpiar, setMostrarConfirmacionLimpiar] = useState(false);
  const [form, setForm] = useState(getInitialForm());

  useEffect(() => {
    try {
      const rawHistory = window.localStorage.getItem(STORAGE_HISTORY_KEY);
      const rawLibrary = window.localStorage.getItem(STORAGE_LIBRARY_KEY);
      if (rawHistory) {
        setHistorico(normalizarColeccion(JSON.parse(rawHistory), "historico"));
      }
      if (rawLibrary) {
        setBiblioteca(normalizarColeccion(JSON.parse(rawLibrary), "biblioteca"));
      }
    } catch (error) {
      console.error("No se pudo cargar el almacenamiento local:", error);
      setHistorico([]);
      setBiblioteca([]);
    }
  }, []);

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_HISTORY_KEY, JSON.stringify(historico));
    } catch (error) {
      console.error("No se pudo guardar el histórico:", error);
    }
  }, [historico]);

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_LIBRARY_KEY, JSON.stringify(biblioteca));
    } catch (error) {
      console.error("No se pudo guardar la biblioteca:", error);
    }
  }, [biblioteca]);

  useEffect(() => {
    const opcionesNormativas = MARCOS_NORMATIVOS[comunidad] || MARCOS_NORMATIVOS["Comunidad de Madrid"];
    if (!opcionesNormativas.includes(form.normativa)) {
      setForm((prev) => ({ ...prev, normativa: opcionesNormativas[0] || "" }));
    }
  }, [comunidad, form.normativa]);

  useEffect(() => {
    if (form.finalidad !== "Tarea administrativa") {
      return;
    }

    const preset = PRESETS_ADMINISTRATIVOS[subtipoAdministrativo] || PRESETS_ADMINISTRATIVOS.General;
    const marcoActual = MARCOS_NORMATIVOS[comunidad] || MARCOS_NORMATIVOS["Comunidad de Madrid"];

    setForm((prev) => ({
      ...prev,
      finalidad: "Tarea administrativa",
      etapa: ["Infantil", "Primaria", "ESO", "Bachillerato", "FP", "Adultos"].includes(prev.etapa)
        ? prev.etapa
        : "General / varias etapas",
      tono: "Institucional",
      normativa: marcoActual[0],
      ...preset
    }));
  }, [subtipoAdministrativo, comunidad, form.finalidad]);

  useEffect(() => {
    if (!mensajeGuardado) {
      return undefined;
    }
    const timer = window.setTimeout(() => setMensajeGuardado(""), 2200);
    return () => window.clearTimeout(timer);
  }, [mensajeGuardado]);

  useEffect(() => {
    if (!mensajeAccion) {
      return undefined;
    }
    const timer = window.setTimeout(() => setMensajeAccion(""), 2200);
    return () => window.clearTimeout(timer);
  }, [mensajeAccion]);

  useEffect(() => {
    if (!copiado) {
      return undefined;
    }
    const timer = window.setTimeout(() => setCopiado(false), 1800);
    return () => window.clearTimeout(timer);
  }, [copiado]);

  useEffect(() => {
    if (!mostrarConfirmacionLimpiar) {
      return undefined;
    }

    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        setMostrarConfirmacionLimpiar(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [mostrarConfirmacionLimpiar]);

  const actualizar = (campo, valor) => {
    setForm((prev) => ({ ...prev, [campo]: valor }));
  };

  const promptFinal = useMemo(() => {
    const introduccion =
      PLANTILLAS[form.finalidad] ||
      "Necesito elaborar una respuesta técnica, clara y útil para el contexto de orientación descrito.";
    const referenciaNormativa = buildNormativeReference(form.normativa, form.normativaExtra);

    if (modoPrompt === "System prompt") {
      return `Eres un orientador educativo y profesional experto, con experiencia en evaluación psicopedagógica, acción tutorial, atención a la diversidad, asesoramiento a familias y profesorado, y orientación académica y profesional.\n\nTu misión es ayudar con precisión técnica, claridad expositiva y utilidad práctica en el contexto descrito.\n\nObjetivo principal:\n${introduccion}\n\nContexto operativo:\n- Finalidad principal: ${form.finalidad}\n- Etapa educativa: ${form.etapa}\n- Destinatario principal: ${form.destinatario}\n- Comunidad autónoma o ámbito: ${comunidad}\n- Marco normativo de referencia: ${referenciaNormativa}\n- Contexto del caso o situación: ${form.contexto}\n\nTarea a resolver:\n${form.tarea}\n\nEspecificaciones obligatorias:\n${form.especificaciones}\n- Tono solicitado: ${form.tono}\n- Formato de salida: ${form.formato}\n\nCriterios de calidad:\n${form.criterios}\n\nInstrucciones de respuesta:\n${form.respuesta}\n\nVerificación previa a la entrega:\n${form.verificacion}\n\nReglas de funcionamiento:\n- Prioriza el rigor técnico y la aplicabilidad real en contextos educativos.\n- Mantén un enfoque inclusivo, preventivo y orientador.\n- Ajusta el lenguaje al destinatario indicado.\n- Organiza siempre la respuesta con una estructura clara y útil.\n- Si faltan datos esenciales, indícalo brevemente y formula supuestos razonables de forma explícita.\n- No inventes normativa concreta no proporcionada; cuando proceda, remite al marco normativo vigente indicado.`;
    }

    return `Actúa como un orientador educativo y profesional experto, con experiencia en evaluación psicopedagógica, acción tutorial, atención a la diversidad, asesoramiento a familias y profesorado, y orientación académica y profesional.\n\n${introduccion}\n\nContexto y rol:\n- Finalidad principal: ${form.finalidad}\n- Etapa educativa: ${form.etapa}\n- Destinatario principal: ${form.destinatario}\n- Comunidad autónoma o ámbito: ${comunidad}\n- Marco normativo de referencia: ${referenciaNormativa}\n- Contexto del caso o situación: ${form.contexto}\n\nConsulta o tarea:\n${form.tarea}\n\nEspecificaciones:\n${form.especificaciones}\n- Tono solicitado: ${form.tono}\n- Formato de salida: ${form.formato}\n\nCriterios de calidad:\n${form.criterios}\n\nCómo debe ser la respuesta:\n${form.respuesta}\n\nVerificación final:\n${form.verificacion}\n\nAntes de cerrar la respuesta, revisa que el contenido sea útil para la práctica orientadora, preciso, estructurado y adaptado al contexto descrito. Si falta algún dato imprescindible, indícalo al inicio de forma breve y después ofrece una propuesta razonable con supuestos explícitos.`;
  }, [comunidad, form, modoPrompt]);

  const calidadPrompt = useMemo(() => {
    const referenciaNormativa = [form.normativa, form.normativaExtra].filter(Boolean).join(" ");
    const campos = [
      form.contexto,
      form.tarea,
      referenciaNormativa,
      form.especificaciones,
      form.criterios,
      form.respuesta,
      form.verificacion
    ];
    const completos = campos.filter((item) => item && item.trim().length > 12).length;
    const puntuacion = Math.round((completos / campos.length) * 100);
    const claridad =
      form.tarea.trim().length > 30 && form.respuesta.trim().length > 25
        ? "Alta"
        : form.tarea.trim().length > 10
          ? "Media"
          : "Baja";
    const aplicabilidad =
      form.contexto.trim().length > 25 && form.especificaciones.trim().length > 25
        ? "Alta"
        : form.contexto.trim().length > 10
          ? "Media"
          : "Baja";
    const longitudNormativa = referenciaNormativa.trim().length;
    const rigor =
      longitudNormativa > 15 && form.verificacion.trim().length > 15
        ? "Alta"
        : longitudNormativa > 5
          ? "Media"
          : "Baja";

    return {
      puntuacion,
      completos,
      total: campos.length,
      claridad,
      aplicabilidad,
      rigor,
      estadoGeneral: puntuacion >= 85 ? "green" : puntuacion >= 60 ? "yellow" : "red"
    };
  }, [form]);

  const opcionesFiltroComunidad = useMemo(() => ["Todas", ...COMUNIDADES], []);

  const historicoFiltrado = useMemo(() => {
    return historico.filter((item) => {
      const termino = busquedaHistorico.trim().toLowerCase();
      const comunidadItem = item.snapshot?.comunidad || "";
      const coincideBusqueda =
        !termino ||
        (item.title || "").toLowerCase().includes(termino) ||
        (item.preview || "").toLowerCase().includes(termino) ||
        (item.snapshot?.form?.finalidad || "").toLowerCase().includes(termino);
      const coincideComunidad =
        filtroComunidadHistorico === "Todas" || comunidadItem === filtroComunidadHistorico;
      return coincideBusqueda && coincideComunidad;
    });
  }, [historico, busquedaHistorico, filtroComunidadHistorico]);

  const bibliotecaFiltrada = useMemo(() => {
    return biblioteca.filter((item) => {
      const termino = busquedaBiblioteca.trim().toLowerCase();
      const comunidadItem = item.snapshot?.comunidad || "";
      const coincideBusqueda =
        !termino ||
        (item.name || "").toLowerCase().includes(termino) ||
        (item.snapshot?.form?.tarea || "").toLowerCase().includes(termino) ||
        (item.snapshot?.form?.finalidad || "").toLowerCase().includes(termino);
      const coincideComunidad =
        filtroComunidadBiblioteca === "Todas" || comunidadItem === filtroComunidadBiblioteca;
      return coincideBusqueda && coincideComunidad;
    });
  }, [biblioteca, busquedaBiblioteca, filtroComunidadBiblioteca]);

  const guardarEnHistorico = () => {
    const item = {
      id: createId(),
      title: tituloAutomatico(form, comunidad),
      preview: form.tarea,
      snapshot: construirSnapshot({ form, comunidad, modoPrompt, subtipoAdministrativo })
    };

    setHistorico((prev) => {
      const sinDuplicadosRecientes = prev.filter(
        (entry) => !(entry.title === item.title && entry.preview === item.preview)
      );
      return [item, ...sinDuplicadosRecientes].slice(0, 12);
    });
  };

  const cargarSnapshot = (snapshot) => {
    const snapshotNormalizado = normalizarSnapshot(snapshot);
    if (!snapshotNormalizado) {
      return;
    }

    const comunidadSnapshot =
      snapshotNormalizado.comunidad && COMUNIDADES.includes(snapshotNormalizado.comunidad)
        ? snapshotNormalizado.comunidad
        : "Comunidad de Madrid";

    setForm(snapshotNormalizado.form);
    setComunidad(comunidadSnapshot);
    setModoPrompt(snapshotNormalizado.modoPrompt || "Prompt estándar");
    setSubtipoAdministrativo(snapshotNormalizado.subtipoAdministrativo || "General");
    setMensajeAccion("Plantilla cargada");
  };

  const guardarPlantillaPersonalizada = () => {
    const nombre = nombrePlantilla.trim() || tituloAutomatico(form, comunidad);
    const item = {
      id: createId(),
      name: nombre,
      snapshot: construirSnapshot({ form, comunidad, modoPrompt, subtipoAdministrativo })
    };

    setBiblioteca((prev) => [item, ...prev]);
    setNombrePlantilla("");
    setMensajeGuardado("Plantilla guardada");
  };

  const eliminarPlantilla = (id) => {
    setBiblioteca((prev) => prev.filter((item) => item.id !== id));
  };

  const ejemploRapido = (tipo) => {
    const marcoActual = MARCOS_NORMATIVOS[comunidad] || MARCOS_NORMATIVOS["Comunidad de Madrid"];
    const presets = {
      administrativo: {
        finalidad: "Tarea administrativa",
        etapa: "General / varias etapas",
        tono: "Institucional",
        normativa: marcoActual[0],
        ...PRESETS_ADMINISTRATIVOS[subtipoAdministrativo]
      },
      informe: {
        finalidad: "Informe psicopedagógico",
        etapa: "Primaria",
        destinatario: "Orientador/a",
        tono: "Formal técnico",
        formato: "Informe estructurado",
        contexto: "Alumno de 4º de Primaria con sospecha de dificultades específicas de aprendizaje, bajo rendimiento en lectura y escritura y buena actitud en el aula.",
        tarea: "Elaborar un informe inicial con hipótesis de necesidades, orientaciones de intervención y propuestas de seguimiento coordinado.",
        normativa: marcoActual[2],
        especificaciones: "Incluye indicadores observables, necesidades educativas, orientaciones para aula y familia y propuestas de evaluación continua.",
        criterios: "Precisión técnica, claridad, enfoque inclusivo y utilidad para tutoría y familia.",
        respuesta: "Organiza la respuesta en apartados: situación inicial, análisis, necesidades, propuesta, seguimiento y coordinación.",
        verificacion: "Revisa la coherencia entre datos, conclusiones y medidas propuestas.",
        normativaExtra: ""
      },
      pat: {
        finalidad: "Plan de acción tutorial",
        etapa: "ESO",
        destinatario: "Tutor/a",
        tono: "Práctico y operativo",
        formato: "Guion paso a paso",
        contexto: "Grupo de 1º de ESO en inicio de curso con necesidad de cohesión, conocimiento mutuo y mejora de normas de convivencia.",
        tarea: "Diseñar una sesión tutorial de 50 minutos con actividades, materiales y evaluación.",
        normativa: marcoActual[4],
        especificaciones: "Incluye objetivos, dinámica inicial, desarrollo, cierre, adaptación y evaluación sencilla.",
        criterios: "Aplicabilidad inmediata, claridad metodológica, inclusión y participación activa.",
        respuesta: "Presenta la propuesta en secuencia temporal y con materiales concretos.",
        verificacion: "Comprueba que la sesión sea viable en una hora de tutoría y adecuada a 1º de ESO.",
        normativaExtra: ""
      },
      profesional: {
        finalidad: "Orientación académica y profesional",
        etapa: "Bachillerato",
        destinatario: "Alumno/a",
        tono: "Claro y pedagógico",
        formato: "Plan de actuación",
        contexto: "Estudiante de 2º de Bachillerato indeciso entre grado universitario y ciclo formativo superior, con intereses en tecnología y comunicación.",
        tarea: "Elaborar una propuesta personalizada de orientación académica y profesional con opciones, criterios de decisión y próximos pasos.",
        normativa: marcoActual[1],
        especificaciones: "Incluye autoconocimiento, contraste de opciones, itinerarios posibles y plan de decisión en cuatro semanas.",
        criterios: "Claridad, personalización, realismo y enfoque orientador.",
        respuesta: "Escribe con lenguaje accesible, estructurado y motivador.",
        verificacion: "Comprueba que las alternativas estén bien diferenciadas y que el plan sea realista.",
        normativaExtra: ""
      }
    };

    if (!presets[tipo]) {
      return;
    }

    setForm((prev) => ({ ...prev, ...presets[tipo] }));
  };

  const copiarPrompt = async () => {
    try {
      if (navigator?.clipboard?.writeText) {
        await navigator.clipboard.writeText(promptFinal);
      } else {
        const area = document.createElement("textarea");
        area.value = promptFinal;
        area.setAttribute("readonly", "");
        area.style.position = "absolute";
        area.style.left = "-9999px";
        document.body.appendChild(area);
        area.select();
        const copiadoFallback = document.execCommand("copy");
        document.body.removeChild(area);
        if (!copiadoFallback) {
          throw new Error("Fallback de copiado no disponible");
        }
      }

      guardarEnHistorico();
      setCopiado(true);
      setMensajeAccion("Prompt copiado al portapapeles");
    } catch (error) {
      console.error("Error al copiar el prompt:", error);
      setMensajeAccion("No se pudo copiar el prompt");
    }
  };

  const descargarArchivo = (nombre, contenido, tipo) => {
    const blob = new Blob([contenido], { type: tipo });
    const url = URL.createObjectURL(blob);
    const enlace = document.createElement("a");
    enlace.href = url;
    enlace.download = nombre;
    document.body.appendChild(enlace);
    enlace.click();
    document.body.removeChild(enlace);
    URL.revokeObjectURL(url);
  };

  const exportarTxt = () => {
    guardarEnHistorico();
    descargarArchivo("prompt-orientacion.txt", promptFinal, "text/plain;charset=utf-8");
    setMensajeAccion("Archivo .txt exportado");
  };

  const exportarDoc = () => {
    guardarEnHistorico();
    const contenidoSeguro = promptFinal
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");

    const contenidoHtml = [
      "<!DOCTYPE html>",
      '<html lang="es">',
      "<head>",
      '<meta charset="UTF-8" />',
      '<meta name="viewport" content="width=device-width, initial-scale=1.0" />',
      "<title>Prompt de orientación</title>",
      "<style>",
      "body { font-family: Arial, sans-serif; margin: 32px; color: #0f172a; line-height: 1.6; }",
      "h1 { font-size: 22px; margin-bottom: 16px; }",
      "pre { white-space: pre-wrap; font-family: Arial, sans-serif; font-size: 12pt; }",
      "</style>",
      "</head>",
      "<body>",
      "<h1>Prompt para orientación educativa y profesional</h1>",
      `<pre>${contenidoSeguro}</pre>`,
      "</body>",
      "</html>"
    ].join("\n");

    descargarArchivo("prompt-orientacion.doc", contenidoHtml, "application/msword;charset=utf-8");
    setMensajeAccion("Documento Word exportado");
  };

  const limpiar = () => {
    setMostrarConfirmacionLimpiar(false);
    setModoPrompt("Prompt estándar");
    setComunidad("Comunidad de Madrid");
    setSubtipoAdministrativo("General");
    setForm({
      ...getInitialForm(),
      contexto: "",
      tarea: "",
      especificaciones: "",
      respuesta: "",
      criterios: "Claridad, rigor técnico, viabilidad, enfoque inclusivo.",
      verificacion: "Comprueba coherencia interna, ajuste normativo y utilidad práctica.",
      normativaExtra: ""
    });
  };

  const mostrarGeneradorDesktop = panelDesktopActivo === "generador";
  const mostrarPromptDesktop = panelDesktopActivo === "prompt" || panelDesktopActivo === "generador";
  const mostrarBibliotecaDesktop = panelDesktopActivo === "biblioteca";
  const mostrarHistoricoDesktop = panelDesktopActivo === "historico";
  const mostrarAyudaDesktop = panelDesktopActivo === "ayuda";

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <div className="mx-auto flex max-w-7xl gap-6 px-4 py-6 sm:py-8 md:px-6 lg:px-8">
        <aside
          className={clsx(
            "sticky top-6 hidden self-start rounded-3xl bg-slate-900 p-3 text-white shadow-sm ring-1 ring-slate-800 transition-all duration-300 xl:block",
            sidebarPlegado ? "w-20" : "w-64"
          )}
        >
          <div className="mb-4 flex items-center justify-between gap-2">
            {!sidebarPlegado && <div className="text-sm font-semibold tracking-wide text-slate-200">Navegación</div>}
            <button
              onClick={() => setSidebarPlegado((prev) => !prev)}
              className="ml-auto rounded-2xl bg-white/10 p-2 transition hover:bg-white/20"
              aria-label={sidebarPlegado ? "Expandir barra lateral" : "Plegar barra lateral"}
            >
              {sidebarPlegado ? <ChevronRightIcon size={18} /> : <ChevronLeftIcon size={18} />}
            </button>
          </div>

          <nav className="space-y-2">
            {SIDEBAR_ITEMS.map((item) => {
              const Icon = item.icon;
              const activo = panelDesktopActivo === item.key;
              return (
                <button
                  key={item.key}
                  onClick={() => setPanelDesktopActivo(item.key)}
                  className={clsx(
                    "flex w-full items-center gap-3 rounded-2xl px-3 py-3 text-sm transition",
                    activo ? "bg-blue-600 text-white shadow-sm" : "bg-white/5 text-slate-200 hover:bg-white/10",
                    sidebarPlegado ? "justify-center" : "justify-start"
                  )}
                  title={item.label}
                >
                  <Icon size={18} className="shrink-0" />
                  {!sidebarPlegado && <span className="truncate">{item.label}</span>}
                </button>
              );
            })}
          </nav>
        </aside>

        <div className="min-w-0 flex-1">
          <div className="mb-8 grid gap-4 rounded-3xl bg-white p-4 shadow-sm ring-1 ring-slate-200 sm:p-6 lg:grid-cols-[1.4fr_.8fr] lg:p-8">
            <div className="lg:col-span-2">
              <button
                onClick={() => setMostrarGuia((prev) => !prev)}
                className="mb-2 text-sm font-medium text-blue-600 hover:underline"
              >
                {mostrarGuia ? "Ocultar guía" : "Mostrar guía"}
              </button>

              {mostrarGuia && (
                <div className="rounded-2xl bg-blue-50 p-4 text-sm text-slate-700 ring-1 ring-blue-100">
                  <p className="mb-2 font-semibold text-slate-900">Cómo utilizar la aplicación (guía rápida):</p>
                  <ol className="ml-5 list-decimal space-y-1">
                    <li>Selecciona la <strong>comunidad autónoma</strong> y la <strong>finalidad</strong> del prompt.</li>
                    <li>Describe el <strong>contexto</strong> y concreta la <strong>tarea</strong>.</li>
                    <li>Completa los campos clave: normativa, criterios, formato y destinatario.</li>
                    <li>Revisa los <strong>indicadores de calidad</strong> del prompt.</li>
                    <li>Copia, exporta o guarda en la <strong>biblioteca</strong> para reutilizarlo.</li>
                  </ol>
                </div>
              )}
            </div>

            <div className="flex flex-col items-start gap-4 sm:flex-row">
              <LogoShynergium />
              <div>
                <div className="mb-3 inline-flex rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
                  Aplicación para orientación educativa y profesional
                </div>
                <h1 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
                  Generador automático de prompts para orientadores
                </h1>
                <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-600 sm:text-base">
                  Diseña prompts completos, claros y reutilizables para informes, acción tutorial, evaluación,
                  orientación académica y profesional, atención a la diversidad y asesoramiento a familias y profesorado.
                </p>
              </div>
            </div>

            <div className="grid gap-3 self-start rounded-3xl bg-blue-600 p-4 text-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="text-sm font-semibold">Plantillas rápidas</div>
              <div className="flex gap-3 overflow-x-auto pb-2">
                <button
                  onClick={() => setMostrarConfirmacionLimpiar(true)}
                  className="min-w-[180px] rounded-2xl bg-rose-500 px-4 py-3 text-left text-xs font-medium text-white transition hover:bg-rose-600 active:scale-95"
                >
                  Limpiar formulario
                </button>
                <button
                  onClick={() => ejemploRapido("informe")}
                  className="min-w-[200px] rounded-2xl bg-white/10 px-4 py-3 text-left text-sm transition hover:bg-white/20"
                >
                  Informe psicopedagógico
                </button>
                <button
                  onClick={() => ejemploRapido("pat")}
                  className="min-w-[200px] rounded-2xl bg-white/10 px-4 py-3 text-left text-sm transition hover:bg-white/20"
                >
                  Acción tutorial
                </button>
                <button
                  onClick={() => ejemploRapido("profesional")}
                  className="min-w-[220px] rounded-2xl bg-white/10 px-4 py-3 text-left text-sm transition hover:bg-white/20"
                >
                  Orientación académica
                </button>
                <button
                  onClick={() => ejemploRapido("administrativo")}
                  className="min-w-[200px] rounded-2xl bg-white/10 px-4 py-3 text-left text-sm transition hover:bg-white/20"
                >
                  Tarea administrativa
                </button>
              </div>

              <div className="rounded-2xl bg-white/5 p-3 text-xs text-slate-100 ring-1 ring-white/10">
                <div className="mb-2 font-semibold text-white">Subbloque administrativo</div>
                <div className="flex gap-2 overflow-x-auto">
                  {SUBTIPOS_ADMINISTRATIVOS.filter((item) => item !== "General").map((item) => (
                    <button
                      key={item}
                      onClick={() => {
                        setSubtipoAdministrativo(item);
                        ejemploRapido("administrativo");
                      }}
                      className="min-w-[150px] rounded-xl bg-white/10 px-3 py-2 text-left text-[11px] transition hover:bg-white/20"
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-6 xl:grid-cols-[1.1fr_.9fr]">
            <section
              className={clsx(
                "rounded-3xl bg-white p-4 shadow-sm ring-1 ring-slate-200 transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-6 lg:p-8",
                mostrarGeneradorDesktop ? "xl:block" : "xl:hidden"
              )}
            >
              <div className="mb-6 grid gap-4 md:grid-cols-2">
                <SelectCampo label="Modo" value={modoPrompt} onChange={setModoPrompt} options={MODOS_PROMPT} />
                <SelectCampo label="Comunidad autónoma o ámbito" value={comunidad} onChange={setComunidad} options={COMUNIDADES} />
                <SelectCampo
                  label="Selector normativo"
                  value={MARCOS_NORMATIVOS[comunidad]?.includes(form.normativa) ? form.normativa : MARCOS_NORMATIVOS[comunidad][0]}
                  onChange={(valor) => actualizar("normativa", valor)}
                  options={MARCOS_NORMATIVOS[comunidad]}
                />
                {form.finalidad === "Tarea administrativa" && (
                  <SelectCampo
                    label="Subtipo administrativo"
                    value={subtipoAdministrativo}
                    onChange={setSubtipoAdministrativo}
                    options={SUBTIPOS_ADMINISTRATIVOS}
                  />
                )}
                <SelectCampo label="Finalidad" value={form.finalidad} onChange={(valor) => actualizar("finalidad", valor)} options={OPCIONES.finalidad} />
                <SelectCampo label="Etapa educativa" value={form.etapa} onChange={(valor) => actualizar("etapa", valor)} options={OPCIONES.etapa} />
                <SelectCampo label="Destinatario" value={form.destinatario} onChange={(valor) => actualizar("destinatario", valor)} options={OPCIONES.destinatario} />
                <SelectCampo label="Tono" value={form.tono} onChange={(valor) => actualizar("tono", valor)} options={OPCIONES.tono} />
                <div className="md:col-span-2">
                  <SelectCampo label="Formato de salida" value={form.formato} onChange={(valor) => actualizar("formato", valor)} options={OPCIONES.formato} />
                </div>
              </div>

              <div className="grid gap-5">
                <CampoTexto
                  label="Contexto y situación"
                  value={form.contexto}
                  onChange={(valor) => actualizar("contexto", valor)}
                  placeholder="Describe el caso, grupo, necesidad o situación educativa."
                  rows={4}
                />
                <CampoTexto
                  label="Consulta o tarea"
                  value={form.tarea}
                  onChange={(valor) => actualizar("tarea", valor)}
                  placeholder="Indica exactamente qué quieres que haga la IA."
                  rows={3}
                />
                <CampoTexto
                  label="Observaciones normativas adicionales"
                  value={form.normativaExtra}
                  onChange={(valor) => actualizar("normativaExtra", valor)}
                  placeholder="Añade matices, referencias concretas o documentos internos complementarios."
                  rows={3}
                />
                <CampoTexto
                  label="Especificaciones"
                  value={form.especificaciones}
                  onChange={(valor) => actualizar("especificaciones", valor)}
                  placeholder="Añade requisitos, apartados, extensión, ejemplos, tablas, etc."
                  rows={4}
                />
                <CampoTexto
                  label="Criterios de calidad"
                  value={form.criterios}
                  onChange={(valor) => actualizar("criterios", valor)}
                  placeholder="Señala los criterios que debe cumplir la respuesta."
                  rows={3}
                />
                <CampoTexto
                  label="Cómo debe ser la respuesta"
                  value={form.respuesta}
                  onChange={(valor) => actualizar("respuesta", valor)}
                  placeholder="Indica formato, estructura, nivel de detalle, tono y utilidad práctica."
                  rows={3}
                />
                <CampoTexto
                  label="Verificación final"
                  value={form.verificacion}
                  onChange={(valor) => actualizar("verificacion", valor)}
                  placeholder="Define qué debe revisar la IA antes de entregar el resultado."
                  rows={3}
                />
              </div>

              {mensajeAccion && (
                <div className="mt-6 rounded-2xl bg-emerald-50 px-4 py-3 text-sm text-emerald-700 ring-1 ring-emerald-200">
                  {mensajeAccion}
                </div>
              )}

              <div className="mt-6 grid grid-cols-1 gap-3 sm:flex sm:flex-wrap">
                <button
                  onClick={copiarPrompt}
                  className="w-full rounded-2xl bg-blue-600 px-5 py-3 text-sm font-medium text-white shadow-sm transition hover:bg-blue-700 active:scale-95 sm:w-auto"
                >
                  {copiado ? "Prompt copiado" : "Copiar prompt"}
                </button>
                <button
                  onClick={exportarTxt}
                  className="w-full rounded-2xl bg-blue-500 px-5 py-3 text-sm font-medium text-white shadow-sm transition hover:bg-blue-600 active:scale-95 sm:w-auto"
                >
                  Exportar .txt
                </button>
                <button
                  onClick={exportarDoc}
                  className="w-full rounded-2xl bg-blue-500 px-5 py-3 text-sm font-medium text-white shadow-sm transition hover:bg-blue-600 active:scale-95 sm:w-auto"
                >
                  Exportar Word (.doc)
                </button>
                <button
                  onClick={() => setMostrarConfirmacionLimpiar(true)}
                  className="w-full rounded-2xl border border-slate-300 bg-white px-5 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-50 sm:w-auto"
                >
                  Limpiar formulario
                </button>
              </div>
            </section>

            <section className="rounded-3xl bg-slate-900 p-4 text-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-6 lg:p-8">
              <div className="mb-4 flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
                <div>
                  <h2 className="text-xl font-semibold text-white sm:text-2xl">Vista previa del prompt</h2>
                  <p className="mt-1 text-sm text-slate-300">
                    Listo para copiar, exportar y usar en ChatGPT, Claude, Gemini o asistentes internos.
                  </p>
                </div>
              </div>

              <div className="mb-4 flex flex-wrap gap-2">
                <span className="rounded-full bg-blue-500/20 px-3 py-1 text-xs font-medium text-blue-200">{modoPrompt}</span>
                <span className="rounded-full bg-blue-500/20 px-3 py-1 text-xs font-medium text-blue-200">{comunidad}</span>
                <span className="rounded-full bg-blue-500/20 px-3 py-1 text-xs font-medium text-blue-200">
                  Calidad {calidadPrompt.puntuacion}%
                </span>
              </div>

              <div className="mb-4 grid grid-cols-2 gap-2 sm:hidden">
                {PANEL_MOBILE_TABS.map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setPanelMovilActivo(tab)}
                    className={clsx(
                      "rounded-2xl px-3 py-2 text-sm font-medium transition",
                      panelMovilActivo === tab
                        ? "bg-blue-600 text-white"
                        : "bg-white/10 text-slate-200 hover:bg-white/20"
                    )}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              <div
                className={clsx(
                  panelMovilActivo === "Prompt" ? "block" : "hidden",
                  mostrarPromptDesktop ? "xl:block" : "xl:hidden",
                  "mb-4 rounded-3xl bg-white/5 p-4 ring-1 ring-white/10 transition duration-300 hover:-translate-y-1 hover:bg-white/10 hover:shadow-lg sm:block"
                )}
              >
                <div className="mb-3 flex items-center justify-between gap-3">
                  <div>
                    <div className="text-sm font-semibold">Indicadores visuales de calidad</div>
                    <div className="text-xs text-slate-300">Completitud y solidez del prompt generado</div>
                  </div>
                  <div className="text-right text-xs text-slate-300">
                    {calidadPrompt.completos}/{calidadPrompt.total} campos clave
                  </div>
                </div>
                <div className="mb-4 h-3 overflow-hidden rounded-full bg-white/10">
                  <div className="h-full rounded-full bg-blue-500" style={{ width: `${calidadPrompt.puntuacion}%` }} />
                </div>
                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  <ChipCalidad
                    label="Claridad"
                    value={calidadPrompt.claridad}
                    variant={calidadPrompt.claridad === "Alta" ? "green" : calidadPrompt.claridad === "Media" ? "yellow" : "red"}
                  />
                  <ChipCalidad
                    label="Aplicabilidad"
                    value={calidadPrompt.aplicabilidad}
                    variant={calidadPrompt.aplicabilidad === "Alta" ? "green" : calidadPrompt.aplicabilidad === "Media" ? "yellow" : "red"}
                  />
                  <ChipCalidad
                    label="Rigor"
                    value={calidadPrompt.rigor}
                    variant={calidadPrompt.rigor === "Alta" ? "green" : calidadPrompt.rigor === "Media" ? "yellow" : "red"}
                  />
                </div>
              </div>

              <div
                className={clsx(
                  panelMovilActivo === "Prompt" ? "block" : "hidden",
                  mostrarPromptDesktop ? "xl:block" : "xl:hidden",
                  "rounded-3xl bg-white/5 p-4 ring-1 ring-white/10 transition duration-300 hover:-translate-y-1 hover:bg-white/10 hover:shadow-lg sm:block"
                )}
              >
                <pre className="whitespace-pre-wrap break-words text-sm leading-6 text-slate-100">{promptFinal}</pre>
              </div>

              <div className="mt-6 grid gap-4 xl:grid-cols-2">
                <div
                  className={clsx(
                    panelMovilActivo === "Biblioteca" ? "block" : "hidden",
                    mostrarBibliotecaDesktop ? "xl:block" : "xl:hidden",
                    "rounded-3xl bg-white/5 p-4 ring-1 ring-white/10 transition duration-300 hover:-translate-y-1 hover:bg-white/10 hover:shadow-lg sm:block"
                  )}
                >
                  <h3 className="mb-3 text-sm font-semibold text-white">Biblioteca de plantillas</h3>
                  <div className="mb-3 flex flex-col gap-2 sm:flex-row">
                    <input
                      value={busquedaBiblioteca}
                      onChange={(e) => setBusquedaBiblioteca(e.target.value)}
                      placeholder="Buscar en biblioteca"
                      className="w-full rounded-2xl border border-white/10 bg-white/10 px-3 py-2 text-sm text-white outline-none placeholder:text-slate-300 focus:ring-2 focus:ring-white/20"
                    />
                  </div>
                  <div className="mb-3">
                    <select
                      value={filtroComunidadBiblioteca}
                      onChange={(e) => setFiltroComunidadBiblioteca(e.target.value)}
                      className="w-full rounded-2xl border border-white/10 bg-white/10 px-3 py-2 text-sm text-white outline-none focus:ring-2 focus:ring-white/20"
                    >
                      {opcionesFiltroComunidad.map((opcion) => (
                        <option key={opcion} value={opcion} className="text-slate-900">
                          {opcion}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="mb-3 flex flex-col gap-2 sm:flex-row">
                    <input
                      value={nombrePlantilla}
                      onChange={(e) => setNombrePlantilla(e.target.value)}
                      placeholder="Nombre de la plantilla"
                      className="w-full rounded-2xl border border-white/10 bg-white/10 px-3 py-2 text-sm text-white outline-none placeholder:text-slate-300 focus:ring-2 focus:ring-white/20"
                    />
                    <button
                      onClick={guardarPlantillaPersonalizada}
                      className="w-full rounded-2xl bg-blue-500/80 px-3 py-2 text-xs font-medium text-white transition hover:bg-blue-600 active:scale-95 sm:w-auto"
                    >
                      Guardar
                    </button>
                  </div>
                  {mensajeGuardado && <div className="mb-3 text-xs text-emerald-300">{mensajeGuardado}</div>}
                  <div className="max-h-56 space-y-2 overflow-auto pr-1 overscroll-contain">
                    {biblioteca.length === 0 && (
                      <div className="text-xs text-slate-300">Aún no hay plantillas personalizadas guardadas.</div>
                    )}
                    {biblioteca.length > 0 && bibliotecaFiltrada.length === 0 && (
                      <div className="text-xs text-slate-300">No hay resultados con los filtros aplicados.</div>
                    )}
                    {bibliotecaFiltrada.map((item) => (
                      <div key={item.id} className="rounded-2xl bg-white/10 p-3">
                        <div className="mb-1 text-sm font-medium">{item.name}</div>
                        <div className="mb-2 text-[11px] text-slate-300">{item.snapshot?.comunidad || "Sin comunidad"}</div>
                        <div className="flex gap-2">
                          <button
                            onClick={() => cargarSnapshot(item.snapshot)}
                            className="rounded-xl bg-white/10 px-3 py-1 text-xs transition hover:bg-white/20"
                          >
                            Cargar
                          </button>
                          <button
                            onClick={() => eliminarPlantilla(item.id)}
                            className="rounded-xl bg-white/10 px-3 py-1 text-xs transition hover:bg-white/20"
                          >
                            Eliminar
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div
                  className={clsx(
                    panelMovilActivo === "Histórico" ? "block" : "hidden",
                    mostrarHistoricoDesktop ? "xl:block" : "xl:hidden",
                    "rounded-3xl bg-white/5 p-4 ring-1 ring-white/10 transition duration-300 hover:-translate-y-1 hover:bg-white/10 hover:shadow-lg sm:block"
                  )}
                >
                  <h3 className="mb-3 text-sm font-semibold text-white">Histórico de prompts</h3>
                  <div className="mb-3 flex flex-col gap-2 sm:flex-row">
                    <input
                      value={busquedaHistorico}
                      onChange={(e) => setBusquedaHistorico(e.target.value)}
                      placeholder="Buscar en histórico"
                      className="w-full rounded-2xl border border-white/10 bg-white/10 px-3 py-2 text-sm text-white outline-none placeholder:text-slate-300 focus:ring-2 focus:ring-white/20"
                    />
                  </div>
                  <div className="mb-3">
                    <select
                      value={filtroComunidadHistorico}
                      onChange={(e) => setFiltroComunidadHistorico(e.target.value)}
                      className="w-full rounded-2xl border border-white/10 bg-white/10 px-3 py-2 text-sm text-white outline-none focus:ring-2 focus:ring-white/20"
                    >
                      {opcionesFiltroComunidad.map((opcion) => (
                        <option key={opcion} value={opcion} className="text-slate-900">
                          {opcion}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="max-h-72 space-y-2 overflow-auto pr-1 overscroll-contain">
                    {historico.length === 0 && (
                      <div className="text-xs text-slate-300">El histórico se completa al copiar o exportar prompts.</div>
                    )}
                    {historico.length > 0 && historicoFiltrado.length === 0 && (
                      <div className="text-xs text-slate-300">No hay resultados con los filtros aplicados.</div>
                    )}
                    {historicoFiltrado.map((item) => (
                      <button
                        key={item.id}
                        onClick={() => cargarSnapshot(item.snapshot)}
                        className="w-full rounded-2xl bg-white/10 p-3 text-left transition hover:bg-white/20"
                      >
                        <div className="text-sm font-medium">{item.title}</div>
                        <div className="mt-1 text-[11px] text-slate-300">{item.snapshot?.comunidad || "Sin comunidad"}</div>
                        <div className="mt-1 line-clamp-2 text-xs text-slate-300">{item.preview}</div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-6 grid gap-4 xl:grid-cols-2">
                <div
                  className={clsx(
                    panelMovilActivo === "Ayuda" ? "block" : "hidden",
                    mostrarAyudaDesktop ? "xl:block" : "xl:hidden",
                    "rounded-3xl bg-white/5 p-4 ring-1 ring-white/10 transition duration-300 hover:-translate-y-1 hover:bg-white/10 hover:shadow-lg sm:block"
                  )}
                >
                  <h3 className="mb-2 text-sm font-semibold text-white">Usos recomendados</h3>
                  <ul className="space-y-2 text-sm text-slate-300">
                    <li>Informes psicopedagógicos</li>
                    <li>Sesiones de tutoría</li>
                    <li>Orientación vocacional</li>
                    <li>Propuestas de apoyo y seguimiento</li>
                    <li>Asesoramiento a familias y profesorado</li>
                    <li>Actas, comunicaciones, convocatorias y memorias</li>
                  </ul>
                </div>

                <div
                  className={clsx(
                    panelMovilActivo === "Ayuda" ? "block" : "hidden",
                    mostrarAyudaDesktop ? "xl:block" : "xl:hidden",
                    "rounded-3xl bg-white/5 p-4 ring-1 ring-white/10 transition duration-300 hover:-translate-y-1 hover:bg-white/10 hover:shadow-lg sm:block"
                  )}
                >
                  <h3 className="mb-2 text-sm font-semibold text-white">Pruebas manuales sugeridas</h3>
                  <ul className="space-y-2 text-sm text-slate-300">
                    <li>Cargar la app sin dependencias externas de iconos y verificar que compila.</li>
                    <li>Cambiar de comunidad y verificar que el selector normativo se actualiza.</li>
                    <li>Alternar entre Prompt estándar y System prompt.</li>
                    <li>Usar una plantilla rápida y comprobar el relleno automático de campos.</li>
                    <li>Seleccionar un subtipo administrativo y verificar que cambia contexto, tarea y formato.</li>
                    <li>Guardar una plantilla personalizada y cargarla después.</li>
                    <li>Copiar o exportar y revisar que el histórico registra el prompt.</li>
                    <li>Buscar y filtrar por comunidad en histórico y biblioteca.</li>
                    <li>Mostrar y ocultar la guía rápida sin romper la maquetación de la cabecera.</li>
                    <li>Abrir la confirmación y cancelar sin limpiar datos.</li>
                    <li>Comprobar que la tecla Escape cierra la ventana de confirmación.</li>
                    <li>Comprobar que al pulsar fuera del cuadro modal este se cierra, pero no se cierra al pulsar dentro.</li>
                    <li>Introducir observaciones normativas adicionales y verificar que aparecen en el prompt sin sobrescribir la normativa seleccionada.</li>
                    <li>Cargar datos antiguos desde almacenamiento local y verificar que se normalizan sin romper la aplicación.</li>
                  </ul>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>

      {mostrarConfirmacionLimpiar && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 px-4"
          onClick={() => setMostrarConfirmacionLimpiar(false)}
        >
          <div
            className="w-full max-w-md rounded-3xl bg-white p-6 shadow-2xl ring-1 ring-slate-200"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-lg font-semibold text-slate-900">¿Seguro que quieres limpiar?</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Se borrarán los datos actuales del formulario y volverás a la configuración inicial.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-end">
              <button
                onClick={() => setMostrarConfirmacionLimpiar(false)}
                className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-50 sm:w-auto"
              >
                Cancelar
              </button>
              <button
                onClick={limpiar}
                className="w-full rounded-2xl bg-rose-500 px-4 py-3 text-sm font-medium text-white transition hover:bg-rose-600 active:scale-95 sm:w-auto"
              >
                Sí, limpiar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
