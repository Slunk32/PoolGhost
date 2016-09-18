import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';


function setMissedBall(state = 0, action) {
  if (action.type === 'SET_MISSED_BALL') {
    return action.ball;
  }
  else {
    return state;
  }
}

function setRace(state = 0, action) {
  if (action.type === 'SET_RACE') {
    return action.race;
  }
  else {
    return state;
  }
}

function setDifficulty(state = 0, action) {
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
  race: setRace,
  playerScore: incrementPlayerScore,
  ghostScore: incrementGhostScore,
  routing: routerReducer
});

export default rootReducer;
