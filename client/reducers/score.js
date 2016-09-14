// a reducer takes in two things:

// 1. the action (info about what happened)
// 2. copy of current state

function score(state = 0, action) {
  switch (action.type) {
    case 'INCREMENT_SCORE':
      return state + 1
  default:
    return state;
  }
}

export default score;
