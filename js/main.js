(function() {
  var rows = ['1', '2', '3', '4', '5', '6', '7', '8'];
  var columns = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']
  
  function move(piece, destination) {

  }

  $("div.space").on('click', function() {
    $('div').removeClass("highlight");
    $(this).addClass("highlight");

    var possibleMoves = [];
    if ( $(this).children ) {
      console.log($(this.id));
    }

    var position = '1B';
    var piece = 'knight';

    if (piece === 'knight') {
      function move() {
        var coordinates = position.split('');
        console.log(coordinates);

        var rowIndex = function(arr) {
          for (var i = 0; i < rows.length; i++) {
            if (rows[i] === arr[0]) {
              return i;
            }
          }
          return false;          
        }

        var colIndex = function(arr) {
          for (var j = 0; j < columns.length; j++) {
            if (columns[j] === arr[1]) {
              return j;
            }
          }
        }

        console.log(rowIndex(coordinates));
        console.log(colIndex(coordinates));

        possibleMoves.push([rows[rowIndex(coordinates) + 2], columns[colIndex(coordinates) + 1]]);
        possibleMoves.push([rows[rowIndex(coordinates) + 2], columns[colIndex(coordinates) - 1]]);
        possibleMoves.push([rows[rowIndex(coordinates) - 2], columns[colIndex(coordinates) + 1]]);
        possibleMoves.push([rows[rowIndex(coordinates) - 2], columns[colIndex(coordinates) - 1]]);
        possibleMoves.push([rows[rowIndex(coordinates) - 1], columns[colIndex(coordinates) - 2]]);
        possibleMoves.push([rows[rowIndex(coordinates) - 1], columns[colIndex(coordinates) + 2]]);
        possibleMoves.push([rows[rowIndex(coordinates) + 1], columns[colIndex(coordinates) - 2]]);
        possibleMoves.push([rows[rowIndex(coordinates) + 1], columns[colIndex(coordinates) + 2]]);

        var pairs = possibleMoves.map(function(pair){
          if (pair[0] && pair[1]) {
            return pair[0] + pair[1];
          }
        });

        console.log(pairs);
      }

      move();
    }

  });


  // Set the possible movements for each kind of piece

    // Castle:
      // Can move to any square in same row:
      // Can move to any square in same column:

    // Knight:
      // Can move to any square that is two spaces in a row and 1 space in a column
      // Can move to any square that is one space in a row and 2 spaces in a column away

    // Bishop:
      // Can move to any diagonal square (absolute value of rows away and colums away are equivalent)

    // King:
      // Can move one square in any direction:
      // Enemy piece can't be able to attack that square:

    // Queen:
      // Can move any amount in a row
      // Can move any amount in same column
      // Can move like a Bishop

    // Pawn:
      // If in starting position, can move 1 or 2 spaces forward
      // Can move one space forward


  // Highlight the squares that each piece could move to:

    // If square is occupied by friendly piece, don't highlight:

    // If Any piece is in the way, don't highlight:


// ------------------
// GAMEPLAY:

// Nothing highlighted
// Click piece you want to move and it highlights
// Get possible moves of that piece and highlight them different color
  // Check for impedements
  // Check for possible kills
// Click where you want to move
// Move piece to that spot
// If killed something, put it in the graveyard
// Check to see if the game should end
  // if checkmate, end game
  // if stalemate, end game
// Switch turns








})();