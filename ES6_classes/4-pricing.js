// On importe la classe Currency
import Currency from './3-currency.js';

// On exporte une classe ES6 nommée Pricing
export default class Pricing {
  // Le constructeur reçoit : amount (number), currency (Currency)
  constructor(amount, currency) {
    // Vérifie que amount est un nombre
    if (typeof amount !== 'number') throw new TypeError('Amount must be a number');
    // Vérifie que currency est une instance de Currency
    if (!(currency instanceof Currency)) throw new TypeError('Currency must be a Currency');
    // Stocke les valeurs dans des propriétés privées
    this._amount = amount;
    this._currency = currency;
  }

  // Getter pour amount
  get amount() {
    return this._amount;
  }

  // Setter pour amount
  set amount(value) {
    if (typeof value !== 'number') throw new TypeError('Amount must be a number');
    this._amount = value;
  }

  // Getter pour currency
  get currency() {
    return this._currency;
  }

  // Setter pour currency
  set currency(value) {
    if (!(value instanceof Currency)) throw new TypeError('Currency must be a Currency');
    this._currency = value;
  }

  // Méthode qui retourne "amount nom (code)"
  displayFullPrice() {
    return `${this._amount} ${this._currency.displayFullCurrency()}`;
  }

  // Méthode statique qui convertit un prix avec un taux
  static convertPrice(amount, conversionRate) {
    if (typeof amount !== 'number' || typeof conversionRate !== 'number') {
      throw new TypeError('Both amount and conversionRate must be numbers');
    }
    return amount * conversionRate;
  }
}
