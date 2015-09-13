define(function(){
  var MAP_HEIGHT = 20;
  var MAP_WIDTH = 35

  function getTile(x, y, player, tileSize){ 
    if (player && player.x === x && player.y === y){
      return '@';
    }
    else if (x === MAP_WIDTH || y === MAP_HEIGHT || x === 1 || y === 1){
      return '#';
    }
    else{
      return '.';
    }
  }
  
  function isCellPassable(x, y){
    if (getTile(x, y) === '#') {
      return false;
    };
    return true;
  }

  function toJson(player){
    var Json = {map:{}};
    var mapId = 0;
    for (x = 1; x <= MAP_SIZE; x++){
        for (y = 1; y <= MAP_SIZE; y++){
          var print = getTile(x, y, player);
          Json.map[mapId] = {x: x, y: y, tile: print};
          mapId++;
        }
      }
      return Json;
  }

  return {
    getTile: getTile,
    mapHeight: MAP_HEIGHT,
    mapWidth: MAP_WIDTH,
    isCellPassable: isCellPassable,
    toJson: toJson
  }

});
