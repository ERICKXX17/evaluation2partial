import { Injectable, inject } from '@angular/core';
import { Jugador } from '../models/jugador.model';
import { first } from 'rxjs';
import { collection, collectionData, deleteDoc, Firestore, updateDoc } from '@angular/fire/firestore';
import { addDoc, doc } from 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class JugadorService {
  private db: Firestore = inject(Firestore);

  constructor() {}

  getJugadores() {
    const jugadoresCollection = collection(this.db, 'jugadores');
    return collectionData(jugadoresCollection, { idField: 'id' }).pipe(first());
  }

  async agregarJugador(jugador: Jugador) {
    const jugadoresCollection = collection(this.db, 'jugadores');
    const jugadorData = {
      nombre: jugador.nombre,
      dorsal: jugador.dorsal,
      posicion: jugador.posicion,
      goles: jugador.goles,
      equipo: jugador.equipo
    };
    await addDoc(jugadoresCollection, jugadorData);
  }

  async modificarJugador(jugador: Jugador) {
    const documentRef = doc(this.db, 'jugadores', jugador.id);
    await updateDoc(documentRef, {
      nombre: jugador.nombre,
      dorsal: jugador.dorsal,
      posicion: jugador.posicion,
      goles: jugador.goles,
      equipo: jugador.equipo
    });
  }

  async eliminarJugador(jugador: Jugador) {
    const documentRef = doc(this.db, 'jugadores', jugador.id);
    await deleteDoc(documentRef);
  }
}
