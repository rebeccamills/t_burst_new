
function setRandomHashTag(){
	var url = "/computer.json";
	$.ajax({
		type: "GET",
		url: url,
		dataType: "json",
		success: function(hashTag){
			$("#hash1").empty();
			$("#hash2").empty();
			renderHashTag(hashTag);
		}, 
		error: function(){
			console.log('Broken');
		}
	});
}

function renderHashTag(hashTag) {
	$("#hash1").append(hashTag.tag);
	$("#hash2").append(hashTag.tag);
}

setRandomHashTag();

$('#reset-button').click(function(){
	setRandomHashTag();
});