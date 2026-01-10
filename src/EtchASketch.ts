import { CONFIG } from './types.js';
import { ColorGenerator } from './ColorGenerator.js';

export class EtchASketch {
  private gridContainer: HTMLElement;
  private currentGridSize: number;

  constructor(containerId: string) {
    // Type assertion with validation
    const container = document.querySelector(`#${containerId}`);
    
    if (!container) {
      throw new Error(`Container with id "${containerId}" not found`);
    }
    
    this.gridContainer = container as HTMLElement;
    this.currentGridSize = CONFIG.DEFAULT_GRID_SIZE;
    
    this.initialize();
  }

  private initialize(): void {
    this.createGrid(this.currentGridSize);
    this.attachEventListeners();
  }

  private attachEventListeners(): void {
    const gridSizeBtn = document.querySelector('#gridSize');
    const sketchBtn = document.querySelector('#sketch');

    if (gridSizeBtn) {
      gridSizeBtn.addEventListener('click', () => this.handleGridSizeChange());
    }

    if (sketchBtn) {
      sketchBtn.addEventListener('click', () => this.handleReset());
    }
  }

  private handleGridSizeChange(): void {
    let newSize: number;

    do {
      const input = prompt(`Enter the grid size of your choice (<${CONFIG.MAX_GRID_SIZE}): `);
      
      // Handle null (user cancelled)
      if (input === null) return;
      
      newSize = parseInt(input, 10);
    } while (isNaN(newSize) || newSize > CONFIG.MAX_GRID_SIZE || newSize < 1);

    this.clearGrid();
    this.currentGridSize = newSize;
    this.createGrid(newSize);
  }

  private handleReset(): void {
    const grids = this.gridContainer.querySelectorAll<HTMLElement>('.grids');
    
    grids.forEach(grid => {
      grid.style.backgroundColor = 'white';
    });
  }

  private clearGrid(): void {
    while (this.gridContainer.firstChild) {
      this.gridContainer.removeChild(this.gridContainer.firstChild);
    }
  }

  private createGrid(size: number): void {
    for (let i = 0; i < size; i++) {
      const row = this.createRow();
      
      for (let j = 0; j < size; j++) {
        const cell = this.createCell();
        row.appendChild(cell);
      }
      
      this.gridContainer.appendChild(row);
    }
  }

  private createRow(): HTMLElement {
    const row = document.createElement('div');
    row.style.display = 'flex';
    row.style.flexGrow = '1';
    return row;
  }

  private createCell(): HTMLElement {
    const cell = document.createElement('div');
    cell.style.flexGrow = '1';
    cell.className = 'grids';
    
    cell.addEventListener('mouseover', (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      target.style.backgroundColor = ColorGenerator.generateRandom();
    });
    
    return cell;
  }
}