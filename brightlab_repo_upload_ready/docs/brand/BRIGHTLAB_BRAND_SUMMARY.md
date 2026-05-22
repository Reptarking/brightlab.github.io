# Sumilla de marca para Codex - Brightlab

Usa esta guía como contexto base para construir piezas web, landing pages, componentes React, presentaciones o materiales digitales de Brightlab.

## Identidad general
Brightlab es una marca tecnológica/analítica con una estética limpia, profesional y futurista. Debe sentirse moderna, precisa y orientada a decisiones inteligentes. El tono visual debe combinar tecnología, claridad de negocio y confianza. Evitar una estética demasiado corporativa/genérica o excesivamente colorida.

Tagline de referencia: **Bright solutions for smart decisions**.

## Paleta de color
Usar estos tokens como base:

```css
:root {
  --brightlab-dark-purple: #15182D;
  --brightlab-white: #FFFFFF;
  --brightlab-light-green: #D7FF7B;
  --brightlab-electric-purple: #4D61F4;
  --brightlab-light-purple: #CFB6FF;
  --brightlab-dark-grey: #1D1D1B;
}
```

### Uso recomendado
- **Dark Purple `#15182D`**: fondo principal, headers, hero sections y bloques de alto contraste.
- **White `#FFFFFF`**: fondo limpio o texto sobre fondos oscuros.
- **Light Green `#D7FF7B`**: acento principal para highlights, íconos, CTAs secundarios, métricas o detalles gráficos.
- **Electric Purple `#4D61F4`**: acento tecnológico, botones, enlaces, estados activos y degradados.
- **Light Purple `#CFB6FF`**: acento suave para cards, fondos alternativos y degradados.
- **Dark Grey `#1D1D1B`**: texto largo en fondos claros.

## Degradados
- Principal: `#15182D -> #4D61F4`.
- Secundarios: `#15182D -> #CFB6FF` y `#4D61F4 -> #CFB6FF`.
- Terciario/acento: `#4D61F4 -> #D7FF7B`.

Ejemplo:

```css
.gradient-primary {
  background: linear-gradient(135deg, #15182D 0%, #4D61F4 100%);
}

.gradient-accent {
  background: linear-gradient(135deg, #4D61F4 0%, #D7FF7B 100%);
}
```

## Tipografía
- Logo: Montserrat Bold modificada. No recrear ni editar el logotipo con texto normal.
- Titulares y subtítulos: **Space Grotesk SemiBold/Bold**.
- Cuerpo de texto: **Roboto** en Light, Regular, Italic y Bold.

Fallback recomendado:

```css
font-family: 'Space Grotesk', 'Inter', system-ui, sans-serif;
font-family-body: 'Roboto', 'Inter', system-ui, sans-serif;
```

## Logos incluidos
Carpeta `png/`:
- `logo_primary_on_dark_purple.png`: versión principal con fondo Dark Purple, isotipo Light Green y texto blanco.
- `logo_primary_white_lightgreen_transparent.png`: versión principal sin fondo para usar sobre fondos oscuros.
- `logo_transparent_dark_purple.png`: versión oscura sin fondo para fondos claros.
- `logo_transparent_electric_purple.png`: versión Electric Purple sin fondo.
- Variantes secundarias con fondos Dark Purple, Electric Purple, Light Green, Light Purple y escala de grises.
- Variantes de isotipo para favicon, avatar, app icon, profile image o usos compactos.

Carpeta `jpg/`: versiones equivalentes en JPG. Las variantes transparentes están compuestas sobre fondo blanco porque JPG no soporta transparencia.

## Uso correcto del logo
- Priorizar `logo_primary_on_dark_purple.png` cuando el diseño permita usar un bloque oscuro.
- Usar `logo_primary_white_lightgreen_transparent.png` sobre hero sections o fondos Dark Purple/Electric Purple.
- Usar `logo_transparent_dark_purple.png` sobre fondos blancos o claros.
- Usar el isotipo cuando el espacio sea pequeño: favicon, avatar de redes, icono de app o marca de agua.
- Respetar área libre alrededor del logo; no pegarlo al borde de una card, navbar o imagen.
- Tamaño mínimo digital del logo completo: 120px de ancho.

## Prohibiciones
- No estirar, deformar, rotar ni inclinar el logo o isotipo.
- No cambiar colores fuera de la paleta.
- No aplicar sombras, glow, bevel, blur ni efectos decorativos al logo.
- No modificar la tipografía del logotipo.
- No reemplazar el isotipo por otro símbolo.

## Forma visual y UI
- La marca tiende a bordes redondeados.
- Cards principales: radio aproximado de **20px**.
- Tablas, chips, badges y elementos pequeños: radio de **8px a 12px**.
- Priorizar layout limpio, con bastante aire, contraste alto y pocos elementos compitiendo.

Ejemplo Tailwind aproximado:

```tsx
<div className="rounded-[20px] bg-[#15182D] text-white p-8 shadow-sm">
  <h1 className="font-semibold tracking-tight text-4xl">Brightlab</h1>
  <p className="text-white/75">Bright solutions for smart decisions</p>
</div>
```

## Iconografía
Usar íconos tipo **Material Design Rounded / outlined**:
- Weight: 300.
- Grade: 200.
- Optical size: 24px.
- Estilo: redondeado, con borde, no relleno.

Los íconos pueden ir en blanco sobre fondos oscuros o en degradado usando la paleta Brightlab.

## Imágenes
- Usar imágenes profesionales, limpias y equilibradas.
- Preferir temas de tecnología, datos, IA, negocio, colaboración y toma de decisiones.
- Se pueden usar fotos del equipo si tienen buena calidad.
- Para portadas o fondos, usar imagen en blanco y negro con overlay de degradado al 50% de opacidad.
- Si una foto tiene baja calidad, convertirla a blanco y negro y aplicar un degradado encima para integrarla mejor.

## Dirección para Codex
Cuando generes interfaces para Brightlab:
1. Usa Dark Purple como base visual y Light Green como acento distintivo.
2. Usa Space Grotesk para títulos y Roboto para texto.
3. Diseña cards con bordes redondeados y bastante aire.
4. Evita exceso de efectos; la estética debe ser premium, tecnológica y sobria.
5. Los CTAs principales pueden usar Electric Purple o Light Green según contraste.
6. Mantén consistencia con los assets del folder `png/`.
