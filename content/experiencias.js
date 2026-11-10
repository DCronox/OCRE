/* =====================================================================
   OCRE · Noches Ocre — ocasiones para visitar
   ---------------------------------------------------------------------
   Los textos invitan a consultar disponibilidad; NO prometen servicios,
   decoraciones, menús especiales ni promociones. Si el local confirma un
   servicio concreto (p. ej. menú de grupo), añádelo en el texto.
     accion: "reservar"  → abre Cluvi
             "whatsapp"  → abre WhatsApp con el mensaje `mensaje`
     foto / leyenda: imagen evocadora. La leyenda dice qué se ve (un producto
     de la carta o un espacio real de Ocre), sin presentarla como foto del evento.
   ===================================================================== */
window.OCRE = window.OCRE || {};

OCRE.experiencias = [
  { id: "celebraciones", titulo: "Celebraciones", texto: "Un ascenso, un aniversario, un reencuentro. Las buenas noticias se cuentan mejor alrededor de una mesa.", accion: "reservar",
    foto: "assets/img/cocteleria/aperol", ancho: 2, alto: 3, leyenda: "Aperol" },
  { id: "cumpleanos", titulo: "Cumpleaños", texto: "Celebra con tu gente. Cuéntanos la ocasión y te diremos qué es posible para tu mesa.", accion: "whatsapp",
    mensaje: "Hola Ocre, quiero celebrar un cumpleaños. ¿Qué opciones tienen?", foto: "assets/img/cocteleria/margarita", ancho: 2, alto: 3, leyenda: "Margarita" },
  { id: "citas", titulo: "Citas", texto: "Una mesa para dos, cócteles de autor y la carta completa. Al reservar, pide mesa en Sombras.", accion: "reservar",
    foto: "assets/img/bar/bar-luz-baja", ancho: 4, alto: 5, leyenda: "Sombras", enlace: "#espacio-sombras", enlaceTexto: "Ver Sombras" },
  { id: "gastronomica", titulo: "Encuentro gastronómico", texto: "Recorre la carta de autor de principio a fin: entradas, fuertes y postre.", accion: "reservar",
    foto: "assets/img/platos/panceta-confitada-emplatado", ancho: 3, alto: 4, leyenda: "Panceta confitada" },
  { id: "cocteleria", titulo: "Coctelería de autor", texto: "Nueve cócteles de autor y los clásicos de siempre. Pide en barra una recomendación según lo que te guste.", accion: "reservar",
    foto: "assets/img/cocteleria/sibylle", ancho: 2, alto: 3, leyenda: "Sibylle, cóctel de autor" },
  { id: "privado", titulo: "Eventos privados y grupos", texto: "Cenas de empresa, despedidas o aniversarios. Para más de 15 personas o eventos privados, escríbenos y te contamos disponibilidad y condiciones.", accion: "whatsapp",
    mensaje: "Hola Ocre, quiero consultar disponibilidad en Sentidos para un evento privado o grupo grande.", foto: "assets/img/bar/bar-salon", ancho: 4, alto: 5, leyenda: "Sentidos", enlace: "#espacio-sentidos", enlaceTexto: "Ver Sentidos" }
];
