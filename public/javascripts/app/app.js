var db = {};
db.game = {};

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
  db.game.squares = _.shuffle(squares);
  console.log(player,numOfTiles,squares);
  $('#gameDisplay').show();
  for(var i = 0; i<db.game.squares.length;i++){
    var $tile = $('<div>')
    $tile.attr('data-position', i);
    $tile.addClass('tile');
    $('#gameDisplay').append($tile);
  }

}


function clickTile(){
  if(!db.game.tile2){
    var position = $(this).data('position');
    $(this).toggleClass('selected');
    var tileValue = db.game.squares[position];
    if(db.game.tile1){
      db.game.tile2 = tileValue;
      if(db.game.tile1 === db.game.tile2){
        $('.selected').addClass('completed');
      }else{
        // flip back over after a couple seconds
      }
      $('.selected').removeClass('selected');
      db.game.tile1 delete;
      db.game.tile2 delete;
    }else{
      db.game.tile1 = tileValue;
    }
  }
}