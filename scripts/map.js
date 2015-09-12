define(function(){
  var MAP_SIZE = 10;

  function getTile(x, y, player, tileSize){ 
    if (player && player.x === x && player.y === y){
      return '@';
    }
    else if (x === MAP_SIZE || y === MAP_SIZE || x === 1 || y === 1){
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
    mapSize: MAP_SIZE,
    isCellPassable: isCellPassable,
    toJson: toJson
  }

});
