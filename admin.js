document.addEventListener('DOMContentLoaded', () => {
    const daySelector = document.querySelector('.day-selector');
    const saveButton = document.querySelector('.save-button');
    const maxTempInput = document.getElementById('max-temp');
    const minTempInput = document.getElementById('min-temp');
    const weatherConditionSelect = document.getElementById('weather-condition');

    let currentDay = 'lunes'; // Día inicial

    // Función para simular la carga de datos (desde un backend real)
    function loadData(day) {
        console.log(`Cargando datos para el día: ${day}...`);
        // Aquí harías una petición AJAX/fetch a tu backend
        // Ejemplo: fetch(`/api/pronostico?dia=${day}`)
        
        // Simulación de datos cargados
        if (day === 'lunes') {
            maxTempInput.value = 25;
            minTempInput.value = 15;
            weatherConditionSelect.value = 'soleado';
        } else if (day === 'martes') {
            maxTempInput.value = 22;
            minTempInput.value = 12;
            weatherConditionSelect.value = 'parcialmente-nublado';
        }
    }

    // Manejar el cambio de día
    daySelector.addEventListener('click', (e) => {
        if (e.target.tagName === 'BUTTON') {
            document.querySelector('.day-selector .active').classList.remove('active');
            e.target.classList.add('active');
            currentDay = e.target.dataset.day;
            loadData(currentDay);
        }
    });

    // Manejar el guardado de datos
    saveButton.addEventListener('click', () => {
        const data = {
            day: currentDay,
            maxTemp: maxTempInput.value,
            minTemp: minTempInput.value,
            condition: weatherConditionSelect.value,
            // Aquí agregarías los datos de temperatura y viento por horario
        };
        
        console.log('Guardando datos:', data);
        // Aquí harías una petición POST/PUT a tu backend para guardar los cambios
        // Ejemplo: fetch(`/api/pronostico/${currentDay}`, { method: 'POST', body: JSON.stringify(data) })
        alert('Cambios guardados con éxito!');
    });

    // Cargar los datos iniciales al cargar la página
    loadData(currentDay);
});
