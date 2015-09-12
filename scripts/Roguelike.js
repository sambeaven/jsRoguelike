requirejs.config({
  paths: {
    jquery: '../bower_components/jquery/dist/jquery.min'
  }

});

requirejs(['jquery', 'map'],
  function($, map){

    var player = {
      x: 3,
      y: 3
    };

    var TILE_SIZE = 20;

    var game = document.getElementById("game");
    console.log(game);
    var context = game.getContext("2d");

    var render = function(){
      context.font="20px Courier";
      for (x = 1; x <= map.mapSize; x++){
        for (y = 1; y <= map.mapSize; y++){
          var print = map.getTile(x, y, player);
          context.fillText(print, x * TILE_SIZE, y * TILE_SIZE);
        }
      }
      $('#info').text(JSON.stringify(map.toJson(player)));
    };

    render();

    window.onkeyup = function(e){
      var evt = e ? e:event;
      var keyCode = evt.keyCode;
      //left
      if (keyCode === 37 && map.isCellPassable(player.x-1, player.y)){
        player.x = player.x - 1;
      }
      //down
      if(keyCode === 38 && map.isCellPassable(player.x, player.y-1)){
        player.y = player.y - 1;
      }
      //right
      if(keyCode === 39 && map.isCellPassable(player.x+1, player.y)){
        player.x = player.x + 1;
      }
      //up
      if (keyCode === 40 && map.isCellPassable(player.x, player.y+1)){
        player.y = player.y + 1;
      }
      context.clearRect(0, 0, game.width, game.height);
      render();
    };
  }
);