import { MAKE_GUESS, RESTART_GAME } from './actions';

const initialState = {
  guesses: [],
  feedback: 'Make your guess!',
  auralStatus: "",
  correctAnswer: Math.floor(Math.random() * 100) + 1
}

export default reducers = (state = initialState, action) => {
  switch(action.type) {
    case 'MAKE_GUESS':
      const guess = parseInt(action.guess, 10);

      let feedback;

      if (isNaN(guess)) {
        const feedback = 'Please enter a valid number';
        return Object.assign({}, state, {
          feedback: feedback,
          guesses: [...state.guesses, guess]
        });
      };

      const difference = Math.abs(guess - state.correctAnswer);

      if (difference >= 50) {
        feedback = 'You\'re Ice Cold...';
      } else if (difference >= 30) {
        feedback = 'You\'re Cold...';
      } else if (difference >= 10) {
        feedback = 'You\'re Warm.';
      } else if (difference >= 1) {
        feedback = 'You\'re Hot!';
      } else {
        feedback = 'You got it!';
      }

      return Object.assign({}, state, {
        feedback: feedback,
        guesses: [...state.guesses, guess]
      });      
      break;
    case 'RESTART_GAME':
      return Object.assign({}, state, {
        guesses: [],
        feedback: 'Make your guess!',
        auralStatus: "",
        correctAnswer: action.correctAnswer
      })
      break;
    default:
      return state;
  }
}
