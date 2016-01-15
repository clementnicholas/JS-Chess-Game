(function() {
  var rows = ['1', '2', '3', '4', '5', '6', '7', '8'];
  var columns = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']
  $("div.space").on('click', function() {

    if (!$(this).html()) {
      return false;
    }

    $('div').removeClass("highlight").removeClass("couldmove");
    $(this).addClass("highlight");
    pieceDiv = $(this).children('div');
    
    var position, pieceType, team;

    var possibleMoves = [];
    if ( $(this).children ) {
      position = $(this).attr('id');
    }

    var classOfPiece = $(this).children('div').attr('class').split(' ');
    team = classOfPiece[0];
    pieceType = classOfPiece[1];

    console.log('team: ' + team + ', piece: ' + pieceType + ', position: ' + position);

    var coordinates = position.split('');
    
    switch (pieceType) {
      case 'pawn':
        // if team1, move down a space
        if (team === 't1') {
          for (var i = 0; i < rows.length; i++) {
            if (rows[i] === coordinates[1]) {
              possibleMoves.push(coordinates[0] + rows[i+1]);

        // if in starting position, can move down two spaces
              if (coordinates[1] === '2' ) {
                possibleMoves.push(coordinates[0] + rows[i+2]);
              }            
            }
          }
        } else {
        // if team2, move up a space 
          for (var i = 0; i < rows.length; i++) {
            if (rows[i] === coordinates[1]) {
              possibleMoves.push(coordinates[0] + rows[i-1]);

        // if in starting position, can move two spaces
              if (coordinates[1] === '7') {
                possibleMoves.push(coordinates[0] + rows[i-2]);
              }
            }
          }
        }
        console.log(active);
        possibleMoves.forEach(function(position) {
          $('#' + position).addClass('couldmove');
        });

        $('.couldmove').on('click', function() {
          $(this).html(pieceDiv);
        });
        break;
      case 'knight':
        console.log('knight clicked');
        break;
      case 'castle':
        console.log('castle clicked');
        break;
      case 'bishop':
        console.log('bishop clicked');
        break;
      case 'king':
        console.log('king clicked');
        break;
      case 'queen':
        console.log('queen clicked');
        break;
    }

    if (pieceType === 'knight') {
      

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
      console.log(coordinates);
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
