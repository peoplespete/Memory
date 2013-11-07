
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
  var squares = _.range(1,numOfTiles+1);
  console.log(squares);
  squares = squares.concat(squares);
  db.game.squares = _.shuffle(squares);
  console.log(player,numOfTiles,squares);
  $('#gameHeader').text('Good Luck, ' + player);
  $('#gameForm').fadeOut('slow');
  $('#gameDisplay').show();
  for(var i = 1; i<db.game.squares.length+1;i++){
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
    $(this).text(tileValue);
    if(db.game.tile1){
      db.game.tile2 = tileValue;
      if(db.game.tile1 === db.game.tile2){
        $('.selected').addClass('completed');
      }else{
        // flip back over after a couple seconds
      }
      $('.selected').removeClass('selected');
      db.game.tile1 = null;
      db.game.tile2 = null;
    }else{
      db.game.tile1 = tileValue;
    }
  }
}

