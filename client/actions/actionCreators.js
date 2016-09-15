export function incrementScore(who) {
  return {
    type: 'INCREMENT_SCORE',
    who
  }
}
