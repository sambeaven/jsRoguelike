requirejs.config({
  paths: {
    jquery: '../bower_components/jquery/dist/jquery.min'
  }
});

requirejs(['jquery', 'io', 'map', 'agents'],
  function($, io, map, agents){
    var TILE_SIZE = 20;

    var game = document.getElementById("game");
    console.log(game);
    var context = game.getContext("2d");

    var player = agents.player;

    var render = function(){
      context.font="20px Courier";
      for (var x = 1; x <= map.mapWidth; x++){
        for (var y = 1; y <= map.mapHeight; y++){
          var print = map.getTile(x, y);
          if (x === player.x && y === player.y) {
            print = '@';
          };
          context.fillText(print, x * TILE_SIZE, y * TILE_SIZE);
        }
      }
      
    };

    render();

    window.onkeyup = function(e){
      var evt = e ? e:event;
      var keyCode = evt.keyCode;
      //left
      if (keyCode === 37 && map.isCellPassable(player.x-1, player.y)){
        player = agents.moveAgent(player, "west");
      };
      //down
      if(keyCode === 38 && map.isCellPassable(player.x, player.y-1)){
        player = agents.moveAgent(player, "south");
      };
      //right
      if(keyCode === 39 && map.isCellPassable(player.x+1, player.y)){
        player = agents.moveAgent(player, "east");
      };
      //up
      if (keyCode === 40 && map.isCellPassable(player.x, player.y+1)){
        player = agents.moveAgent(player, "north");
      };
      //S: Save
      if (keyCode === 83) {
        io.save(map, agents);
      };
      //L: Load
      if (keyCode === 76) {
        io.load(player);
      };

      context.clearRect(0, 0, game.width, game.height);
      render();
    };
  }
  );