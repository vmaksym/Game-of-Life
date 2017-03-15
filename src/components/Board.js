import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions'

class Board extends Component {
    componentDidMount() {
    }

    getCellClass(value) {
        let modifier = value === 0 ? "new" : "init";
        return "cell " + modifier;
    }

    render() {
       const {board, toggleCell} = this.props;
        let value = '0';


        return (
            <div> {
                board.map((value, x) => (
                    <div className="row" key={x}>
                        {value.map((value, y) => (
                            <div key={y} className={this.getCellClass(value)} onClick={() => toggleCell(x,y)}></div>
                        ))}
                    </div>)
                )} </div>
        );
    }
}

const mapStateToProps = (state) => ({
    board: state.board
});

Board = connect(
    mapStateToProps,
    actions
)(Board);

export default Board
