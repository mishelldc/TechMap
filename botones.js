document.getElementById('cpu-socket').addEventListener('click', function() {
    toggleVisibility('text-cpu-socket');
});

document.getElementById('ram-slots').addEventListener('click', function() {
    toggleVisibility('text-ram-slots');
});

document.getElementById('power-connector-large').addEventListener('click', function() {
    toggleVisibility('text-power-connector-large');
});

document.getElementById('power-connector-small').addEventListener('click', function() {
    toggleVisibility('text-power-connector-small');
});

document.getElementById('sata-ports').addEventListener('click', function() {
    toggleVisibility('text-sata-ports');
});

document.getElementById('pci-slots').addEventListener('click', function() {
    toggleVisibility('text-pci-slots');
});

document.getElementById('rear-ports').addEventListener('click', function() {
    toggleVisibility('text-rear-ports');
});

function toggleVisibility(elementId) {
    const element = document.getElementById(elementId);
    if (element.style.display === 'none' || element.style.display === '') {
        element.style.display = 'block';
    } else {
        element.style.display = 'none';
    }
}
