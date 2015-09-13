define(function(){
  var MAP_HEIGHT = 20;
  var MAP_WIDTH = 35

  var map = [];

  function generateMap(){
    var mapId = 0;
    var tile = '';
    for (var x = 1; x <= MAP_WIDTH; x++){
        for (var y = 1; y <= MAP_HEIGHT; y++){
          if (x === MAP_WIDTH || y === MAP_HEIGHT || x === 1 || y === 1){
            tile = '#';
          }
          else{
            tile = '.';
          }
          map[mapId] = {x: x, y: y, tile: tile};
          mapId++;
        }
      }
  }

  function getTile(x, y){ 
    if (map.length === 0) {
      generateMap(); 
    };    
    
    return $.grep(map, function(tile){ return tile.x === x && tile.y === y})[0].tile;
  }
  
  function isCellPassable(x, y){
    if (getTile(x, y) === '#') {
      return false;
    };
    return true;
  }

  function toJson(){
    var Json = {map:{}};
    var mapId = 0;
    for (x = 1; x <= MAP_WIDTH; x++){
        for (y = 1; y <= MAP_HEIGHT; y++){
          var print = getTile(x, y);
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
