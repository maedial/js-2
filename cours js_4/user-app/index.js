let userData;

const fetchUser = async() => {
    await fetch('https://randomuser.me/api/?results=24')
    .then((res)=>res.json())
    .then((data)=> userData = data.results);

    //console.log(userData);
}

const dayCalc = (date) => {
    let todayTimeStamp = Date.parse(new Date());
    let timestamp = Date.parse(date);

    return Math.ceil((todayTimeStamp - timestamp) /8.64e7);
}

function dateParser (chaine)  {
    let newDate = new Date(chaine).toLocaleDateString("fr-FR",{
        year: "numeric",
        month: "long",
        day:"numeric"
    });
    return newDate;
};

const userDisplay = async () => {
    await fetchUser();
    
    document.body.innerHTML = userData
    .map(
        (user)=> 
        `
            <div class="card">
                <img src=${user.picture.large} alt='photo de ${user.name.last}
                <h3>${user.name.first} ${user.name.last}</h3>
                <p>${user.location.city}, ${dateParser(user.dob.date)}</p>
                <em>Membre depuis: ${dayCalc(user.registered.date)} jours</em>
            </div>
        `
        )
        .join("");
}

userDisplay();