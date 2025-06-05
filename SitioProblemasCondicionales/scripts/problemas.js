function puedeVotar() {
  const edad = parseInt(document.getElementById('edad').value);
  const resultado = document.getElementById('resultado');

  if (edad >= 18) {
    resultado.textContent = "La persona puede votar.";
  } else {
    resultado.textContent = "La persona NO puede votar.";
  }
}

function resolverProblema32() {
  let horas = parseFloat(document.getElementById("horas").value);
  let pago = parseFloat(document.getElementById("pago").value);
  let sueldo;

  if (horas <= 40) {
    sueldo = horas * pago;
  } else {
    let horasExtras = horas - 40;
    sueldo = (40 * pago) + (horasExtras * pago * 2);
  }

  document.getElementById("resultado32").innerText = "Sueldo semanal: $" + sueldo.toFixed(2);
}

function resolverProblema33() {
  let presupuesto = parseFloat(document.getElementById("presupuesto").value);
  let regalo;

  if (presupuesto <= 10) {
    regalo = "Una tarjeta";
  } else if (presupuesto <= 100) {
    regalo = "Una caja de chocolates";
  } else if (presupuesto <= 250) {
    regalo = "Un ramo de flores";
  } else {
    regalo = "Un anillo";
  }

  document.getElementById("resultado33").innerText = "Puedes regalar: " + regalo;
}

function resolverProblema34() {
  let horas = parseInt(document.getElementById("horasEstacionado").value);
  let costo = 0;

  if (horas <= 2) {
    costo = horas * 5;
  } else if (horas <= 5) {
    costo = (2 * 5) + (horas - 2) * 4;
  } else if (horas <= 10) {
    costo = (2 * 5) + (3 * 4) + (horas - 5) * 3;
  } else {
    costo = (2 * 5) + (3 * 4) + (5 * 3) + (horas - 10) * 2;
  }

  document.getElementById("resultado34").innerText = "Costo total: $" + costo.toFixed(2);
}

function resolverProblema35() {
  const nombre1 = document.getElementById("nombre1").value;
  const edad1 = parseInt(document.getElementById("edad1").value);

  const nombre2 = document.getElementById("nombre2").value;
  const edad2 = parseInt(document.getElementById("edad2").value);

  const nombre3 = document.getElementById("nombre3").value;
  const edad3 = parseInt(document.getElementById("edad3").value);

  let menorNombre = nombre1;
  let menorEdad = edad1;

  if (edad2 < menorEdad) {
    menorNombre = nombre2;
    menorEdad = edad2;
  }

  if (edad3 < menorEdad) {
    menorNombre = nombre3;
    menorEdad = edad3;
  }

  document.getElementById("resultado35").innerText =
    `La persona más joven es ${menorNombre} con ${menorEdad} años.`;
}

function resolverProblema36() {
  const precio = parseFloat(document.getElementById("precioArticulo").value);
  let descuento = 0;

  if (precio >= 200) {
    descuento = 0.15;
  } else if (precio > 100) {
    descuento = 0.12;
  } else {
    descuento = 0.10;
  }

  const cantidadDescuento = precio * descuento;
  const precioFinal = precio - cantidadDescuento;

  document.getElementById("resultado36").innerText =
    `Descuento: $${cantidadDescuento.toFixed(2)}\nPrecio final: $${precioFinal.toFixed(2)}`;
}

function resolverProblema37() {
  const edad = parseInt(document.getElementById("edadEstudiante").value);
  const promedio = parseFloat(document.getElementById("promedioEstudiante").value);
  let beca = 0;
  let mensaje = "";

  if (edad > 18) {
    if (promedio >= 9) {
      beca = 2000;
    } else if (promedio >= 7.5) {
      beca = 1000;
    } else if (promedio >= 6) {
      beca = 500;
    } else {
      mensaje = "Carta de invitación a estudiar más.";
    }
  } else {
    if (promedio >= 9) {
      beca = 3000;
    } else if (promedio >= 8) {
      beca = 2000;
    } else if (promedio >= 6) {
      beca = 100;
    } else {
      mensaje = "Carta de invitación a estudiar más.";
    }
  }

  if (beca > 0) {
    mensaje = `Beca asignada: $${beca.toFixed(2)}`;
  }

  document.getElementById("resultado37").innerText = mensaje;
}

