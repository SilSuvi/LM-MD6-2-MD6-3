// INFORMACIÓN BÁSICA

const WORK_HOURS = [
    "08:00 - 09:00",
    "09:00 - 10:00",
    "10:00 - 11:00",
    "11:00 - 12:00",
    "12:00 - 13:00",
    "13:00 - 14:00",
    "15:00 - 16:00",
    "16:00 - 17:00",
  ];
  
  let myTeam = [
    { name: "María", availability: new Array(8).fill(true) },
    { name: "Pedro", availability: new Array(8).fill(true) },
    { name: "Esther", availability: new Array(8).fill(true) },
    { name: "Marcos", availability: new Array(8).fill(true) },
  ];
  
  // FUNCIÓN QUE, MEDIANTE BUCLE, MUESTRA INFORMACIÓN POR PANTALLA
  
  let showAvailability = (arrayTimes, arrayTeam) => {
    for (i = 0; i < myTeam.length; i++) {
      console.log("Disponibilidad de " + arrayTeam[i].name);
      for (x = 0; x < arrayTimes.length; x++) {
        console.log("   " + arrayTimes[x] + ": " + arrayTeam[i].availability[x]);
      }
    }
  };
  
  // FUNCIÓN PARA ASIGNAR TRUE/FALSE A CADA JUGADOR, GESTIONANDO EL RANDOM
  
  let randomBoolean = () => Math.random() > 0.5;
  
  let isAvailable = (team) => {
    for (i = 0; i < team.length; i++) {
      for (x = 0; x < team[i].availability.length; x++) {
        team[i].availability[x] = randomBoolean();
      }
    }
  };
  
  // FUNCIÓN QUE COMPRUEBA HUECOS
  
  let commonAvailavility = (team, slots) => {
    for (x = 0; x < slots.length; x++) {
      let check = true;
      for (i = 0; i < team.length; i++) {
        check = check && team[i].availability[x];
      }
      if (check) return "Se ha encontrado UN HUECO en el horario " + slots[x];
    }
    return "No hay huecos. Lo sentimos";
  };
  
  isAvailable(myTeam);
  showAvailability(WORK_HOURS, myTeam);
  console.log(commonAvailavility(myTeam, WORK_HOURS));