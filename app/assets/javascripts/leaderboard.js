
$('#leaderboard_link').on("click", setLeaderboard);		

function setLeaderboard(){
	var url = "/leaderboards.json";
		

	$.ajax({
		type: "GET",
		url: url,
		dataType: "json",
		success: function(response){
			for (i=0; i<10; i++){
				leaders << response[1];
			}
			$('#leader-two').text(response[1].name + ': ' + response[1].wins)
			$('#leader-three').text(response[2].name + ': ' + response[2].wins)
			$('#leader-four').text(response[3].name + ': ' + response[3].wins)
			$('#leader-five').text(response[4].name + ': ' + response[4].wins)
			$('#leader-six').text(response[5].name + ': ' + response[5].wins)
			$('#leader-seven').text(response[6].name + ': ' + response[6].wins)
			$('#leader-eight').text(response[7].name + ': ' + response[7].wins)
			$('#leader-nine').text(response[8].name + ': ' + response[8].wins)
			$('#leader-ten').text(response[9].name + ': ' + response[9].wins)
		}, 
		error: function(){
			alert('Broken');
		}
	});
	$('#leaderboard').toggle('slow')
}

$('#your_stats').on("click", setStatus);

$('#your_stats').on("click", function(){
	$('#stats').toggle('slow')
});

			

function setStatus(){
	var url_stats = "/users.json";
	
	$.ajax({
		type: "GET",
		url: url_stats,
		dataType: "json",
		success: function(response){
		$('#stats-name').text('Name: ' + response.name),
		$('#stats-wins').text('Wins: ' + response.wins),
		$('#stats-losses').text('Losses: ' + response.losses),
		$('#stats-ties').text('Ties: ' + response.ties)
	},
		error: function(){
			alert('Broken');
		}
	});
}








