(function() {
  var columns = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']
  var rows = ['1', '2', '3', '4', '5', '6', '7', '8'];
  var currentPlayer = 't1';
  var possibleMoves = [];

  function addHighlight(div) {
    div.toggleClass('highlight');
  }

  function clearBackgrounds(div) {
    div.removeClass('highlight').removeClass('couldmove');
  }

  function takeTurn(player) {
    $("div.space").on('click', 'div', function() {

// IF A PIECE IS ALREADY SELECTED, UNHIGHLIGHT AND REMOVE ALL POSSIBLE MOVES

// TODO: REMOVE LISTENERS THAT ENABLE MOVES

      if ($(this).parent().hasClass('highlight')) {
        possibleMoves = [];
        clearBackgrounds($('div'));

      } else {

        var rowIndex, columnIndex;
        var pieceDiv = $(this);
        var position = $(this).parent().attr('id'); 
        var pieceClass = $(this).attr('class').split(' '); 
        var pieceTeam = pieceClass[0];
        var pieceType = pieceClass[1];
        var coordinates = position.split('');


// GET PIECE POSITION
        for (var i = 0; i < rows.length; i++) {
          if (rows[i] === coordinates[1]) {
            rowIndex = i;
          }
        }

        for (var j = 0; j<columns.length; j++) {
          if (columns[j] === coordinates[0]) {
            columnIndex = j;
          }
        }

// HIGHLIGHT THE PIECE BEING SELECTED TO MOVE

        if (pieceTeam === player) {
          addHighlight($(this).parent());

// GET POSSIBLE MOVES!!!
          switch (pieceType) {
            case 'pawn':
          // CAN MOVE FORWARD ONE SPACE, TWO IF IN THE STARTING POSITION
              possibleMoves = [];
              if (pieceTeam === 't1') {
                possibleMoves.push(coordinates[0] + rows[rowIndex + 1]);
          // if in starting position, can move down two spaces
                if (coordinates[1] === '2' ) {
                  possibleMoves.push(coordinates[0] + '4');
                }            
              } else {
                possibleMoves.push(coordinates[0] + rows[rowIndex - 1]);
          // if in starting position, can move down two spaces
                if (coordinates[1] === '7' ) {
                  possibleMoves.push(coordinates[0] + '5');
                }            
              }

          // IF ENEMY IS DIAGONALLY AHEAD OF PIECE, ADD SPACE TO POSSIBLE MOVES

          // EN PASSANT MOVE

              break;

          case 'knight':
        // CAN MOVE TWO SPACES IN ONE DIRECTION, ONE IN THE OTHER
            possibleMoves = [];
            possibleMoves.push(columns[columnIndex + 2] + rows[rowIndex + 1]);
            possibleMoves.push(columns[columnIndex - 2] + rows[rowIndex + 1]);
            possibleMoves.push(columns[columnIndex + 2] + rows[rowIndex - 1]);
            possibleMoves.push(columns[columnIndex - 2] + rows[rowIndex - 1]);
            possibleMoves.push(columns[columnIndex + 1] + rows[rowIndex + 2]);
            possibleMoves.push(columns[columnIndex - 1] + rows[rowIndex + 2]);
            possibleMoves.push(columns[columnIndex + 1] + rows[rowIndex - 2]);
            possibleMoves.push(columns[columnIndex - 1] + rows[rowIndex - 2]);
            break;

          case 'castle':
        // CAN MOVE UNLIMITED SPACES IN THE SAME COLUMN OR IN THE SAME ROW  
            possibleMoves = [];
            possibleMoves.push(columns[columnIndex] + rows[0]);
            possibleMoves.push(columns[columnIndex] + rows[1]);
            possibleMoves.push(columns[columnIndex] + rows[2]);
            possibleMoves.push(columns[columnIndex] + rows[3]);
            possibleMoves.push(columns[columnIndex] + rows[4]);
            possibleMoves.push(columns[columnIndex] + rows[5]);
            possibleMoves.push(columns[columnIndex] + rows[6]);
            possibleMoves.push(columns[columnIndex] + rows[7]);
            possibleMoves.push(columns[0] + rows[rowIndex]);
            possibleMoves.push(columns[1] + rows[rowIndex]);
            possibleMoves.push(columns[2] + rows[rowIndex]);
            possibleMoves.push(columns[3] + rows[rowIndex]);
            possibleMoves.push(columns[4] + rows[rowIndex]);
            possibleMoves.push(columns[5] + rows[rowIndex]);
            possibleMoves.push(columns[6] + rows[rowIndex]);
            possibleMoves.push(columns[7] + rows[rowIndex]);
            break;

          case 'bishop':
        // CAN MOVE UNLIMITED SPACES DIAGONALLY. +/+, +/-, -/-, -/+ EACH INDEX
            possibleMoves.push(columns[columnIndex-columnIndex] + rows[rowIndex-columnIndex]);
            possibleMoves.push(columns[columnIndex-columnIndex + 1] + rows[rowIndex-columnIndex + 1]);
            possibleMoves.push(columns[columnIndex-columnIndex + 2] + rows[rowIndex-columnIndex + 2]);
            possibleMoves.push(columns[columnIndex-columnIndex + 3] + rows[rowIndex-columnIndex + 3]);
            possibleMoves.push(columns[columnIndex-columnIndex + 4] + rows[rowIndex-columnIndex + 4]);
            possibleMoves.push(columns[columnIndex-columnIndex + 5] + rows[rowIndex-columnIndex + 5]);
            possibleMoves.push(columns[columnIndex-columnIndex + 6] + rows[rowIndex-columnIndex + 6]);
            possibleMoves.push(columns[columnIndex-columnIndex + 7] + rows[rowIndex-columnIndex + 7]);
            possibleMoves.push(columns[columnIndex-columnIndex] + rows[rowIndex + columnIndex])
            possibleMoves.push(columns[columnIndex-columnIndex + 1] + rows[rowIndex + columnIndex - 1]);
            possibleMoves.push(columns[columnIndex-columnIndex + 2] + rows[rowIndex + columnIndex - 2]);
            possibleMoves.push(columns[columnIndex-columnIndex + 3] + rows[rowIndex + columnIndex - 3]);
            possibleMoves.push(columns[columnIndex-columnIndex + 4] + rows[rowIndex + columnIndex - 4]);
            possibleMoves.push(columns[columnIndex-columnIndex + 5] + rows[rowIndex + columnIndex - 5]);
            possibleMoves.push(columns[columnIndex-columnIndex + 6] + rows[rowIndex + columnIndex - 6]);
            possibleMoves.push(columns[columnIndex-columnIndex + 7] + rows[rowIndex + columnIndex - 7]);
            break;

          case 'queen':
        // CAN MOVE A COMBINATION OF CASTLE AND BISHOP MOVEMENT
            possibleMoves.push(columns[columnIndex] + rows[0]);
            possibleMoves.push(columns[columnIndex] + rows[1]);
            possibleMoves.push(columns[columnIndex] + rows[2]);
            possibleMoves.push(columns[columnIndex] + rows[3]);
            possibleMoves.push(columns[columnIndex] + rows[4]);
            possibleMoves.push(columns[columnIndex] + rows[5]);
            possibleMoves.push(columns[columnIndex] + rows[6]);
            possibleMoves.push(columns[columnIndex] + rows[7]);
            possibleMoves.push(columns[0] + rows[rowIndex]);
            possibleMoves.push(columns[1] + rows[rowIndex]);
            possibleMoves.push(columns[2] + rows[rowIndex]);
            possibleMoves.push(columns[3] + rows[rowIndex]);
            possibleMoves.push(columns[4] + rows[rowIndex]);
            possibleMoves.push(columns[5] + rows[rowIndex]);
            possibleMoves.push(columns[6] + rows[rowIndex]);
            possibleMoves.push(columns[7] + rows[rowIndex]);
            possibleMoves.push(columns[columnIndex-columnIndex] + rows[rowIndex-columnIndex]);
            possibleMoves.push(columns[columnIndex-columnIndex + 1] + rows[rowIndex-columnIndex + 1]);
            possibleMoves.push(columns[columnIndex-columnIndex + 2] + rows[rowIndex-columnIndex + 2]);
            possibleMoves.push(columns[columnIndex-columnIndex + 3] + rows[rowIndex-columnIndex + 3]);
            possibleMoves.push(columns[columnIndex-columnIndex + 4] + rows[rowIndex-columnIndex + 4]);
            possibleMoves.push(columns[columnIndex-columnIndex + 5] + rows[rowIndex-columnIndex + 5]);
            possibleMoves.push(columns[columnIndex-columnIndex + 6] + rows[rowIndex-columnIndex + 6]);
            possibleMoves.push(columns[columnIndex-columnIndex + 7] + rows[rowIndex-columnIndex + 7]);
            possibleMoves.push(columns[columnIndex-columnIndex] + rows[rowIndex + columnIndex])
            possibleMoves.push(columns[columnIndex-columnIndex + 1] + rows[rowIndex + columnIndex - 1]);
            possibleMoves.push(columns[columnIndex-columnIndex + 2] + rows[rowIndex + columnIndex - 2]);
            possibleMoves.push(columns[columnIndex-columnIndex + 3] + rows[rowIndex + columnIndex - 3]);
            possibleMoves.push(columns[columnIndex-columnIndex + 4] + rows[rowIndex + columnIndex - 4]);
            possibleMoves.push(columns[columnIndex-columnIndex + 5] + rows[rowIndex + columnIndex - 5]);
            possibleMoves.push(columns[columnIndex-columnIndex + 6] + rows[rowIndex + columnIndex - 6]);
            possibleMoves.push(columns[columnIndex-columnIndex + 7] + rows[rowIndex + columnIndex - 7]);
            break;

          case 'king':
        // CAN MOVE ONE SPACE EVERY DIRECTION
            possibleMoves.push(columns[columnIndex] + rows[rowIndex + 1]);
            possibleMoves.push(columns[columnIndex] + rows[rowIndex - 1]);
            possibleMoves.push(columns[columnIndex + 1] + rows[rowIndex + 1]);
            possibleMoves.push(columns[columnIndex + 1] + rows[rowIndex - 1]);
            possibleMoves.push(columns[columnIndex - 1] + rows[rowIndex + 1]);
            possibleMoves.push(columns[columnIndex - 1] + rows[rowIndex - 1]);
            possibleMoves.push(columns[columnIndex + 1] + rows[rowIndex]);
            possibleMoves.push(columns[columnIndex - 1] + rows[rowIndex]);

        // TODO: CASTLING

            break;
        // END SWITCH!
          }

          // FILTER POSSIBLE MOVES. IF A FRIENDLY PIECE OCCUPIES, REMOVE POSSIBLE MOVE
          // IF A PIECE IS IN THE WAY OF A POSSIBLE MOVE && THE PIECE ISNT A KNIGHT, REMOVE POSSIBLE MOVE

          possibleMoves.forEach(function(pair) {

          // ADD LISTENER TO POSSIBLE MOVES
            $('#'+pair+':empty').addClass('couldmove').on('click', function() {
          
          // MOVE IF CLICKED, THEN REMOVE ALL LISTENERS
              $(this).html(pieceDiv);

              // TODO: IF PIECE IS KILLED, PUT IT IN THE GRAVEYARD OF THAT PLAYER

              // TODO: REMOVE ALL LISTENERS AFTER MOVE
              
              // CLEAR HIGHLIGHTS AFTER MOVE

              clearBackgrounds($('div'));
          

              // CHANGE PLAYER
              if (currentPlayer === 't1') {
                currentPlayer = 't2';
              } else {
                currentPlayer = 't1';
              }

            });
          });
        }
      }

// TURN ENDS AFTER A MOVE. PLAYER IS CHANGED. LISTENERS ARE REMOVED.

    });
  }


// IF A PIECE GETS CLICKED OFF, REMOVE THE LISTENERS.
// IF SOMETHING MOVES, REMOVE THE LISTENERS. 
// IF KILL A PIECE, PUT THAT PIECE IN graveyard
// IF YOU KILLED THE OPPONENTS KING, END THE GAME, CURRENT PLAYER WINS.
// END THE TURN.
// REMOVE ALL LISTENERS
// CHANGE THE PLAYER.
// PLAY NEXT TURN.

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

takeTurn(currentPlayer);






})();
