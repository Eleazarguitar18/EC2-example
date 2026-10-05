# EC2 Dashboard — Trabajo Final

> **Diplomado Cloud Computing** — Dashboard estático de instancias EC2 con fines académicos.

---

## Autor

**Eleazar Jhonny Cruz Mamani**

---

## Descripción

Este proyecto es un **dashboard visualmente interactivo** que simula un panel de control de instancias Amazon EC2. Está construido con HTML, CSS y JavaScript puro, **sin dependencias externas** ni llamadas reales a AWS. Todos los datos mostrados son **ficticios** y sirven como demostración académica para el trabajo final del Diplomado Cloud Computing.

---

## Características

- **Panel de métricas** — Instancias activas, detenidas, uso de CPU, tráfico de red y costo mensual estimado
- **Gráficos visuales** — Gráfico de barras de uso de CPU (24h) y gráfico de dona de distribución por estado
- **Tabla de instancias** — 5 instancias EC2 ficticias con ID, nombre, tipo, estado, región, IPs y fecha de lanzamiento
- **Búsqueda en tiempo real** — Filtra instancias por texto mientras escribes
- **Filtro por estado** — Muestra solo instancias activas o detenidas
- **Navegación lateral** — Menú sidebar con secciones simuladas
- **Diseño responsivo** — Se adapta a escritorio, tablet y móvil
- **Tema oscuro** — Inspirado en la consola de AWS

---

## Estructura del Proyecto

```
EC2-example/
├── index.html          # Estructura principal del dashboard
├── styles.css          # Estilos CSS (tema oscuro, responsive)
├── script.js           # Lógica JavaScript (búsqueda, filtros, simulación)
├── .gitignore          # Archivos excluidos del repositorio
├── README.md           # Este archivo
└── skill/              # Skill UI/UX Pro Max (herramienta de diseño)
    ├── SKILL.md
    ├── scripts/
    ├── references/
    └── data/
```

---

## Tecnologías

| Tecnología | Uso |
|------------|-----|
| **HTML5** | Estructura semántica del dashboard |
| **CSS3** | Estilos, animaciones, grid, flexbox, variables CSS |
| **JavaScript (Vanilla)** | Interacciones, búsqueda, filtros, simulación de refresco |
| **SVG** | Iconos inline (sin librerías externas) |

---

## Cómo Ejecutar

1. Clona el repositorio:
   ```bash
   git clone https://github.com/Eleazarguitar18/EC2-example.git
   ```

2. Abre el archivo `index.html` en tu navegador:
   ```bash
   # Simplemente doble clic en index.html, o:
   open index.html        # macOS
   xdg-open index.html    # Linux
   start index.html       # Windows
   ```

¡No requiere servidor ni instalación de dependencias!

---

## Datos Ficticios

| ID Instancia | Nombre | Tipo | Estado | Región |
|-------------|--------|------|--------|--------|
| i-0a1b2c3d4e5f67890 | web-server-prod | t3.medium | running | us-east-1 |
| i-1b2c3d4e5f678901a | api-server-prod | t3.large | running | us-east-1 |
| i-2c3d4e5f678901a2b | database-primary | r5.xlarge | running | us-east-1 |
| i-3d4e5f678901a2b3c | cache-server | t3.small | running | us-east-1 |
| i-4e5f678901a2b3c4d | dev-test-instance | t2.micro | stopped | us-west-2 |

---

## Notas

- Este es un proyecto **100% estático** — no hay backend ni conexión a AWS
- La simulación de refresco de datos ocurre cada 30 segundos (solo efecto visual)
- La skill `ui-ux-pro-max` incluida en `skill/` es una herramienta de guía de diseño, no es necesaria para ejecutar el dashboard

---

## Licencia

Proyecto académico — Diplomado Cloud Computing 2026
