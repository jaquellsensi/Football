function getTeamNames() {
    return [
            "Dallas Cowboys",
            "Denver Broncos",
            "Houston Texans",
            "Kansas City Chiefs",
        ];
}

function getTeamAbbreviations() {
    return ["DAL", "DEN", "HOU", "KAN"];
}

function getAllTeamsInfo() {
    return [
        {code:"DAL", name:"Dallas Cowboys", plays:"Arlington, TX"},
        {code:"DEN", name:"Denver Broncos", plays:"Denver, CO"},
        {code:"HOU", name:"Houston Texans", plays:"Houston, TX"},
        {code:"KAN", name:"Kansas City Chiefs",plays:"Kansas City, MO"},
      ]
      
}

function init() {

    const teameSelect = document.getElementById("teamSelect");
    const teamsNames = getTeamNames();
    const teamAbbreviations = getTeamAbbreviations();
    //console.log(loList);
   // console.log(teamNames);


    teamsNames.forEach((team, index) => {
        const option = document.createElement("option");
        option.textContent = team
        option.value = teamAbbreviations[index];
        console.log(option);
        teamList.appendChild(option);
    });

    const submitButton = document.getElementById("submitButton");
    submitButton.addEventListener("click", displayTeamInfo);

}

function displayTeamInfo() {
    const teamCode = document.getElementById("teamSelect").value;
    const teamInfo = getAllTeamsInfo();
    const selectedTeam = teamInfo.find(team => team.code === teamCode);

    const teamInfoParagraph = document.getElementById("teamInfo");
    teamInfoParagraph.textContent = `Team: ${selectedTeam.name}, Play in: ${selectedTeam.plays}`;
}

window.onload = function() {
    init();
};