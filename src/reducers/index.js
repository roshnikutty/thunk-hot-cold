import { SET_NEW_GAME, SET_GUESSES, WHAT_CONTENT } from '../actions';

const initialState = {
    guesses: [],
    feedback: 'Make your guess!',
    correctAnswer: Math.round(Math.random() * 100),
    showInfoModal: false
};

export const hotColdReducer = (state, action) => {
    state = state || initialState;
    if (action.type === SET_NEW_GAME) {
        state = Object.assign({
        }, initialState, {
            correctAnswer: action.correctAnswer
        });
        return state;
    }
    else if (action.type === SET_GUESSES) {
        const guess = parseInt(action.guess, 10);
        if (isNaN(guess)) {
            state = Object.assign({}, state, {
                feedback: 'Please enter a valid number'
            });

            return state;
        }
        const difference = Math.abs(guess - state.correctAnswer);
        let feedback;
        if (difference >= 50) {
            feedback = 'You\'re Ice Cold...';
        }
        else if (difference >= 30) {
            feedback = 'You\'re Cold...';
        }
        else if (difference >= 10) {
            feedback = 'You\'re Warm';
        }
        else if (difference >= 1) {
            feedback = 'You\'re Hot!';
        }
        else {
            feedback = 'You got it!';
        }

        state = Object.assign({}, state, {
            feedback,
            guesses: state.guesses.concat(action.guess)
        });

        return state;
    }
    else if (action.type === WHAT_CONTENT) {
         state = Object.assign({}, state, {
             showInfoModal: !state.showInfoModal
        });
        return state;
    }
    return state;
};
