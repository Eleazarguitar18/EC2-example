/**
 * EC2 Dashboard — Eleazar Jhonny Cruz Mamani
 * Diplomado Cloud Computing — Trabajo Final
 * Dashboard 100% estático con datos ficticios
 */

document.addEventListener('DOMContentLoaded', function () {
    initSearch();
    initFilter();
    initSidebar();
    initBarChart();
});

/**
 * Búsqueda de instancias en tiempo real
 */
function initSearch() {
    const searchInput = document.getElementById('searchInput');
    if (!searchInput) return;

    searchInput.addEventListener('input', function () {
        const query = this.value.toLowerCase().trim();
        const rows = document.querySelectorAll('#instancesTableBody tr');
        const filterStatus = document.getElementById('filterStatus').value;

        rows.forEach(function (row) {
            const text = row.textContent.toLowerCase();
            const status = row.getAttribute('data-status');
            const matchesSearch = text.includes(query);
            const matchesFilter = filterStatus === 'all' || status === filterStatus;

            if (matchesSearch && matchesFilter) {
                row.style.display = '';
            } else {
                row.style.display = 'none';
            }
        });
    });
}

/**
 * Filtro por estado de instancia
 */
function initFilter() {
    const filterSelect = document.getElementById('filterStatus');
    if (!filterSelect) return;

    filterSelect.addEventListener('change', function () {
        const status = this.value;
        const rows = document.querySelectorAll('#instancesTableBody tr');
        const searchInput = document.getElementById('searchInput');
        const query = searchInput ? searchInput.value.toLowerCase().trim() : '';

        rows.forEach(function (row) {
            const text = row.textContent.toLowerCase();
            const rowStatus = row.getAttribute('data-status');
            const matchesFilter = status === 'all' || rowStatus === status;
            const matchesSearch = text.includes(query);

            if (matchesFilter && matchesSearch) {
                row.style.display = '';
            } else {
                row.style.display = 'none';
            }
        });
    });
}

/**
 * Navegación lateral (simulada)
 */
function initSidebar() {
    const menuItems = document.querySelectorAll('.sidebar-menu li');

    menuItems.forEach(function (item) {
        item.addEventListener('click', function () {
            menuItems.forEach(function (i) { i.classList.remove('active'); });
            this.classList.add('active');
        });
    });
}

/**
 * Gráfico de barras — tooltip al pasar el mouse
 */
function initBarChart() {
    const bars = document.querySelectorAll('.bar');

    bars.forEach(function (bar) {
        bar.addEventListener('mouseenter', function () {
            const height = this.style.height;
            this.setAttribute('title', 'Uso de CPU: ' + height);
        });
    });
}

/**
 * Simulación de refrescado de datos (cada 30s)
 * Solo visual — no hay llamadas reales
 */
function simulateRefresh() {
    const metricValues = document.querySelectorAll('.metric-value');
    metricValues.forEach(function (el) {
        el.style.opacity = '0.5';
        setTimeout(function () {
            el.style.opacity = '1';
        }, 300);
    });
}

// Ejecutar simulación cada 30 segundos
setInterval(simulateRefresh, 30000);
