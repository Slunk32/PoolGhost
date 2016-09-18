import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

// create an object for the default data
/** const defaultState = {
    // This value is set by the missed ball and used as a calucation in the chance of the ghost running out (1-9)
    missedBall: 0,
    // This is the multiplier of the difficulty chosen by the player at start of match (1-3)
    difficulty: 1,
    score: {
      player: 0,
      ghost: 0
    }
};

function match(state = defaultState, action) {
  switch (action.type) {

    case 'SET_MISSED_BALL':
      return Object.assign({}, state, {
        missedBall: ball
      })

    case 'SET_DIFFICULTY':
      return Object.assign({}, state, { difficulty })

    case 'INCREMENT_PLAYER_SCORE':
      state.score.player += 1;
      return {...state}

    case 'INCREMENT_GHOST_SCORE':
      state.score.ghost += 1;
      return {...state}

    default:
      return state;
  }
} **/

function setMissedBall(state = 0, action) {
  if (action.type === 'SET_MISSED_BALL') {
    return action.ball;
  }
  else {
    return state;
  }
}

function setDifficulty(state = 2, action) {
  if (action.type === 'SET_DIFFICULTY') {
    return action.difficulty;
  }
  else {
    return state;
  }
}

function incrementPlayerScore(state = 0, action) {
  if (action.type === 'INCREMENT_PLAYER_SCORE') {
    return state + 1;
  }
  else {
    return state;
  }

}
function incrementGhostScore(state = 0, action) {
  if (action.type === 'INCREMENT_GHOST_SCORE') {
    return state + 1;
  }
  else {
    return state;
  }
}


const rootReducer = combineReducers({
  missedBall: setMissedBall,
  difficulty: setDifficulty,
  playerScore: incrementPlayerScore,
  ghostScore: incrementGhostScore,
  routing: routerReducer
});

export default rootReducer;
