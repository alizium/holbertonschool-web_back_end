// On exporte une classe Airport
export default class Airport {
  // Le constructeur reçoit : name (string), code (string)
  constructor(name, code) {
    if (typeof name !== 'string') throw new TypeError('Name must be a string');
    if (typeof code !== 'string') throw new TypeError('Code must be a string');
    this._name = name;
    this._code = code;
  }

  // On redéfinit toString pour retourner le code
  toString() {
    return `[object ${this._code}]`;
  }
}
