//convert today date to input format
const today = new Date().toISOString().split("T")[0];
start_date.value = today;
start_date.min = today; //bloquer calendrier avant today

//calcul date de demain
const tomorrow = new Date();
tomorrow.setDate(tomorrow.getDate() +1 );


//convert tomorrow au bon format
const tomorrowFormat = tomorrow.toISOString().split("T")[0];
end_date.value = tomorrowFormat;
end_date.min = tomorrowFormat;

//Controls pour éviter que les dates début et fin soient incohérentes
start_date.addEventListener("change", (e)=>{
    let day = new Date(e.target.value);
    
    if(end_date.value < start_date.value){  //ajuster la valeur de date de fin
        day.setDate(day.getDate()+1);
        end_date.value = day.toISOString().split("T")[0];
    }
})
    
end_date.addEventListener("change", (e)=>{
    let day = new Date(e.target.value);

    if(start_date.value> end_date.value){  //ajuster la valeur de date de fin
        day.setDate(day.getDate()-1);
        start_date.value = day.toISOString().split("T")[0]; 
    }
})
    
//calcul du prix
const bookingCalc = () =>{
    let diffTime = Math.abs(new Date(end_date.value) - new Date(start_date.value));
    let diffDay = Math.ceil(diffTime / (1000 * 60 * 60 * 24));  //1000 pour ramener en secondes, *60 pour les minutes, *60 pour les heures, *24 pour les jours
    console.log(diffDay);
    const totalPrice = document.getElementById('total');
    const nightPrice = document.getElementById('nightPrice');
    totalPrice.textContent = nightPrice.textContent * diffDay; 
}
bookingCalc();

start_date.addEventListener('change', bookingCalc);
end_date.addEventListener('change', bookingCalc);