let x = 10, y = 10;

let newBoard = (x, y) => {
    let initState = [];
    for (let i = 0; i < x; i++) {
        let initStateRow = [];
        for (let i = 0; i < y; i++) {
            initStateRow.push(0);
        }
        initState.push(initStateRow);
    }
    return initState
};

let updateGrid = (state) => { //perform one iteration of grid update
    const gridHeight = state.length;
    const gridWidth = state[0].length;
    let newState = newBoard(gridHeight, gridWidth);

    for (var j = 1; j < gridHeight - 1; j++) { //iterate through rows
        for (var k = 1; k < gridWidth - 1; k++) { //iterate through columns
            var totalCells = 0;
            //add up the total values for the surrounding cells
            totalCells += state[j - 1][k - 1]; //top left
            totalCells += state[j - 1][k]; //top center
            totalCells += state[j - 1][k + 1]; //top right

            totalCells += state[j][k - 1]; //middle left
            totalCells += state[j][k + 1]; //middle right

            totalCells += state[j + 1][k - 1]; //bottom left
            totalCells += state[j + 1][k]; //bottom center
            totalCells += state[j + 1][k + 1]; //bottom right


            //apply the rules to each cell
            if (state[j][k] === 0) {
                switch (totalCells) {
                    case 3:
                        newState[j][k] = 1; //if cell is dead and has 3 neighbours, switch it on
                        break;
                    default:
                        newState[j][k] = 0; //otherwise leave it dead
                }
            } else if (state[j][k] === 1) { //apply rules to living cell
                switch (totalCells) {
                    case 0:
                    case 1:
                        newState[j][k] = 0; //die of lonelines
                        break;
                    case 2:
                    case 3:
                        newState[j][k] = 1; //carry on living
                        break;
                    case 4:
                    case 5:
                    case 6:
                    case 7:
                    case 8:
                        newState[j][k] = 0; //die of overcrowding
                        break;
                    default:
                        newState[j][k] = 0; //

                }

            }
        }
    }

    // for (var j = 0; j < gridHeight; j++) { //iterate through rows
    //     for (var k = 0; k < gridWidth; k++) { //iterate through columns
    //         state[j][k] = newState[j][k];
    //     }
    // }

    return newState;
};

export const board = (state = [], action) => {
    switch (action.type) {
        case 'NEW_BOARD':
            return newBoard(action.x,action.y);
        case 'TOGGLE_CELL':
            return state.map((value, x) => value.map((value, y) => {
                if (x === action.x && y === action.y) {
                    return 1;
                }
                return value;
            }));
        case 'UPDATE_GRID':
            return updateGrid(state);
        default:
            return state;
    }
};

export default board