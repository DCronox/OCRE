# Motion v4 — inspirado en Portfolite, con identidad OCRE (10 de noviembre de 2026)

Referencia estudiada: https://portfolite.framer.website/ (plantilla Framer).
Patrones transferibles: titulares por palabras (span por palabra, de desenfocado a nítido, escalonado), indicador de desplazamiento con línea, píldoras de vidrio sobre fotos al pasar el cursor, entradas en cascada de tarjetas y bandas horizontales. No se encontraron tarjetas apiladas con `position: sticky`.

**Sin dependencias nuevas.** No se añadió GSAP: todo usa el sistema existente (IntersectionObserver + un único bucle de desplazamiento con `requestAnimationFrame`), animando `transform`, `opacity`, `filter` y `clip-path`.

## Animaciones añadidas

| Sección | Efecto |
|---|---|
| Portada | El lema entra palabra a palabra al final de la secuencia de OCRE; el nombre del producto entra deslizándose en cada cambio; indicador «Desliza» con línea y punto (se oculta al bajar; solo escritorio) |
| Titulares de sección y nombres de los espacios | Revelado por palabras, de desenfocado a nítido |
| Universo | Párrafo de entrada palabra a palabra (cadencia lenta); la foto de Moss se revela desde el lateral |
| Banda de palabras | Deriva horizontal ligada al desplazamiento (no se mueve sola) |
| El ritual | Indicador «Abrir galería» que entra en la categoría activa (escritorio); píldora siempre visible en móvil; el texto del visor sube al cambiar de categoría |
| Galerías | Píldora de vidrio «Ampliar» al pasar el cursor |
| Espacios | Palabra de gran formato en contorno detrás de cada zona, con deriva horizontal (solo escritorio); notas en cascada |
| Ocre Sounds | Carteles que se elevan al pasar el cursor; entrada de carteles y artistas en cascada |
| Noches | Tarjetas en cascada |
| Carta | Indicador que se desliza entre pestañas; los productos entran en cascada breve al cambiar de pestaña |
| Reseñas | La calificación cuenta hasta 4,9 al aparecer (con `aria-label` fijo) |
| Reservas / Visítanos / Pie | Pasos, datos y columnas del pie en cascada |
| Botones | La flecha ↗ de los enlaces externos se desplaza al pasar el cursor |

## Animaciones existentes conservadas

Secuencia de entrada de la portada (luz, enfoque de OCRE, destello, foto), barrido entre productos, revelado de fotos, trazos de pigmento, visor con dirección, paralaje de escritorio, luz de Sombras, pulso de Dance Floor, menú móvil escalonado, hilo de progreso y barrido del botón principal.

## Mejoras técnicas

- La galería creaba un IntersectionObserver nuevo en cada apertura sin desconectar el anterior: ahora hay uno solo, que se desconecta al reabrir y al cerrar.
- El paralaje ya no se ejecuta en móvil ni en pantallas táctiles (se limpian las transformaciones una sola vez).
- **Red de seguridad para revelados:** un IntersectionObserver no avisa si un elemento pasa de «debajo» a «encima» sin cruzar la pantalla (saltos desde el menú o desplazamiento muy rápido); ese contenido quedaba oculto. Ahora, al desplazarse, se revelan los pendientes que ya quedaron arriba (en la página y dentro de las galerías). Solo se ejecuta mientras queden pendientes.
- Los espacios tienen `isolation: isolate`: la palabra fantasma y el haz de luz de Dance Floor (que ya existía) quedaban ocultos detrás del fondo de la sección.

## Accesibilidad y movimiento reducido

Todo efecto nuevo está dentro de `prefers-reduced-motion: no-preference` o depende de la clase `js-revela`, que no se activa con movimiento reducido: en ese caso el contenido se muestra completo y estático. La división en palabras conserva el texto accesible del titular. Elementos decorativos con `aria-hidden`.

## Pruebas

Navegador integrado con emulación de móvil (sin Playwright instalado): 375, 768 y 1440 px. Sin desplazamiento horizontal; menú 8/8 tras desplazarse en móvil y tablet; 6 galerías con todas sus piezas reveladas incluso con salto instantáneo; carta, formulario, enlaces de Cluvi y consentimiento intactos; consola sin errores.

## Pendiente

- Probar en un iPhone y un Android físicos (fluidez real de los desenfoques en equipos modestos).
- La versión de workers.dev devolvía «error code 1042» de Cloudflare: hay que revisarla en la cuenta de Cloudflare.
