import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import store from './store';


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

// perhaps dirty?
function checkWin(state = false, action){
  if (action.type === 'CHECK_WIN') {
    return state = true;
  }
  return state;
}


const rootReducer = combineReducers({
  missedBall: setMissedBall,
  difficulty: setDifficulty,
  race: setRace,
  isWin: checkWin,
  playerScore: incrementPlayerScore,
  ghostScore: incrementGhostScore,
  routing: routerReducer,
});

export default rootReducer;
