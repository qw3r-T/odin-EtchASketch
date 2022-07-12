function createDiv(size) {
    const div = document.createElement('div');
    div.classList.add('gridElement');
    div.style.width = `${size}px`;
    div.style.width = `${size}px`;
    div.addEventListener('mouseover',(e) => e.target.style.backgroundColor = 'blue');

    return div;
};

function createGrid(size) {
    const container = document.getElementById('gridContainer');
    for (let i = 0; i < size**2; i++) {
        container.appendChild(createDiv(container.clientWidth / size));
    };
};

createGrid(16)