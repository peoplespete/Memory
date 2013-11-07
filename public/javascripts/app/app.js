$(document).ready(initialize);

function initialize(){
  $(document).foundation();
  $('#newGame').on('click', clickNewGame);
  $('#gameDisplay').on('click','.tile',clickTile);//add class of clicked flip it,
}


function clickNewGame(){
  var player = $('input[name="player"]').val();
  var numOfTiles = parseInt($('input[name="numOfTiles"]').val());
  var squares = _.range(numOfTiles);
  squares = squares.concat(squares);
  squares = _.shuffle(squares);
  console.log(player,numOfTiles,squares);
  $('#gameHeader').text('Good Luck, ' + player);
  $('#gameForm').fadeOut('slow');
  $('#gameDisplay').show();
  for(var i = 0; i<squares.length;i++){
    var $tile = $('<div>')
    $tile.attr('data-position', i);
    $tile.addClass('tile');
    $('#gameDisplay').append($tile);
  }

}


function clickTile(){

}