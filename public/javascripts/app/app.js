$(document).ready(initialize);

function initialize(){
  $(document).foundation();
  $('#newGame').on('click', clickNewGame);
}


function clickNewGame(){
  var player = $('input[name="player"]').val();
  var numOfTiles = parseInt($('input[name="numOfTiles"]').val());
  var squares = _.range(numOfTiles);
  squares = squares.concat(squares);
  squares = _.shuffle(squares);
  console.log(player,numOfTiles,squares);
  $('#gameDisplay').show();
}