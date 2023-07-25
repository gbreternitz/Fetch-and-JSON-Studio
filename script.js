window.addEventListener("load", function () {

    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response){

        let container = document.getElementById("container");
        let astros = [];
        let astroCount = 1;

        response.json().then( function(data){

            let sortedAstros = data.sort(
                (p1, p2) => (p1.hoursInSpace < p2.hoursInSpace) ? 1 : (p1.hoursInSpace > p2.hoursInSpace) ? -1 : 0);

            for ( let i = 0; i < sortedAstros.length; i++){

                container.innerHTML += `
                <p>Astronaut #${astroCount}: </p>`;
                
                if (sortedAstros[i].active === true){
                    container.innerHTML += `
                    <div class="astronaut">
                    <div class="bio">
                        <h3>${sortedAstros[i].firstName} ${sortedAstros[i].lastName}</h3>
                        <ul>
                            <li>Hours in space: ${sortedAstros[i].hoursInSpace}</li>
                            <li id = "active">Active: ${sortedAstros[i].active}</li>
                            <li>Skills: ${sortedAstros[i].skills}</li>
                        </ul>
                    </div>
                    <img class="avatar" src=${sortedAstros[i].picture}>
                    </div>    
                    `;
                    astroCount++;
                } else {
                    container.innerHTML += `
                    <div class="astronaut">
                    <div class="bio">
                        <h3>${sortedAstros[i].firstName} ${sortedAstros[i].lastName}</h3>
                        <ul>
                            <li>Hours in space: ${sortedAstros[i].hoursInSpace}</li>
                            <li>Active: ${sortedAstros[i].active}</li>
                            <li>Skills: ${sortedAstros[i].skills}</li>
                        </ul>
                    </div>
                    <img class="avatar" src=${sortedAstros[i].picture}>
                    </div>    
                    `;      
                    astroCount++;              
                }
            }
        })
    });
});