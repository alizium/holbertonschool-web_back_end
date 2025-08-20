// On exporte une classe ES6 nommée Currency
export default class Currency {
  // Le constructeur reçoit : code (string), name (string)
  constructor(code, name) {
    // Vérifie que code est une chaîne
    if (typeof code !== 'string') throw new TypeError('Code must be a string');
    // Vérifie que name est une chaîne
    if (typeof name !== 'string') throw new TypeError('Name must be a string');
    // Stocke les valeurs dans des propriétés privées
    this._code = code;
    this._name = name;
  }

  // Getter pour code
  get code() {
    return this._code;
  }

  // Setter pour code
  set code(value) {
    if (typeof value !== 'string') throw new TypeError('Code must be a string');
    this._code = value;
  }

  // Getter pour name
  get name() {
    return this._name;
  }

  // Setter pour name
  set name(value) {
    if (typeof value !== 'string') throw new TypeError('Name must be a string');
    this._name = value;
  }

  // Méthode qui retourne "nom (code)"
  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
