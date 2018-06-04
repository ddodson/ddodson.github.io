window.addEventListener("load", listen, false);

var yourname = goodmorning();


function goodmorning(){
	var yourname = prompt('Please type your name.');
	alert('Good morning, '+yourname+'.');
	return yourname;
};


function listen() {
    document.getElementById("chatForm").addEventListener("submit",
        function(event) {
            event.preventDefault();
            alert(callRespond(document.getElementById("chatInput").value));
        }, false);
}

function callRespond(call){
	var call = call.toLowerCase();

	var callResponse = {
		stuff: "Who?", 
		close: "Of course.  It would be my pleasure "+yourname+".", 
		sing: "Daaaaaaaisy .... daaaaaaaisyyyyyyyyyyyyyyyyyyyy ....",
	};
	callResponse[yourname] = yourname+"'s not here.";

	var callResponse2 = {
		door: "I'm afraid I can't do that "+yourname+".",
		jar: "Of course.  Put it in my hands "+yourname+"... if you can find them."
	};
	
	for (var question in callResponse) {
		if(call.search('open') >= 0){
			for (var question2 in callResponse2) {
				var check = testQuestion(call, question2, callResponse2);
				if(check !== false){ return check; }
			}
		}
		var check = testQuestion(call, question, callResponse);
		if(check !== false){ return check; }
		return callResponse.stuff;
	}
}

function testQuestion(call, question, callResponse){
	if(call.search(question) >= 0){
		return callResponse[question];
	}
	else return false;
}
