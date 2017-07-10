export const SET_GUESSES = 'SET_GUESSES';
export const setGuesses = guess =>({
    type: SET_GUESSES,
    guess
});



export const SET_NEW_GAME = 'SET_NEW_GAME';
export const setNewGame = () => ({
   type: SET_NEW_GAME,
   correctAnswer: Math.round(Math.random() * 100) 
});

export const WHAT_CONTENT = 'WHAT_CONTENT';
export const whatContent = () => ({
    type: WHAT_CONTENT
});