import { Component } from '@angular/core';
import { Jugador } from '../../models/jugador.model';
import { JugadorService } from '../../services/jugador.service';
import { FormsModule } from '@angular/forms';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-jugador',
  imports: [FormsModule],
  templateUrl: './jugador.component.html',
  styleUrl: './jugador.component.css'
})
export class JugadorComponent {

  jugadores: any;
  jugador = new Jugador();

  constructor(private jugadorService: JugadorService) {
    this.getJugadores();
  }

  // Obtener todos los jugadores
  async getJugadores(): Promise<void> {
    this.jugadores = await firstValueFrom(this.jugadorService.getJugadores());
  }

  // Insertar un jugador desde el formulario
  insertarJugador() {
    this.jugadorService.agregarJugador(this.jugador);
    this.jugador = new Jugador();
    this.getJugadores();
  }

  // Seleccionar un jugador de la tabla
  selectJugador(jugadorSeleccionado: Jugador) {
    this.jugador = jugadorSeleccionado;
  }

  // Modificar un jugador desde el formulario
  updateJugador() {
    this.jugadorService.modificarJugador(this.jugador);
    this.jugador = new Jugador();
    this.getJugadores();
  }

  // Eliminar un jugador
  deleteJugador() {
    this.jugadorService.eliminarJugador(this.jugador);
    this.jugador = new Jugador();
    this.getJugadores();
  }
}
