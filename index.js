let scores = {home: 0, guest: 0}
let teams = {
    home: document.getElementById("homeScore"),
    guest: document.getElementById("guestScore")
}



function updateScore(team) {
    teams[team].textContent = scores[team]
}

document.querySelectorAll("button").forEach(button => 
    button.addEventListener('click', function() {
        let team = this.dataset.team
        let points = Number(this.dataset.points)
        scores[team] += points
        updateScore(team)
    })
)


function startCountDown(durationInMinutes) {
    let timer = durationInMinutes * 60
    const clock = document.getElementById("timer")

    const countDownInterval = setInterval(function() {
        const minutes = Math.floor(timer / 60)
        const seconds = timer % 60

        if (seconds < 0) {
            seconds = "0" + seconds
        }
        clock.textContent = `${minutes}:${seconds}`

        if (timer <= 0) {
            clearInterval(countDownInterval)
            clock.textContent = "00:00"
        }
        timer --
    }, 1000)
}

startCountDown(60)
console.log(homeScore)