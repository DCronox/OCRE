# Auditoría editorial, UX y responsive (10 de noviembre de 2026)

## 1. Menú móvil (botón de tres líneas)

**Síntoma:** en la parte superior de la página el menú abría bien, pero después de desplazarse no se podía usar: solo asomaban el botón de reservar y la dirección, y ningún enlace era pulsable.

**Causa raíz:** al desplazarse, la barra `.nav` recibía `backdrop-filter: blur(14px)`. En CSS, un elemento con `backdrop-filter` (igual que con `filter` o `transform`) se convierte en el **bloque contenedor de sus hijos `position: fixed`**. El panel del menú, que es `fixed` a pantalla completa, quedaba encerrado en la barra de 72 px: medía 144 px de alto y el primer enlace quedaba en y = −463 px.

**Solución:**
- El fondo sólido y el desenfoque pasan a `.nav::before` (comentado en `base.css` para que no se repita el error).
- Lista del menú con `margin-top: auto` en vez de `justify-content: flex-end`: en pantallas bajas (320×640) el primer enlace quedaba bajo la cabecera y era inalcanzable; ahora empieza bajo la cabecera y el panel se desplaza si no cabe. Tipografía más compacta con `max-height: 720px`.
- Lógica en `core.js`: un único estado (`abierto`) evita aperturas o cierres duplicados; bloqueo de desplazamiento compatible con iOS (`body` fijo y posición restaurada sin animación); `inert` en el resto de la página mientras está abierto (respetando el estado previo de la barra móvil); cierre con Escape, con un enlace, con un toque en el fondo vacío del panel, al pasar a escritorio y en `pagehide`; foco al primer enlace al abrir y de vuelta al botón al cerrar; `aria-expanded`, `aria-controls` y etiqueta «Abrir/Cerrar menú».
- Objetivo táctil del botón ampliado a 48 px y `touch-action: manipulation`.

**Pruebas:** reproducido en la versión publicada (workers.dev) y verificado en local a 320, 360, 375, 390, 414 y 768 px: 8/8 enlaces pulsables tras desplazarse, cada enlace lleva a su sección (queda a 72 px, bajo la barra) y cierra el menú, Escape restaura la posición exacta, 6 clics seguidos dejan un estado coherente, el toque en el fondo cierra.

## 2. Auditoría editorial

| Redundancia | Antes | Ahora |
|---|---|---|
| «La música marca el pulso de la noche» | Universo y Ocre Sounds | Solo Sounds habla de música, y en términos de programación |
| «Cordiales, macerados y destilados de la casa» | Ritual y Noches | Solo en el Ritual; Noches habla de la ocasión |
| «Compartir sin perder la intimidad» | Espacios, galería (×2) y Noches | Solo como lema de Sentidos |
| Sombras descrita dos veces | Espacios y Noches | Noches tiene la tarjeta «Citas», que remite a Sombras |
| «Capas» | Ritual y Espacios | Ninguna |
| «Hay que saber dónde llegar/tocar» | Universo y Ritual | Solo en Universo |
| Pilares del Universo = Ritual | Mismos cuatro conceptos | Pilares con datos concretos |
| Poesía en secciones funcionales | «Reserva tu noche», «quienes ya cruzaron» | «Reservas», «Opiniones» |
| Gastronomía en Ocre Sounds | «La cocina abre con calma…» | Eliminado |

**Textos reescritos:** CTA de portada; dos párrafos, cierre, leyendas y pilares del Universo; puerta; introducción del Ritual; líneas e introducciones de las galerías El bar oculto, Sonoridad y Arte; título, entrada, textos y notas de los tres Espacios (se conservan los lemas aprobados); concepto y estados vacíos de Ocre Sounds; tarjetas Citas, Coctelería de autor y Eventos privados en Noches; título y texto de Reseñas; título, entrada y nota de Reservas; intro de Platos fuertes en la carta.

**Sin cambios:** descripciones y precios de la carta (datos reales), storytelling de cócteles (documento del cliente), textos legales, Visítanos.

**Decisión a confirmar:** el relato largo de Sentidos («Entre la calidez de la tierra…») se quitó de las dos fotos de la galería El bar oculto para no repetir la sección Espacios; se conserva la frase corta. El texto sigue en el historial de git si se quiere recuperar.

## 3. Otros errores corregidos

- Sombras con dos fotos apiladas en móvil (más de 1000 px de imagen antes del texto): ahora composición superpuesta (526 px) y la luz que sigue al cursor se aplica solo a la foto principal.
- Objetivos táctiles pequeños: marca OCRE (23 px → 47 px) y enlaces del pie (22 px → 44 px).

## 4. Pruebas ejecutadas

- Anchos 320, 360, 375, 390, 414, 768, 965, 1024 y 1440 px: sin desplazamiento horizontal ni elementos cortados.
- Galerías (6): apertura, cierre, sin desbordes en móvil; visor con anterior/siguiente y vuelta circular; Escape.
- Carta: 6 pestañas con sus productos.
- Formulario: validación de campos vacíos; mensaje con autorización y preferencia comercial.
- Cluvi: 9 enlaces, todos a `ocre.cluvi.co/bookings/32410`.
- Consentimiento: el mapa no carga sin permiso.
- Anclas internas sin destinos rotos; imágenes con `alt`; enlaces externos con `noopener`.
- Datos dinámicos de Visítanos presentes (dirección, horario, Instagram, estado abierto/cerrado).
- Consola sin errores en portada y páginas legales.

## 5. Limitaciones de las pruebas

- No había un navegador de Playwright instalado y no se instaló ninguno; las pruebas se hicieron con el navegador integrado emulando móvil (táctil, agente Android). No se probó en un iPhone físico: el bloqueo de desplazamiento usa la técnica estándar para iOS, pero conviene confirmarlo en un dispositivo real.