function resolverProblema38() {
  const antiguedad = parseInt(document.getElementById("antiguedad").value);
  const sueldo = parseFloat(document.getElementById("sueldo").value);

  let bonoAntiguedad = 0;
  let bonoSueldo = 0;

  // Bono por antigüedad
  if (antiguedad > 2 && antiguedad < 5) {
    bonoAntiguedad = sueldo * 0.20;
  } else if (antiguedad >= 5) {
    bonoAntiguedad = sueldo * 0.30;
  }

  // Bono por sueldo
  if (sueldo < 1000) {
    bonoSueldo = sueldo * 0.25;
  } else if (sueldo <= 3500) {
    bonoSueldo = sueldo * 0.15;
  } else {
    bonoSueldo = sueldo * 0.10;
  }

  // Se asigna el mayor de los dos bonos
  const bonoAsignado = Math.max(bonoAntiguedad, bonoSueldo);

  document.getElementById("resultado38").innerText =
    `El bono asignado es de $${bonoAsignado.toFixed(2)}`;
}

function resolverProblema39() {
  const tipo = document.getElementById('tipoPoliza').value;
  const bebeAlcohol = document.getElementById('alcohol').checked;
  const usaLentes = document.getElementById('lentes').checked;
  const tieneEnfermedad = document.getElementById('enfermedad').checked;
  const edad = parseInt(document.getElementById('edad').value);

  let costoBase = tipo === 'A' ? 1200 : 950;
  let porcentaje = 0;

  if (bebeAlcohol) porcentaje += 10;
  if (usaLentes) porcentaje += 5;
  if (tieneEnfermedad) porcentaje += 5;
  porcentaje += (edad > 40) ? 20 : 10;

  const incremento = costoBase * (porcentaje / 100);
  const costoFinal = costoBase + incremento;

  document.getElementById('resultado39').innerText =
    `El costo total de la póliza es $${costoFinal.toFixed(2)} (base $${costoBase} + ${porcentaje}% adicional).`;
}

function resolverProblema310() {
  const costoKm = parseFloat(document.getElementById('costoKm').value);
  const destinos = [
    { nombre: 'México', distancia: 750 },
    { nombre: 'P.V.', distancia: 800 },
    { nombre: 'Acapulco', distancia: 1200 },
    { nombre: 'Cancún', distancia: 1800 }
  ];

  if (isNaN(costoKm) || costoKm <= 0) {
    document.getElementById('resultado310').innerText = "Por favor, introduce un costo válido por kilómetro.";
    return;
  }

  let opciones = "";
  destinos.forEach(destino => {
    const costoTotal = destino.distancia * 2 * costoKm;
    opciones += `${destino.nombre}: $${costoTotal.toFixed(2)}\n`;
  });

  opciones += "\nSi el costo es muy alto, podrías quedarte en casa.";

  document.getElementById('resultado310').innerText = opciones;
}

function resolverProblema311() {
  const anios = parseInt(document.getElementById('anios').value);
  let bono;

  if (isNaN(anios) || anios < 0) {
    document.getElementById('resultado311').innerText = "Ingresa una antigüedad válida.";
    return;
  }

  if (anios >= 1 && anios <= 5) {
    bono = anios * 100;
  } else if (anios > 5) {
    bono = 1000;
  } else {
    bono = 0;
  }

  document.getElementById('resultado311').innerText = `El bono que recibirá es de $${bono}.`;
}

function resolverProblema312() {
  const horas = parseFloat(document.getElementById('horas').value);
  const pagoHora = parseFloat(document.getElementById('pagoHora').value);

  if (isNaN(horas) || isNaN(pagoHora) || horas < 0 || pagoHora < 0) {
    document.getElementById('resultado312').innerText = "Ingresa valores válidos.";
    return;
  }

  if (horas > 50) {
    document.getElementById('resultado312').innerText = "No está permitido trabajar más de 50 horas.";
    return;
  }

  let sueldo = 0;

  if (horas <= 40) {
    sueldo = horas * pagoHora;
  } else if (horas <= 45) {
    sueldo = 40 * pagoHora + (horas - 40) * pagoHora * 2;
  } else {
    sueldo = 40 * pagoHora + 5 * pagoHora * 2 + (horas - 45) * pagoHora * 3;
  }

  document.getElementById('resultado312').innerText = `El sueldo semanal es de $${sueldo.toFixed(2)}.`;
}

function resolverProblema313() {
  const alumnos = parseInt(document.getElementById('alumnos').value);
  let costoPorAlumno;

  if (isNaN(alumnos) || alumnos <= 0) {
    document.getElementById('resultado313').innerText = "Ingresa una cantidad válida de alumnos.";
    return;
  }

  if (alumnos > 100) {
    costoPorAlumno = 20;
  } else if (alumnos >= 50) {
    costoPorAlumno = 35;
  } else if (alumnos >= 20) {
    costoPorAlumno = 40;
  } else {
    costoPorAlumno = 70;
  }

  const costoTotal = alumnos * costoPorAlumno;

  document.getElementById('resultado313').innerText = 
    `Cada alumno pagará $${costoPorAlumno}. Costo total del viaje: $${costoTotal}.`;
}
