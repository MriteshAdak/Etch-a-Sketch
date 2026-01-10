import { CONFIG, HexColor } from './types.js';

export class ColorGenerator {
  /**
   * Generates a random hex color
   */
  static generateRandom(): HexColor {
    let color = '#';
    
    for (let i = 0; i < 6; i++) {
      const randomIndex = Math.floor(Math.random() * 16);
      color += CONFIG.HEX_CHARS[randomIndex];
    }
    
    return color as HexColor;
  }
}