// Configuration constants
export const CONFIG = {
  DEFAULT_GRID_SIZE: 16,
  MAX_GRID_SIZE: 100,
  CONTAINER_SIZE: 550,
  HEX_CHARS: '0123456789ABCDEF',
} as const;

// Type for color in hex format
export type HexColor = `#${string}`;