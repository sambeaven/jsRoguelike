$(function(){

  var player = {
    x: 60,
    y: 60
  };

  var TILE_SIZE = 20;
  var GAME_SIZE = 10;

  var game = document.getElementById("game");
  console.log(game);
  var context = game.getContext("2d");

  var getTile = function(x, y){
        if (player.x === x*TILE_SIZE && player.y === y*TILE_SIZE){
          return '@';
        }
        else if (x === GAME_SIZE || y === GAME_SIZE || x === 1 || y === 1){
          return '#';
        }
        else{
          return '.';
        }
  };


  var render = function(){

    context.font="20px Courier";
    for (x = 1; x <= GAME_SIZE; x++){
      for (y = 1; y <= GAME_SIZE; y++){
        var print = getTile(x, y);
        context.fillText(print, x * TILE_SIZE, y * TILE_SIZE);
      }
    }
  };

  render();

  window.onkeyup = function(e){
    var evt = e ? e:event;
    var keyCode = evt.keyCode;
    if (keyCode === 37){
      player.x = player.x - TILE_SIZE;
    }
    if(keyCode === 38){
      player.y = player.y - TILE_SIZE;
    }
    if(keyCode === 39){
      player.x = player.x + TILE_SIZE;
    }
    if (keyCode === 40){
      player.y = player.y + TILE_SIZE;
    }
    context.clearRect(0, 0, game.width, game.height);
    render();
  };



});