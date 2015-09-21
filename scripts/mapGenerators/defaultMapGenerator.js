define(function(){

	var MAX_ROOM_DIMENSION = 5;

	function generateMap(mapHeight, mapWidth){

		// Fill the whole map with solid earth
		map = [];

	    var mapId = 0;
	    for (var x = 1; x <= mapWidth; x++){
	      	for (var y = 1; y <= mapHeight; y++){
				map[mapId] = {x: x, y: y, tile: '#'};
				mapId++;
			}
		}

		// Dig out a single room in the centre of the map
		var roomWidth = Math.floor(Math.random() * MAX_ROOM_DIMENSION) + 1;
		var roomHeight = Math.floor(Math.random() * MAX_ROOM_DIMENSION) + 1;

		for (var x = 1; x <= mapWidth; x++){
	      	for (var y = 1; y <= mapHeight; y++){
				//Get the map cell
				//if it's within the room range, make the tiles into '.'s.


				
			}
		}		

		// Pick a wall of any room
		// Decide upon a new feature to build
		// See if there is room to add the new feature through the chosen wall
		// If yes, continue. If no, go back to step 3
		// Add the feature through the chosen wall
		// Go back to step 3, until the dungeon is complete
		// Add the up and down staircases at random points in map
		// Finally, sprinkle some monsters and items liberally over dungeon

		return map;

	}

	return {
		generateMap: generateMap
	}
})