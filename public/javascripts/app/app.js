
var db = {};
db.game = {};
db.game.numSelected = 0;
db.game.tile1 = {};
db.game.tile2 = {};


$(document).ready(initialize);

function initialize(){
  $(document).foundation();
  $('#newGame').on('click', clickNewGame);
  $('#gameDisplay').on('click','.tile',clickTile);//add class of clicked flip it,
}


function clickNewGame(){
  $('#newGame').off('click');
  var player = $('input[name="player"]').val();
  var numOfTiles = parseInt($('input[name="numOfTiles"]').val());
  var squares = _.range(1,numOfTiles+1);
  console.log(squares);
  db.game.squaresRemaining = squares;
  squares = squares.concat(squares);
  db.game.squares = _.shuffle(squares);
  console.log(db.game.squares);
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
  if(db.game.numSelected < 2 && $(this).hasClass('tile')  && !$(this).hasClass('selected')  && !$(this).hasClass('completed')){
    var position = $(this).data('position');
    var tileValue = db.game.squares[position-1];
    if(db.game.numSelected === 1 && (position !== db.game.tile1.position)){
      db.game.numSelected++;
      $(this).addClass('selected').text(tileValue);
      db.game.tile2.value = tileValue;
      db.game.tile2.position = position;
      if(db.game.tile1.value === db.game.tile2.value){
        $('.selected').addClass('completed');
        $('.selected').removeClass('selected');
        console.log(db.game.squares[db.game.tile1.position-1]);
        db.game.tempSquares = db.game.squaresRemaining;
        _.pull(db.game.squaresRemaining,  db.game.squares[db.game.tile1.position-1]);
        clearBothTiles();
        db.game.numSelected = 0;
        console.log(db.game.remainingSquares);
        checkForCompletion();
      }else{
        var timer = setTimeout(function(){
          $('.selected').text('');
          $('.selected').removeClass('selected');
          clearBothTiles();
          db.game.numSelected = 0;
        }, 1500);
      }
    }else{
      $(this).addClass('selected').text(tileValue);
      db.game.tile1.value = tileValue;
      db.game.tile1.position = position;
      db.game.numSelected++;
    }
  }
}

function clearBothTiles(){
  db.game.tile1.value = null;
  db.game.tile1.position = null;
  db.game.tile2.value = null;
  db.game.tile2.position = null;
}



function checkForCompletion(){
  if($('.completed').length === db.game.squares.length-2){
    $('.tile:not(.completed)').text(db.game.squaresRemaining[0]).addClass('completed');
    alert('FINISHED!');
  }
}