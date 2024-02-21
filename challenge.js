function generarMazo() {
  const palos = ['espadas', 'treboles', 'diamantes', 'corazones']; // Palos de las cartas
  const valores = [
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    'J',
    'Q',
    'K',
    'A',
  ];
  let mazo = [];
  for (let palo of palos) {
    for (let valor of valores) {
      mazo.push({ valor, palo });
    }
  }
  return mazo;
}

function obtenerCartaAleatoria(mazo) {
  const indiceCarta = Math.floor(Math.random() * mazo.length);
  return mazo.splice(indiceCarta, 1)[0];
}

function esCartaMayor(carta1, carta2) {
  const valoresCartas = [
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    'J',
    'Q',
    'K',
    'A',
  ];
  return (
    valoresCartas.indexOf(carta2.valor) > valoresCartas.indexOf(carta1.valor)
  );
}

function iniciarJuego() {
  let mazo = generarMazo();
  let puntaje = 0;
  console.log('¡Bienvenido al juego de Mayor o Menor!');
  while (true) {
    console.log(`Carta actual: ${mazo[0].valor}${mazo[0].palo}`);
    const eleccion = prompt(
      '¿La siguiente carta será mayor o menor? (mayor/menor)'
    ).toLowerCase();
    const nuevaCarta = obtenerCartaAleatoria(mazo);
    console.log(`Nueva carta: ${nuevaCarta.valor}${nuevaCarta.palo}`);
    if (
      (eleccion === 'mayor' && esCartaMayor(mazo[0], nuevaCarta)) ||
      (eleccion === 'menor' && !esCartaMayor(mazo[0], nuevaCarta))
    ) {
      console.log('¡Adivinaste! La respuesta es correcta.');
      puntaje++;
    } else {
      console.log('¡Oh no! La respuesta es incorrecta.');
      console.log(`Carta actual: ${mazo[0].valor}${mazo[0].palo}`);
      console.log(`Nueva carta: ${nuevaCarta.valor}${nuevaCarta.palo}`);
      break;
    }
    if (!confirm('¿Deseas continuar jugando?')) {
      break;
    }
    mazo.splice(0, 1);
  }
  console.log(`Fin del juego. Tu puntuación final es: ${puntaje}`);
}

iniciarJuego();
