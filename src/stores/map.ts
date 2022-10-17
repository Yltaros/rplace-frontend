import { defineStore } from 'pinia'
import type { Pixel } from './pixel';

export type Map = { width: number, pixels: Pixel[] };

export const useMapStore = defineStore({
  id: 'map',
  state: () => ({
    _map: {
      width: 0,
      pixels: []
    } as Map
  }),
  getters: {
    width: (state) => state._map.width,
    pixels: (state) => state._map.pixels
  },
  actions: {
    clearMap() {
      for (let i=1; i<this._map.width+1; i++) {
        for (let j=1; j<this._map.width+1; j++) {
          let pixel: Pixel = {
            'coord_x': i,
            'coord_y': j,
            'color': 'white',
            user: 'root.game',
            date: new Date(),
            isSticked: false,
            isUserGold: false
          }
          this._map.pixels.push(pixel);
        }
      }
    },
    setWidth(width: number) {
      this._map.width = width;
    },
    setMap(pixels: []) {
      for (let i=0; i<this._map.pixels.length; i++) {
        this._map.pixels[i] = pixels[i]
      }
    },
    addPixel(pixel: Pixel) {
      this._map.pixels.push(pixel);
    },
    editPixel(pixel: Pixel) {
      try {
        const index = this._map.pixels.findIndex(
          (el) => el.coord_x == pixel.coord_x && el.coord_y == pixel.coord_y
        );
        this._map.pixels[index] = pixel;
      } catch(err) {
        this._map.pixels.push(pixel);
      }
    }
  }
})
