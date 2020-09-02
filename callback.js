function welcomeGuest(name, greetHandler){
    greetHandler(name);// callback function
}

function greetMorning(name){
    console.log("Good Morning", name);
}
function greetAfternoon(name){
    console.log("Good Afternoon", name);
}
function greetEvening(name){
    console.log("Good Evening", name);
}

const actorName = 'Raju Ahmed';
welcomeGuest(actorName, greetMorning);