import { EtchASketch } from './EtchASketch.js';

// Initialize the application when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  try {
    new EtchASketch('gridContainer');
  } catch (error) {
    console.error('Failed to initialize Etch-a-Sketch:', error);
  }
});