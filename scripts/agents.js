define(function(){
    var player = {
      x: 3,
      y: 3
    };

    function toJson(){
    	return player;
    }

    return {
    	player: player,
    	toJson: toJson
    }

});