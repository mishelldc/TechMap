document.addEventListener('DOMContentLoaded', function() {
    let modal = document.getElementById('modal');
    let closeModal = document.querySelector('.close');
    let modalTitle = document.getElementById('modal-title');
    let modalDescription = document.getElementById('modal-description');
    let modalCharacteristics = document.getElementById('modal-characteristics');

    function showModal(title, description, characteristics) {
        modalTitle.textContent = title;
        modalDescription.textContent = description;
        modalCharacteristics.innerHTML = characteristics.map(item => `<li>${item}</li>`).join('');
        modal.style.display = 'block';
    }

    closeModal.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Actualiza los IDs según los nuevos nombres
    document.querySelector('a[href="#"]').addEventListener('click', function() {
        showModal(
            'Socket CPU',
            'Un dispositivo electrónico que procesa datos y realiza tareas según las instrucciones del usuario. ',
            ['', '', ''],
        );
    });

    document.querySelectorAll('a[href="#"]').forEach((element, index) => {
        switch(index) {
            case 0:
                element.addEventListener('click', function() {
                    showModal(
                       'PC',
            'Un dispositivo electrónico que procesa datos y realiza tareas según las instrucciones del usuario. ',
            ['Variedad de tamaños y potencias.', 'Usos múltiples: desde navegación hasta juegos.', 'Componentes personalizables.'],
                    );
                });
                break;
            case 1:
                element.addEventListener('click', function() {
                    showModal(
                        'GPU',
            'Un componente de hardware especializado en el procesamiento de gráficos y visualización de imágenes en una computadora.',
            ['Especializada en procesamiento gráfico.', 'Mejora el rendimiento en juegos y edición de video.', 'Puede ser integrada o dedicada.'],
                    );
                });
                break;
            case 2:
                element.addEventListener('click', function() {
                    showModal(
                        'CPU',
            ' El cerebro de la computadora que ejecuta instrucciones y realiza cálculos. La CPU coordina y gestiona todas las operaciones del sistema, incluyendo el procesamiento de datos y la ejecución de programas. ',
            ['Realiza cálculos y ejecuta instrucciones.', 'Coordina operaciones del sistema.', 'Influye en el rendimiento general de la computadora.'],
                    );
                });
                break;
            case 3:
                element.addEventListener('click', function() {
                    showModal(
                       'Fuente de poder',
            'Componentes que suministran energía eléctrica a todos los componentes internos de la computadora. La fuente de poder convierte la corriente alterna (AC) de la red eléctrica en corriente continua (DC) necesaria para el funcionamiento de la PC. ',
            ['Convierte AC a DC.', 'Suministra energía a todos los componentes.', 'Varía en capacidad y eficiencia.'],
                    );
                });
                break;
            case 4:
                element.addEventListener('click', function() {
                    showModal(
                      'Placa madre',
            'El circuito principal de la computadora que conecta todos los componentes, incluyendo la CPU, la GPU, la memoria RAM, y los dispositivos de almacenamiento. La placa madre proporciona las conexiones eléctricas y la comunicación entre los diferentes componentes del sistema. ',
            ['Conecta todos los componentes internos.', 'Proporciona conexiones eléctricas.', 'Compatible con CPU, RAM, GPU, y otros dispositivos.'],
                    );
                });
                break;
            case 5:
                element.addEventListener('click', function() {
                    showModal(
                        'Socket CPU',
            'Un dispositivo electrónico que procesa datos y realiza tareas según las instrucciones del usuario. ',
            ['', '', ''],
                    );
                });
            }
    });

    // Función para descargar la información como imagen
    const downloadBtn = document.getElementById('downloadBtn');
    downloadBtn.addEventListener('click', () => {
        html2canvas(document.querySelector("#modal")).then(canvas => {
            const link = document.createElement('a');
            link.download = 'informacion.png';
            link.href = canvas.toDataURL();
            link.click();
        });
    });

    // Librería para convertir HTML a canvas (necesario para la descarga como imagen)
    const script = document.createElement('script');
    script.src = "https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js";
    document.head.appendChild(script);
});
