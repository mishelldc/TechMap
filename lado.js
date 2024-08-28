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

    function showOverlayText(id) {
        // Oculta todos los textos superpuestos
        document.querySelectorAll('.overlay-text').forEach(function(text) {
            text.style.display = 'none';
        });

        // Muestra el texto correspondiente al botón presionado
        document.getElementById(id).style.display = 'block';
    }

    closeModal.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    document.getElementById('cpu-socket').addEventListener('click', function() {
        showModal(
            'Socket CPU',
            'El socket de CPU es el componente en una placa base que sirve como punto de conexión entre el procesador (CPU) y la placa base. Su función principal es asegurar que la CPU esté firmemente instalada y conectada a otros componentes del sistema, permitiendo la comunicación de datos entre el procesador y el resto de la computadora.',
            ['Compatibilidad: Cada socket es compatible con una familia específica de procesadores.', 'Tipo de Conexión: Puede ser LGA (pines en la placa base) o PGA (pines en el procesador).', 'Durabilidad: Está diseñado para soportar varias inserciones del procesador.']
        );
        showOverlayText('text-cpu-socket');
    });

    document.getElementById('ram-slots').addEventListener('click', function() {
        showModal(
            'RAM',
            'Son los módulos de memoria de acceso aleatorio que se instalan en la placa madre y que la CPU utiliza para almacenar datos temporales.',
            ['Almacena datos temporales para la CPU.', 'Es volátil, se borra al apagar la PC.', 'Viene en diferentes capacidades (GB) y velocidades (MHz).']
        );
        showOverlayText('text-ram-slots');
    });

    document.getElementById('power-connector-large').addEventListener('click', function() {
        showModal(
            'Conector',
            'Es el conector de 24 pines que proporciona energía a la placa madre. los módulos de memoria de acceso aleatorio que se instalan en la placa madre y que la CPU utiliza para almacenar datos temporales.',
            ['Tiene 24 pines.', 'Proporciona energía principal a la placa madre.', 'Conecta la fuente de poder a la placa.']
        );
        showOverlayText('text-power-connector-large');
    });

    document.getElementById('power-connector-small').addEventListener('click', function() {
        showModal(
            'Conector ',
            'Suele ser un conector de 4 u 8 pines que proporciona energía adicional a la CPU.',
            ['Generalmente de 4 u 8 pines.', 'Proporciona energía directa a la CPU.', 'Es esencial para el funcionamiento del procesador.']
        );
        showOverlayText('text-power-connector-small');
    });

    document.getElementById('sata-ports').addEventListener('click', function() {
        showModal(
            'SATA',
            'Conectores que permiten la conexión de discos duros y unidades SSD.',
            ['Conecta discos duros y SSDs.', 'Soporta velocidades de transferencia de hasta 6 Gbps.', 'Utiliza cables delgados y flexibles.']
        );
        showOverlayText('text-sata-ports');
    });

    document.getElementById('pci-slots').addEventListener('click', function() {
        showModal(
            'Puerto PCI',
            'Ranuras de expansión para instalar tarjetas adicionales como gráficas, de sonido, o de red.',
            ['Expande las capacidades de la PC.', 'Viene en diferentes tamaños, como PCIe x1, x4, x16.', 'Compatible con tarjetas gráficas, de sonido, etc.']
        );
        showOverlayText('text-pci-slots');
    });

    document.getElementById('rear-ports').addEventListener('click', function() {
        showModal(
            'Puertos Traseros',
            'Incluyen puertos USB, Ethernet, audio, y otros para la conexión de periféricos externos.',
            ['Incluyen USB, Ethernet, y audio.', 'Facilitan la conexión de periféricos externos.', 'Están integrados en la placa madre.']
        );
        showOverlayText('text-rear-ports');
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
