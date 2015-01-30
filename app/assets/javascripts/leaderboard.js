
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
			// $('#leader-one').text('Name: ' + response[0].name + ' Wins: ' + response[0].wins)
			$('#leader-two').text('Name: ' + response[1].name + ' Wins: ' + response[1].wins)
			$('#leader-three').text('Name: ' + response[2].name + ' Wins: ' + response[2].wins)
			$('#leader-four').text('Name: ' + response[3].name + ' Wins: ' + response[3].wins)
			$('#leader-five').text('Name: ' + response[4].name + ' Wins: ' + response[4].wins)
			$('#leader-six').text('Name: ' + response[5].name + ' Wins: ' + response[5].wins)
			// $('#leader-seven').text('Name: ' + response[6].name + 'Wins: ' + response[6].wins),
			// $('#leader-eight').text('Name: ' + response[7].name + 'Wins: ' + response[7].wins),
			// $('#leader-nine').text('Name: ' + response[8].name + 'Wins: ' + response[8].wins),
			// $('#leader-ten').text('Name: ' + response[9].name + 'Wins: ' + response[9].wins)
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








