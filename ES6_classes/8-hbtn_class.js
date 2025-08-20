// On exporte une classe HolbertonClass
export default class HolbertonClass {
  // Le constructeur reçoit : size (number), location (string)
  constructor(size, location) {
    if (typeof size !== 'number') throw new TypeError('Size must be a number');
    if (typeof location !== 'string') throw new TypeError('Location must be a string');
    this._size = size;
    this._location = location;
  }

  // Conversion vers Number → retourne size
  valueOf() {
    return this._size;
  }

  // Conversion vers String → retourne location
  toString() {
    return this._location;
  }
}
