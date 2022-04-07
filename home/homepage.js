async function readTeamData() {
    const response = await fetch('../data/teams.json');
    const names = await response.json();
    console.log(names); 
    for(let i in names.teams){
        // let card_id=document.getElementById("card_id")
        // document.getElementById("team_name").innerHTML=names.tm[i].name
        const node = document.createElement("span");

        // Create a text node:
        const textnode = document.createTextNode(names.teams[i].name);

        // Append the text node to the "li" node:
        node.appendChild(textnode);
        document.getElementById("parent_card").appendChild(node);
        // let filter_name=names?.teams.filter(data=>data.name === value)
        let cardHTML = '';
        names?.teams.map(team => {
            cardHTML += ` <div class="card" id="card_id">
                <div class="card_image">
                    <img src="../images/Logo/${team.image}">
                </div>
                <div class="card_title">
                    <h2 id="team_name">${team.name}</h2>
                </div>
                <div class="card_desc">
                    <b>Top Batsman: </b><span>${team.top_batsman}</span><br>
                    <b>Top Bowler: </b><span>${team.top_bowler}</span><br>
                    <b>Trophy: </b><span>${team.trophy}</span><br>
                    <b>Total Player: </b><span>${team.player_count}</span><br>
                </div>
                <div class="card_desc">
                    <a href='../teams/${team.team_link}'><button  onclick="setDataToLocal('dhoni')"  class="read_more_button">Read More...</button></a>
                </div>
            </div>`
      
         });
   
        document.getElementById('parent_card').innerHTML = cardHTML;
    }
   
    
}

function onchangeInput(value){
    console.log(value)
    if(value.toLowerCase() == "chennai super kings"){
        window.location.href = "../teams/csk.html";
    }
    else if(value.toLowerCase() == "delhi capitals"){
        window.location.href = "../teams/dc.html";
    }
    else if(value.toLowerCase() =="gujurat titans"){
        window.location.href = "../teams/gt.html";
    }
    else if(value.toLowerCase() == "kolkata knight riders"){
        window.location.href = "../teams/kkr.html";
    }
    else if(value.toLowerCase() =="lucknow super giants"){
        window.location.href = "../teams/lsg.html";
    }
    else if(value.toLowerCase() == "mumbai indians"){
        window.location.href = "../teams/mi.html";
    }
    else if(value.toLowerCase() =="punjab kings"){
        window.location.href = "../teams/pbks.html";
    }
    else if(value.toLowerCase() == "rajasthan royals"){
        window.location.href = "../teams/rr.html";
    }
    else if(value.toLowerCase() =="royal challengers bangalore"){
        window.location.href = "../teams/rcb.html";
    }
    else if(value.toLowerCase() == "sun risers hyderabad"){
        window.location.href = "../teams/srh.html";
    }
    else {
        window.location.href = "../home/homepage.html";
    }
    
    
}
document.onload = readTeamData();