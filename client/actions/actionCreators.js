export function missedBall(ball) {
  return {
  type: 'SET_MISSED_BALL',
  ball
  }
}

export function setDifficulty(race) {
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
