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


function setDifficulty(state = 1, action) {
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

function setBanner1(state = false, action) {
  if (action.type === 'SET_BANNER_1') {
    if (action.status) {
      return state = true;
    }
    else if (action.status === false) {
      return state = false;
    }
  }
  else {
    return state;
  }
}

function setBanner2(state = false, action) {
  if (action.type === 'SET_BANNER_2') {
    if (action.status) {
      return state = true;
    }
    else if (action.status === false) {
      return state = false;
    }
  }
  else {
    return state;
  }
}

function setBanner3(state = false, action) {
  if (action.type === 'SET_BANNER_3') {
    if (action.status) {
      return state = true;
    }
    else if (action.status === false) {
      return state = false;
    }
  }
  else {
    return state;
  }
}



const rootReducer = (state, action) => {
  if (action.type === 'GHOST_WINS') {
    alert('GHOST WINS');
    state = undefined
  }
  if (action.type === 'PLAYER_WINS') {
    alert('PLAYER WINS');
    state = undefined
  }
  return appReducer(state, action)
}

const appReducer = combineReducers({
  missedBall: setMissedBall,
  difficulty: setDifficulty,
  banner1: setBanner1,
  banner2: setBanner2,
  banner3: setBanner3,
  race: setRace,
  playerScore: incrementPlayerScore,
  ghostScore: incrementGhostScore,
  routing: routerReducer,
});

export default rootReducer;
