function setRandomHashTag(){
	var url = "/computer.json";
	console.log(url);
	
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
			alert('Broken');
		}
	});
}

function renderHashTag(hashTag) {
	$("#hash1").append(hashTag.tag);
	$("#hash2").append(hashTag.tag);
}

setRandomHashTag();