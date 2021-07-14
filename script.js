const tiles = document.querySelectorAll('.search-title');

if (tiles) {
    tiles.forEach(tile => {
        let color = tile.dataset.color;
        tile.style.setProperty('--color', color);
    })
}