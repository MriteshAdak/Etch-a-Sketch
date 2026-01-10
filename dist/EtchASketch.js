import { CONFIG } from './types.js';
import { ColorGenerator } from './ColorGenerator.js';
export class EtchASketch {
    constructor(containerId) {
        // Type assertion with validation
        const container = document.querySelector(`#${containerId}`);
        if (!container) {
            throw new Error(`Container with id "${containerId}" not found`);
        }
        this.gridContainer = container;
        this.currentGridSize = CONFIG.DEFAULT_GRID_SIZE;
        this.initialize();
    }
    initialize() {
        this.createGrid(this.currentGridSize);
        this.attachEventListeners();
    }
    attachEventListeners() {
        const gridSizeBtn = document.querySelector('#gridSize');
        const sketchBtn = document.querySelector('#sketch');
        if (gridSizeBtn) {
            gridSizeBtn.addEventListener('click', () => this.handleGridSizeChange());
        }
        if (sketchBtn) {
            sketchBtn.addEventListener('click', () => this.handleReset());
        }
    }
    handleGridSizeChange() {
        let newSize;
        do {
            const input = prompt(`Enter the grid size of your choice (<${CONFIG.MAX_GRID_SIZE}): `);
            // Handle null (user cancelled)
            if (input === null)
                return;
            newSize = parseInt(input, 10);
        } while (isNaN(newSize) || newSize > CONFIG.MAX_GRID_SIZE || newSize < 1);
        this.clearGrid();
        this.currentGridSize = newSize;
        this.createGrid(newSize);
    }
    handleReset() {
        const grids = this.gridContainer.querySelectorAll('.grids');
        grids.forEach(grid => {
            grid.style.backgroundColor = 'white';
        });
    }
    clearGrid() {
        while (this.gridContainer.firstChild) {
            this.gridContainer.removeChild(this.gridContainer.firstChild);
        }
    }
    createGrid(size) {
        for (let i = 0; i < size; i++) {
            const row = this.createRow();
            for (let j = 0; j < size; j++) {
                const cell = this.createCell();
                row.appendChild(cell);
            }
            this.gridContainer.appendChild(row);
        }
    }
    createRow() {
        const row = document.createElement('div');
        row.style.display = 'flex';
        row.style.flexGrow = '1';
        return row;
    }
    createCell() {
        const cell = document.createElement('div');
        cell.style.flexGrow = '1';
        cell.className = 'grids';
        cell.addEventListener('mouseover', (e) => {
            const target = e.target;
            target.style.backgroundColor = ColorGenerator.generateRandom();
        });
        return cell;
    }
}
