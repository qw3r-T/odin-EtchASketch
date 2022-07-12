function createGrid(size) {
    const container = document.getElementById('gridContainer');
    for (let i = 0; i < size**2; i++) {
        const div = document.createElement('div');
        div.classList.add('gridElement');
        container.appendChild(div);
    };
}
