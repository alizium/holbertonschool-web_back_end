// On exporte une classe ES6 nommée ClassRoom
export default class ClassRoom {
  // Le constructeur reçoit un argument : maxStudentsSize
  constructor(maxStudentsSize) {
    // On stocke la valeur dans une propriété privée (avec underscore)
    this._maxStudentsSize = maxStudentsSize;
  }
}
