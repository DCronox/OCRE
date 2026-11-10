/* =====================================================================
   OCRE · Los espacios — Dance Floor, Sombras y Sentidos
   ---------------------------------------------------------------------
   Textos conceptuales aprobados por el cliente (2026-11-09).
   Cada espacio tiene su propia composición en la portada.

   capacidad: dato ORIENTATIVO. No se muestra en la web mientras
   `confirmado` sea false. Validar con el establecimiento antes de publicar.

   fotos: { foto, ancho, alto, alt, leyenda }
   PENDIENTE DE CONFIRMAR: que las fotos asignadas a Dance Floor
   correspondan efectivamente a esa zona (ver docs/PENDIENTES.md).
   ===================================================================== */
window.OCRE = window.OCRE || {};

OCRE.espacios = [
  {
    id: "dance-floor",
    nombre: "Dance Floor",
    lema: "Donde la noche encuentra su ritmo.",
    texto: "Está frente a la cabina del DJ y a pocos pasos de la barra. Es la zona para quien viene por la música: se baila, se piden cócteles en barra y también se puede comer en la mesa.",
    notas: ["DJ y baile", "Junto a la barra", "Servicio de cocina"],
    fotos: [
      { foto: "assets/img/bar/bar-umbral", ancho: 4, alto: 5, alt: "Barra iluminada con equipo de sonido y una figura en movimiento", leyenda: "Dance Floor" },
      { foto: "assets/img/bar/bar-barra", ancho: 3, alto: 4, alt: "Silueta del bartender frente a los estantes iluminados", leyenda: "La barra" }
    ],
    accion: { tipo: "reservar", texto: "Reservar mesa" }
  },
  {
    id: "sombras",
    nombre: "Sombras",
    lema: "Donde la intimidad encuentra su lugar.",
    texto: "La zona más íntima, con luz baja y mesas pensadas para conversar. Funciona muy bien para parejas y grupos de dos o tres personas, y según la disponibilidad del día también recibe otras mesas.",
    notas: ["Parejas", "Grupos de 2 o 3", "Luz baja"],
    fotos: [
      { foto: "assets/img/bar/bar-luz-baja", ancho: 4, alto: 5, alt: "Mesa con una lámpara pequeña encendida y sillas tapizadas en rojo, en penumbra", leyenda: "Sombras" },
      { foto: "assets/img/bar/bar-rincon", ancho: 4, alto: 5, alt: "Rincón con sillones y una lámpara pequeña encendida", leyenda: "Sombras" }
    ],
    accion: { tipo: "reservar", texto: "Reservar mesa" }
  },
  {
    id: "sentidos",
    nombre: "Sentidos",
    lema: "Un espacio para compartir sin perder la intimidad.",
    texto: "El área privada de Ocre, para grupos grandes, celebraciones y reservas numerosas. Las mesas se organizan según el tamaño del grupo, así que conviene consultar disponibilidad antes de reservar.",
    notas: ["Grupos grandes", "Celebraciones", "Área privada"],
    capacidad: { texto: "Alrededor de cinco mesas para 4 a 6 personas cada una, según la configuración.", confirmado: false },
    fotos: [
      { foto: "assets/img/bar/bar-salon", ancho: 4, alto: 5, alt: "Sentidos: mesa larga con sillas bajo una luz roja cálida", leyenda: "Sentidos" },
      { foto: "assets/img/bar/bar-penumbra", ancho: 4, alto: 5, alt: "Sentidos en penumbra, con ventanales de luz cálida", leyenda: "Sentidos" }
    ],
    accion: { tipo: "whatsapp", texto: "Consultar disponibilidad", mensaje: "Hola Ocre, quiero consultar disponibilidad en Sentidos para un grupo." }
  }
];
