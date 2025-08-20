// On crée un symbole privé pour le clonage
const _clone = Symbol('clone');

// On exporte la classe Car
export default class Car {
  // Le constructeur reçoit : brand, motor, color
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  // Méthode cloneCar qui retourne une nouvelle instance de la même classe
  cloneCar() {
    const Constructor = this.constructor[Symbol.species] || this.constructor;
    return new Constructor();
  }

  // On définit Symbol.species pour que cloneCar retourne la bonne classe
  static get [Symbol.species]() {
    return this;
  }
}
