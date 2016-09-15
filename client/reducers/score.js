function score(state = [], action) {
  switch (action.type) {
    case 'INCREMENT_SCORE':
      if (action.who === 'Ghost') {
        console.log(state);
        return {...state, ghostScore: state.ghostScore + 1}
      }
      else {
        console.log(state);
        return {...state, playerScore: state.playerScore + 1}
      }
  default:
    return state;
  }
}

export default score;
