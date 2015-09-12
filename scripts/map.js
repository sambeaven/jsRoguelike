define(function(){
  var MAP_SIZE = 10;

  function getTile(x, y, player, tileSize){ 
    if (player.x === x && player.y === y){
      return '@';
    }
    else if (x === MAP_SIZE || y === MAP_SIZE || x === 1 || y === 1){
      return '#';
    }
    else{
      return '.';
    }
  }

  return {
    getTile: getTile,
    mapSize: MAP_SIZE,
  }

});
