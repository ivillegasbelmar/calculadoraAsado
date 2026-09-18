let cantidadPersonas = 0;
let porcentajePicoteo = 0;
let totalVacuno=0;
let totalPicoteo=0;

const botonCalcular = document.getElementById('btn-calculate')

//parametros de asado
const consAdulto = 450 //gramos por persona
const consKids = 200 //gramos por persona


botonCalcular.addEventListener("click", function(event){
    event.preventDefault();
    const resultsContainer = document.getElementById('results-container');
    cantidadPersonas= parseInt(document.getElementById('guests').value, 10);
    porcentajePicoteo = parseFloat(document.getElementById('snack-percentage').value/100);
    console.log("Cantidad personas:", cantidadPersonas);
    console.log("Porcentaje picoteo:", porcentajePicoteo + "%");
    resultsContainer.classList.remove('hidden');
    calcularOutput(cantidadPersonas,porcentajePicoteo);

})


function calcularOutput(cantidadPersonas,porcentajePicoteo){
    const totalConsumo = consAdulto*cantidadPersonas/1000;
    const totalVacuno=totalConsumo*(1-porcentajePicoteo);
    const totalPicoteo=totalConsumo*porcentajePicoteo;

    document.querySelector('.beef-qty').textContent = totalVacuno;
    document.querySelector('.snack-qty').textContent = totalPicoteo;
    document.querySelector('.others-qty').textContent = "no utilizado por el momento";
    document.querySelector('.coal-qty').textContent = totalConsumo;
    document.querySelector('.drinks-qty').textContent = "en construccion";
}

// Función asíncrona para consultar la API
async function obtenerDatoCurioso() {
  const factText = document.getElementById('fact-text');
  
  try {
    // Petición HTTP a la API de Random Useless Facts
    const response = await fetch('https://uselessfacts.jsph.pl/api/v2/facts/random?language=en');
    
    if (!response.ok) {
      throw new Error('Error al conectar con la API');
    }

    const data = await response.json();
    
    // Inserción del texto en el DOM (data.text contiene el dato)
    factText.textContent = `💡 Dato curioso: ${data.text}`;
  } catch (error) {
    console.error('Error fetching fact:', error);
    factText.textContent = '💡 ¿Sabías que el asado sabe mejor en buena compañía?';
  }
}

// Ejecutar la función cuando se carga la página
document.addEventListener('DOMContentLoaded', obtenerDatoCurioso);
