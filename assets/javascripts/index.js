







$('document').ready(function(){
	$button = $('#js_find_button');
	$input = $('#js_find_input');

	$foundChampion = $('#js_found_champion');
	$championName = $('#js_name');
	$championDcp = $('#js_dcp');

	$button.on('click',function() {
  	$.ajax({
		  url: "https://raw.githubusercontent.com/ngryman/lol-champions/master/champions.json",
		  method: "GET",
		  context: document.body
		}).then(function(data) {
			JSON.parse(data).forEach(function(champion){
				// console.log(champion);
				
				if(champion.name == $input.val()){
					alert("I've found " + champion.name + "!");
					$foundChampion.removeClass('is-hidden');
					$championName.text(champion.name);
					$championDcp.text(champion.description);
				}
			});
		  // console.log("Primeiro");
		}).catch(function(error){
			console.log(error);
			alert("Esse lnk não existe");
		});
		  // console.log("Segundo");
	});

});







