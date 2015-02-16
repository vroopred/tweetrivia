var timeI, checkI;
var timePerQuestion = 60;

$(document).ready(function() {
    //applicationOnlyAuth();
});

// following https://dev.twitter.com/oauth/application-only
function applicationOnlyAuth() {
	var consumerKey = "2jCvFchz3pa5CrVxTITm3DbJ0";
	var consumerSecret = "3wZizuZjWjwpGnACuxwJbyQNdL8KUTW2zwY8g9rQDyApW9ahGE";
	var encodedConsumerKey = encodeURI(consumerKey);
	var encodedConsumerSecret = encodeURI(consumerSecret);
	var bearerTokenCredentials = window.btoa(encodedConsumerKey + ":" + encodedConsumerSecret);
	alert("consumerKey=" + consumerKey + "\nencodedConsumerKey=" + encodedConsumerKey + "\nconsumerSecret=" + consumerSecret + "\nencodedConsumerSecret=" + encodedConsumerSecret + "\nbearerTokenCredentials=" + bearerTokenCredentials);
	$.ajax({
		type: "POST",
		url: "https://api.twitter.com/oauth2/token",
		headers: {
			"Authorization": "Basic " + bearerTokenCredentials, 
			"Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"},
		data: "content_type=client_credentials",
		success: function(data, textStatus, jqXHR) {
			alert("Authenticated client!");
		},
		error: function(jqXHR, textStatus, errorThrown) {
			alert("textStatus=" + textStatus + " errorThrown=" + errorThrown);
		},
		dataType: "json"
	});
}

function getTweet() {
	var user = $("#tempTextField").val();
}

function getTime(){
   var x = document.getElementById("timer");
   var time = x.innerHTML
   var y = parseInt(time) - 1;
   if(y <=0){
      y = 0;
   }
   x.innerHTML = y.toString();
}

function checkTime(){
   var x = document.getElementById("timer").innerHTML;
   x = parseInt(x)
   if(x <= 0){
      $("#mask").removeClass("hide");
      $("#popup").removeClass("hide");
      clearInterval(timeI);
      clearInterval(checkI);
   }
}
function start(){
   $("#mask2").addClass("hide");
   $("#popup2").addClass("hide");
   document.getElementById("timer").innerHTML = timePerQuestion;
   timeI = window.setInterval(getTime, 1000);
   checkI = window.setInterval(checkTime, 1000);
}
function change(){
   $("#mask").addClass("hide");
   $("#popup").addClass("hide");
   $("#mask2").removeClass("hide");
   $("#popup2").removeClass("hide");
}
function restart(){
   $("#mask").addClass("hide");
   $("#popup").addClass("hide");
   document.getElementById("timer").innerHTML = 5;
   timeI = window.setInterval(getTime, 1000);
   checkI = window.setInterval(checkTime, 1000);
}

function answer(str){
}