<!DOCTYPE html>
<html lang="en">
	<head>
		
		<meta charset="UTF-8">
		<title>Document</title>
	</head>
	<body>
		<div id="div1"><h2>Let jQuery AJAX Change This Text</h2></div>
		<button>Get External Content</button>
			
		
	</body>
	<script src="js/jquery.min.js"></script>
	<script>
	$(document).ready(function(){
	$("button").click(function(){
	$("#div1").load("index.html", function(responseTxt, statusTxt, xhr){
	if(statusTxt == "success")
	alert("External content loaded successfully!");
	if(statusTxt == "error")
	alert("Error: " + xhr.status + ": " + xhr.statusText);
	});
	});
	});
	</script>
	
</html>