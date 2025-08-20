// On exporte une classe ES6 nommée Building
export default class Building {
  // Le constructeur reçoit : sqft (number)
  constructor(sqft) {
    // Vérifie que sqft est bien un nombre
    if (typeof sqft !== 'number') throw new TypeError('sqft must be a number');
    // Stocke sqft dans une propriété privée
    this._sqft = sqft;
    // Vérifie que la méthode evacuationWarningMessage est bien redéfinie
    if (this.constructor !== Building && this.evacuationWarningMessage === undefined) {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
  }

  // Getter pour sqft
  get sqft() {
    return this._sqft;
  }
}
