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
