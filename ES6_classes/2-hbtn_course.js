// On exporte une classe ES6 nommée HolbertonCourse
export default class HolbertonCourse {
  // Le constructeur reçoit : name (string), length (number), students (array de strings)
  constructor(name, length, students) {
    // Vérifie que name est une chaîne
    if (typeof name !== 'string') throw new TypeError('Name must be a string');
    // Vérifie que length est un nombre
    if (typeof length !== 'number') throw new TypeError('Length must be a number');
    // Vérifie que students est un tableau de chaînes
    if (!Array.isArray(students) || !students.every((s) => typeof s === 'string')) {
      throw new TypeError('Students must be an array of strings');
    }
    // On stocke les valeurs dans des propriétés privées (avec underscore)
    this._name = name;
    this._length = length;
    this._students = students;
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

  // Getter pour length
  get length() {
    return this._length;
  }

  // Setter pour length
  set length(value) {
    if (typeof value !== 'number') throw new TypeError('Length must be a number');
    this._length = value;
  }

  // Getter pour students
  get students() {
    return this._students;
  }

  // Setter pour students
  set students(value) {
    if (!Array.isArray(value) || !value.every((s) => typeof s === 'string')) {
      throw new TypeError('Students must be an array of strings');
    }
    this._students = value;
  }
}
