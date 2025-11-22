let scores = {home: 0, guest: 0}
let teams = {
    home: document.getElementById("homeScore"),
    guest: document.getElementById("guestScore")
}

function updateScore(team) {
    teams[team].textContent = scores[team]
}

function addPoints(team, points) {
    scores[team] += points
    updateScore(team)
}



console.log(homeScore)