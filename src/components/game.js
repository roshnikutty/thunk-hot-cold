import React from 'react';
import Header from './header';
import GuessSection from './guess-section';
import GuessCount from './guess-count';
import GuessList from './guess-list';

import { connect } from 'react-redux';

export function Game(props) {

    return (
        <div>
            <Header />
            <GuessSection />
            <GuessCount />
            <GuessList />
        </div>
    );

}

const mapStateToProps = state => ({
    guesses: state.game,
    feedback: state.feedback,
    correctAnswer: state.correctAnswer,
    count: state.guesses.length
});

export default connect(mapStateToProps)(Game);