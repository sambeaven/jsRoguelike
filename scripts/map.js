define(function(){
  var MAP_SIZE = 10;

  function getTile(x, y, player, tileSize){ 
  //TODO: Slightly uncomfortable with tileSize being here.
  //Player and map shouldn't have a concept of it. player.x/y should be just tile steps.
    if (player.x === x*tileSize && player.y === y*tileSize){
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
