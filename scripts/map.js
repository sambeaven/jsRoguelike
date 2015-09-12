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


  return {
    getTile: getTile,
    mapSize: MAP_SIZE,
    isCellPassable: isCellPassable
  }

});
