
export const toggleCell = (x, y) => (dispatch) => {
    dispatch({
        type: 'TOGGLE_CELL',
        x,
        y
    });
};

export const startNewGame = (x, y) => ({
    type: 'NEW_BOARD',
    x,
    y
});

export const updateBoard = (x, y) => ({
    type: 'UPDATE_GRID'
});