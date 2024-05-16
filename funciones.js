class CJugador {
    constructor() {
      this.jugadores = [];
    }
  
    agregarJugador(nombre, POS, edad, estatura, peso, nacionalidad) {
        this.jugadores.push({ nombre, POS, edad, estatura, peso, nacionalidad });
      }

    jugadoresArgentinos() {
      return this.jugadores.filter(jugador => jugador.nacionalidad === 'Argentina');
    }
    
    pesoJugadores() {
      return this.jugadores.filter(jugador => jugador.peso >= 75 && jugador.peso <= 80);
    }
  
    jugadorMasAlto() {
        let jugadorMasAlto = this.jugadores[0];
        this.jugadores.forEach(jugador => {
          if (jugador.altura > jugadorMasAlto.altura) {
            jugadorMasAlto = jugador;
          }
        });
        return jugadorMasAlto;
      }
      
  }
  

  const jugadores = new CJugador();

    jugadores.agregarJugador('Fábio1', 'G', 43, 1.88, 86 , 'Brasil');
    jugadores.agregarJugador('Marlon4', 'D', 28, 1.83, 78, 'Brasil');
    jugadores.agregarJugador('Marcelo12', 'D', 35, 1.73, 72, 'Brasil');
    jugadores.agregarJugador('Nino33', 'D', 26, 1.88, 82, 'Brasil');
    jugadores.agregarJugador('John Kennedy9', 'A', 21, 1.73, 71, 'Brasil');
    jugadores.agregarJugador('Keno11', 'A', 34, 1.78, 72, 'Brasil');
    jugadores.agregarJugador('Germán Cano14', 'A', 35, 1.78, 81, 'Argentina');

    console.log("Los jugadores argentinos son:", jugadores.jugadoresArgentinos());
  
    console.log("Los jugadores que pesan entre 75 kg y 80 kg son:", jugadores.pesoJugadores());
    
    console.log("El jugador mas alto es:", jugadores.jugadorMasAlto());