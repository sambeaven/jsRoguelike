define(["../bower_components/store/store.min"], function(store){
	function save(map, agents){
		var saveObject = {};
		saveObject.map = map.toJson(agents.player);
		saveObject.player = agents.toJson();

		store.set('SamsRogueGame', saveObject);
	}

	function load(player){
		var saveObject = store.get('SamsRogueGame');
		if (saveObject){
			player.x = saveObject.player.x;
			player.y = saveObject.player.y;
		}
	}

	return {
		save: save,
		load: load
	}
})
