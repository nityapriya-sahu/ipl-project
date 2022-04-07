async function readTeamData(){
    const response = await fetch('../data/player/csk.json');
    const finalData = await response.json();
    console.log(finalData);
    

    for(let i in finalData.data){
        // console.log("====>", i)
        // const node = document.createElement("span");
        // const textnode = document.createTextNode(finalData.data[i].player_name);
        // node.appendChild(textnode);
        // document.getElementById("parent_card").appendChild(node);
        let cardHTML = '';
        finalData.data.map(player => {
            cardHTML += `<div class="team_card">

            <div class="player_image">
                <img src="../images/Team_Players/${player.photo}">
            </div>
            <div class="player_desc">
                <h2>${player.player_name}</h2>
                Price: ${player.price}<br>
                Status: ${player.playing_status}<br>
                Role: ${player.role}<br>
            </div>
            <div class="player_desc">
                <a href="../player/${player.id}.html">
                <button class="show_more_button"><b>Show More...</b></button>
                </a>
            </div>
        </div>`
      
         });
         document.getElementById('parent_card').innerHTML = cardHTML;

    }

}
document.onload = readTeamData(); // call specified function on page load