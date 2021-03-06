export function missedBall(ball) {
  return {
  type: 'SET_MISSED_BALL',
  ball
  }
}

export function setRace(race) {
  return {
  type: 'SET_RACE',
  race
  }
}

export function setDifficulty(difficulty) {
  return {
  type: 'SET_DIFFICULTY',
  difficulty
  }
}

export function incrementPlayerScore() {
  return {
    type: 'INCREMENT_PLAYER_SCORE'
  }
}

export function incrementGhostScore() {
  return {
    type: 'INCREMENT_GHOST_SCORE'
  }
}

export function ghostWins() {
  return {
    type: 'GHOST_WINS'
  }
}

export function playerWins() {
  return {
    type: 'PLAYER_WINS'
  }
}

export function setBanner1(status) {
  return {
    type: 'SET_BANNER_1',
    status
  }
}

export function setBanner2(status) {
  return {
    type: 'SET_BANNER_2',
    status
  }
}

export function setBanner3(status) {
  return {
    type: 'SET_BANNER_3',
    status
  }
}
