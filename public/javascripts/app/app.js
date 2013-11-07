$(document).ready(initialize);

function initialize(){
  $(document).foundation();
  $('#newGame').on('click', clickNewGame);
}


function clickNewGame(){
  var player = $('#player').val();
  var numOfTiles = $('#numOfTiles').val();
  var squares = _.range(10);
  squares = squares.concat(squares);
  squares = _.shuffle(squares);

  $('#gameDisplay').show();
}