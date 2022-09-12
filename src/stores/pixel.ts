import { defineStore } from 'pinia';

export type Pixel = {
    coord_x: number;
    coord_y: number;
    color: string;
    user: string;
    date: Date;
    isSticked: boolean;
    isUserGold: boolean;
};

export const usePixelStore = defineStore({
  id: 'pixel',
  state: () => ({
    _pixel: {
      coord_x: 0,
      coord_y: 0,
      color: '',
      user: '',
      date: new Date(),
      isSticked: false,
      isUserGold: false
    } as Pixel
  }),
  getters: {
    pixel: (state) => state._pixel
  },
  actions: {
    setPixel(pixel: Pixel) {
      this._pixel = pixel;
      this._pixel.coord_x /= 10;
      this._pixel.coord_y /= 10;
    },
    setUser(user: string) {
      this._pixel.user = user;
      console.log(this._pixel.user);
    },
    setIsSticked(isSticked: boolean) {
      this._pixel.isSticked = isSticked;
    },
    setIsUserGold(isUserGold: boolean) {
      this._pixel.isUserGold = isUserGold;
    }
  }
})