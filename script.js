function createDiv(size) {
    const div = document.createElement('div');
    div.classList.add('gridElement');
    div.style.width = `${size}px`;
    div.style.width = `${size}px`;
    div.addEventListener('mouseover',(e) => e.target.style.backgroundColor = 'blue');

    return div;
};

function createGrid(size) {
    removeGrid();
    const container = document.getElementById('gridContainer');
    for (let i = 0; i < size**2; i++) {
        container.appendChild(createDiv(container.clientWidth / size));
    };
};

function removeGrid() {
    const container = document.getElementById('gridContainer');   
    while (container.firstChild) {
        container.removeChild(container.lastChild);
    };
};

function resetButton() {
    const resetButton = document.getElementById('resetButton');
    const slider = document.getElementById('slider');
    resetButton.addEventListener('click',() => createGrid(slider.value));
};

createGrid(3);
resetButton();