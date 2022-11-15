// Sudoku
// Nini
// 10/28/2022
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let grid = [[-1, 5, -1, 9, -1, -1, -1, -1, -1],
[8, -1, -1, -1, 4, -1, 3, -1, 7],
[-1, -1, -1, 2, 8, -1, 1, 9, -1],
[5, 3, 8, 6, -1, 7, 9, 4, -1],
[-1, 2, -1, 3, -1, 1, -1, -1, -1],
[1, -1, 9, 8, -1, 4, 6, 2, 3],
[9, -1, 7, 4, -1, -1, -1, -1, -1],
[-1, 4, 5, -1, -1, -1, 2, -1, 9],
[-1, -1, -1, -1, 3, -1, -1, 7, -1]
];

function style() {
  return (
    <div className = "style">
      <div className = "style-header">
        <h3>Sudoku Solver</h3>
        <input className = "cellInput" />
      </div>
    </div>
  );
}

export default style;


