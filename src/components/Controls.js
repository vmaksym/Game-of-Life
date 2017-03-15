import React, { Component } from 'react';
import { startNewGame, updateBoard } from '../actions'
import { connect } from 'react-redux';

class Controls extends Component {


    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const { startNewGame } = this.props;
        let x = this.refs.X.value;
        let y = this.refs.Y.value;
        startNewGame(x, y)
    }

    render() {
        const { updateBoard } = this.props;
        return (
            <div>
                <form name="bordForm" onSubmit={ this.handleSubmit }>
                    <input placeholder="X" ref="X" />
                    <input placeholder="Y" ref="Y" />
                    <button>Set up up board</button>
                </form>
                <button onClick={() => { this.timer = setInterval(updateBoard, 500)}}>Start</button>
                <button onClick={() => clearInterval(this.timer)}>Stop</button>
            </div>
        );
    }
};

Controls = connect(
    null,
    { startNewGame, updateBoard }
)(Controls);

export default Controls