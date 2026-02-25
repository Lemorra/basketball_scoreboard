let homescore = document.getElementById("homeside-score")
let guestscore = document.getElementById("guestside-score")

homescore.innerText = 0
guestscore.innerText = 0

function update_leaderboard() {
  let homescore_obj = document.getElementById("homeside-score")
  let guestscore_obj = document.getElementById("guestside-score")
  let leaderboard_obj = document.getElementById("leading_team")
  homescore = Number(homescore_obj.innerText)
  guestscore = Number(guestscore_obj.innerText)
  if (homescore > guestscore) {
    leaderboard_obj.innerText = "Home"
  } else if (homescore < guestscore) {
    leaderboard_obj.innerText = "Guest"
  } else {
    leaderboard_obj.innerText = "None"
  }
}

function add_point(element_id, point) {
  let teamscore_obj = document.getElementById(element_id)
  let teamscore = Number(teamscore_obj.innerText)
  teamscore += point
  teamscore_obj.innerText = teamscore
  update_leaderboard()
}

function sub_point(element_id, point) {
  let teamscore_obj = document.getElementById(element_id)
  let teamscore = Number(teamscore_obj.innerText)
  if (teamscore > 0) {
    teamscore -= point
  }
  teamscore_obj.innerText = teamscore
  update_leaderboard()
}

function scoreboard_reset() {
  let homescore_obj = document.getElementById("homeside-score")
  let guestscore_obj = document.getElementById("guestside-score")
  let homesfoul_obj = document.getElementById("foul_homeside_count")
  let guestfoul_obj = document.getElementById("foul_guestside_count")

  homescore_obj.innerText = 0
  guestscore_obj.innerText = 0
  homesfoul_obj.innerText = 0
  guestfoul_obj.innerText = 0
  update_leaderboard()
}

// Code for timer from ChatGPT

let remainingTime = 0;
let timerId = null;

function startCountdown() {
  if (timerId !== null) return;

  if (remainingTime === 0) {
    const m = Number(document.getElementById("timer_min").value) || 0;
    const s = Number(document.getElementById("timer_sec").value) || 0;
    remainingTime = m * 60 + s;
  }

  timerId = setInterval(() => {
    if (remainingTime <= 0) {
      resetTimer();
      return;
    }

    remainingTime--;
    updateDisplay();
  }, 1000);
}

function pauseTimer() {
  clearInterval(timerId);
  timerId = null;
}

function resetTimer() {
  pauseTimer();
  remainingTime = 0;
  updateDisplay();
  scoreboard_reset()
}

function updateDisplay() {
  const m = Math.floor(remainingTime / 60);
  const s = remainingTime % 60;

  document.getElementById("timer_display").innerText =
    `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
}