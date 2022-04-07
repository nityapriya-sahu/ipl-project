document.onload = readTeamData();

async function readTeamData(){
    const response = await fetch("../data/Player/Lsg.json");
    const finalResponse = await response.json();
    console.log(finalResponse);

    for(let i in finalResponse.lsg_data){
        
        let cardHTML = '';
        finalResponse?.lsg_data.map(data => {
            cardHTML += `<div class="team_card">
            <div class="player_image">
                <img src="../images/Team_Players/${data.photo}">
            </div>
            <div class="player_desc">
                <h2>${data.player_name}</h2>
                Price: ${data.price}<br>
                Status: ${data.playing_status}<br>
                Role: ${data.role}<br>
            </div>
            <div class="player_desc">
            <a href="../player/${data.id}.html">
            <button class="show_more_button"><b>Show More...</b></button>
            </a>
            </div>
        </div>`
        });

        document.getElementById("parent_card").innerHTML = cardHTML;
        //../images/Team_Players/KL_Rahul.png
        
    }
}
