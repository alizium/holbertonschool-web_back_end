// On importe la classe Building
import Building from './5-building.js';

// On exporte une classe SkyHighBuilding qui étend Building
export default class SkyHighBuilding extends Building {
  // Le constructeur reçoit sqft (nombre) et floors (nombre)
  constructor(sqft, floors) {
    // On appelle le constructeur parent pour initialiser sqft
    super(sqft);
    // Vérifie que floors est bien un nombre
    if (typeof floors !== 'number') throw new TypeError('floors must be a number');
    // Stocke floors dans une propriété privée
    this._floors = floors;
  }

  // Getter pour floors
  get floors() {
    return this._floors;
  }

  // On redéfinit la méthode evacuationWarningMessage
  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors`;
  }
}
