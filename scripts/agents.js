define(function(){
    var player = {
      x: 3,
      y: 3,
      speed: 1
    };

    function toJson(){
    	return player;
    }

    function moveAgent(agent, direction){
        
        switch(direction.toLowerCase()){
            case "north":
                agent.y = agent.y + agent.speed;
                break;
            case "east":
                agent.x = agent.x + agent.speed;
                break;
            case "south":
                agent.y = agent.y - agent.speed;
                break;
            case "west":
                agent.x = agent.x - agent.speed
                break;

        }
        return agent;
    }

    return {
    	player: player,
    	toJson: toJson,
        moveAgent: moveAgent
    }
    

});