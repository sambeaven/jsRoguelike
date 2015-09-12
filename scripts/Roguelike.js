requirejs.config({
  paths: {
    jquery: '../bower_components/jquery/dist/jquery.min',
    store: '../bower_components/store/store.min'
  }


});

requirejs(['jquery', 'store', 'map', 'agents'],
  function($, store, map, agents){
    var TILE_SIZE = 20;

    var game = document.getElementById("game");
    console.log(game);
    var context = game.getContext("2d");

    var player = agents.player;

    var render = function(){
      context.font="20px Courier";
      for (x = 1; x <= map.mapSize; x++){
        for (y = 1; y <= map.mapSize; y++){
          var print = map.getTile(x, y, player);
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
        player.x = player.x - 1;
      };
      //down
      if(keyCode === 38 && map.isCellPassable(player.x, player.y-1)){
        player.y = player.y - 1;
      };
      //right
      if(keyCode === 39 && map.isCellPassable(player.x+1, player.y)){
        player.x = player.x + 1;
      };
      //up
      if (keyCode === 40 && map.isCellPassable(player.x, player.y+1)){
        player.y = player.y + 1;
      };
      //S: Save
      if (keyCode === 83) {
        var saveObject = {};
        saveObject.map = map.toJson(player);
        saveObject.player = agents.toJson();

        store.set('SamsRogueGame', saveObject);
      };
      //L: Load
      if (keyCode === 76) {
        var saveObject = store.get('SamsRogueGame');
        if (saveObject){
          player.x = saveObject.player.x;
          player.y = saveObject.player.y;
          render();
        }
      };

      context.clearRect(0, 0, game.width, game.height);
      render();
    };
  }
);