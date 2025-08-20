// On importe la classe ClassRoom
import ClassRoom from './0-classroom.js';

// On exporte une fonction par défaut qui crée des salles de classe
export default function initializeRooms() {
  // On retourne un tableau de trois objets ClassRoom avec les tailles 19, 20, 34
  return [new ClassRoom(19), new ClassRoom(20), new ClassRoom(34)];
}
