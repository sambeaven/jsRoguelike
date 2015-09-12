requirejs.config({
  paths: {
    jquery: '../bower_components/jquery/dist/jquery.min'
  }

});

requirejs(['jquery', 'map'],
function($, map){
  $(function(){

    var player = {
      x: 60,
      y: 60
    };

    var TILE_SIZE = 20;

    var game = document.getElementById("game");
    console.log(game);
    var context = game.getContext("2d");






    var render = function(){
      context.font="20px Courier";
      for (x = 1; x <= map.mapSize; x++){
        for (y = 1; y <= map.mapSize; y++){
          var print = map.getTile(x, y, player, TILE_SIZE);
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



  })
});